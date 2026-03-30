import os 
import io
from dotenv import load_dotenv
from elevenlabs import ElevenLabs
from fastapi import FastAPI, HTTPException
from fastapi.responses import StreamingResponse
from pydantic import BaseModel # class from pydantic that validates data and parses JSON into python objects 
from alfredo.alfredo import alfredo #importing the function directly 

load_dotenv()

app = FastAPI()

client = ElevenLabs(api_key=os.getenv("ELEVENLABS_API_KEY"))



@app.get("/api/v1/")
async def read_root():
    return {"message": "Hello from PortfolioHub Backend!"} # no res like we do in express routes we just use the return statement

class AlfredoRequest(BaseModel):
    prompt: str
class TTSRequest(BaseModel):
    text: str

@app.post("/api/v1/alfredo") # can read data through the path paramters or the request body
async def alfredo_post_function(data: AlfredoRequest): # validates that data is in that shape 
    return StreamingResponse(  #FastAPI module for streaming back to the client 
        alfredo(data.prompt),
        media_type="text/plain" # expect a stream of plain text
        
    )
 
@app.post("/api/v1/tts")
async def tts(request: TTSRequest):
    print(f"TTS request received: {request.text[:50]}")  # confirm it's hitting the endpoint
    try:
        print("Calling ElevenLabs...")
        audio_generator = client.text_to_speech.convert(
            text=request.text,
            voice_id="7Znc1wuo18yOMS5u9Z5O",
            model_id="eleven_multilingual_v2",
            output_format="mp3_44100_128"
        )
        print("Joining audio chunks...")
        audio_bytes = b"".join(audio_generator)
        print(f"Audio size: {len(audio_bytes)} bytes")
        return StreamingResponse(io.BytesIO(audio_bytes), media_type="audio/mpeg")
    except Exception as e:
        import traceback
        traceback.print_exc()  # prints the FULL stack trace to terminal
        raise HTTPException(status_code=500, detail=str(e))