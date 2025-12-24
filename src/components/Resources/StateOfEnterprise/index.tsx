'use client'
import Link from "next/link";
import HeroSection from "./HeroSection";
import KeyFindings from "./KeyFindings";
import AdoptionTrends from "./AdoptionTrends";
import TopChallenges from "./TopChallenges";
import BestPractices from "./BestPractices";
import IndustryBreakdown from "./IndustryBreakdown";
import CTASection from "./CTASection";


const StateOfEnterprise = () => {
    return (
        <>
            <div className="min-h-screen bg-[#0A0F1A] text-white">

                {/* Breadcrumb */}
                <div className="bg-[#0F172A]/30 border-b border-white/5 pt-20">
                    <div className="container mx-auto px-4 sm:px-6 py-4">
                        <div className="flex items-center space-x-2 text-sm text-gray-400">
                            <Link href="/" className="hover:text-white">AgentsFlow.ai</Link>
                            <span>/</span>
                            <span className="text-[#F47F21]">Resources</span>
                            <span>/</span>
                            <span className="text-[#F47F21]">State of Enterprise AI</span>
                        </div>
                    </div>
                </div>
                <HeroSection />
                <KeyFindings />
                <AdoptionTrends />
                <TopChallenges />
                <BestPractices />
                <IndustryBreakdown />
                <CTASection />
            </div>
        </>
    )
}

export default StateOfEnterprise;