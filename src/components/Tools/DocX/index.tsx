'use client'

import CTASection from "./CTASection";
import FeatureSection from "./FeatureSection";
import HeroSection from "./HeroSection";
import HowItWorksSection from "./HowItWorksSection";
import IntegrationSection from "./IntegrationSection";
import MetrixSection from "./MetrixSection";
import UseCaseSection from "./UseCaseSection";


const DocX = () => {
    return (
        <>
            <div className="min-h-screen bg-[#0A0F1A] text-white">
                <HeroSection />
                <HowItWorksSection />
                <MetrixSection />
                <UseCaseSection />
                <FeatureSection />
                <IntegrationSection />
                <CTASection />
            </div>
        </>
    )
}

export default DocX;