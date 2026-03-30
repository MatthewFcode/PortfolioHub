import os 
import re
from dotenv import load_dotenv
from sentence_transformers import SentenceTransformer
from supabase import create_client, Client

load_dotenv()

supabase: Client = create_client( #supabase client
    os.environ["SUPABASE_URL"],
    os.environ["SUPABASE_SERVICE_ROLE_KEY"]
)

embed_model = SentenceTransformer("BAAI/bge-base-en-v1.5") # model for generating the embeddings 

def clean_text(text: str) -> str: #helper function for cleaning text s
    text = re.sub(r'\*\*', '', text)
    text = re.sub(r'\r\n', '\n', text)
    text = re.sub(r'[ \t]+', ' ', text)
    return text.strip()

def chunk_text(text: str, max_words: int = 40, overlap_sentences: int = 1) -> list[str]: # chunking function for splitting the document up into chunks 
    paragraphs = [p.replace('\n', ' ').strip() for p in re.split(r'\n{2,}', text) if p.strip()]
    chunks = []

    for para in paragraphs:
        sentences = [s.strip() for s in re.split(r'(?<=[.!?])\s+', para) if s.strip()]
        buffer = []

        for sentence in sentences:
            prospective = buffer + [sentence]
            word_count = len(' '.join(prospective).split())

            if word_count > max_words and buffer:
                chunks.append(' '.join(buffer).strip())
                buffer = buffer[-overlap_sentences:]

            buffer.append(sentence)

        if buffer:
            chunks.append(' '.join(buffer).strip())

    return chunks

#embeddings function
def embed_query(text: str) -> list[float]:
    return embed_model.encode(f"Represent this sentence: {text}").tolist()

#final function to run
def ingest(file_path: str):
    with open(file_path, 'r', encoding='utf-8') as f:
        raw = f.read() # reading the file via the file path 

    chunks = chunk_text(clean_text(raw)) # chunking and cleaning the text 
    print(f"📄 Chunked into {len(chunks)} pieces")

    rows = [] 
    for i, chunk in enumerate(chunks): # looping over the chunks array
        embedding = embed_query(chunk) # embed every chunk
        rows.append({
            "content": chunk, 
            "embedding": embedding,
            "metadata": {
                "chunk_index": i,
                "chunk_count": len(chunks),
                "source": "matthew_profile",
                "type": "profile",
                "person": "Matthew Foley"
            }
        })

    supabase.table("documents").insert(rows).execute() # insert all the chunks into supabase
    print(f"✅ Ingested {len(chunks)} chunks into Supabase")

