INSERT INTO merchants (id, legal_name, trade_name, industry, city, website, contact_public_email, csr_focus, support_types, kyc_status)
VALUES 
('123e4567-e89b-12d3-a456-426614174000', 'شركة التقدم للتجارة', 'التقدم', 'تجزئة', 'الرياض', 'https://example-tagadum.com', 'info@example.com', '{"تعليم", "صحة"}', '{"cash", "in_kind"}', 'verified');

INSERT INTO orphan_cases (id, title, city, age_years, need_category, description, budget_required, verification_level)
VALUES 
('987e6543-e21b-34d3-b456-426614174111', 'كفالة طالب جامعي', 'جدة', 19, 'تعليم', 'طالب متفوق بحاجة لدعم لإكمال مسيرته الأكاديمية.', 15000.00, 'verified'),
('876e5432-e10b-23d3-c456-426614174222', 'ترميم منزل أسرة أيتام', 'الدمام', 10, 'سكن', 'منزل العائلة بحاجة لأعمال صيانة ضرورية للحفاظ على سلامتهم.', 35000.00, 'review');

INSERT INTO pledges (id, merchant_id, orphan_case_id, pledge_type, amount, status)
VALUES 
('111e2222-e33b-44d3-d456-426614174333', '123e4567-e89b-12d3-a456-426614174000', '987e6543-e21b-34d3-b456-426614174111', 'cash', 10000.00, 'initiated');
