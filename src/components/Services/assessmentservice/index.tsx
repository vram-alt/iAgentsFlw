import AssessmentProcessSection from "./AssessmentProcessSection";
import CtaAssessmentSection from "./CtaAssessmentSection";
import HeroSectionAccessment from "./HeroSectionAccessment";
import WhatWeAssessSection from "./WhatWeAssessSection";
import WhatYouReceiveSection from "./WhatYouReceiveSection";

const Assessments = () => {
    return (
        <section className="py-12 sm:py-16 md:py-24 bg-[#0F172A]/30">
            <HeroSectionAccessment />
            <WhatWeAssessSection />
            <AssessmentProcessSection />
            <WhatYouReceiveSection />
            <CtaAssessmentSection />
        </section>
    )
}
export default Assessments;