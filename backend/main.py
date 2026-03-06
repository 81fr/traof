from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List, Optional
import uuid

from backend import models, database
from pydantic import BaseModel, ConfigDict
from decimal import Decimal

# تهيئة قاعدة البيانات
models.Base.metadata.create_all(bind=database.engine)

app = FastAPI(title="Kafalah Platform API", description="API for B2B Orphan Sponsorship - Traof")

# Pydantic Schemas
class MerchantCreate(BaseModel):
    legal_name: str
    trade_name: Optional[str] = None
    cr_number: Optional[str] = None
    city: Optional[str] = None
    contact_person_name: str
    contact_phone: str

class MerchantResponse(BaseModel):
    id: uuid.UUID
    trade_name: Optional[str]
    city: Optional[str]
    kyc_status: str
    model_config = ConfigDict(from_attributes=True)

class OrphanCaseResponse(BaseModel):
    id: uuid.UUID
    title: str
    city: Optional[str]
    budget_required: Optional[Decimal]
    amount_raised: Optional[Decimal]
    verification_level: str
    model_config = ConfigDict(from_attributes=True)

class PledgeCreate(BaseModel):
    merchant_id: uuid.UUID
    case_id: uuid.UUID
    amount: Decimal

@app.post("/api/merchants", response_model=MerchantResponse)
def register_merchant(merchant: MerchantCreate, db: Session = Depends(database.get_db)):
    db_merchant = models.Merchant(**merchant.model_dump())
    db.add(db_merchant)
    db.commit()
    db.refresh(db_merchant)
    return db_merchant

@app.get("/api/merchants/{merchant_id}", response_model=MerchantResponse)
def get_merchant(merchant_id: uuid.UUID, db: Session = Depends(database.get_db)):
    merchant = db.query(models.Merchant).filter(models.Merchant.id == merchant_id).first()
    if not merchant:
        raise HTTPException(status_code=404, detail="Merchant not found")
    return merchant

@app.get("/api/orphans", response_model=List[OrphanCaseResponse])
def list_orphans(db: Session = Depends(database.get_db)):
    return db.query(models.OrphanCase).all()

@app.post("/api/pledges")
def create_pledge(pledge: PledgeCreate, db: Session = Depends(database.get_db)):
    # التحقق من وجود التاجر والحالة
    merchant = db.query(models.Merchant).filter(models.Merchant.id == pledge.merchant_id).first()
    case = db.query(models.OrphanCase).filter(models.OrphanCase.id == pledge.case_id).first()
    
    if not merchant or not case:
        raise HTTPException(status_code=404, detail="Merchant or Case not found")
    
    db_pledge = models.Pledge(
        merchant_id=merchant.id,
        orphan_case_id=case.id,
        amount=pledge.amount,
        pledge_type='cash'
    )
    db.add(db_pledge)
    # تحديث المبلغ المجموع للحالة
    case.amount_raised = (case.amount_raised or 0) + pledge.amount
    db.commit()
    return {"status": "pledge_initiated", "pledge_id": db_pledge.id}
