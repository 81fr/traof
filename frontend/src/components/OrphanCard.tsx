import React from 'react';

interface OrphanCaseProps {
    title: string;
    city: string;
    category: string;
    budget: number;
    verificationLevel: 'verified' | 'review';
}

export const OrphanCard: React.FC<OrphanCaseProps> = ({ title, city, category, budget, verificationLevel }) => {
    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300">
            <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#e6f5f3] text-[#00a48c]">
                        {category}
                    </span>
                    {verificationLevel === 'verified' && (
                        <span className="text-[#8cc63f] text-sm flex items-center font-medium">
                            <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                            حالة موثقة
                        </span>
                    )}
                </div>

                <h3 className="text-xl font-bold text-[#464a5c] mb-2">{title}</h3>
                <p className="text-gray-500 text-sm mb-4">المدينة: {city}</p>

                <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
                    <div>
                        <p className="text-sm text-gray-500">الاحتياج المالي</p>
                        <p className="text-lg font-bold text-[#00a48c]">{budget.toLocaleString()} ريال</p>
                    </div>
                    <button className="px-4 py-2 bg-gray-50 text-[#008f7a] font-medium rounded hover:bg-[#e6f5f3] transition-colors">
                        التفاصيل
                    </button>
                </div>
            </div>
        </div>
    );
};
