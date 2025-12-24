import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
import ContactFormModal from '../ContactFormModal';

const CTASection = () => {
    const [contactModalOpen, setContactModalOpen] = useState(false);
    const [selectedService, setSelectedService] = useState<'advisory' | 'managed' | null>(null);
    const openContactModal = (service: 'advisory' | 'managed') => {
        setSelectedService(service);
        setContactModalOpen(true);
    };

    return (
        <>
            <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-brand-1/20 to-brand-2/20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4 md:mb-6 px-2 text-white">
                            Ready to Transform Your <span className="text-gradient">AI Governance</span>?
                        </h2>
                        <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 md:mb-12 px-2">
                            Join leading enterprises who trust AgentsFlow.ai to navigate the complex landscape
                            of AI compliance and governance. Start your journey today.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-stretch sm:items-center px-4">
                            <Button
                                size="lg"
                                className="w-full sm:w-auto bg-[#0080FF] hover:bg-[#0066CC] text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg"
                                onClick={() => {
                                    setSelectedService(null);
                                    setContactModalOpen(true);
                                }}
                            >
                                Schedule Demo
                                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
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