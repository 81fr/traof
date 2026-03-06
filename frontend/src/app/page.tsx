import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import StatsSection from '@/components/StatsSection';
import FeaturedCases from '@/components/FeaturedCases';
import Footer from '@/components/Footer';

export default function Home() {
    return (
        <div className="font-sans antialiased bg-white selection:bg-[#00a48c] selection:text-white">
            <Navbar />

            <main>
                <Hero />
                <StatsSection />
                <FeaturedCases />
            </main>

            <Footer />
        </div>
    );
}
