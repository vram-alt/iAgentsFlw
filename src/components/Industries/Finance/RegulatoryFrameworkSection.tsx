'use client'
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, CheckCircle, FileText } from "lucide-react"

const RegulatoryFrameworkSection = () => {
    return (
        <section className="py-16">
            <div className="container mx-auto px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 text-center"
                >
                    <h2 className="mb-4 text-3xl font-bold">Relevant Compliance Frameworks</h2>
                    <p className="mx-auto max-w-3xl text-xl text-gray-300">
                        We ensure your AI systems meet all financial services regulatory requirements
                    </p>
                </motion.div>

                <div className="mx-auto max-w-5xl space-y-6">
                    <Card className="border-white/10 bg-[#0F172A]/50 backdrop-blur-md">
                        <CardContent className="p-8">
                            <div className="grid gap-8 md:grid-cols-2">
                                <div>
                                    <h3 className="mb-4 flex items-center text-xl font-bold">
                                        <Shield className="mr-2 h-6 w-6 text-[#F47F21]" />
                                        US Regulations
                                    </h3>
                                    <ul className="space-y-3">
                                        <li className="flex items-start">
                                            <CheckCircle className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-[#F47F21]" />
                                            <div>
                                                <strong>SOX (Sarbanes-Oxley)</strong>
                                                <p className="text-sm text-gray-400">Financial reporting controls and data integrity</p>
                                            </div>
                                        </li>
                                        <li className="flex items-start">
                                            <CheckCircle className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-[#F47F21]" />
                                            <div>
                                                <strong>PCI-DSS</strong>
                                                <p className="text-sm text-gray-400">Payment card data security standards</p>
                                            </div>
                                        </li>
                                        <li className="flex items-start">
                                            <CheckCircle className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-[#F47F21]" />
                                            <div>
                                                <strong>SEC Regulations</strong>
                                                <p className="text-sm text-gray-400">Securities trading and disclosure requirements</p>
                                            </div>
                                        </li>
                                        <li className="flex items-start">
                                            <CheckCircle className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-[#F47F21]" />
                                            <div>
                                                <strong>FINRA Guidelines</strong>
                                                <p className="text-sm text-gray-400">Broker-dealer compliance and supervision</p>
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
                                                <p className="text-sm text-gray-400">High-risk AI system requirements for finance</p>
                                            </div>
                                        </li>
                                        <li className="flex items-start">
                                            <CheckCircle className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-[#F47F21]" />
                                            <div>
                                                <strong>ISO 42001</strong>
                                                <p className="text-sm text-gray-400">AI management system standards</p>
                                            </div>
                                        </li>
                                        <li className="flex items-start">
                                            <CheckCircle className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-[#F47F21]" />
                                            <div>
                                                <strong>GDPR</strong>
                                                <p className="text-sm text-gray-400">Data protection for EU customers</p>
                                            </div>
                                        </li>
                                        <li className="flex items-start">
                                            <CheckCircle className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-[#F47F21]" />
                                            <div>
                                                <strong>Basel III/IV</strong>
                                                <p className="text-sm text-gray-400">Operational risk and model governance</p>
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

export default RegulatoryFrameworkSection