import { useState } from 'react';
import ContactFormModal from '@/components/ContactFormModal';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
    ArrowRight
} from 'lucide-react';

const CTASection = () => {
    const [contactModalOpen, setContactModalOpen] = useState(false);
    const [selectedService, setSelectedService] = useState<'advisory' | 'managed' | null>(null);
    const openContactModal = (service: 'advisory' | 'managed') => {
        setSelectedService(service);
        setContactModalOpen(true);
    };

    return (
        <>
            <section className="py-16 bg-[#0F172A]/30">
                <div className="container mx-auto px-4 sm:px-6">
                    <Card className="bg-gradient-to-br from-[#F47F21]/10 to-[#FF6B35]/10 border-[#F47F21]/50">
                        <CardContent className="p-12 text-center">
                            <h2 className="text-3xl font-bold mb-4">Govern Your Workday AI</h2>
                            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                                Schedule a demo to see how AgentsFlow enhances Workday AI with comprehensive governance for HR and Finance.
                            </p>
                            <Button
                                size="lg"
                                className="bg-[#F47F21] hover:bg-[#F47F21]/90 text-white"
                                onClick={() => setContactModalOpen(true)}
                            >
                                Schedule Demo
                                <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                        </CardContent>
                    </Card>
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