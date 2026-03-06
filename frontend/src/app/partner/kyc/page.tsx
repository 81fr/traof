"use client";

import React, { useState } from 'react';
import { Building2, Briefcase, FileText, CheckCircle2, ChevronLeft, ChevronRight, UploadCloud, ShieldCheck } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function KycWizard() {
    const [step, setStep] = useState(1);
    const router = useRouter();

    const handleNext = () => {
        if (step < 3) setStep(step + 1);
        else router.push('/dashboard');
    };

    const handlePrev = () => {
        if (step > 1) setStep(step - 1);
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">

                {/* Progress Header */}
                <div className="mb-10">
                    <h2 className="text-3xl font-extrabold text-[#464a5c] mb-8 text-center">توثيق الملف التجاري للشركة (KYC)</h2>
                    <div className="relative">
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-gray-200 rounded-full"></div>
                        <div
                            className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-[#00a48c] rounded-full transition-all duration-500"
                            style={{ width: step === 1 ? '33%' : step === 2 ? '66%' : '100%' }}
                        ></div>

                        <div className="relative flex justify-between z-10 w-full px-4">
                            {[
                                { id: 1, label: 'البيانات التجارية', icon: Building2 },
                                { id: 2, label: 'مسار المسؤولية CSR', icon: Briefcase },
                                { id: 3, label: 'الوثائق الثبوتية', icon: FileText }
                            ].map((s) => (
                                <div key={s.id} className="flex flex-col items-center">
                                    <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold shadow-md transition-colors ${step >= s.id ? 'bg-[#00a48c] text-white' : 'bg-white text-gray-400 border-2 border-gray-200'}`}>
                                        {step > s.id ? <CheckCircle2 className="w-6 h-6" /> : <s.icon className="w-5 h-5" />}
                                    </div>
                                    <span className={`text-sm mt-3 font-semibold ${step >= s.id ? 'text-[#00a48c]' : 'text-gray-400'}`}>{s.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Form Container */}
                <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 md:p-10 mb-8">

                    {/* Step 1 */}
                    {step === 1 && (
                        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <h3 className="text-xl font-bold text-[#464a5c] border-b pb-4 mb-6">البيانات التجارية الرسمية</h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">رقم السجل التجاري</label>
                                    <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#00a48c] focus:outline-none" placeholder="7xxxxxxxx" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">قطاع العمل (النشاط الاقتصادي)</label>
                                    <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#00a48c] focus:outline-none">
                                        <option>اختر القطاع</option>
                                        <option>التطوير العقاري</option>
                                        <option>القطاع المالي والتمويل</option>
                                        <option>الرعاية الصحية والمستشفيات</option>
                                        <option>التجزئة والجملة</option>
                                        <option>أخرى</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">المدينة / المقر الرئيسي</label>
                                    <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#00a48c] focus:outline-none" placeholder="الرياض، حفر الباطن..." />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">الموقع الإلكتروني للجهة</label>
                                    <input type="url" dir="ltr" className="w-full text-right px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#00a48c] focus:outline-none" placeholder="https://example.com" />
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Step 2 */}
                    {step === 2 && (
                        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <h3 className="text-xl font-bold text-[#464a5c] border-b pb-4 mb-6">تخصيص مسار رعاية الأيتام</h3>
                            <p className="text-gray-500 text-sm mb-6">حدد مجالات الاحتياج التي تتوافق مع تركيز المسؤولية الاجتماعية (CSR) لمؤسستكم ليتم مطابقتها وبناء المشاريع المناسبة.</p>

                            <div className="space-y-4">
                                <label className="block text-sm font-medium text-gray-700 mb-3">مجالات الاهتمام والدعم (يمكن اختيار أكثر من خيار):</label>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {['توفير السكن وتأثيثه', 'الرعاية الصحية والعلاجية', 'الكفالة التعليمية (مدارس/جامعات)', 'الدعم المالي المباشر (الكفالة الشهرية)', 'التدريب والتوظيف لليتيم'].map((item, i) => (
                                        <label key={i} className="flex items-center p-4 border border-gray-200 rounded-2xl cursor-pointer hover:bg-gray-50 transition-colors has-[:checked]:border-[#00a48c] has-[:checked]:bg-[#e6f5f3]/50">
                                            <input type="checkbox" className="w-5 h-5 text-[#00a48c] rounded focus:ring-[#00a48c] border-gray-300" />
                                            <span className="mr-3 font-medium text-gray-700 text-sm">{item}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-8">
                                <label className="block text-sm font-medium text-gray-700 mb-3">أنواع الدعم الممكن تقديمه:</label>
                                <div className="flex flex-wrap gap-4">
                                    <label className="px-6 py-2 bg-gray-100 rounded-full text-sm font-semibold text-gray-700 hover:bg-gray-200 cursor-pointer has-[:checked]:bg-[#8cc63f] has-[:checked]:text-white transition-colors"><input type="checkbox" className="hidden" /> دعم مالي نقدي</label>
                                    <label className="px-6 py-2 bg-gray-100 rounded-full text-sm font-semibold text-gray-700 hover:bg-gray-200 cursor-pointer has-[:checked]:bg-[#8cc63f] has-[:checked]:text-white transition-colors"><input type="checkbox" className="hidden" /> تبرع عيني (معدات، أجهزة، مواد)</label>
                                    <label className="px-6 py-2 bg-gray-100 rounded-full text-sm font-semibold text-gray-700 hover:bg-gray-200 cursor-pointer has-[:checked]:bg-[#8cc63f] has-[:checked]:text-white transition-colors"><input type="checkbox" className="hidden" /> تقديم خدمات نوعية مجانية</label>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Step 3 */}
                    {step === 3 && (
                        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <h3 className="text-xl font-bold text-[#464a5c] border-b pb-4 mb-6">المرفقات والتوثيق القانوني</h3>
                            <p className="text-gray-500 text-sm mb-6">لضمان الموثوقية العالية والامتثال للمسؤولية القانونية، يرجى إرفاق المستندات التالية بصيغة PDF أو JPG.</p>

                            <div className="grid gap-6">
                                <div className="border-2 border-dashed border-gray-300 rounded-2xl p-8 hover:bg-gray-50 hover:border-[#00a48c] transition-all cursor-pointer text-center group">
                                    <UploadCloud className="w-10 h-10 text-gray-400 group-hover:text-[#00a48c] mx-auto mb-3 transition-colors" />
                                    <p className="font-bold text-[#464a5c] mb-1">صورة السجل التجاري الساري</p>
                                    <p className="text-xs text-gray-400">انقر هنا للاختيار أو قم بالسحب والإفلات (الحد الأقصى 5MB)</p>
                                </div>

                                <div className="border-2 border-dashed border-gray-300 rounded-2xl p-8 hover:bg-gray-50 hover:border-[#00a48c] transition-all cursor-pointer text-center group">
                                    <UploadCloud className="w-10 h-10 text-gray-400 group-hover:text-[#00a48c] mx-auto mb-3 transition-colors" />
                                    <p className="font-bold text-[#464a5c] mb-1">خطاب تفويض الممثل القانوني (اختياري)</p>
                                    <p className="text-xs text-gray-400">إذا لم يكن الممثل هو المالك المدون في السجل</p>
                                </div>
                            </div>

                            <div className="mt-8 bg-[#e6f5f3] p-4 rounded-xl flex items-start gap-3">
                                <ShieldCheck className="w-6 h-6 text-[#00a48c] flex-shrink-0 mt-0.5" />
                                <p className="text-xs font-semibold text-[#008f7a] leading-relaxed">
                                    بالنقر على "إرسال الطلب واعتماد الملف"، فإن ممثل الجهة يقر بصحة كافة البيانات المرفقة ويوافق على اتفاقية مستوى الخدمة وتبادل البيانات (NDA) المعتمدة من قبل الجمعية.
                                </p>
                            </div>
                        </div>
                    )}

                </div>

                {/* Form Controls */}
                <div className="flex justify-between items-center bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                    <button
                        type="button"
                        onClick={handlePrev}
                        disabled={step === 1}
                        className={`flex items-center gap-2 px-6 py-3 font-semibold rounded-xl text-sm transition-all ${step === 1 ? 'text-gray-300 cursor-not-allowed hidden' : 'text-gray-600 hover:bg-gray-100'}`}
                    >
                        <ChevronRight className="w-4 h-4" /> العودة للتعديل
                    </button>

                    <button
                        type="button"
                        onClick={handleNext}
                        className="flex items-center gap-2 px-8 py-3 font-bold rounded-xl text-white bg-[#00a48c] hover:bg-[#008f7a] shadow-md transition-all ml-auto"
                    >
                        {step === 3 ? 'إرسال الطلب واعتماد الملف' : 'حفظ الخطوة والمتابعة'} <ChevronLeft className="w-4 h-4" />
                    </button>
                </div>

            </div>
        </div>
    );
}
