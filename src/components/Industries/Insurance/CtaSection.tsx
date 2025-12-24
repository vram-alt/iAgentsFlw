'use client'
import { Card, CardContent } from '@/components/ui/card';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CtaSection = () => {
    const [contactModalOpen, setContactModalOpen] = useState(false);
    return (
        <section className="bg-[#0F172A]/30 py-16">
            <div className="container mx-auto px-4 sm:px-6">
                <Card className="border-[#F47F21]/50 bg-gradient-to-br from-[#F47F21]/10 to-[#FF6B35]/10">
                    <CardContent className="p-12 text-center">
                        <h2 className="mb-4 text-3xl font-bold">Deploy Fair, Compliant AI in Your Insurance Business</h2>
                        <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-300">
                            Ensure fairness, accuracy, and regulatory compliance. Schedule a consultation to discuss your insurance AI needs.
                        </p>
                        <Button
                            size="lg"
                            className="bg-[#F47F21] text-white hover:bg-[#F47F21]/90"
                            onClick={() => setContactModalOpen(true)}
                        >
                            Schedule Consultation
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}

export default CtaSection