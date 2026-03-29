from fastapi import FastAPI

app = FastAPI()

@app.get("/api/v1/alfredo")
async def read_root():
    return {"message": "Hello from PortfolioHub Backend!"}

@app.post("/api/alfredo")
async def create_something():
    return {"message": "POST request received"}
