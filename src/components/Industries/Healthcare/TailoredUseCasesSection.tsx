'use client'

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
    CheckCircle,
    FileText,
    Lock,
    Eye,
    Activity,
    FileCheck,
    Database
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
                    <h2 className="mb-4 text-3xl font-bold">Managed Services for Healthcare</h2>
                    <p className="mx-auto max-w-3xl text-xl text-gray-300">
                        Specialized AI governance for healthcare organizations
                    </p>
                </motion.div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {/* PHI Protection */}
                    <Card className="border-white/10 bg-[#0F172A]/50 backdrop-blur-md transition-all hover:border-[#F47F21]/50">
                        <CardHeader>
                            <Lock className="mb-4 h-12 w-12 text-[#F47F21]" />
                            <CardTitle>PHI Guardrails</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="mb-4 text-gray-300">
                                Automated detection and protection of PHI in AI systems with real-time monitoring and masking.
                            </p>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start"><CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> PHI detection in prompts</li>
                                <li className="flex items-start"><CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> Data masking and anonymization</li>
                                <li className="flex items-start"><CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> Access logging and audit trails</li>
                            </ul>
                        </CardContent>
                    </Card>

                    {/* Clinical Safety */}
                    <Card className="border-white/10 bg-[#0F172A]/50 backdrop-blur-md transition-all hover:border-[#F47F21]/50">
                        <CardHeader>
                            <Activity className="mb-4 h-12 w-12 text-[#F47F21]" />
                            <CardTitle>Clinical Safety Monitoring</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="mb-4 text-gray-300">
                                Continuous monitoring of clinical AI systems for accuracy, bias, and potential patient safety risks.
                            </p>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start"><CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> Clinical decision validation</li>
                                <li className="flex items-start"><CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> Drug interaction checking</li>
                                <li className="flex items-start"><CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> Alert fatigue prevention</li>
                            </ul>
                        </CardContent>
                    </Card>

                    {/* HIPAA Compliance */}
                    <Card className="border-white/10 bg-[#0F172A]/50 backdrop-blur-md transition-all hover:border-[#F47F21]/50">
                        <CardHeader>
                            <Eye className="mb-4 h-12 w-12 text-[#F47F21]" />
                            <CardTitle>HIPAA Compliance Ops</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="mb-4 text-gray-300">
                                End-to-end HIPAA compliance management for AI systems including risk assessments and controls.
                            </p>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start"><CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> Security risk assessments</li>
                                <li className="flex items-start"><CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> Business Associate management</li>
                                <li className="flex items-start"><CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> Breach response planning</li>
                            </ul>
                        </CardContent>
                    </Card>

                    {/* Consent Management */}
                    <Card className="border-white/10 bg-[#0F172A]/50 backdrop-blur-md transition-all hover:border-[#F47F21]/50">
                        <CardHeader>
                            <FileCheck className="mb-4 h-12 w-12 text-[#F47F21]" />
                            <CardTitle>Patient Consent & Rights</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="mb-4 text-gray-300">
                                Manage patient consent for AI use, data access rights, and opt-out requests systematically.
                            </p>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start"><CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> Consent capture and tracking</li>
                                <li className="flex items-start"><CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> Patient access requests</li>
                                <li className="flex items-start"><CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> Opt-out management</li>
                            </ul>
                        </CardContent>
                    </Card>

                    {/* Audit Readiness */}
                    <Card className="border-white/10 bg-[#0F172A]/50 backdrop-blur-md transition-all hover:border-[#F47F21]/50">
                        <CardHeader>
                            <FileText className="mb-4 h-12 w-12 text-[#F47F21]" />
                            <CardTitle>Healthcare Audit Prep</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="mb-4 text-gray-300">
                                Maintain audit-ready evidence for HIPAA, HHS audits, and JointCommission reviews.
                            </p>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start"><CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> HIPAA control testing</li>
                                <li className="flex items-start"><CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> Security documentation</li>
                                <li className="flex items-start"><CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> Continuous evidence collection</li>
                            </ul>
                        </CardContent>
                    </Card>

                    {/* Data Governance */}
                    <Card className="border-white/10 bg-[#0F172A]/50 backdrop-blur-md transition-all hover:border-[#F47F21]/50">
                        <CardHeader>
                            <Database className="mb-4 h-12 w-12 text-[#F47F21]" />
                            <CardTitle>Healthcare Data Governance</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="mb-4 text-gray-300">
                                Comprehensive data governance for clinical data in AI systems with lifecycle management.
                            </p>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start"><CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> Data retention policies</li>
                                <li className="flex items-start"><CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> De-identification validation</li>
                                <li className="flex items-start"><CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> Third-party data sharing</li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}

export default TailoredUseCasesSection