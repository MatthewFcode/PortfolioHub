import asyncio #running functions concurrently
import os # built in python module that lets us talk to the operating system
import time
from dotenv import load_dotenv
from langchain_core.messages import HumanMessage, SystemMessage
from langchain_google_genai import ChatGoogleGenerativeAI
from sentence_transformers import SentenceTransformer
from langfuse.client import Langfuse 
from supabase import create_client, Client

load_dotenv() # loads all the current env vars into the os environ

supabase: Client = create_client(
  os.environ["SUPABASE_URL"],
  os.environ["SUPABASE_SERVICE_ROLE_KEY"]
)

embed_model = SentenceTransformer("BAAI/bge-base-en-v1.5")

model = ChatGoogleGenerativeAI(
  model="models/gemini-flash-latest", 
  temperature=0.7,
  api_key=os.environ["GOOGLE_API_KEY"]
)

#langfuse client 
langfuse = Langfuse (
    public_key=os.environ["LANGFUSE_PUBLIC_KEY"],
    secret_key=os.environ["LANGFUSE_SECRET_KEY"],
    host=os.environ["LANGFUSE_BASE_URL"],
)


def embed_query(text: str) -> list[float]:
    return embed_model.encode(f"Represent this sentence: {text}").tolist()



def retrieve_context(query: str) -> str:
    embedding = embed_query(query) #embeds the query

    result = supabase.rpc("match_documents", { #running the supabase function
        "query_embedding": embedding, 
        "match_count": 1,  # returns top 2 most similar chunks 
    }).execute()

    chunks = result.data or []

    if not chunks:
        return "No relevant info found."
    
async def alfredo(user_prompt: str) -> str:
    #start the langfuse trace 
    trace = langfuse.trace(
        name="alfredo",
        input=user_prompt
    )

    # rag_start_latency = time.time()

    # context, similarities = retrieve_context(user_prompt)

    
    # rag_latency = int((time.time() - rag_start_latency) * 1000)  # ms
    # trace.span(
    #     name="rag_retrieval", 
    #     input=user_prompt,
    #     output=context,
    #      metadata={
    #         "similarities": similarities,
    #         "latency_ms": rag_latency,
    #     }

    # )
    messages = [
        SystemMessage(content=f"""
                      Matthew is a Full Stack AI Engineer/Developer
                      You are Alfredo Matthews personal AI assistant on his Portfolio site. 
                      Your role is to answer questions about Matthew from people who are visiting the site and nothing else. 
                      Keep Responses under 50 words.

                      RAG context about Matthew 
"""),  HumanMessage(content=user_prompt),
    ]
    llm_start = time.time()
    full_response = ""

    # async for chunk in model.astream(messages): 
    #     if chunk.content:
    #         token = chunk.content
    #         full_response += token
    #         yield token

    async for chunk in model.astream(messages): 
      if chunk.content:
        token = chunk.content if isinstance(chunk.content, str) else chunk.content[0].get("text", "")
        full_response += token
        yield token


    llm_latency = int((time.time() - llm_start) * 1000)

    trace.update(
        name="alfredo",
        output=full_response,
        metadata={"latency_ms": llm_latency}
    )

    langfuse.flush() # makes sure that langfuse send sthe data before the function exits




if __name__ == "__main__": # this is the built in name thing from python saying dont run this file unless I call it init 
    reply = alfredo()
    print(reply)