# منصة رعاية الأيتام - نموذج المخرجات (MVP)

هذا المشروع يحتوي على نموذج أولي لإثبات الفكرة (Scaffolding) الخاص بمنصة رعاية.

## المكونات المرفقة:
1. **قاعدة البيانات (`backend/schema.sql`)**: مخططات الجداول (حالات الأيتام، التجار، الالتزامات).
2. **واجهة API (`backend/main.py`)**: خادم مبدئي باستخدام Python FastAPI.
3. **الواجهة الأمامية (`frontend/`)**: 
   - `src/app/page.tsx`: الصفحة الرئيسية باستخدام Next.js و Tailwind.
   - `src/components/OrphanCard.tsx`: مكون عرض بطاقة الحالة.
4. **أداة جمع البيانات (`b2b_scraper.py`)**: نص برمجي لجمع بيانات التجار من المصادر المفتوحة بامتثال تام، واستبعاد أي بيانات شخصية.
5. **رسالة دعوة للتجار (`email_template.md`)**: مسودة الرسالة للتواصل معهم.
6. **البيانات الوهمية (`seed.sql`)**: بيانات أولية لاختبار المنصة.

## طريقة التشغيل:
### Backend
1. `pip install fastapi uvicorn`
2. `uvicorn backend.main:app --reload`
3. تصفح `http://localhost:8000/docs` لرؤية التوثيق الحي.

### Frontend
1. داخل مجلد Frontend، قم بتشغيل: `npx create-next-app@latest .` إذا لزم الأمر أو استخدم الموجود.
2. `npm install`
3. `npm run dev`

### B2B Data Gathering
1. `pip install requests`
2. `python b2b_scraper.py`
3. سيتم إنشاء ملف `merchants_leads.csv` يحتوي على القائمة النظيفة.

## ملاحظات التطوير والتوسع:
- يرجى ربط إطار العمل بنظام مصادقة (Auth) قوي مثل NextAuth مع دعم OTP أو مزودي الهوية التجارية.
- يفضل إعداد AWS S3 أو Minio لتخزين المستندات بصيغة مشفرة (At-rest).
- يجب تنفيذ مراجعة أمنية متكاملة قبل إطلاق المنصة الفعلية للجمهور.
