"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Users, FileText, Settings, LogOut, Bell, HeartHandshake } from 'lucide-react';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    const menuItems = [
        { href: '/admin', icon: LayoutDashboard, label: 'الرئيسية' },
        { href: '/admin/kyc', icon: Building2, label: 'اعتماد الشركات (KYC)' },
        { href: '/admin/cases', icon: HeartHandshake, label: 'إدارة الحالات' },
        { href: '/admin/reports', icon: FileText, label: 'التقارير والإيرادات' }
    ];

    return (
        <div className="flex h-screen bg-gray-100 overflow-hidden font-sans dir-rtl">

            {/* Sidebar Desktop */}
            <aside className="hidden w-72 bg-[#464a5c] md:flex flex-col flex-shrink-0 text-white shadow-2xl z-20">
                <div className="p-6 border-b border-white/10 flex items-center justify-center gap-4 bg-black/10">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00a48c] to-[#008f7a] flex items-center justify-center font-bold text-2xl shadow-inner border border-white/20">
                        ت
                    </div>
                    <div className="flex flex-col text-right">
                        <span className="text-xl font-black text-white leading-tight">تراؤف</span>
                        <span className="text-[10px] font-bold text-[#00a48c] tracking-widest uppercase bg-white/10 px-2 py-0.5 rounded-full mt-1">بوابة الإدارة العليا</span>
                    </div>
                </div>

                <div className="p-6 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center font-bold text-lg text-blue-200 border border-blue-500/30">
                        مدير
                    </div>
                    <div>
                        <p className="text-sm font-bold text-white">إدارة المنصة</p>
                        <p className="text-xs text-gray-400 mt-1">مرحباً بك مجدداً</p>
                    </div>
                </div>

                <nav className="flex-1 overflow-y-auto px-4 py-2 space-y-1.5 mt-2">
                    {menuItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`flex items-center gap-3 px-4 py-3.5 rounded-xl font-semibold transition-all duration-200 ${isActive
                                        ? 'bg-[#00a48c] text-white shadow-md shadow-[#00a48c]/20 border border-[#00a48c]/50'
                                        : 'text-gray-300 hover:text-white hover:bg-white/10 border border-transparent'
                                    }`}
                            >
                                <item.icon className={`w-5 h-5 ${isActive ? 'opacity-100' : 'opacity-70'}`} /> {item.label}
                            </Link>
                        )
                    })}
                </nav>

                <div className="p-4 border-t border-white/10 space-y-2 bg-black/10">
                    <Link href="/" className="flex items-center gap-3 px-4 py-3 rounded-xl text-red-300 hover:text-white hover:bg-red-500/30 font-medium transition-colors text-sm border border-transparent hover:border-red-500/50">
                        <LogOut className="w-5 h-5 opacity-70" /> تسجيل الخروج
                    </Link>
                </div>
            </aside>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col min-w-0 overflow-hidden relative">

                {/* Top Header */}
                <header className="bg-white border-b border-gray-200 h-20 px-6 sm:px-8 flex items-center justify-between flex-shrink-0 z-10 shadow-sm relative">
                    <div className="flex items-center">
                        <h1 className="text-xl md:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#464a5c] to-[#00a48c]">نظام إدارة تراؤف</h1>
                    </div>
                    <div className="flex items-center gap-4">
                        <span className="hidden sm:flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold bg-[#e6f5f3] text-[#00a48c] border border-[#00a48c]/20">
                            <span className="w-2 h-2 rounded-full bg-[#00a48c] animate-pulse"></span>
                            الأنظمة تعمل بكفاءة
                        </span>
                        <button className="p-2.5 bg-gray-50 border border-gray-200 text-gray-600 rounded-xl hover:bg-gray-100 hover:text-[#00a48c] transition-colors relative shadow-sm">
                            <Bell className="w-5 h-5" />
                            <span className="absolute top-0 -right-1 w-4 h-4 bg-red-500 text-white text-[10px] font-bold rounded-full border-2 border-white flex items-center justify-center">3</span>
                        </button>
                    </div>
                </header>

                {/* Scrollable Main Area */}
                <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 bg-[#f8fafc]">
                    {children}
                </main>
            </div>

        </div>
    );
}

// Dummy icon to avoid errors if missing from local lucide-react (Building2 requested)
import { Building as Building2 } from 'lucide-react';
