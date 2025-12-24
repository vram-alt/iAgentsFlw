'use client'

import ComplianceFramework from "./ComplianceFramework";
import CTASection from "./CTASection";
import HeroSection from "./HeroSection";
import IntegrationSection from "./IntegrationSection";
import PrivacyModules from "./PrivacyModules";
import RoleBasedOutcomes from "./RoleBasedOutcomes";


const IPrivacyHub = () => {
    return (
        <>
            <div className="min-h-screen bg-[#0A0F1A] text-white">
                <HeroSection />
                <RoleBasedOutcomes />
                <PrivacyModules />
                <ComplianceFramework />
                <IntegrationSection />
                <CTASection />
            </div>

        </>
    )
}

export default IPrivacyHub;