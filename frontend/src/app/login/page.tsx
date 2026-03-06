import React from 'react';
import Link from 'next/link';

export default function LoginPage() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 font-sans">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <Link href="/" className="flex justify-center mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00a48c] to-[#008f7a] flex items-center justify-center text-white font-bold text-3xl shadow-lg">
                        ت
                    </div>
                </Link>
                <h2 className="mt-2 text-center text-3xl font-extrabold text-[#464a5c]">
                    تسجيل الدخول للشركاء
                </h2>
                <p className="mt-2 text-center text-sm text-gray-500">
                    أو {' '}
                    <Link href="/partner" className="font-medium text-[#00a48c] hover:text-[#008f7a]">
                        سجل كشريك جديد لدعم الأيتام
                    </Link>
                </p>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow-xl shadow-black/5 sm:rounded-3xl sm:px-10 border border-gray-100">

                    <div className="mb-6 bg-blue-50 border border-blue-100 p-4 rounded-xl text-sm text-blue-800">
                        <p className="font-bold flex items-center gap-2 mb-1">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            بيانات الدخول التجريبية (للعرض):
                        </p>
                        <p>رقم الجوال: <span className="font-mono bg-blue-100 px-1 rounded font-bold" dir="ltr">+966500123456</span></p>
                        <p>كلمة المرور: <span className="font-mono bg-blue-100 px-1 rounded font-bold">123456</span></p>
                    </div>

                    <form className="space-y-6" action="/dashboard" method="GET">
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                رقم الجوال المُسجل
                            </label>
                            <div className="mt-1 relative rounded-md shadow-sm">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <span className="text-gray-500 sm:text-sm dir-ltr">+966</span>
                                </div>
                                <input
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    autoComplete="tel"
                                    required
                                    defaultValue="500123456"
                                    dir="ltr"
                                    className="appearance-none block w-full px-3 py-3 pl-14 sm:text-sm border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00a48c] focus:border-transparent text-right bg-gray-50 focus:bg-white transition-colors"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                كلمة المرور (أو رمز التحقق OTP)
                            </label>
                            <div className="mt-1 relative rounded-md shadow-sm">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    defaultValue="123456"
                                    className="appearance-none block w-full px-3 py-3 sm:text-sm border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00a48c] focus:border-transparent bg-gray-50 focus:bg-white transition-colors"
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4 text-[#00a48c] focus:ring-[#00a48c] border-gray-300 rounded"
                                />
                                <label htmlFor="remember-me" className="mr-2 block text-sm text-gray-900">
                                    تذكرني
                                </label>
                            </div>

                            <div className="text-sm">
                                <a href="#" className="font-medium text-[#00a48c] hover:text-[#008f7a]">
                                    نسيت كلمة المرور؟
                                </a>
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="w-full flex justify-center py-3.5 px-4 border border-transparent rounded-xl shadow-sm text-sm font-bold text-white bg-[#00a48c] hover:bg-[#008f7a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00a48c] transition-colors"
                            >
                                تسجيل الدخول للوحة التحكم
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
}
