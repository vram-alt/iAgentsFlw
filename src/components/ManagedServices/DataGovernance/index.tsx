import Link from "next/link";
import HeroSection from "./HeroSection";
import ComprehensiveDataGoveernanceSection from "./ComprehensiveDataGovernanceSection";
import UserControlesAccessManagementSection from "./UserControlesAccessManagementSection";
import WhyExpertsManagementEssentialsSection from "./WhyExpertsManagementEssentialSection";
import StatsSection from "./StatsSection";
import CtaSection from "./CtaSection";








const DataGovernance = () => {
    return(
        <section className=" bg-[#0F172A]/30">
        <div className="bg-[#0F172A]/30 border-b border-white/5 pt-20">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-400">
            <Link href="/" className="hover:text-white">AgentsFlow.com</Link>
            <span>/</span>
            <Link href="/services/managed-services" className="hover:text-white">Managed Services</Link>
            <span>/</span>
            <span className="text-[#F47F21]">Data Governance</span>
          </div>
        </div>
      </div>
      <HeroSection/>
      <ComprehensiveDataGoveernanceSection/>
      <UserControlesAccessManagementSection/>
      <WhyExpertsManagementEssentialsSection/>
      <StatsSection/>
      <CtaSection/>
        </section>
    )
}
export default DataGovernance;