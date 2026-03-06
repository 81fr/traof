import React from 'react';
import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    {/* Logo Section */}
                    <div className="flex-shrink-0 flex items-center gap-2">
                        <Link href="/" className="flex items-center gap-3 decoration-transparent hover:opacity-90 transition-opacity">
                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#00a48c] to-[#008f7a] flex items-center justify-center text-white font-bold text-xl shadow-md">
                                ت
                            </div>
                            <div className="flex flex-col">
                                <span className="text-2xl font-black text-[#00a48c] leading-tight tracking-tight">تراؤف</span>
                                <span className="text-xs font-semibold text-[#8cc63f] tracking-wide">لرعاية الأيتام</span>
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        <Link href="/" className="text-sm font-semibold text-[#464a5c] hover:text-[#00a48c] transition-colors relative group">
                            الرئيسية
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00a48c] transition-all group-hover:w-full"></span>
                        </Link>
                        <Link href="#cases" className="text-sm font-semibold text-[#464a5c] hover:text-[#00a48c] transition-colors relative group">
                            استكشف الحالات
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00a48c] transition-all group-hover:w-full"></span>
                        </Link>
                        <Link href="#impact" className="text-sm font-semibold text-[#464a5c] hover:text-[#00a48c] transition-colors relative group">
                            أثرنا
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00a48c] transition-all group-hover:w-full"></span>
                        </Link>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-4">
                        <Link href="/login" className="hidden sm:inline-flex text-sm font-semibold text-[#464a5c] hover:text-[#00a48c] transition-colors px-4 py-2">
                            تسجيل الدخول
                        </Link>
                        <Link href="/partner" className="inline-flex items-center justify-center px-6 py-2.5 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-gradient-to-r from-[#00a48c] to-[#008f7a] hover:from-[#008f7a] hover:to-[#007a66] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00a48c] transition-all transform hover:scale-105">
                            كن شريكاً
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
