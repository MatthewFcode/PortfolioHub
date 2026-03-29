import asyncio #running functions concurrently
import os # built in python module that lets us talk to the operating system
from dotenv import load_dotenv
from langchain_core.messages import HumanMessage, SystemMessage
from langchain_google_genai import ChatGoogleGenerativeAI
from sentence_transformers import SentenceTransformer

load_dotenv() # loads all the current env vars into the os environ

supabase: Client = create_client(
  os.environ["SUPABASE_URL"],
  os.environ["SUPABASE_SERVICE_ROLE_KEY"]
)

embed_model = SentenceTransformer("BAAI/bge-base-en-v1.5")

model = ChatGoogleGenerativeAI(
  model="flash-latest", 
  temperature=0.7,
  api_key=os.environ["GOOGLE_API_KEY"]
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
    
def alfredo(user_prompt: str) -> str:
    context = retrieve_context(user_prompt)

    messages = [
        SystemMessage(content=f"""
                      Matthew is a Full Stack AI Engineer/Developer
                      You are Alfredo Matthews personal AI assistant on his Portfolio site. 
                      Your role is to answer questions about Matthew from people who are visiting the site and nothing else. 
                      Keep Responses under 50 words.

                      RAG context about Matthew {context}
""")
    ]

    response = model.invoke(messages)

    return response.content
