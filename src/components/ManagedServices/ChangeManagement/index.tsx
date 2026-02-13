'use client'
import Link from "next/link"
import HeroSection from "./HeroSection"
import WhatWeManageSection from "./WhatWeManageSection"
import ChangeProcess from "./ChangeProcess"
import WhyExperts from "./WhyExperts"
import ValueMetrix from "./ValueMetrics"
import CTASection from "./CTASection"


const ChangeManagement = () => {
    return (
        <>
            <div className="bg-[#0A0F1A] text-white">


                {/* Breadcrumb */}
                <div className="bg-[#0F172A]/30 border-b border-white/5 pt-20">
                    <div className="container mx-auto px-4 sm:px-6 py-4">
                        <div className="flex items-center space-x-2 text-sm text-gray-400">
                            <Link href="/" className="hover:text-white">AgentsFlow.com</Link>
                            <span>/</span>
                            <Link href="/services/managed-services" className="hover:text-white">Managed Services</Link>
                            <span>/</span>
                            <span className="text-[#F47F21]">AI Change Management</span>
                        </div>
                    </div>
                </div>

                <HeroSection />
                <WhatWeManageSection />
                <ChangeProcess />
                <WhyExperts />
                <ValueMetrix />
                <CTASection />
            </div>
        </>
    )
}

export default ChangeManagement