'use client'
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
    AlertTriangle,
    Heart,
    Lock,
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
                    <h2 className="mb-4 text-3xl font-bold">Unique AI Challenges in Healthcare</h2>
                    <p className="mx-auto max-w-3xl text-xl text-gray-300">
                        Healthcare organizations face critical compliance and safety requirements when deploying AI
                    </p>
                </motion.div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <Card className="border-white/10 bg-[#0F172A]/50 backdrop-blur-md">
                        <CardHeader>
                            <Lock className="mb-4 h-12 w-12 text-[#F47F21]" />
                            <CardTitle>PHI Protection</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="mb-4 text-gray-300">
                                Protected Health Information (PHI) must be safeguarded in AI systems with strict access controls and encryption.
                            </p>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start"><AlertTriangle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> PHI in AI prompts and responses</li>
                                <li className="flex items-start"><AlertTriangle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> Business Associate Agreements</li>
                                <li className="flex items-start"><AlertTriangle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> Minimum necessary principle</li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card className="border-white/10 bg-[#0F172A]/50 backdrop-blur-md">
                        <CardHeader>
                            <Heart className="mb-4 h-12 w-12 text-[#F47F21]" />
                            <CardTitle>Patient Safety</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="mb-4 text-gray-300">
                                AI errors in healthcare can have life-threatening consequences. Rigorous validation and monitoring are essential.
                            </p>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start"><AlertTriangle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> Clinical decision support accuracy</li>
                                <li className="flex items-start"><AlertTriangle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> Drug interaction hallucinations</li>
                                <li className="flex items-start"><AlertTriangle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> Diagnostic AI reliability</li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card className="border-white/10 bg-[#0F172A]/50 backdrop-blur-md">
                        <CardHeader>
                            <FileCheck className="mb-4 h-12 w-12 text-[#F47F21]" />
                            <CardTitle>Regulatory Complexity</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="mb-4 text-gray-300">
                                Multiple overlapping regulations including HIPAA, HITECH, FDA guidelines, and state-specific privacy laws.
                            </p>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start"><AlertTriangle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> HIPAA Privacy & Security Rules</li>
                                <li className="flex items-start"><AlertTriangle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> FDA AI/ML medical device rules</li>
                                <li className="flex items-start"><AlertTriangle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> State breach notification laws</li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}

export default IndutryChallengesSection