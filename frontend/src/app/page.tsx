export default function Home() {
    return (
        <div dir="rtl" className="min-h-screen bg-gray-50 font-sans text-[#464a5c]">
            {/* Header */}
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <h1 className="text-3xl font-bold text-[#00a48c]">تراؤف</h1>
                        <span className="text-sm text-[#8cc63f] font-semibold">لرعاية الأيتام</span>
                    </div>
                    <nav className="flex space-x-4 space-x-reverse">
                        <a href="#" className="text-[#464a5c] hover:text-[#00a48c]">الرئيسية</a>
                        <a href="#" className="text-[#464a5c] hover:text-[#00a48c]">استكشف الحالات</a>
                        <a href="#" className="text-[#464a5c] hover:text-[#00a48c]">لوحة التجّار</a>
                    </nav>
                </div>
            </header>

            {/* Hero Section */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold text-[#464a5c] sm:text-5xl">
                        أثر مستدام وشراكة مجتمعية موثوقة
                    </h2>
                    <p className="mt-4 text-xl text-gray-500">
                        نوصل عطاء الشركات والمؤسسات إلى حالات الأيتام المحققة بكل شفافية وموثوقية، ضمن إطار المسؤولية الاجتماعية (CSR) التابع لجمعية تراؤف.
                    </p>
                    <div className="mt-8 flex justify-center gap-4">
                        <button className="bg-[#00a48c] text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-[#008f7a] transition-colors">
                            سجل كشريك (B2B)
                        </button>
                        <button className="bg-white text-[#00a48c] border border-[#00a48c] px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-50 transition-colors">
                            تصفح الحالات
                        </button>
                    </div>
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-16">
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                        <p className="text-4xl font-bold text-[#8cc63f]">120+</p>
                        <p className="mt-2 text-[#464a5c]">حالة تم كفالتها</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                        <p className="text-4xl font-bold text-[#8cc63f]">45</p>
                        <p className="mt-2 text-[#464a5c]">شريك تجاري موثق</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                        <p className="text-4xl font-bold text-[#8cc63f]">2.5M ريال</p>
                        <p className="mt-2 text-[#464a5c]">إجمالي الدعم المجتمعي</p>
                    </div>
                </div>
            </main>
        </div>
    );
}
