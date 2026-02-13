'use client'
import Link from "next/link";
import HeroSection from "./HeroSection";
import PlatformCardsSection from "./PlatformCards";
import WhyPlatformNative from "./WhyPlatformNative";
import WhatWeGetSection from "./WhatWeGetSection";
import CTASection from "./CTASection";


const Platforms = () => {
    return (
        <>
            <div className="min-h-screen bg-[#0A0F1A] text-white">

                {/* Breadcrumb */}
                <div className="bg-[#0F172A]/30 border-b border-white/5 pt-20">
                    <div className="container mx-auto px-4 sm:px-6 py-4">
                        <div className="flex items-center space-x-2 text-sm text-gray-400">
                            <Link href="/" className="hover:text-white">AgentsFlow.com</Link>
                            <span>/</span>
                            <span className="text-[#F47F21]">Platforms</span>
                        </div>
                    </div>
                </div>

                <HeroSection />
                <PlatformCardsSection />
                <WhyPlatformNative />
                <WhatWeGetSection />
                <CTASection />
            </div>
        </>
    )
}

export default Platforms;