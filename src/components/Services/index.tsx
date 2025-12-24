import AssessmentAdvisorySection from "./Allservices/AssessmentAdvisorySection";
import AuditredinessSection from "./Allservices/AuditredinessSection";
import CompleteGovernanceLoopSection from "./Allservices/CompleteGovernanceLoopSection";
import FaqSection from "./Allservices/FaqSection";
import ManagedGovernanceSection from "./Allservices/ManagedGovernanceSection";
import ResultsBoardSection from "./Allservices/ResultsBoardSection";
import ScopingPricingSection from "./Allservices/ScopingPricingSection";
import TalktoConvertionSection from "./Allservices/TalktoConvertionSection";
import WhatWeGetSection from "./Allservices/WhatWeGetSection";
import HeroSection from "./Allservices/HeroSection";

const Services = () => {
    return (
        <section className="py-12 sm:py-16 md:py-24 bg-[#0F172A]/30">
            <HeroSection />
            <WhatWeGetSection />
            <AssessmentAdvisorySection />
            <ManagedGovernanceSection />
            <AuditredinessSection />
            <CompleteGovernanceLoopSection />
            <ScopingPricingSection />
            <ResultsBoardSection />
            <FaqSection />
            <TalktoConvertionSection />
        </section>
    )
}
export default Services;