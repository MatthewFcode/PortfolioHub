# Matthew Portfolio
 
Portfolio to host some of the projects I have worked and to create a profile for myself. Visitors can ask questions about me and get answers grounded in my actual profile data via a RAG pipeline. Built with a React frontend, Python/FastAPI backend, local HuggingFace embeddings, and Supabase vector search.
 
---
 
## Architecture Overview
 
```
React (Vite) → Vite Proxy → FastAPI (Uvicorn ASGI) → Gemini LLM
                                      ↕
                             HuggingFace Embeddings (local)
                                      ↕
                             Supabase pgvector (vector search)
```
 
## Frontend: React + Vite
 
The frontend is a React SPA (singl epage application) bundled with Vite.
 
Components are kept small and focused to optimise the VDOM and diffing process to ensure smooth rerenders.
 
### Streaming to the UI
 
The backend streams tokens back as plain text (`text/plain` with `StreamingResponse`). On the frontend this is consumed using the `Fetch API` with `ReadableStream`:
 
```javascript
const response = await fetch('/api/alfredo', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ prompt: userMessage }),
})
 
const reader = response.body.getReader()
const decoder = new TextDecoder()
 
while (true) {
  const { done, value } = await reader.read()
  if (done) break
  const token = decoder.decode(value)
  // append token to the current assistant message in state
}
```
 
Each token triggers a React state update which rerenders just the active message bubble. React's virtual DOM diffing ensures only the changed text node is patched in the real DOM no full rerenders on each token.
 
### Vite Proxy
 
In development, Vite proxies API requests to the FastAPI backend to avoid CORS issues. Configured in `vite.config.ts`:
 
```typescript
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true,
      }
    }
  }
})
```
 
Any request the React app makes to `/api/*` gets intercepted by Vite's dev server and forwarded to the FastAPI instance running on port 8000. In production this is handled by NGINX or your reverse proxy instead.
 
## Backend: FastAPI + Uvicorn
 
### ASGI and Uvicorn
 
FastAPI is an ASGI (Asynchronous Server Gateway Interface) framework. ASGI is the async evolution of WSGI it allows a single server process to handle many concurrent connections without blocking, which is essential for streaming responses and heavy workflows like calling embedding models and databases simultaneously.
 
Uvicorn is the ASGI server that runs FastAPI. It handles the low level HTTP connection management and hands requests off to FastAPI's router.
 
```bash: running the server 
uvicorn main:app --reload --port 8000 
```
 
### Request Validation — Pydantic BaseModel
 
Incoming request bodies are validated automatically using Pydantic's `BaseModel`. Each route defines a model describing the expected shape of the request:
 
```python
class AlfredoRequest(BaseModel):
    prompt: str
```
 
If a request arrives without `prompt`, or with the wrong type, FastAPI returns a `422 Unprocessable Entity` before the handler even runs. No manual validation needed.
 
## RAG Pipeline: Retrieval Augmented Generation
 
RAG grounds the LLM's responses in real data rather than relying on its training knowledge alone. The pipeline has three stages: ingest, embed, retrieve.
 
### Stage 1: Ingest and Chunk
 
At ingest time the profile document is read from disk, cleaned, and split into semantically meaningful chunks. Chunking splits on `##` markdown headers so each chunk maps to one self contained section (profile summary, skills, a specific project, etc.) rather than arbitrary word counts:
 
```python
def chunk_text(text: str) -> list[str]:
    sections = text.split('\n(?=## )')
    return [s.strip() for s in sections if s.strip()]
```
 
This matters because retrieval quality depends on chunks being coherent units. A chunk that contains the full Alfredo project section will score highly when someone asks about that project. A chunk that arbitrarily cuts mid-sentence will not.
 
### Stage 2: Local HuggingFace Embeddings
 
Embeddings are generated locally using `sentence-transformers`, a Python library that downloads and runs HuggingFace models on your machine. No API calls, no cost, no data leaving the server.
 
```python
from sentence_transformers import SentenceTransformer
 
embed_model = SentenceTransformer("BAAI/bge-base-en-v1.5")
```
The model used is `all-MiniLM-L6-v2`, a lightweight sentence transformer model that produces 384 dimensional embeddings. It runs locally, is fast, and works well for semantic search.

At ingest time, each chunk is embedded and stored in Supabase alongside its content. At query time, the user’s question is embedded using the same model so both exist in the same vector space and can be compared.
 
### Stage 3: Supabase Vector Search
 
Chunk embeddings are stored in a Supabase Postgres table with a `pgvector` column. Supabase exposes a Postgres RPC function `match_documents` that runs cosine similarity search across all stored vectors and returns the closest matches:
 
```python
result = supabase.rpc("match_documents", {
    "query_embedding": embedding,
    "match_count": 2,
}).execute()
```
 
The similarity score returned (0 to 1) is used to rank chunks and pick the most relevant one to inject into the prompt. A score above ~0.5 generally indicates a genuinely relevant match.

The retrieved chunk is injected into the system prompt as context before the user message is sent to Gemini:

This means Gemini answers from the retrieved profile data rather than hallucinating. If no relevant chunk is found the context slot contains "No relevant info found" and Gemini is instructed to say it doesn't have that information.
 
## Observability: Langfuse
 
All requests are traced with Langfuse, an open source LLM observability platform. Each request creates a trace with two spans:
 
- `rag_retrieval` — logs the query, retrieved context, similarity scores, and latency in milliseconds
- Top level trace update which logs the full LLM response and total latency
 
This allows monitoring of retrieval quality (are similarity scores high enough?), response latency, and token usage over time.
 
## Tech Stack
 
| Layer | Technology |
|---|---|
| Frontend | React, TypeScript, Vite |
| Backend | Python, FastAPI, Uvicorn |
| LLM | Google Gemini 1.5 Flash (via LangChain) |
| Embeddings | BAAI/bge-base-en-v1.5 (local, HuggingFace) |
| Vector store | Supabase pgvector |
| Observability | Langfuse |
| Styling | SCSS|
 
---
 
## Running Locally
 
```bash
# Backend
cd server
pip install -r requirements.txt
uvicorn main:app --reload --port 8000
 
# Frontend
cd client
npm install
npm run dev
```
 
Requires a `.env` file with `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`, `GOOGLE_API_KEY`, `LANGFUSE_PUBLIC_KEY`, `LANGFUSE_SECRET_KEY`, and `LANGFUSE_BASE_URL`.
 