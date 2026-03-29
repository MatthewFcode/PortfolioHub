from fastapi import FastAPI

app = FastAPI()

@app.get("/")
async def read_root():
    return {"message": "Hello from PortfolioHub Backend!"}

@app.post("/")
async def create_something():
    return {"message": "POST request received"}
