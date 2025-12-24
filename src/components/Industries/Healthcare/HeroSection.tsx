'use client'

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"

const HeroSection = () => {
    const [contactModalOpen, setContactModalOpen] = useState(false);
    return (
        <section className="relative overflow-hidden pb-16 pt-20">
            <div className="absolute inset-0 bg-gradient-to-br from-[#F47F21]/5 via-transparent to-[#FF6B35]/5" />

            <div className="container relative mx-auto px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mx-auto max-w-4xl space-y-6 text-center"
                >
                    <Badge variant="secondary" className="border-[#F47F21]/20 bg-[#F47F21]/10 text-[#F47F21]">
                        Healthcare & Life Sciences
                    </Badge>

                    <h1 className="text-4xl font-bold leading-tight lg:text-5xl">
                        HIPAA-Compliant{' '}
                        <span className="bg-gradient-to-r from-[#F47F21] to-[#FF6B35] bg-clip-text text-transparent">
                            AI Governance
                        </span>
                    </h1>

                    <p className="text-xl leading-relaxed text-gray-300">
                        Deploy AI in healthcare while protecting PHI and meeting HIPAA, HITECH, and FDA requirements. Expert managed services for safe, compliant healthcare AI.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4 pt-4">
                        <Button
                            size="lg"
                            className="bg-[#F47F21] text-white hover:bg-[#F47F21]/90"
                            onClick={() => setContactModalOpen(true)}
                        >
                            Schedule Consultation
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default HeroSection