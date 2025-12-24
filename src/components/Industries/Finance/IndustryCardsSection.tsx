'use client'
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  AlertTriangle,
  TrendingUp,
  Lock,
  Scale
} from 'lucide-react';

const IndustryCardsSection = () => {
    return (
        <section className="bg-[#0F172A]/30 py-16">
            <div className="container mx-auto px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 text-center"
                >
                    <h2 className="mb-4 text-3xl font-bold">Unique AI Challenges in Finance</h2>
                    <p className="mx-auto max-w-3xl text-xl text-gray-300">
                        Financial institutions face unprecedented complexity deploying AI while maintaining regulatory compliance
                    </p>
                </motion.div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <Card className="border-white/10 bg-[#0F172A]/50 backdrop-blur-md">
                        <CardHeader>
                            <Scale className="mb-4 h-12 w-12 text-[#F47F21]" />
                            <CardTitle>Regulatory Scrutiny</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="mb-4 text-gray-300">
                                Multiple overlapping regulations: SOX, PCI-DSS, SEC, FINRA, plus emerging AI-specific rules from regulators.
                            </p>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start"><AlertTriangle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> Model risk management requirements</li>
                                <li className="flex items-start"><AlertTriangle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> Algorithmic bias in lending/trading</li>
                                <li className="flex items-start"><AlertTriangle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> Explainability for auditors</li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card className="border-white/10 bg-[#0F172A]/50 backdrop-blur-md">
                        <CardHeader>
                            <Lock className="mb-4 h-12 w-12 text-[#F47F21]" />
                            <CardTitle>Data Sensitivity</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="mb-4 text-gray-300">
                                Financial data requires the highest security and privacy protections with strict access controls and audit trails.
                            </p>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start"><AlertTriangle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> PII and financial data in prompts</li>
                                <li className="flex items-start"><AlertTriangle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> Third-party AI provider risks</li>
                                <li className="flex items-start"><AlertTriangle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> Cross-border data transfer</li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card className="border-white/10 bg-[#0F172A]/50 backdrop-blur-md">
                        <CardHeader>
                            <TrendingUp className="mb-4 h-12 w-12 text-[#F47F21]" />
                            <CardTitle>Model Risk</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="mb-4 text-gray-300">
                                AI hallucinations and errors can result in financial losses, market manipulation, or regulatory penalties.
                            </p>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start"><AlertTriangle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> Incorrect financial advice</li>
                                <li className="flex items-start"><AlertTriangle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> Trading algorithm errors</li>
                                <li className="flex items-start"><AlertTriangle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> Compliance calculation mistakes</li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}

export default IndustryCardsSection