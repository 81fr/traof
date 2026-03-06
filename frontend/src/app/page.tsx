export default function Home() {
    return (
        <div dir="rtl" className="min-h-screen bg-gray-50 font-sans text-gray-900">
            {/* Header */}
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
                    <h1 className="text-3xl font-bold text-teal-600">منصة رعاية</h1>
                    <nav className="flex space-x-4 space-x-reverse">
                        <a href="#" className="text-gray-600 hover:text-teal-600">الرئيسية</a>
                        <a href="#" className="text-gray-600 hover:text-teal-600">استكشف الحالات</a>
                        <a href="#" className="text-gray-600 hover:text-teal-600">لوحة التجّار</a>
                    </nav>
                </div>
            </header>

            {/* Hero Section */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
                        أثر مستدام وشراكة مجتمعية موثوقة
                    </h2>
                    <p className="mt-4 text-xl text-gray-500">
                        نوصل عطاء الشركات والمؤسسات إلى حالات الأيتام المحققة بكل شفافية وموثوقية، ضمن إطار المسؤولية الاجتماعية (CSR).
                    </p>
                    <div className="mt-8 flex justify-center gap-4">
                        <button className="bg-teal-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-teal-700">
                            سجل كشريك (B2B)
                        </button>
                        <button className="bg-white text-teal-600 border border-teal-600 px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-50">
                            تصفح الحالات
                        </button>
                    </div>
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-16">
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                        <p className="text-4xl font-bold text-teal-600">120+</p>
                        <p className="mt-2 text-gray-500">حالة تم كفالتها</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                        <p className="text-4xl font-bold text-teal-600">45</p>
                        <p className="mt-2 text-gray-500">شريك تجاري موثق</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                        <p className="text-4xl font-bold text-teal-600">2.5M ريال</p>
                        <p className="mt-2 text-gray-500">إجمالي الدعم المجتمعي</p>
                    </div>
                </div>
            </main>
        </div>
    );
}
