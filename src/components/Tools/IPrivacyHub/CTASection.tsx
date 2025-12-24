import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Sparkles, Shield } from "lucide-react"
import ContactFormModal from '@/components/ContactFormModal';


const CTASection = () => {
    const [contactModalOpen, setContactModalOpen] = useState(false);
    const [selectedService, setSelectedService] = useState<'advisory' | 'managed' | null>(null);
    const openContactModal = (service: 'advisory' | 'managed') => {
        setSelectedService(service);
        setContactModalOpen(true);
    };

    return (
        <>
            <section className="py-20 bg-gradient-to-br from-[#F47F21]/10 via-[#FF6B35]/5 to-transparent relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#F47F21]/10 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
                </div>

                <div className="container mx-auto px-4 sm:px-6 relative">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center max-w-3xl mx-auto p-12 rounded-3xl bg-[#0F172A]/50 backdrop-blur-md border-2 border-[#F47F21]/20"
                    >
                        <Shield className="w-16 h-16 text-[#F47F21] mx-auto mb-6" />
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Privacy-First AI Starts Here
                        </h2>
                        <p className="text-xl text-gray-300 mb-10">
                            Automate privacy compliance for your AI systems. DSAR workflows, consent management, and global regulatory coverage in one platform.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                size="lg"
                                className="bg-[#F47F21] hover:bg-[#F47F21]/90 text-white text-lg px-8"
                                onClick={() => setContactModalOpen(true)}
                            >
                                Request Demo
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-2 border-white/20 hover:border-[#F47F21] text-lg px-8"
                                asChild
                            >
                                <a href="/tools/icomply">Explore iComply</a>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>
            <ContactFormModal
                isOpen={contactModalOpen}
                onClose={() => setContactModalOpen(false)}
                serviceType={selectedService}
            />
        </>
    )
}
export default CTASection