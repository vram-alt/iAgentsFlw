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
            <section className="py-8 sm:py-10 md:py-12 bg-gradient-to-r from-[#F47F21]/10 to-[#FF6B35]/10 border-y border-[#F47F21]/20">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center justify-between">
                        <div>
                            <h3 className="text-lg sm:text-xl font-bold mb-2">Need AI Governance for Your Models & Agents?</h3>
                            <p className="text-sm sm:text-base text-gray-300">Complete your compliance with AgentsFlow—real-time AI system tracking for automated evidence generation</p>
                        </div>
                        <Link href="/tools/AgentsFlow" className="w-full sm:w-auto">
                            <Button className="w-full sm:w-auto bg-[#F47F21] hover:bg-[#F47F21]/90 text-white">
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