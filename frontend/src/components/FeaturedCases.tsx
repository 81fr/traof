"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, AlertCircle, ArrowLeft } from 'lucide-react';

const cases = [
    {
        id: "aaaa1111",
        title: "تأمين سكن لأسرة مكونة من 5 أيتام",
        city: "حفر الباطن",
        category: "سكن",
        budget: 85000,
        raised: 20000,
        verified: true,
    },
    {
        id: "bbbb2222",
        title: "كفالة تعليم جامعي لطالب متميز",
        city: "حفر الباطن",
        category: "تعليم",
        budget: 12000,
        raised: 12000,
        verified: true,
    },
    {
        id: "cccc3333",
        title: "رحلة علاجية ليتيمة من ذوي الاحتياجات",
        city: "حفر الباطن",
        category: "صحة",
        budget: 45000,
        raised: 5000,
        verified: true,
    }
];

export default function FeaturedCases() {
    return (
        <section id="cases" className="py-24 bg-gray-50/50 border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl font-extrabold text-[#464a5c] tracking-tight sm:text-4xl mb-4">
                            حالات بانتظار الشراكة
                        </h2>
                        <p className="text-lg text-gray-500">
                            اختر الحالة المناسبة لمسؤوليتكم الاجتماعية من الحالات الأكثر احتياجاً والأعلى أولوية في التوثيق لدى جمعية تراؤف.
                        </p>
                    </div>
                    <button className="hidden md:flex items-center gap-2 px-6 py-3 font-medium text-[#00a48c] bg-[#e6f5f3]/80 rounded-full hover:bg-[#e6f5f3] transition-colors mt-6 md:mt-0">
                        تصفح كل الحالات
                        <ArrowLeft className="w-4 h-4" />
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {cases.map((item, idx) => {
                        const progress = Math.min(100, Math.round((item.raised / item.budget) * 100));
                        const isCompleted = progress === 100;

                        return (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.4, delay: idx * 0.1 }}
                                className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-[#00a48c]/5 transition-all duration-300 overflow-hidden flex flex-col"
                            >
                                <div className="p-6 flex-grow">
                                    <div className="flex justify-between items-start mb-6">
                                        <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold bg-[#e6f5f3] text-[#00a48c] tracking-wide">
                                            {item.category}
                                        </span>
                                        {item.verified ? (
                                            <span className="flex items-center text-xs font-medium text-[#8cc63f] gap-1">
                                                <CheckCircle2 className="w-4 h-4 fill-current text-white/90 stroke-[#8cc63f]" />
                                                محقق وموثق
                                            </span>
                                        ) : (
                                            <span className="flex items-center text-xs font-medium text-amber-500 gap-1">
                                                <AlertCircle className="w-4 h-4" />
                                                قيد المراجعة
                                            </span>
                                        )}
                                    </div>

                                    <h3 className="text-xl font-bold text-[#464a5c] mb-3 leading-snug line-clamp-2">
                                        {item.title}
                                    </h3>

                                    <p className="text-sm font-medium text-gray-400 mb-6 flex items-center gap-1">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                        {item.city}
                                    </p>

                                    {/* Progress Bar */}
                                    <div className="mb-2 flex justify-between text-sm">
                                        <span className="font-semibold text-gray-500">تم جمع <span className="text-[#464a5c]">{item.raised.toLocaleString()}</span></span>
                                        <span className="font-bold text-[#00a48c]">{progress}%</span>
                                    </div>
                                    <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
                                        <div
                                            className={`h-full rounded-full ${isCompleted ? 'bg-[#8cc63f]' : 'bg-gradient-to-r from-[#00a48c] to-[#008f7a]'}`}
                                            style={{ width: `${progress}%` }}
                                        ></div>
                                    </div>
                                </div>

                                <div className="p-6 border-t border-gray-50 bg-gray-50/30 flex items-center justify-between">
                                    <div className="flex flex-col">
                                        <span className="text-xs text-gray-400 font-medium mb-1">الاحتياج الإجمالي</span>
                                        <span className="text-lg font-black text-[#464a5c]">{item.budget.toLocaleString()} <span className="text-sm font-bold text-gray-400">ريال</span></span>
                                    </div>

                                    <button
                                        disabled={isCompleted}
                                        className={`px-6 py-2.5 rounded-xl font-bold text-sm shadow-sm transition-all focus:ring-2 focus:ring-offset-2 focus:ring-[#00a48c] ${isCompleted
                                                ? 'bg-gray-100 text-gray-400 cursor-not-allowed border border-gray-200'
                                                : 'bg-white border-2 border-[#00a48c] text-[#00a48c] hover:bg-[#00a48c] hover:text-white'
                                            }`}
                                    >
                                        {isCompleted ? 'مكتملة شكراً للتجار' : 'كفالة الحالة'}
                                    </button>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                <div className="mt-8 flex justify-center md:hidden">
                    <button className="flex items-center gap-2 px-8 py-4 font-bold w-full justify-center text-[#00a48c] bg-[#e6f5f3] rounded-2xl">
                        عرض المزيد من الحالات
                        <ArrowLeft className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </section>
    );
}
