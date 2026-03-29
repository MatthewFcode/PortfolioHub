from fastapi import FastAPI
from fastapi.responses import StreamingResponse
from pydantic import BaseModel # class from pydantic that validates data and parses JSON into python objects 
from alfredo import alfredo

app = FastAPI()

@app.get("/api/v1/alfredo")
async def read_root():
    return {"message": "Hello from PortfolioHub Backend!"} # no res like we do in express routes we just use the return statement

class AlfredoRequest(BaseModel):
    prompt: str

@app.post("/api/alfredo") # can read data through the path paramters or the request body
async def alfredo_post_function(data: AlfredoRequest): # validates that data is in that shape 
    return StreamingResponse(  #FastAPI module for streaming back to the client 
        alfredo(data.prompt),
        media_type="text/plain" # expect a stream of plain text
    )
    
