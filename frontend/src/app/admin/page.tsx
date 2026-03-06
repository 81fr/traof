"use client";

import React from 'react';
import { Users, TrendingUp, HandCoins, Building2, ArrowUpRight } from 'lucide-react';

export default function AdminDashboard() {
    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">

            {/* Top Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-[#00a48c]/5 rounded-bl-full -z-0 group-hover:bg-[#00a48c]/10 transition-colors"></div>
                    <div className="flex justify-between items-start mb-4 relative z-10">
                        <div className="w-12 h-12 rounded-xl bg-[#e6f5f3] flex items-center justify-center text-[#00a48c]">
                            <HandCoins className="w-6 h-6" />
                        </div>
                        <span className="flex items-center gap-1 text-xs font-bold text-[#8cc63f] bg-[#8cc63f]/10 px-2 py-1 rounded-lg">
                            +12.5% <ArrowUpRight className="w-3 h-3" />
                        </span>
                    </div>
                    <p className="text-sm font-semibold text-gray-500 mb-1 relative z-10">إجمالي إيرادات المنصة</p>
                    <h3 className="text-2xl font-black text-[#464a5c] relative z-10">1,245,000 <span className="text-sm text-gray-400 font-normal">ريال</span></h3>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-bl-full -z-0 group-hover:bg-blue-500/10 transition-colors"></div>
                    <div className="flex justify-between items-start mb-4 relative z-10">
                        <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-500">
                            <Building2 className="w-6 h-6" />
                        </div>
                    </div>
                    <p className="text-sm font-semibold text-gray-500 mb-1 relative z-10">الشركات المسجلة (B2B)</p>
                    <h3 className="text-2xl font-black text-[#464a5c] relative z-10">45 <span className="text-sm text-gray-400 font-normal">شريك فعال</span></h3>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-[#8cc63f]/5 rounded-bl-full -z-0 group-hover:bg-[#8cc63f]/10 transition-colors"></div>
                    <div className="flex justify-between items-start mb-4 relative z-10">
                        <div className="w-12 h-12 rounded-xl bg-[#f0f9eb] flex items-center justify-center text-[#8cc63f]">
                            <Users className="w-6 h-6" />
                        </div>
                    </div>
                    <p className="text-sm font-semibold text-gray-500 mb-1 relative z-10">الأيتام المكفولين</p>
                    <h3 className="text-2xl font-black text-[#464a5c] relative z-10">342 <span className="text-sm text-gray-400 font-normal">يتيم ويتيمة</span></h3>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500/5 rounded-bl-full -z-0 group-hover:bg-orange-500/10 transition-colors"></div>
                    <div className="flex justify-between items-start mb-4 relative z-10">
                        <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-orange-500">
                            <TrendingUp className="w-6 h-6" />
                        </div>
                        <span className="flex items-center gap-1 text-xs font-bold text-orange-500 bg-orange-500/10 px-2 py-1 rounded-lg">
                            3 طلبات جديدة
                        </span>
                    </div>
                    <p className="text-sm font-semibold text-gray-500 mb-1 relative z-10">طلبات توثيق KYC قيد الانتظار</p>
                    <h3 className="text-2xl font-black text-[#464a5c] relative z-10">3 <span className="text-sm text-gray-400 font-normal">طلبات مراجعة</span></h3>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Recent Registrations */}
                <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100">
                    <div className="px-6 py-5 border-b border-gray-100 flex justify-between items-center bg-gray-50/50 rounded-t-2xl">
                        <h3 className="text-lg font-bold text-[#464a5c]">أحدث عمليات التبرع الواردة</h3>
                    </div>
                    <div className="p-0">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">الجهة المانحة</th>
                                    <th className="px-6 py-3 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">المبلغ</th>
                                    <th className="px-6 py-3 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">المشروع/الحالة</th>
                                    <th className="px-6 py-3 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">التشيك</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-100">
                                <tr className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="h-10 w-10 flex-shrink-0 bg-[#00a48c]/10 rounded-full flex items-center justify-center text-[#00a48c] font-bold text-sm">أف</div>
                                            <div className="ml-0 mr-4">
                                                <div className="text-sm font-bold text-gray-900">شركة أفق الرائده</div>
                                                <div className="text-xs text-gray-500">قبل ساعتين</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-black text-[#00a48c]">4,500 ريال</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">ترميم مسكن اليتيم أحمد</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="px-3 py-1 inline-flex text-xs leading-5 font-bold rounded-full bg-[#f0f9eb] text-[#8cc63f]">مكتمل</span>
                                    </td>
                                </tr>
                                <tr className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="h-10 w-10 flex-shrink-0 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-sm">ع</div>
                                            <div className="ml-0 mr-4">
                                                <div className="text-sm font-bold text-gray-900">مؤسسة العطاء</div>
                                                <div className="text-xs text-gray-500">أمس، 10:30 صباحاً</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-black text-[#00a48c]">20,000 ريال</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">صندوق الكفالة السنوية</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="px-3 py-1 inline-flex text-xs leading-5 font-bold rounded-full bg-[#e6f5f3] text-[#00a48c]">قيد التحويل</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* KYC Alerts Widget */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
                    <div className="px-6 py-5 border-b border-gray-100 bg-gray-50/50 rounded-t-2xl">
                        <h3 className="text-lg font-bold text-[#464a5c]">تنبيهات (KYC)</h3>
                    </div>
                    <div className="p-6 space-y-4">
                        {/* Alert Item */}
                        <div className="flex items-start gap-4 p-4 rounded-xl bg-orange-50 border border-orange-100">
                            <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                                <Building2 className="w-5 h-5 text-orange-600" />
                            </div>
                            <div>
                                <h4 className="text-sm font-bold text-gray-900">مجموعة السعد العقارية</h4>
                                <p className="text-xs text-gray-500 mt-1 line-clamp-2">قامت الشركة برفع السجل التجاري وخطاب التفويض بانتظار اعتماد الإدارة.</p>
                                <button className="mt-2 text-xs font-bold text-orange-600 hover:text-orange-700 transition-colors">مراجعة الملف &larr;</button>
                            </div>
                        </div>

                        {/* Alert Item */}
                        <div className="flex items-start gap-4 p-4 rounded-xl bg-orange-50 border border-orange-100">
                            <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                                <Building2 className="w-5 h-5 text-orange-600" />
                            </div>
                            <div>
                                <h4 className="text-sm font-bold text-gray-900">شركة الطب الحديث</h4>
                                <p className="text-xs text-gray-500 mt-1 line-clamp-2">تسجيل مبدئي جديد ينتظر استكمال الأوراق الثبوتية.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
