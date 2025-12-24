'use client'
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
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
                    <h2 className="mb-4 text-3xl font-bold">Healthcare Compliance Frameworks</h2>
                    <p className="mx-auto max-w-3xl text-xl text-gray-300">
                        We ensure your AI systems meet all healthcare regulatory requirements
                    </p>
                </motion.div>

                <div className="mx-auto max-w-5xl space-y-6">
                    <Card className="border-white/10 bg-[#0F172A]/50 backdrop-blur-md">
                        <CardContent className="p-8">
                            <div className="grid gap-8 md:grid-cols-2">
                                <div>
                                    <h3 className="mb-4 flex items-center text-xl font-bold">
                                        <Shield className="mr-2 h-6 w-6 text-[#F47F21]" />
                                        US Healthcare Regulations
                                    </h3>
                                    <ul className="space-y-3">
                                        <li className="flex items-start">
                                            <CheckCircle className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-[#F47F21]" />
                                            <div>
                                                <strong>HIPAA Privacy Rule</strong>
                                                <p className="text-sm text-gray-400">PHI protection and patient consent requirements</p>
                                            </div>
                                        </li>
                                        <li className="flex items-start">
                                            <CheckCircle className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-[#F47F21]" />
                                            <div>
                                                <strong>HIPAA Security Rule</strong>
                                                <p className="text-sm text-gray-400">Technical safeguards for electronic PHI</p>
                                            </div>
                                        </li>
                                        <li className="flex items-start">
                                            <CheckCircle className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-[#F47F21]" />
                                            <div>
                                                <strong>HITECH Act</strong>
                                                <p className="text-sm text-gray-400">Breach notification and penalties</p>
                                            </div>
                                        </li>
                                        <li className="flex items-start">
                                            <CheckCircle className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-[#F47F21]" />
                                            <div>
                                                <strong>FDA Regulations</strong>
                                                <p className="text-sm text-gray-400">AI/ML as medical device guidelines</p>
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
                                                <p className="text-sm text-gray-400">High-risk medical AI requirements</p>
                                            </div>
                                        </li>
                                        <li className="flex items-start">
                                            <CheckCircle className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-[#F47F21]" />
                                            <div>
                                                <strong>GDPR</strong>
                                                <p className="text-sm text-gray-400">EU patient data protection</p>
                                            </div>
                                        </li>
                                        <li className="flex items-start">
                                            <CheckCircle className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-[#F47F21]" />
                                            <div>
                                                <strong>ISO 27001/27701</strong>
                                                <p className="text-sm text-gray-400">Information security and privacy management</p>
                                            </div>
                                        </li>
                                        <li className="flex items-start">
                                            <CheckCircle className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-[#F47F21]" />
                                            <div>
                                                <strong>ISO 42001</strong>
                                                <p className="text-sm text-gray-400">AI management systems for healthcare</p>
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