import React from 'react';
import Link from 'next/link';
import { Home, LineChart, Users, FileText, Settings, LogOut, Bell } from 'lucide-react';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-screen bg-gray-50 overflow-hidden font-sans dir-rtl">

            {/* Sidebar Desktop */}
            <aside className="hidden w-72 bg-[#1b233a] md:flex flex-col text-white flex-shrink-0">
                <div className="p-6 border-b border-white/10 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#00a48c] to-[#008f7a] flex items-center justify-center font-bold text-xl shadow-md">
                        ت
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xl font-black text-white leading-tight">تراؤف</span>
                        <span className="text-[10px] font-semibold text-[#8cc63f] tracking-widest uppercase">B2B Portal</span>
                    </div>
                </div>

                <div className="p-6 flex items-center gap-4 bg-white/5 border-b border-white/5">
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center font-bold text-lg text-white">
                        أف
                    </div>
                    <div>
                        <p className="text-sm font-bold text-white">شركة أفق الرائدة</p>
                        <p className="text-xs text-gray-400 mt-1">م. فهد بن عبدالله</p>
                    </div>
                </div>

                <nav className="flex-1 overflow-y-auto p-4 space-y-2 mt-4">
                    <Link href="/dashboard" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#00a48c] text-white font-semibold transition-colors">
                        <Home className="w-5 h-5" /> لوحة الملخص (Dashboard)
                    </Link>
                    <Link href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 font-medium transition-colors">
                        <LineChart className="w-5 h-5" /> تقارير الأثر التفصيلية
                    </Link>
                    <Link href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 font-medium transition-colors">
                        <Users className="w-5 h-5" /> استكشاف حالات الكفالة
                    </Link>
                    <Link href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 font-medium transition-colors">
                        <FileText className="w-5 h-5" /> إيصالات التبرعات والعقود
                    </Link>
                </nav>

                <div className="p-4 border-t border-white/10 space-y-2">
                    <Link href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 font-medium transition-colors text-sm">
                        <Settings className="w-5 h-5" /> إعدادات الشركة
                    </Link>
                    <Link href="/" className="flex items-center gap-3 px-4 py-3 rounded-xl text-red-400 hover:text-white hover:bg-red-500/20 font-medium transition-colors text-sm">
                        <LogOut className="w-5 h-5" /> تسجيل الخروج
                    </Link>
                </div>
            </aside>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col min-w-0 overflow-hidden">

                {/* Top Header */}
                <header className="bg-white border-b border-gray-200 h-20 px-4 sm:px-6 lg:px-8 flex items-center justify-between flex-shrink-0 z-10 shadow-sm">
                    <div className="flex items-center">
                        <h1 className="text-xl font-extrabold text-[#464a5c]">ملخص أثر الشراكة (CSR)</h1>
                    </div>
                    <div className="flex items-center gap-4 text-gray-500">
                        <span className="hidden sm:inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold bg-[#e6f5f3] text-[#00a48c] border border-[#00a48c]/20">
                            حساب موثق ومُفعل
                        </span>
                        <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors relative">
                            <Bell className="w-5 h-5" />
                            <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
                        </button>
                    </div>
                </header>

                {/* Scrollable Main Area */}
                <main className="flex-1 overflow-y-auto bg-[#f8fafc] p-4 sm:p-6 lg:p-8">
                    {children}
                </main>
            </div>

        </div>
    );
}
