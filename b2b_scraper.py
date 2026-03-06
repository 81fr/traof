import requests
import csv
import time
from urllib.parse import urlparse
import logging

logging.basicConfig(level=logging.INFO)

# قائمة بمصادر البيانات المفتوحة (دليل تجاري عام/بيانات مفتوحة)
# ملاحظة: يجب التأكد من شروط الاستخدام (Terms of Service) لكل مصدر قبل التشغيل الفعلي.
SOURCES = [
    "https://api.public-business-directory.example/v1/companies"
]

def fetch_public_companies():
    """استخراج بيانات الشركات من المصادر المفتوحة."""
    companies = []
    # محاكاة لجلب البيانات
    mock_data = [
        {
            "legal_name": "شركة الأمل للتجارة",
            "industry": "تجزئة",
            "city": "الرياض",
            "website": "https://alamal.example.com",
            "public_email": "info@alamal.example.com"
        },
        {
            "legal_name": "مؤسسة البناء الحديث",
            "industry": "عقارات ومقاولات",
            "city": "جدة",
            "website": "https://albinamodern.example.com",
            "public_email": "hello@albinamodern.example.com"
        }
    ]
    
    for item in mock_data:
        # فلترة وتأكيد قناة التواصل العامة فقط
        if is_public_channel(item.get("public_email")):
            companies.append(item)
    return companies

def is_public_channel(email):
    """التحقق من أن البريد عام وليس شخصي (مثل info, contact, hello)"""
    if not email:
         return False
    public_prefixes = ['info@', 'contact@', 'hello@', 'support@', 'pr@', 'csr@']
    email_lower = email.lower()
    return any(email_lower.startswith(prefix) for prefix in public_prefixes)

def export_to_csv(companies, filename="merchants_leads.csv"):
    """تصدير القائمة لاستخدامها في الحملات الدعوية للتسجيل في المنصة"""
    if not companies:
        logging.info("لا توجد شركات للتصدير.")
        return
        
    keys = companies[0].keys()
    with open(filename, 'w', newline='', encoding='utf-8') as output_file:
        dict_writer = csv.DictWriter(output_file, fieldnames=keys)
        dict_writer.writeheader()
        dict_writer.writerows(companies)
    logging.info(f"تم تصدير {len(companies)} جهة إلى {filename}")

if __name__ == "__main__":
    logging.info("بدء جمع البيانات من المصادر العلنية...")
    leads = fetch_public_companies()
    export_to_csv(leads)
    logging.info("تم الانتهاء.")
