'use client'
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
    AlertTriangle,
    Scale,
    Target,
    FileCheck,
} from 'lucide-react';

const IndutryChallengesSection = () => {
    return (
        <section className="bg-[#0F172A]/30 py-16">
            <div className="container mx-auto px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 text-center"
                >
                    <h2 className="mb-4 text-3xl font-bold">Unique AI Challenges in Insurance</h2>
                    <p className="mx-auto max-w-3xl text-xl text-gray-300">
                        Insurance companies face critical fairness and accuracy requirements when deploying AI
                    </p>
                </motion.div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <Card className="border-white/10 bg-[#0F172A]/50 backdrop-blur-md">
                        <CardHeader>
                            <Scale className="mb-4 h-12 w-12 text-[#F47F21]" />
                            <CardTitle>Algorithmic Fairness</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="mb-4 text-gray-300">
                                AI systems must avoid discriminatory outcomes in underwriting, pricing, and claims processing.
                            </p>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start"><AlertTriangle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> Protected class discrimination</li>
                                <li className="flex items-start"><AlertTriangle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> Proxy variable detection</li>
                                <li className="flex items-start"><AlertTriangle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> Adverse action notices</li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card className="border-white/10 bg-[#0F172A]/50 backdrop-blur-md">
                        <CardHeader>
                            <Target className="mb-4 h-12 w-12 text-[#F47F21]" />
                            <CardTitle>Claims Accuracy</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="mb-4 text-gray-300">
                                AI hallucinations in claims processing can lead to wrongful denials or fraudulent approvals.
                            </p>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start"><AlertTriangle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> Claim validity verification</li>
                                <li className="flex items-start"><AlertTriangle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> Fraud detection accuracy</li>
                                <li className="flex items-start"><AlertTriangle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> Payment calculation errors</li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card className="border-white/10 bg-[#0F172A]/50 backdrop-blur-md">
                        <CardHeader>
                            <FileCheck className="mb-4 h-12 w-12 text-[#F47F21]" />
                            <CardTitle>Regulatory Scrutiny</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="mb-4 text-gray-300">
                                State insurance departments and federal regulators are increasingly focused on AI in insurance.
                            </p>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start"><AlertTriangle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> State-by-state requirements</li>
                                <li className="flex items-start"><AlertTriangle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> Model documentation demands</li>
                                <li className="flex items-start"><AlertTriangle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> Explainability requirements</li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}

export default IndutryChallengesSection