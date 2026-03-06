import React from 'react';
import Link from 'next/link';
import { Building2, ShieldCheck, HeartHandshake, ArrowLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PartnerLandingPage() {
    return (
        <div className="font-sans antialiased bg-gray-50 flex flex-col min-h-screen">
            <Navbar />

            <main className="flex-grow pt-32 pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-[#00a48c] font-bold tracking-wide mb-2 block">بوابة شركاء العطاء</span>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-[#464a5c] mb-6 leading-tight">
                            أثر مستدام لشركتك.. <br />وحياة كريمة لليتيم
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                            انضم لأكثر من 45 شريكاً استراتيجياً يعززون دورهم المجتمعي (CSR) من خلال دعم حالات تراؤف الموثقة بكل شفافية واحترافية.
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link href="/partner/register" className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-bold rounded-full text-white bg-[#00a48c] hover:bg-[#008f7a] shadow-lg shadow-[#00a48c]/30 hover:-translate-y-1 transition-all">
                                ابدأ رحلة التوثيق الآن
                                <ArrowLeft className="w-5 h-5" />
                            </Link>
                            <Link href="/dashboard" className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full text-[#464a5c] bg-white border border-gray-200 hover:border-[#00a48c]/30 shadow-sm transition-all">
                                دخول الشركاء المسجلين
                            </Link>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mt-20">
                        <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-14 h-14 bg-[#e6f5f3] rounded-2xl flex items-center justify-center mb-6">
                                <ShieldCheck className="w-7 h-7 text-[#00a48c]" />
                            </div>
                            <h3 className="text-xl font-bold text-[#464a5c] mb-3">حالات موثقة 100%</h3>
                            <p className="text-gray-500 leading-relaxed">
                                جميع الحالات المعروضة تمر بلجنة دراسة حالة ميدانية دقيقة للتأكد من أولوية الاحتياج في محافظة حفر الباطن.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-14 h-14 bg-[#f0f9eb] rounded-2xl flex items-center justify-center mb-6">
                                <Building2 className="w-7 h-7 text-[#8cc63f]" />
                            </div>
                            <h3 className="text-xl font-bold text-[#464a5c] mb-3">ملف CSR متكامل</h3>
                            <p className="text-gray-500 leading-relaxed">
                                نوفر لشركتك تقارير أثر دورية ورقمية لتعظيم صورتكم الذهنية وإبراز جهودكم في التقارير السنوية وفق رؤية 2030.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-14 h-14 bg-[#e6f5f3] rounded-2xl flex items-center justify-center mb-6">
                                <HeartHandshake className="w-7 h-7 text-[#00a48c]" />
                            </div>
                            <h3 className="text-xl font-bold text-[#464a5c] mb-3">مطابقة ذكية للرغبات</h3>
                            <p className="text-gray-500 leading-relaxed">
                                نطابق بين نوع تبرعكم (نقدي، عيني، خدمات) ومجال تركيزكم (تعليم، صحة، مسكن) مع الحالات الأنسب فورياً.
                            </p>
                        </div>
                    </div>

                </div>
            </main>

            <Footer />
        </div>
    );
}
