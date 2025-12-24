'use client'
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

const CtaSection = () => {
    const [contactModalOpen, setContactModalOpen] = useState(false);
    return (
        <section className="bg-[#0F172A]/30 py-16">
            <div className="container mx-auto px-4 sm:px-6">
                <Card className="border-[#F47F21]/50 bg-gradient-to-br from-[#F47F21]/10 to-[#FF6B35]/10">
                    <CardContent className="p-12 text-center">
                        <h2 className="mb-4 text-3xl font-bold">Ready to Deploy AI Safely in Your Financial Institution?</h2>
                        <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-300">
                            Let our experts handle compliance while you innovate. Schedule a consultation to discuss your specific regulatory requirements.
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