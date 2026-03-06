import React from 'react';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-12">

                    <div className="md:col-span-1">
                        <Link href="/" className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#00a48c] to-[#008f7a] flex items-center justify-center text-white font-bold text-xl">
                                ت
                            </div>
                            <div className="flex flex-col">
                                <span className="text-2xl font-black text-[#00a48c] leading-tight">تراؤف</span>
                                <span className="text-xs font-semibold text-[#8cc63f] shadow-sm">لرعاية الأيتام</span>
                            </div>
                        </Link>
                        <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
                            منصة مؤسسية مخصصة لخدمة قطاع الأعمال وربط المسؤولية الاجتماعية (CSR) بحالات احتياج الأيتام وفق أعلى معايير الحوكمة.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold text-[#464a5c] mb-4 text-sm">الروابط السريعة</h4>
                        <ul className="space-y-3 text-sm text-gray-500">
                            <li><a href="#" className="hover:text-[#00a48c] transition-colors">عن المنصة</a></li>
                            <li><a href="#" className="hover:text-[#00a48c] transition-colors">مبادئ الشراكة</a></li>
                            <li><a href="#" className="hover:text-[#00a48c] transition-colors">تقارير الأثر</a></li>
                            <li><a href="#" className="hover:text-[#00a48c] transition-colors">تواصل معنا</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-[#464a5c] mb-4 text-sm">التجار</h4>
                        <ul className="space-y-3 text-sm text-gray-500">
                            <li><a href="#" className="hover:text-[#00a48c] transition-colors">تسجيل شركة جديدة</a></li>
                            <li><a href="#" className="hover:text-[#00a48c] transition-colors">تسجيل الدخول</a></li>
                            <li><a href="#" className="hover:text-[#00a48c] transition-colors">آلية التوثيق (KYC)</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-[#464a5c] mb-4 text-sm">التواصل</h4>
                        <ul className="space-y-3 text-sm text-gray-500">
                            <li>حفر الباطن، المملكة العربية السعودية</li>
                            <li dir="ltr" className="text-right">info@traof.org.sa</li>
                            <li dir="ltr" className="text-right">920000000</li>
                        </ul>
                    </div>

                </div>

                <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-gray-400">
                        © {new Date().getFullYear()} جمعية تراؤف. جميع الحقوق محفوظة.
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-400 font-medium">
                        <a href="#" className="hover:text-[#00a48c]">الشروط والأحكام</a>
                        <a href="#" className="hover:text-[#00a48c]">سياسة الخصوصية</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
