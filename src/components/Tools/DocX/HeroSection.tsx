
import { useState } from 'react';
import { ArrowRight, CheckCircle, Sparkles, Upload } from "lucide-react"
import { motion } from "framer-motion"
import { Badge } from '@/components/ui/badge';
import { Button } from "@/components/ui/button";

const HeroSection = () => {
    const [contactModalOpen, setContactModalOpen] = useState(false);

    const complianceStandards = [
        "GDPR Compliant",
        "HIPAA Ready",
        "SOC 2 Type II",
        "ISO 27001",
        "CCPA Compliant",
        "SOX Ready"
    ];
    return (
        <>
            {/* Hero Section */}
            <section className="pt-32 pb-20 relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-20 left-20 w-96 h-96 bg-[#F47F21]/10 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
                </div>

                <div className="container mx-auto px-4 sm:px-6 relative">
                    <div className="max-w-5xl mx-auto text-center space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="space-y-6"
                        >
                            <Badge className="bg-[#F47F21]/10 text-[#F47F21] border-[#F47F21]/20 text-lg px-4 py-2">
                                <Sparkles className="w-4 h-4 mr-2" />
                                DocX.AI - Document Intelligence Platform
                            </Badge>

                            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                                Convert Your Financial{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F47F21] to-[#FF6B35]">
                                    PDF to CSV
                                </span>
                            </h1>

                            <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
                                Enterprise contract and document intelligence platform. Transform contracts, invoices, and financial documents into{" "}
                                <span className="font-semibold text-white">structured data</span> with AI-powered extraction and analysis.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                        >
                            <Button
                                size="lg"
                                className="bg-[#F47F21] hover:bg-[#F47F21]/90 text-white text-lg px-8"
                                onClick={() => setContactModalOpen(true)}
                            >
                                <Upload className="w-5 h-5 mr-2" />
                                Upload Your PDF
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-2 border-white/20 hover:border-[#F47F21] text-lg px-8"
                                onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
                            >
                                See How It Works
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </Button>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="flex flex-wrap justify-center gap-3 pt-4"
                        >
                            {complianceStandards.map((standard, index) => (
                                <Badge
                                    key={index}
                                    variant="secondary"
                                    className="bg-white/5 text-gray-300 border-white/10"
                                >
                                    <CheckCircle className="w-3 h-3 mr-1 text-green-400" />
                                    {standard}
                                </Badge>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default HeroSection