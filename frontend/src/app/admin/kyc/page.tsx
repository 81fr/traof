"use client";

import React from 'react';
import { Search, CheckCircle, XCircle, FileText, AlertCircle } from 'lucide-react';

export default function AdminKycPage() {
    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h2 className="text-2xl font-extrabold text-[#464a5c]">اعتماد الشركات (KYC)</h2>
                    <p className="text-gray-500 text-sm mt-1">إدارة ومراجعة طلبات الانضمام للشركاء التجاريين</p>
                </div>
                <div className="relative w-full sm:w-72">
                    <input type="text" placeholder="البحث باسم الشركة أو السجل..." className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00a48c] text-sm" />
                    <Search className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-[#f8fafc]">
                            <tr>
                                <th className="px-6 py-4 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">الشركة / الممثل</th>
                                <th className="px-6 py-4 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">القطاع والمنطقة</th>
                                <th className="px-6 py-4 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">حالة المرفقات</th>
                                <th className="px-6 py-4 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">الإجراء</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-100">

                            {/* Pending Entry */}
                            <tr className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4">
                                    <div className="font-bold text-gray-900 text-sm">مجموعة السعد العقارية</div>
                                    <div className="text-xs text-gray-500 mt-1">م. سعد فهد (المدير العام)</div>
                                    <div className="text-xs text-gray-400 mt-0.5" dir="ltr">+966 50 111 2222</div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-gray-100 text-gray-800">التطوير العقاري</span>
                                    <div className="text-xs text-gray-500 mt-1">الرياض</div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-1.5 text-sm text-[#00a48c] font-medium">
                                        <FileText className="w-4 h-4" /> <span className="underline cursor-pointer">السجل التجاري</span>
                                    </div>
                                    <div className="flex items-center gap-1.5 text-sm text-[#00a48c] font-medium mt-1">
                                        <FileText className="w-4 h-4" /> <span className="underline cursor-pointer">خطاب التفويض</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex gap-2">
                                        <button className="px-3 py-1.5 bg-[#00a48c] text-white text-xs font-bold rounded-lg hover:bg-[#008f7a] flex items-center gap-1 transition-colors shadow-sm">
                                            <CheckCircle className="w-3.5 h-3.5" /> قبول
                                        </button>
                                        <button className="px-3 py-1.5 border border-red-200 text-red-600 text-xs font-bold rounded-lg hover:bg-red-50 flex items-center gap-1 transition-colors">
                                            <XCircle className="w-3.5 h-3.5" /> رفض المرفق
                                        </button>
                                    </div>
                                </td>
                            </tr>

                            {/* Approved Entry */}
                            <tr className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4">
                                    <div className="font-bold text-gray-900 text-sm flex items-center gap-2">
                                        شركة أفق الرائدة <CheckCircle className="w-4 h-4 text-[#8cc63f]" />
                                    </div>
                                    <div className="text-xs text-gray-500 mt-1">أ. محمد راشد</div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-gray-100 text-gray-800">الرعاية الصحية</span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-bold bg-[#f0f9eb] text-[#8cc63f]">مكتمل ومعتمد</span>
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-500">
                                    تم الاعتماد في 12 مـايو
                                </td>
                            </tr>

                            {/* Incomplete Entry */}
                            <tr className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4">
                                    <div className="font-bold text-gray-900 text-sm text-gray-500">مؤسسة البناء الحديث</div>
                                    <div className="text-xs text-gray-400 mt-1">لم يتم إكمال الملف</div>
                                </td>
                                <td className="px-6 py-4 text-gray-400 text-sm">--</td>
                                <td className="px-6 py-4">
                                    <span className="inline-flex items-center gap-1 text-xs font-bold text-orange-500">
                                        <AlertCircle className="w-3.5 h-3.5" /> بانتظار الرفع
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <button className="text-xs underline text-gray-500 hover:text-[#00a48c] font-medium">إرسال تذكير</button>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
