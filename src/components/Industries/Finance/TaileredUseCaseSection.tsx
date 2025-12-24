'use client';
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
    CheckCircle,
    FileText,
    Lock,
    Eye,
    DollarSign,
    BarChart3,
    Users,
} from 'lucide-react';

const TaileredUseCaseSection = () => {
    return (
        <section className="bg-[#0F172A]/30 py-16">
            <div className="container mx-auto px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 text-center"
                >
                    <h2 className="mb-4 text-3xl font-bold">Managed Services for Financial Institutions</h2>
                    <p className="mx-auto max-w-3xl text-xl text-gray-300">
                        Industry-specific implementations of our AI governance platform
                    </p>
                </motion.div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {/* Model Risk Management */}
                    <Card className="border-white/10 bg-[#0F172A]/50 backdrop-blur-md transition-all hover:border-[#F47F21]/50">
                        <CardHeader>
                            <BarChart3 className="mb-4 h-12 w-12 text-[#F47F21]" />
                            <CardTitle>Model Risk Management</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="mb-4 text-gray-300">
                                Comprehensive AI model validation, ongoing monitoring, and governance aligned with SR 11-7 and OCC guidelines.
                            </p>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start"><CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> Model inventory and classification</li>
                                <li className="flex items-start"><CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> Ongoing performance monitoring</li>
                                <li className="flex items-start"><CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> Validation documentation</li>
                            </ul>
                        </CardContent>
                    </Card>

                    {/* Financial Data Governance */}
                    <Card className="border-white/10 bg-[#0F172A]/50 backdrop-blur-md transition-all hover:border-[#F47F21]/50">
                        <CardHeader>
                            <Lock className="mb-4 h-12 w-12 text-[#F47F21]" />
                            <CardTitle>Financial Data Governance</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="mb-4 text-gray-300">
                                Secure handling of sensitive financial data in AI systems with encryption, access controls, and audit trails.
                            </p>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start"><CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> PII/PCI data masking</li>
                                <li className="flex items-start"><CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> Transaction data protection</li>
                                <li className="flex items-start"><CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> Third-party risk management</li>
                            </ul>
                        </CardContent>
                    </Card>

                    {/* Compliance Monitoring */}
                    <Card className="border-white/10 bg-[#0F172A]/50 backdrop-blur-md transition-all hover:border-[#F47F21]/50">
                        <CardHeader>
                            <Eye className="mb-4 h-12 w-12 text-[#F47F21]" />
                            <CardTitle>Real-Time Compliance Monitoring</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="mb-4 text-gray-300">
                                Continuous monitoring for regulatory violations, bias, and errors in AI-driven financial processes.
                            </p>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start"><CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> Fair lending compliance</li>
                                <li className="flex items-start"><CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> Trading algorithm oversight</li>
                                <li className="flex items-start"><CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> Automated alerts and remediation</li>
                            </ul>
                        </CardContent>
                    </Card>

                    {/* Audit Readiness */}
                    <Card className="border-white/10 bg-[#0F172A]/50 backdrop-blur-md transition-all hover:border-[#F47F21]/50">
                        <CardHeader>
                            <FileText className="mb-4 h-12 w-12 text-[#F47F21]" />
                            <CardTitle>Financial Services Audit Prep</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="mb-4 text-gray-300">
                                Maintain audit-ready evidence for SOX, SEC, and regulatory examinations with automated documentation.
                            </p>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start"><CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> SOX controls testing</li>
                                <li className="flex items-start"><CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> Regulatory exam support</li>
                                <li className="flex items-start"><CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> Continuous evidence collection</li>
                            </ul>
                        </CardContent>
                    </Card>

                    {/* Change Management */}
                    <Card className="border-white/10 bg-[#0F172A]/50 backdrop-blur-md transition-all hover:border-[#F47F21]/50">
                        <CardHeader>
                            <Users className="mb-4 h-12 w-12 text-[#F47F21]" />
                            <CardTitle>Model Change Control</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="mb-4 text-gray-300">
                                Rigorous change management for AI model updates with validation, testing, and approval workflows.
                            </p>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start"><CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> Impact analysis</li>
                                <li className="flex items-start"><CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> Staged rollouts</li>
                                <li className="flex items-start"><CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> Instant rollback capabilities</li>
                            </ul>
                        </CardContent>
                    </Card>

                    {/* Cost Optimization */}
                    <Card className="border-white/10 bg-[#0F172A]/50 backdrop-blur-md transition-all hover:border-[#F47F21]/50">
                        <CardHeader>
                            <DollarSign className="mb-4 h-12 w-12 text-[#F47F21]" />
                            <CardTitle>AI Spend Optimization</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="mb-4 text-gray-300">
                                Track and optimize AI costs across business units, ensuring ROI while maintaining compliance.
                            </p>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start"><CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> Department-level tracking</li>
                                <li className="flex items-start"><CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> Model optimization</li>
                                <li className="flex items-start"><CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> Budget controls and alerts</li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}

export default TaileredUseCaseSection