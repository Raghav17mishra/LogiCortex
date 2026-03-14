from fastapi import FastAPI, APIRouter
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List, Optional
import uuid
from datetime import datetime, timezone

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

app = FastAPI()
api_router = APIRouter(prefix="/api")


# Models
class ContactSubmission(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: str
    message: str
    created_at: str = Field(default_factory=lambda: datetime.now(timezone.utc).isoformat())


class ContactCreate(BaseModel):
    name: str
    email: str
    message: str


class TeamMember(BaseModel):
    id: str
    name: str
    role: str
    photo: str
    description: str
    linkedin: Optional[str] = None


class ServiceItem(BaseModel):
    id: str
    title: str
    description: str
    icon: str
    tags: List[str]


# Team data
TEAM_DATA = [
    {
        "id": "1",
        "name": "Alex Mercer",
        "role": "Chief Architect",
        "photo": "https://images.unsplash.com/photo-1737574107736-9e02ca5d5387?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1OTN8MHwxfHNlYXJjaHw0fHxzb2Z0d2FyZSUyMGVuZ2luZWVyJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXR8ZW58MHx8fHwxNzczMzMxNzA1fDA&ixlib=rb-4.1.0&q=85",
        "description": "15+ years in distributed systems and enterprise architecture. Leads technical strategy and platform design.",
        "linkedin": "https://linkedin.com/in/"
    },
    {
        "id": "2",
        "name": "Priya Sharma",
        "role": "Head of AI",
        "photo": "https://images.unsplash.com/photo-1580894908361-967195033215?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2OTV8MHwxfHNlYXJjaHwyfHxmZW1hbGUlMjBzb2Z0d2FyZSUyMGVuZ2luZWVyJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXR8ZW58MHx8fHwxNzczMzMxNzE3fDA&ixlib=rb-4.1.0&q=85",
        "description": "ML research scientist with expertise in NLP and computer vision. Drives AI product innovation.",
        "linkedin": "https://linkedin.com/in/"
    },
    {
        "id": "3",
        "name": "Marcus Chen",
        "role": "Logistics Lead",
        "photo": "https://images.unsplash.com/photo-1681165232934-c09dfa5ee694?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1OTN8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGVuZ2luZWVyJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXR8ZW58MHx8fHwxNzczMzMxNzA1fDA&ixlib=rb-4.1.0&q=85",
        "description": "Supply chain optimization expert. Builds intelligent routing and warehouse management systems.",
        "linkedin": "https://linkedin.com/in/"
    },
    {
        "id": "4",
        "name": "Sara Kim",
        "role": "Senior Developer",
        "photo": "https://images.unsplash.com/photo-1712174766230-cb7304feaafe?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2OTV8MHwxfHNlYXJjaHwzfHxmZW1hbGUlMjBzb2Z0d2FyZSUyMGVuZ2luZWVyJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXR8ZW58MHx8fHwxNzczMzMxNzE3fDA&ixlib=rb-4.1.0&q=85",
        "description": "Full-stack engineer specializing in Python and React. Delivers scalable microservice architectures.",
        "linkedin": "https://linkedin.com/in/"
    },
    {
        "id": "5",
        "name": "David Okafor",
        "role": "Product Manager",
        "photo": "https://images.unsplash.com/photo-1681164315430-6159b2361615?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1OTN8MHwxfHNlYXJjaHwzfHxzb2Z0d2FyZSUyMGVuZ2luZWVyJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXR8ZW58MHx8fHwxNzczMzMxNzA1fDA&ixlib=rb-4.1.0&q=85",
        "description": "Bridges business strategy and engineering. Expert in agile delivery and stakeholder management.",
        "linkedin": "https://linkedin.com/in/"
    }
]

SERVICES_DATA = [
    {
        "id": "1",
        "title": "AI Integration",
        "description": "Embed intelligent AI models into your existing business workflows. From predictive analytics to natural language processing, we make AI accessible and actionable.",
        "icon": "brain",
        "tags": ["Machine Learning", "NLP", "Computer Vision"]
    },
    {
        "id": "2",
        "title": "Logistics Automation",
        "description": "End-to-end automation for delivery and supply chain operations. Route optimization, fleet management, and real-time tracking powered by intelligent algorithms.",
        "icon": "truck",
        "tags": ["Route Optimization", "Fleet Management", "Tracking"]
    },
    {
        "id": "3",
        "title": "Data Engineering",
        "description": "Build robust data pipelines that transform raw data into strategic assets. ETL processes, data lakes, and real-time streaming architectures.",
        "icon": "database",
        "tags": ["ETL Pipelines", "Data Lakes", "Streaming"]
    },
    {
        "id": "4",
        "title": "Python Backend Development",
        "description": "High-performance backend systems built with Python. FastAPI, Django, and async architectures designed for scale and reliability.",
        "icon": "code",
        "tags": ["FastAPI", "Django", "Microservices"]
    },
    {
        "id": "5",
        "title": ".NET Enterprise Solutions",
        "description": "Enterprise-grade applications on the .NET platform. Secure, scalable, and integrated with Microsoft ecosystem services.",
        "icon": "building",
        "tags": [".NET Core", "Azure", "Enterprise"]
    }
]


# Routes
@api_router.get("/")
async def root():
    return {"message": "LogiCortex AI API"}


@api_router.post("/contact", response_model=ContactSubmission)
async def create_contact(input_data: ContactCreate):
    submission = ContactSubmission(**input_data.model_dump())
    doc = submission.model_dump()
    await db.contact_submissions.insert_one(doc)
    doc.pop("_id", None)
    return submission


@api_router.get("/contact", response_model=List[ContactSubmission])
async def get_contacts():
    contacts = await db.contact_submissions.find({}, {"_id": 0}).to_list(1000)
    return contacts


@api_router.get("/team", response_model=List[TeamMember])
async def get_team():
    return TEAM_DATA


@api_router.get("/services", response_model=List[ServiceItem])
async def get_services():
    return SERVICES_DATA


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()