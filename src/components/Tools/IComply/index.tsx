'use client'

import HeroSection from "./HeroSection";
import RoleSwitcher from "./RoleSwitcher";
import FrameWorkMatrix from "./FrameWorkMatrix";
import AppsBeeAndIComplyIntegration from "./AppsBeeAndIComplyIntegration";
import ExistingStack from "./ExistingStack";
import ResultsAndProofSection from "./ResultsAndProofSection";
import PricingSection from "./PricingSection";
import DemoFormSection from "./DemoFormSection";
import FaqSection from "./FaqSection";
import CrossSellBannerSection from "./CrossSellBannerSection";
import ModuleSection from "./ModuleSection";

const IComply = () => {
    return (
        <>
            <div className="min-h-screen bg-[#0A0F1A] text-white">
                {/* Page Navigation Breadcrumb */}
                <div className="bg-[#0F172A]/30 border-b border-white/5">
                    <div className="container mx-auto px-6 py-4">
                        <div className="flex items-center space-x-2 text-sm text-gray-400">
                            <a href="/" className="hover:text-white">AgentsFlow.ai</a>
                            <span>/</span>
                            <a href="/tools/icomply" className="text-[#F47F21]">iComply</a>
                        </div>
                    </div>
                </div>

                <HeroSection />
                <RoleSwitcher />
                <ModuleSection />
                <FrameWorkMatrix />
                <AppsBeeAndIComplyIntegration />
                <ExistingStack />
                <ResultsAndProofSection />
                <PricingSection />
                <DemoFormSection />
                <FaqSection />
                <CrossSellBannerSection />
            </div>

        </>
    )
}

export default IComply;