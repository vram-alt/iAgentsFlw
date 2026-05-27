import { Cross } from "lucide-react"
import { useState } from "react"
import ContactFormModal from "@/components/ContactFormModal"

import Link from "next/link"
import { Button } from "@/components/ui/button"

const CrossSellBannerSection = () => {
     const [contactModalOpen, setContactModalOpen] = useState(false);
        const [selectedService, setSelectedService] = useState<'advisory' | 'managed' | null>(null);
        const openContactModal = (service: 'advisory' | 'managed') => {
            setSelectedService(service);
            setContactModalOpen(true);
        };
    
    return (
        <>
            <section className="border-y border-[#F47F21]/20 bg-gradient-to-r from-[#F47F21]/10 to-[#FF6B35]/10 py-8 sm:py-10 md:py-12">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center sm:gap-6">
                        <div>
                            <h3 className="mb-2 text-lg font-bold sm:text-xl">Need AI Governance for Your Models & Agents?</h3>
                            <p className="text-sm text-gray-300 sm:text-base">Complete your compliance with AgentsFlow—real-time AI system tracking for automated evidence generation</p>
                        </div>
                        <Link href="/tools/agentsflow" className="w-full sm:w-auto">
                            <Button className="w-full bg-[#F47F21] text-white hover:bg-[#F47F21]/90 sm:w-auto">
                                Explore AgentsFlow →
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
            <ContactFormModal
                isOpen={contactModalOpen}
                onClose={() => setContactModalOpen(false)}
                serviceType={null}
            />       
    </>
    )
}
export default CrossSellBannerSection