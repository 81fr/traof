"use client";

import React from 'react';
import { HandCoins, HeartHandshake, TrendingUp, CheckCircle2 } from 'lucide-react';
import FeaturedCases from '@/components/FeaturedCases';

export default function DashboardSummary() {
    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">

            {/* High Level Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex items-center gap-6 relative overflow-hidden group hover:shadow-md transition-shadow">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#00a48c]/10 to-transparent rounded-bl-full -z-0"></div>
                    <div className="w-16 h-16 rounded-2xl bg-[#00a48c]/10 flex items-center justify-center flex-shrink-0 z-10">
                        <HandCoins className="w-8 h-8 text-[#00a48c]" />
                    </div>
                    <div className="z-10">
                        <p className="text-sm font-semibold text-gray-500 mb-1">إجمالي التبرعات (ريال)</p>
                        <h3 className="text-3xl font-black text-[#464a5c]">235,000</h3>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex items-center gap-6 relative overflow-hidden group hover:shadow-md transition-shadow">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#8cc63f]/10 to-transparent rounded-bl-full -z-0"></div>
                    <div className="w-16 h-16 rounded-2xl bg-[#8cc63f]/10 flex items-center justify-center flex-shrink-0 z-10">
                        <HeartHandshake className="w-8 h-8 text-[#8cc63f]" />
                    </div>
                    <div className="z-10">
                        <p className="text-sm font-semibold text-gray-500 mb-1">حالات تم التكفل بها</p>
                        <h3 className="text-3xl font-black text-[#464a5c]">12 <span className="text-sm font-bold text-gray-400">حالة</span></h3>
                    </div>
                </div>

                <div className="bg-gradient-to-br from-[#1b233a] to-[#2c3859] p-6 rounded-3xl shadow-lg shadow-[#1b233a]/20 flex flex-col justify-center relative overflow-hidden">
                    <TrendingUp className="absolute top-4 left-4 w-32 h-32 text-white/5" strokeWidth={1} />
                    <p className="text-sm font-medium text-white/70 mb-2">تأثير حملاتكم خلال 2026</p>
                    <h3 className="text-2xl font-bold text-white leading-snug">ساهمت شركتكم في تغطية 80% من مسار السكن لعام 2026!</h3>
                    <button className="mt-4 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg text-sm font-bold self-start backdrop-blur-md transition-colors border border-white/20">
                        تصدير تقرير الجودة
                    </button>
                </div>
            </div>

            {/* Recent Pledges Tracking */}
            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="px-8 py-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
                    <h3 className="text-lg font-extrabold text-[#464a5c]">سجل التبرعات والمساهمات الأخيرة</h3>
                    <button className="text-sm font-bold text-[#00a48c] hover:underline">عرض جميع الإيصالات</button>
                </div>
                <div className="divide-y divide-gray-100">

                    <div className="px-8 py-5 flex items-center justify-between hover:bg-gray-50/50 transition-colors">
                        <div className="flex items-center gap-5">
                            <div className="w-12 h-12 rounded-full bg-[#e6f5f3] flex items-center justify-center">
                                <CheckCircle2 className="w-6 h-6 text-[#00a48c]" />
                            </div>
                            <div>
                                <p className="text-base font-bold text-[#464a5c]">تأمين سكن لأسرة مكونة من 5 أيتام</p>
                                <p className="text-sm text-gray-400 font-medium">مساهمة مالية نقدية • تم التحويل والإغلاق</p>
                            </div>
                        </div>
                        <div className="text-left">
                            <p className="text-lg font-black text-[#00a48c]">20,000 ريال</p>
                            <p className="text-xs text-gray-400">01 مارس 2026</p>
                        </div>
                    </div>

                    <div className="px-8 py-5 flex items-center justify-between hover:bg-gray-50/50 transition-colors">
                        <div className="flex items-center gap-5">
                            <div className="w-12 h-12 rounded-full bg-[#e6f5f3] flex items-center justify-center">
                                <CheckCircle2 className="w-6 h-6 text-[#00a48c]" />
                            </div>
                            <div>
                                <p className="text-base font-bold text-[#464a5c]">كفالة إيجار مبنى تعليمي لثلاثة أشهر</p>
                                <p className="text-sm text-gray-400 font-medium">مساهمة مالية • تم التحويل</p>
                            </div>
                        </div>
                        <div className="text-left">
                            <p className="text-lg font-black text-[#00a48c]">45,000 ريال</p>
                            <p className="text-xs text-gray-400">15 فبراير 2026</p>
                        </div>
                    </div>

                </div>
            </div>

            {/* Recommendation Engine Component Reused */}
            <div className="pt-8 relative">
                <h3 className="text-2xl font-extrabold text-[#464a5c] mb-2 px-2">حالات مقترحة توافق اهتمامك (الإسكان والتطوير)</h3>
                <p className="text-gray-500 mb-6 px-2">استناداً إلى سياسة المسؤولية الاجتماعية لشركتكم، نرشح لكم الحالات الأكثر أولوية حالياً.</p>

                {/* Reusing the FeaturedCases component but wrapping it in a minus margin to fit the panel */}
                <div className="-mx-4 sm:-mx-6 lg:-mx-8">
                    <FeaturedCases />
                </div>
            </div>

        </div>
    );
}
