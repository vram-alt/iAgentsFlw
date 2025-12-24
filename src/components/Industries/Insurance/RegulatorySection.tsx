'use client'
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import {
    Shield,
    CheckCircle,
    FileText
} from 'lucide-react';

const RegulatorySection = () => {
    return (
        <section className="py-16">
            <div className="container mx-auto px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 text-center"
                >
                    <h2 className="mb-4 text-3xl font-bold">Insurance Compliance Frameworks</h2>
                    <p className="mx-auto max-w-3xl text-xl text-gray-300">
                        We ensure your AI systems meet all insurance regulatory requirements
                    </p>
                </motion.div>

                <div className="mx-auto max-w-5xl space-y-6">
                    <Card className="border-white/10 bg-[#0F172A]/50 backdrop-blur-md">
                        <CardContent className="p-8">
                            <div className="grid gap-8 md:grid-cols-2">
                                <div>
                                    <h3 className="mb-4 flex items-center text-xl font-bold">
                                        <Shield className="mr-2 h-6 w-6 text-[#F47F21]" />
                                        US Insurance Regulations
                                    </h3>
                                    <ul className="space-y-3">
                                        <li className="flex items-start">
                                            <CheckCircle className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-[#F47F21]" />
                                            <div>
                                                <strong>NAIC Model Laws</strong>
                                                <p className="text-sm text-gray-400">State insurance regulatory frameworks</p>
                                            </div>
                                        </li>
                                        <li className="flex items-start">
                                            <CheckCircle className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-[#F47F21]" />
                                            <div>
                                                <strong>Fair Credit Reporting Act</strong>
                                                <p className="text-sm text-gray-400">Consumer credit information in underwriting</p>
                                            </div>
                                        </li>
                                        <li className="flex items-start">
                                            <CheckCircle className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-[#F47F21]" />
                                            <div>
                                                <strong>State Privacy Laws</strong>
                                                <p className="text-sm text-gray-400">CCPA, CPRA, and emerging state regulations</p>
                                            </div>
                                        </li>
                                        <li className="flex items-start">
                                            <CheckCircle className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-[#F47F21]" />
                                            <div>
                                                <strong>SOX (for public insurers)</strong>
                                                <p className="text-sm text-gray-400">Financial reporting and controls</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="mb-4 flex items-center text-xl font-bold">
                                        <FileText className="mr-2 h-6 w-6 text-[#F47F21]" />
                                        International Standards
                                    </h3>
                                    <ul className="space-y-3">
                                        <li className="flex items-start">
                                            <CheckCircle className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-[#F47F21]" />
                                            <div>
                                                <strong>EU AI Act</strong>
                                                <p className="text-sm text-gray-400">High-risk AI for insurance underwriting</p>
                                            </div>
                                        </li>
                                        <li className="flex items-start">
                                            <CheckCircle className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-[#F47F21]" />
                                            <div>
                                                <strong>GDPR</strong>
                                                <p className="text-sm text-gray-400">EU customer data protection</p>
                                            </div>
                                        </li>
                                        <li className="flex items-start">
                                            <CheckCircle className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-[#F47F21]" />
                                            <div>
                                                <strong>Solvency II (EU)</strong>
                                                <p className="text-sm text-gray-400">Risk management and reporting</p>
                                            </div>
                                        </li>
                                        <li className="flex items-start">
                                            <CheckCircle className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-[#F47F21]" />
                                            <div>
                                                <strong>ISO 42001</strong>
                                                <p className="text-sm text-gray-400">AI management systems</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}

export default RegulatorySection