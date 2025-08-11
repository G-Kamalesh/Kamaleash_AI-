import os
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from langchain_google_genai import ChatGoogleGenerativeAI
from langchain_core.messages import HumanMessage
from dotenv import load_dotenv
from fastapi.middleware.cors import CORSMiddleware


# Load environment variables
load_dotenv()

# Configuration
GOOGLE_API_KEY = os.getenv("GOOGLE_API_KEY")
MODEL_NAME = os.getenv("GEMINI_MODEL", "gemini-2.5-flash")

# Initialize FastAPI app
app = FastAPI(
    title="Kamaleash Chatbot API",
    description="A chatbot API powered by Google Gemini",
    version="1.0.0"
)

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Initialize LLM
if not GOOGLE_API_KEY:
    raise ValueError("Google API key not found. Please set GOOGLE_API_KEY environment variable.")

llm = ChatGoogleGenerativeAI(
    model=MODEL_NAME,
    google_api_key=GOOGLE_API_KEY
)

# Pydantic models
class Query(BaseModel):
    question: str

class ChatResponse(BaseModel):
    response: str
    status: str = "success"

# Routes
@app.get("/")
def read_root():
    return {
        "message": "Welcome to Kamaleash Chatbot API using Google Gemini!",
        "model": MODEL_NAME,
        "version": "1.0.0"
    }

@app.get("/health")
def health_check():
    return {
        "status": "healthy",
        "model": MODEL_NAME
    }

@app.post("/ask", response_model=ChatResponse)
def ask_question(query: Query):
    if not query.question.strip():
        raise HTTPException(status_code=400, detail="Question cannot be empty")
    
    if len(query.question) > 1000:
        raise HTTPException(status_code=400, detail="Question too long (max 1000 characters)")
    
    try:
        result = llm.invoke([HumanMessage(content=query.question.strip())])
        
        if not result or not result.content:
            raise HTTPException(status_code=500, detail="Empty response from chatbot")
        
        return ChatResponse(response=result.content)
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to generate response: {str(e)}")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("my_code:app", host="0.0.0.0", port=8000, reload=True)