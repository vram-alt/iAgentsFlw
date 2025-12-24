'use client'
import AutoDashboard from "./AutoDashboard";
import PersonaSwitch from "./PersonaSwitch";
import SplitRevealHero from "./SplitRevealHero";
import GovernanceCrisisSection from "./GovernanceCrisisSection";
import OurAdvantageSection from "./OurAdvantageSection";
import OurMethodologySection from "./OurMethodologySection";
import OurToolsSection from "./OurToolsSection";
import WeHelpSection from "./WeHelpSection";
import WhoAreWeSection from "./WhoAreWeSection";
import ROIEstimator from "./ROIEstimator";
import CTASection from "./CTASection";

const HomeIndex = () => {
    return (
        <>
            <SplitRevealHero />
            <WhoAreWeSection />
            <GovernanceCrisisSection />
            <WeHelpSection />
            <OurToolsSection />
            <OurMethodologySection />
            <OurAdvantageSection />
            <PersonaSwitch />
            <AutoDashboard />
            <ROIEstimator />
            <CTASection />
        </>
    )
}

export default HomeIndex;