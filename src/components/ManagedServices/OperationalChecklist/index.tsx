import Link from "next/link";
import HeroSection from "./HeroSection";
import ComparehensiveOperationalChecklistSection from "./ComparehensiveOperationalChecklistSection";
import WhyExpertManagementCriticleSection from "./WhyExpertManagementCriticleSection";
import StatsSection from "./StatsSection";
import CtaSection from "./CtaSection";


const OperationalChecklist = () => {
  return (
    <section className=" bg-[#0F172A]/30">
      <div className="bg-[#0F172A]/30 border-b border-white/5 pt-20">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-400">
            <Link href="/" className="hover:text-white">AgentsFlow.com</Link>
            <span>/</span>
            <Link href="/services/managed-services" className="hover:text-white">Managed Services</Link>
            <span>/</span>
            <span className="text-[#F47F21]">Operational Checklist Management</span>
          </div>
        </div>
      </div>
      <HeroSection />
      <ComparehensiveOperationalChecklistSection />
      <WhyExpertManagementCriticleSection />
      <StatsSection />
      <CtaSection />
    </section>
  )
}
export default OperationalChecklist;