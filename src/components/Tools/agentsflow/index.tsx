'use client'
import AgentsFlowHeroSection from "./AgentsFlowHeroSection";
import CTASection from "./CTASection";
import FeaturesSection from "./FeaturesSection";
import IntegrationsSection from "./IntegrationsSection";
import SeeItInSection from "./SeeItInSection";
import UseCasesSection from "./UseCasesSection";
import YourDashboardSection from "./YourDashboardSection";

const AgentsFlowPage = () => {
    return (
        <>
            <AgentsFlowHeroSection />
            <SeeItInSection />
            <YourDashboardSection />
            <UseCasesSection />
            <FeaturesSection />
            <IntegrationsSection />
            <CTASection />
        </>
    )
}

export default AgentsFlowPage;