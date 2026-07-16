from fastapi import FastAPI

from app.database.database import Base, engine
from app.models.hcp import HCP
from app.api.hcp import router as hcp_router

Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="AI First CRM HCP Module",
    version="1.0.0",
    description="Backend API for AI First CRM Assignment"
)

app.include_router(hcp_router)

@app.get("/")
def home():
    return {
        "status": "success",
        "message": "AI First CRM Backend Running Successfully!"
    }