from sqlalchemy import Column, String, Integer, Numeric, Boolean, DateTime, ForeignKey, ARRAY
from sqlalchemy.dialects.postgresql import UUID, JSONB
from sqlalchemy.orm import relationship
from backend.database import Base
import uuid
import datetime

class Merchant(Base):
    __tablename__ = "merchants"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    legal_name = Column(String, nullable=False)
    trade_name = Column(String, nullable=True)
    cr_number = Column(String, nullable=True)
    industry = Column(String, nullable=True)
    city = Column(String, nullable=True)
    website = Column(String, nullable=True)
    contact_person_name = Column(String, nullable=True)
    contact_person_position = Column(String, nullable=True)
    contact_phone = Column(String, nullable=True)
    contact_email = Column(String, nullable=True)
    csr_focus = Column(ARRAY(String), nullable=True)
    support_types = Column(ARRAY(String), nullable=True)
    kyc_status = Column(String, default='pending')
    consent_marketing = Column(Boolean, default=False)
    created_at = Column(DateTime, default=datetime.datetime.utcnow)

class OrphanCase(Base):
    __tablename__ = "orphan_cases"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    title = Column(String, nullable=False)
    city = Column(String, nullable=True)
    age_years = Column(Integer, nullable=True)
    need_category = Column(String, nullable=True)
    description = Column(String, nullable=True)
    budget_required = Column(Numeric, nullable=True)
    amount_raised = Column(Numeric, default=0)
    verification_level = Column(String, default='review')
    documents = Column(JSONB, nullable=True)
    created_at = Column(DateTime, default=datetime.datetime.utcnow)

class Pledge(Base):
    __tablename__ = "pledges"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    merchant_id = Column(UUID(as_uuid=True), ForeignKey('merchants.id'))
    orphan_case_id = Column(UUID(as_uuid=True), ForeignKey('orphan_cases.id'))
    pledge_type = Column(String)
    amount = Column(Numeric)
    note = Column(String, nullable=True)
    status = Column(String, default='initiated')
    transfer_receipt_url = Column(String, nullable=True)
    created_at = Column(DateTime, default=datetime.datetime.utcnow)

    merchant = relationship("Merchant")
    orphan_case = relationship("OrphanCase")

class AuditLog(Base):
    __tablename__ = "audit_logs"

    id = Column(Integer, primary_key=True, autoincrement=True)
    actor_type = Column(String)
    actor_id = Column(String)
    action = Column(String)
    entity = Column(String)
    entity_id = Column(String)
    created_at = Column(DateTime, default=datetime.datetime.utcnow)
