"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Building, User, Mail, Phone, ChevronRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function RegisterStep1() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // Simulate API call
        setTimeout(() => {
            router.push('/partner/kyc');
        }, 1000);
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-3xl shadow-xl shadow-black/5 border border-gray-100">
                <div>
                    <Link href="/" className="flex justify-center mb-6">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00a48c] to-[#008f7a] flex items-center justify-center text-white font-bold text-2xl shadow-md">
                            ت
                        </div>
                    </Link>
                    <h2 className="text-center text-3xl font-extrabold text-[#464a5c]">
                        إنشاء حساب الشراكة
                    </h2>
                    <p className="mt-3 text-center text-sm text-gray-500">
                        خطوتك الأولى نحو أثر مجتمعي مستدام
                    </p>
                </div>

                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="company-name" className="block text-sm font-medium text-[#464a5c] mb-1">الاسم التجاري للجهة</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                    <Building className="h-5 w-5 text-gray-400" />
                                </div>
                                <input id="company-name" name="company" type="text" required className="appearance-none rounded-xl relative block w-full px-3 py-3 pr-10 border border-gray-300 placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#00a48c] focus:border-transparent sm:text-sm bg-gray-50 focus:bg-white transition-colors" placeholder="مثال: شركة التقدم العقارية" />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="rep-name" className="block text-sm font-medium text-[#464a5c] mb-1">اسم الممثل المفوض</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                    <User className="h-5 w-5 text-gray-400" />
                                </div>
                                <input id="rep-name" name="name" type="text" required className="appearance-none rounded-xl relative block w-full px-3 py-3 pr-10 border border-gray-300 placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#00a48c] focus:border-transparent sm:text-sm bg-gray-50 focus:bg-white transition-colors" placeholder="الاسم الثلاثي المعتمد" />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-[#464a5c] mb-1">رقم الجوال لتلقي رمز التوثيق</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <span className="text-gray-500 font-medium dir-ltr">+966</span>
                                </div>
                                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                    <Phone className="h-5 w-5 text-gray-400" />
                                </div>
                                <input id="phone" name="phone" type="tel" dir="ltr" required className="appearance-none rounded-xl relative block w-full px-3 py-3 pl-14 pr-10 border border-gray-300 placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#00a48c] focus:border-transparent sm:text-sm bg-gray-50 focus:bg-white transition-colors text-right" placeholder="5xxxxxxxx" />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-[#464a5c] mb-1">البريد الإلكتروني للعمل (باسم النطاق)</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                    <Mail className="h-5 w-5 text-gray-400" />
                                </div>
                                <input id="email" name="email" type="email" required className="appearance-none rounded-xl relative block w-full px-3 py-3 pr-10 border border-gray-300 placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#00a48c] focus:border-transparent sm:text-sm bg-gray-50 focus:bg-white transition-colors" placeholder="info@company.com" />
                            </div>
                        </div>
                    </div>

                    <div>
                        <button type="submit" disabled={loading} className={`group relative w-full flex justify-center py-3.5 px-4 border border-transparent text-sm font-bold rounded-xl text-white ${loading ? 'bg-gray-400' : 'bg-[#00a48c] hover:bg-[#008f7a]'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00a48c] shadow-md transition-all`}>
                            {loading ? 'جاري التحقق...' : 'استمرار لإكمال ملف التوثيق (KYC)'}
                            {!loading && <ArrowLeft className="w-5 h-5 absolute left-4 group-hover:-translate-x-1 transition-transform" />}
                        </button>
                    </div>

                    <div className="text-center mt-4">
                        <Link href="/partner" className="text-sm font-medium text-gray-500 hover:text-[#00a48c] flex items-center justify-center gap-1">
                            <ChevronRight className="w-4 h-4" />
                            عودة للتفاصيل
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
