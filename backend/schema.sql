-- التجّار والشركات
CREATE TABLE merchants (
  id UUID PRIMARY KEY,
  legal_name TEXT NOT NULL,
  trade_name TEXT,
  cr_number TEXT,          -- رقم السجل التجاري
  industry TEXT,           -- القطاع
  city TEXT,               -- المدينة
  website TEXT,
  
  -- بيانات التواصل الاستراتيجية
  contact_person_name TEXT,     -- اسم الممثل/المدير
  contact_person_position TEXT, -- المنصب (مسؤول تبرعات، مدير تنفيذي)
  contact_phone TEXT,           -- رقم الجوال
  contact_email TEXT,           -- البريد الإلكتروني للتواصل
  
  csr_focus TEXT[],        -- اهتمامات المسؤولية الاجتماعية
  support_types TEXT[],    -- أنواع الدعم الممكنة (نقدي، عيني، خدمات)
  kyc_status TEXT CHECK (kyc_status IN ('pending','verified','rejected')) DEFAULT 'pending',
  consent_marketing BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT now()
);

-- حالات الأيتام (تراؤف)
CREATE TABLE orphan_cases (
  id UUID PRIMARY KEY,
  title TEXT NOT NULL,
  city TEXT,
  age_years INT,
  need_category TEXT,      -- סكن/تعليم/صحة/كفالة عامة
  description TEXT,
  budget_required NUMERIC,
  amount_raised NUMERIC DEFAULT 0, -- المبلغ المجموع حتى الآن
  verification_level TEXT CHECK (verification_level IN ('unverified','review','verified')) DEFAULT 'verified',
  documents JSONB,         -- مستندات داعمة
  created_at TIMESTAMP DEFAULT now()
);

-- التزامات الدعم
CREATE TABLE pledges (
  id UUID PRIMARY KEY,
  merchant_id UUID REFERENCES merchants(id),
  orphan_case_id UUID REFERENCES orphan_cases(id),
  pledge_type TEXT CHECK (pledge_type IN ('cash','in_kind','service')),
  amount NUMERIC,
  note TEXT,
  status TEXT CHECK (status IN ('initiated','confirmed','fulfilled','cancelled')) DEFAULT 'initiated',
  transfer_receipt_url TEXT, -- إيصال التحويل
  created_at TIMESTAMP DEFAULT now()
);

-- سجلات التدقيق والأثر
CREATE TABLE audit_logs (
  id BIGSERIAL PRIMARY KEY,
  actor_type TEXT,  -- admin, merchant, system
  actor_id TEXT,
  action TEXT,
  entity TEXT,
  entity_id TEXT,
  created_at TIMESTAMP DEFAULT now()
);
