from fastapi import FastAPI, HTTPException, Request
from pydantic import BaseModel
from typing import List, Optional
import uuid

app = FastAPI(title="Kafalah Platform API", description="API for B2B Orphan Sponsorship")

class Merchant(BaseModel):
    id: uuid.UUID
    trade_name: str
    city: str
    kyc_status: str

class OrphanCase(BaseModel):
    id: uuid.UUID
    title: str
    city: str
    budget_required: float
    verification_level: str

@app.post("/api/merchants")
async def register_merchant(merchant: Merchant):
    return {"status": "success", "data": merchant}

@app.get("/api/merchants/{merchant_id}")
async def get_merchant(merchant_id: uuid.UUID):
    return {"id": merchant_id, "trade_name": "Test Company", "kyc_status": "verified"}

@app.post("/api/orphans")
async def add_orphan_case(case: OrphanCase):
    return {"status": "success", "data": case}

@app.get("/api/orphans")
async def list_orphans(city: Optional[str] = None):
    return [
        {"id": uuid.uuid4(), "title": "كفالة تعليمية - المرحلة الابتدائية", "city": "الرياض", "budget_required": 5000},
        {"id": uuid.uuid4(), "title": "ترميم منزل", "city": "جدة", "budget_required": 25000}
    ]

@app.post("/api/pledges")
async def create_pledge(merchant_id: uuid.UUID, case_id: uuid.UUID, amount: float):
    return {"status": "pledge_initiated", "pledge_id": uuid.uuid4()}

@app.get("/api/recommendations")
async def get_recommendations(merchant_id: uuid.UUID):
    # إرجاع حالات تتوافق مع اهتمامات التاجر
    return list_orphans()
