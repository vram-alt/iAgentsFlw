'use client'
import Link from "next/link";
import HeroSection from "./HeroSection";
import AICapabilities from "./AICapabilities";
import FeaturesSection from "./FeaturesSection";
import UseCaseSection from "./UseCaseSection";
import IntegrationSection from "./IntegrationSection";
import CTASection from "./CTASection";


const SalesForce = () => {
    return (
        <>
            <div className="min-h-screen bg-[#0A0F1A] text-white">

                {/* Breadcrumb */}
                <div className="bg-[#0F172A]/30 border-b border-white/5 pt-20">
                    <div className="container mx-auto px-4 sm:px-6 py-4">
                        <div className="flex items-center space-x-2 text-sm text-gray-400">
                            <Link href="/" className="hover:text-white">AgentsFlow.com</Link>
                            <span>/</span>
                            <Link href="/platforms" className="hover:text-white">Platforms</Link>
                            <span>/</span>
                            <span className="text-[#F47F21]">Salesforce</span>
                        </div>
                    </div>
                </div>

                <HeroSection />
                <AICapabilities />
                <FeaturesSection />
                <UseCaseSection />
                <IntegrationSection />
                <CTASection />
            </div>
        </>
    )
}

export default SalesForce;