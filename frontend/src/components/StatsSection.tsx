"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Users, Briefcase, HandCoins } from 'lucide-react';

const stats = [
    {
        id: 1,
        name: "حالة يسرنا تفريج كربتها",
        value: "150+",
        icon: Users,
        color: "from-blue-400 to-blue-600",
        bg: "bg-blue-50"
    },
    {
        id: 2,
        name: "شريك كفالة موثق (B2B)",
        value: "45",
        icon: Briefcase,
        color: "from-[#8cc63f] to-[#7ab533]",
        bg: "bg-[#8cc63f]/10"
    },
    {
        id: 3,
        name: "ملايين الريالات من الأثر",
        value: "2.5M+",
        icon: HandCoins,
        color: "from-[#00a48c] to-[#008f7a]",
        bg: "bg-[#00a48c]/10"
    }
];

export default function StatsSection() {
    return (
        <section id="impact" className="py-20 bg-white relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16">
                    <h2 className="text-3xl font-extrabold text-[#464a5c] sm:text-4xl tracking-tight">
                        أرقام تحكي قصة الأثر
                    </h2>
                    <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
                        بفضل الله ثم بشراكات مجتمعية فاعلة، تمكنا في تراؤف من الوصول لهذه المستهدفات.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            className="relative overflow-hidden group rounded-3xl p-8 bg-white border border-gray-100 hover:border-transparent hover:shadow-2xl hover:shadow-black/5 transition-all duration-300 transform hover:-translate-y-2"
                        >
                            <div className={`absolute -right-16 -top-16 w-32 h-32 rounded-full ${stat.bg} mix-blend-multiply group-hover:scale-150 transition-transform duration-700 ease-out`}></div>

                            <div className="relative z-10">
                                <div className={`inline-flex p-3 rounded-2xl ${stat.bg} text-transparent bg-clip-text bg-gradient-to-br ${stat.color} mb-6`}>
                                    <stat.icon className={`w-8 h-8 text-[#00a48c]`} style={{ color: index === 1 ? '#8cc63f' : index === 2 ? '#00a48c' : '#3b82f6' }} strokeWidth={1.5} />
                                </div>

                                <p className="text-5xl font-black text-[#464a5c] tracking-tight mb-2">
                                    {stat.value}
                                </p>
                                <p className="text-base font-semibold text-gray-500">
                                    {stat.name}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
