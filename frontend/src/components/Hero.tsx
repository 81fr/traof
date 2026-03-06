"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ShieldCheck, HeartHandshake } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-[90vh] flex items-center">
            {/* Background Decorations */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#e6f5f3]/50 to-white/20 z-0"></div>
            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-[#8cc63f]/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-[#00a48c]/10 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="text-center max-w-4xl mx-auto">

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#00a48c]/20 shadow-sm mb-8"
                    >
                        <ShieldCheck className="w-5 h-5 text-[#8cc63f]" />
                        <span className="text-sm font-medium text-[#464a5c]">شراكات مجتمعية موثقة ومتكاملة</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#464a5c] tracking-tight leading-[1.15]"
                    >
                        عطاء يُرى أثره، <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00a48c] to-[#8cc63f]">
                            ومستقبل يُصنع اليوم.
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
                    >
                        منصة تابعة لجمعية تراؤف بحفر الباطن، نصل بين المسؤولية الاجتماعية للشركات (CSR) والحالات الأشد احتياجاً، بكل شفافية وتقارير أثر دورية.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <Link href="/partner" className="group flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 text-lg font-bold rounded-full text-white bg-[#00a48c] hover:bg-[#008f7a] shadow-lg shadow-[#00a48c]/30 hover:shadow-xl hover:shadow-[#00a48c]/40 transition-all transform hover:-translate-y-1">
                            <HeartHandshake className="w-6 h-6" />
                            سجل كشريك مميز
                        </Link>
                        <Link href="#cases" className="group flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 text-lg font-bold rounded-full text-[#464a5c] bg-white border-2 border-gray-100 hover:border-[#00a48c]/30 shadow-sm hover:shadow-md transition-all">
                            تصفح الحالات والحاجات
                            <ArrowLeft className="w-5 h-5 text-gray-400 group-hover:text-[#00a48c] transition-colors group-hover:-translate-x-1 duration-300" />
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
