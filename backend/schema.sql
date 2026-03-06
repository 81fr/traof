-- التجّار
CREATE TABLE merchants (
  id UUID PRIMARY KEY,
  legal_name TEXT NOT NULL,
  trade_name TEXT,
  cr_number TEXT,          -- رقم السجل
  industry TEXT,
  city TEXT,
  website TEXT,
  contact_public_email TEXT, -- قناة عامة فقط
  contact_public_phone TEXT, -- قناة عامة فقط
  csr_focus TEXT[],        -- اهتمامات المسؤولية الاجتماعية
  support_types TEXT[],    -- ["نقدي","عيني","خدمات"]
  kyc_status TEXT CHECK (kyc_status IN ('pending','verified','rejected')) DEFAULT 'pending',
  consent_marketing BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT now()
);

-- حالات الأيتام
CREATE TABLE orphan_cases (
  id UUID PRIMARY KEY,
  title TEXT NOT NULL,
  city TEXT,
  age_years INT,
  need_category TEXT,      -- سكن/تعليم/صحة...
  description TEXT,
  budget_required NUMERIC,
  verification_level TEXT CHECK (verification_level IN ('unverified','review','verified')) DEFAULT 'review',
  documents JSONB,         -- روابط مشفّرة/مقنعة
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
  created_at TIMESTAMP DEFAULT now()
);

-- سجلات التدقيق
CREATE TABLE audit_logs (
  id BIGSERIAL PRIMARY KEY,
  actor_type TEXT,  -- 'admin','merchant','system'
  actor_id TEXT,
  action TEXT,
  entity TEXT,
  entity_id TEXT,
  created_at TIMESTAMP DEFAULT now()
);
