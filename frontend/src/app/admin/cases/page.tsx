"use client";

import React, { useState } from 'react';
import { PlusCircle, Edit3, Trash2, HeartHandshake, Filter, MoreHorizontal } from 'lucide-react';

export default function AdminCasesPage() {
    const [cases] = useState([
        { id: 1, title: 'ترميم وإصلاح مسكن أيتام', type: 'إسكان', budget: 65000, raised: 45000, status: 'نشط' },
        { id: 2, title: 'كفالة تعليم جامعي (سنتين)', type: 'تعليم', budget: 24000, raised: 24000, status: 'مكتمل' },
        { id: 3, title: 'تأمين أجهزة طبية ليتيم', type: 'صحة', budget: 15500, raised: 0, status: 'انتظار الموافقة' },
    ]);

    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-gray-200 pb-6">
                <div>
                    <h2 className="text-2xl font-extrabold text-[#464a5c] flex items-center gap-2">
                        <HeartHandshake className="w-6 h-6 text-[#00a48c]" />
                        إدارة حالات الأيتام (المشاريع)
                    </h2>
                    <p className="text-gray-500 text-sm mt-1">تتبع وإضافة وتحديث مشاريع الأيتام المعروضة للشركات.</p>
                </div>
                <button className="px-5 py-2.5 bg-[#00a48c] text-white font-bold rounded-xl shadow-md hover:bg-[#008f7a] flex items-center gap-2 transition-all hover:scale-105 active:scale-95">
                    <PlusCircle className="w-5 h-5" /> إضافة مشروع أو حالة جديدة
                </button>
            </div>

            {/* Filters */}
            <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
                <button className="px-4 py-2 bg-gray-900 text-white text-sm font-bold rounded-full whitespace-nowrap">الكل (124)</button>
                <button className="px-4 py-2 bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 text-sm font-bold rounded-full whitespace-nowrap">نشط (45)</button>
                <button className="px-4 py-2 bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 text-sm font-bold rounded-full whitespace-nowrap flex items-center gap-1">
                    <Filter className="w-3.5 h-3.5" /> قطاع الإسكان
                </button>
                <button className="px-4 py-2 bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 text-sm font-bold rounded-full whitespace-nowrap flex items-center gap-1">
                    <Filter className="w-3.5 h-3.5" /> القطاع الصحي
                </button>
            </div>

            {/* Cases List */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-[#f8fafc]">
                            <tr>
                                <th className="px-6 py-4 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">عنوان المشروع/الحالة</th>
                                <th className="px-6 py-4 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">المسار (CSR)</th>
                                <th className="px-6 py-4 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">الميزانية والإنجاز</th>
                                <th className="px-6 py-4 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">الحالة</th>
                                <th className="px-6 py-4 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">إجراءات</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-100">
                            {cases.map((c) => (
                                <tr key={c.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="font-bold text-gray-900 text-sm">{c.title}</div>
                                        <div className="text-xs text-gray-500 mt-1">حفر الباطن - رقم المعرف {c.id + 10452}</div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-gray-100 text-gray-800">
                                            {c.type}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex justify-between items-center mb-1">
                                            <span className="text-xs font-bold text-[#00a48c]">{c.raised.toLocaleString()} ريال</span>
                                            <span className="text-xs text-gray-400">من {c.budget.toLocaleString()}</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-1.5">
                                            <div
                                                className={`h-1.5 rounded-full ${c.raised === c.budget ? 'bg-[#8cc63f]' : 'bg-[#00a48c]'}`}
                                                style={{ width: `${(c.raised / c.budget) * 100}%` }}
                                            ></div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-bold ${c.status === 'نشط' ? 'bg-[#e6f5f3] text-[#00a48c]' :
                                                c.status === 'مكتمل' ? 'bg-[#f0f9eb] text-[#8cc63f]' :
                                                    'bg-orange-50 text-orange-600'
                                            }`}>
                                            {c.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-left">
                                        <div className="flex gap-3 justify-end items-center">
                                            <button className="text-gray-400 hover:text-[#00a48c] transition-colors"><Edit3 className="w-4 h-4" /></button>
                                            <button className="text-gray-400 hover:text-red-500 transition-colors"><Trash2 className="w-4 h-4" /></button>
                                            <button className="text-gray-400 hover:text-gray-900 transition-colors"><MoreHorizontal className="w-5 h-5" /></button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
}
