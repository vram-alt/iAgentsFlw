'use client'
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
    CheckCircle,
    FileText,
    Lock,
    Eye,
    FileCheck,
    TrendingUp,
    Scale
} from 'lucide-react';

const TailoredUseCasesSection = () => {
    return (
        <section className="bg-[#0F172A]/30 py-16">
            <div className="container mx-auto px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 text-center"
                >
                    <h2 className="mb-4 text-3xl font-bold">Managed Services for Insurance</h2>
                    <p className="mx-auto max-w-3xl text-xl text-gray-300">
                        Specialized AI governance for insurance carriers and brokers
                    </p>
                </motion.div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {/* Fair Underwriting */}
                    <Card className="border-white/10 bg-[#0F172A]/50 backdrop-blur-md transition-all hover:border-[#F47F21]/50">
                        <CardHeader>
                            <Scale className="mb-4 h-12 w-12 text-[#F47F21]" />
                            <CardTitle>Fair Underwriting AI</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="mb-4 text-gray-300">
                                Continuous bias monitoring and fairness testing for AI-driven underwriting systems.
                            </p>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start"><CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> Disparate impact analysis</li>
                                <li className="flex items-start"><CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> Protected attribute monitoring</li>
                                <li className="flex items-start"><CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> Adverse action documentation</li>
                            </ul>
                        </CardContent>
                    </Card>

                    {/* Claims Processing */}
                    <Card className="border-white/10 bg-[#0F172A]/50 backdrop-blur-md transition-all hover:border-[#F47F21]/50">
                        <CardHeader>
                            <FileCheck className="mb-4 h-12 w-12 text-[#F47F21]" />
                            <CardTitle>Claims AI Governance</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="mb-4 text-gray-300">
                                Quality assurance for AI in claims processing, fraud detection, and payment calculations.
                            </p>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start"><CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> Decision validation</li>
                                <li className="flex items-start"><CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> Fraud model monitoring</li>
                                <li className="flex items-start"><CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> Human oversight workflows</li>
                            </ul>
                        </CardContent>
                    </Card>

                    {/* Model Explainability */}
                    <Card className="border-white/10 bg-[#0F172A]/50 backdrop-blur-md transition-all hover:border-[#F47F21]/50">
                        <CardHeader>
                            <Eye className="mb-4 h-12 w-12 text-[#F47F21]" />
                            <CardTitle>AI Explainability</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="mb-4 text-gray-300">
                                Generate clear explanations for AI decisions to meet regulatory and consumer disclosure requirements.
                            </p>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start"><CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> Decision reason codes</li>
                                <li className="flex items-start"><CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> Consumer-friendly explanations</li>
                                <li className="flex items-start"><CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> Regulatory documentation</li>
                            </ul>
                        </CardContent>
                    </Card>

                    {/* Data Privacy */}
                    <Card className="border-white/10 bg-[#0F172A]/50 backdrop-blur-md transition-all hover:border-[#F47F21]/50">
                        <CardHeader>
                            <Lock className="mb-4 h-12 w-12 text-[#F47F21]" />
                            <CardTitle>Customer Data Protection</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="mb-4 text-gray-300">
                                Secure handling of sensitive customer data in AI systems with privacy-preserving techniques.
                            </p>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start"><CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> PII masking and encryption</li>
                                <li className="flex items-start"><CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> Access controls and logging</li>
                                <li className="flex items-start"><CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> Third-party risk management</li>
                            </ul>
                        </CardContent>
                    </Card>

                    {/* Regulatory Audit */}
                    <Card className="border-white/10 bg-[#0F172A]/50 backdrop-blur-md transition-all hover:border-[#F47F21]/50">
                        <CardHeader>
                            <FileText className="mb-4 h-12 w-12 text-[#F47F21]" />
                            <CardTitle>State Exam Readiness</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="mb-4 text-gray-300">
                                Maintain audit-ready documentation for state insurance department examinations and market conduct reviews.
                            </p>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start"><CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> Model governance documentation</li>
                                <li className="flex items-start"><CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> Fairness testing evidence</li>
                                <li className="flex items-start"><CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> Continuous compliance tracking</li>
                            </ul>
                        </CardContent>
                    </Card>

                    {/* Model Risk */}
                    <Card className="border-white/10 bg-[#0F172A]/50 backdrop-blur-md transition-all hover:border-[#F47F21]/50">
                        <CardHeader>
                            <TrendingUp className="mb-4 h-12 w-12 text-[#F47F21]" />
                            <CardTitle>Insurance Model Risk</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="mb-4 text-gray-300">
                                Comprehensive model risk management for actuarial and pricing AI systems.
                            </p>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start"><CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> Model validation and testing</li>
                                <li className="flex items-start"><CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> Performance monitoring</li>
                                <li className="flex items-start"><CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> Change management controls</li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}

export default TailoredUseCasesSection