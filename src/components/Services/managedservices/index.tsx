import CtaSection from "./CtaSection";
import ExploreUseCasesSection from "./ExploreUseCasesSection";
import HeroSection from "./HeroSection";
import WhatWeRunSection from "./WhatWeRunSection";

const ManagedServices = () => {
    return (
        <section className="py-12 sm:py-16 md:py-24 bg-[#0F172A]/30">
            <HeroSection />
            <WhatWeRunSection />
            <ExploreUseCasesSection />
            <CtaSection />
        </section>
    )
}
export default ManagedServices;