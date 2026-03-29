from fastapi import FastAPI
from pydantic import BaseModel # class from pydantic that validates data and parses JSON into python objects 

app = FastAPI()

@app.get("/api/v1/alfredo")
async def read_root():
    return {"message": "Hello from PortfolioHub Backend!"} # no res like we do in express routes we just use the return statement

class AlfredoRequest(BaseModel):
    prompt: str

@app.post("/api/alfredo") # can read data through the path paramters or the request body
async def alfredo_post_function(data: AlfredoRequest): # validates that data is in that shape 
    return {
        "prompt": data.prompt
    }
    
