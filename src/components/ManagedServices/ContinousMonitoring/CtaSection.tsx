'use client'
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
    ArrowRight,
} from 'lucide-react';
import { useState } from 'react';


const CtaSection = () => {
    const [contactModalOpen, setContactModalOpen] = useState(false);
    return (
        <section className="py-16 bg-[#0F172A]/30">
            <div className="container mx-auto px-4 sm:px-6">
                <Card className="bg-gradient-to-br from-[#F47F21]/10 to-[#FF6B35]/10 border-[#F47F21]/50">
                    <CardContent className="p-12 text-center">
                        <h2 className="text-3xl font-bold mb-4">Never Miss an AI Quality Issue</h2>
                        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                            Let our experts monitor your AI systems 24/7 so you can innovate with confidence
                        </p>
                        <Button
                            size="lg"
                            className="bg-[#F47F21] hover:bg-[#F47F21]/90 text-white"
                            onClick={() => setContactModalOpen(true)}
                        >
                            Schedule Consultation
                            <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}

export default CtaSection