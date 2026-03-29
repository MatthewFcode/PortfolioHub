import asyncio
import os # built in python module that lets us talk to the operating system
from dotenv import load_dotenv
from langchain_core.messages import HumanMessage, SystemMessage
from langchain_google_genai import ChatGoogleGenerativeAI
from sentence_transformers import SentenceTransformer

load_dotenv() # loads all the current env vars into the os environ

emberd_model = SentenceTransformer("BAAI/bge-base-en-v1.5")

model = ChatGoogleGeneratvieAI(
  model="flash-latest", 
  temperature=0.7,
  api_key=os.environ["GOOGLE_API_KEY"]
)

