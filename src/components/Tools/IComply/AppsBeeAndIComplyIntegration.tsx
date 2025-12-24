import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { FileText, Shield, CheckCircle } from "lucide-react"
const AgentsFlowAndIComplyIntegration = () => {
    return (
        <section className="py-20 bg-gradient-to-br from-[#F47F21]/10 via-[#0A0F1A] to-[#0E2A47]/10">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-6">
                        <span className="text-[#F47F21]">AgentsFlow + iComply</span>: Complete AI Governance & Compliance
                    </h2>
                    <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                        The power of iComply is amplified when combined with AgentsFlow. Every compliance requirement can be automatically validated with real-time data from your AI systems.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 mb-12">
                    {/* AgentsFlow Side */}
                    <Card className="bg-[#0F172A]/50 backdrop-blur-md border-[#F47F21]/30">
                        <CardContent className="p-8">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-[#F47F21] rounded-lg flex items-center justify-center mr-4">
                                    <Shield className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold">AgentsFlow</h3>
                                    <p className="text-gray-400">AI Governance Platform</p>
                                </div>
                            </div>
                            <p className="text-gray-300 mb-6">
                                AgentsFlow tracks models, agents, prompts, guardrails, and AI system performance in real-time.
                            </p>
                            <ul className="space-y-3">
                                {[
                                    'Model catalog & lineage tracking',
                                    'Prompt versioning & change management',
                                    'Real-time guardrail monitoring',
                                    'AI system observability & metrics',
                                    'Human-in-the-loop workflows',
                                    'Bias detection & mitigation'
                                ].map((feature, index) => (
                                    <li key={index} className="flex items-start">
                                        <CheckCircle className="w-5 h-5 text-[#F47F21] mt-0.5 mr-3 flex-shrink-0" />
                                        <span className="text-gray-300">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>

                    {/* iComply Side */}
                    <Card className="bg-[#0F172A]/50 backdrop-blur-md border-[#F47F21]/30">
                        <CardContent className="p-8">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-[#F47F21] rounded-lg flex items-center justify-center mr-4">
                                    <FileText className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold">iComply</h3>
                                    <p className="text-gray-400">AI Compliance Automation</p>
                                </div>
                            </div>
                            <p className="text-gray-300 mb-6">
                                iComply automates compliance documentation, risk assessments, and audit readiness using AgentsFlow&apos;s data.
                            </p>
                            <ul className="space-y-3">
                                {[
                                    'EU AI Act FRIA with AgentsFlow data',
                                    'Automated technical documentation',
                                    'Real-time compliance monitoring',
                                    'Audit-ready evidence generation',
                                    'Regulatory obligation tracking',
                                    'Continuous risk assessment'
                                ].map((feature, index) => (
                                    <li key={index} className="flex items-start">
                                        <CheckCircle className="w-5 h-5 text-[#F47F21] mt-0.5 mr-3 flex-shrink-0" />
                                        <span className="text-gray-300">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                </div>

                {/* Integration Benefits */}
                <Card className="bg-[#F47F21]/10 backdrop-blur-md border-[#F47F21]/30">
                    <CardContent className="p-8">
                        <h3 className="text-2xl font-bold mb-6 text-center">Why Use Both Together?</h3>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="text-4xl font-bold text-[#F47F21] mb-3">Real-Time</div>
                                <p className="text-gray-300">
                                    Compliance validation happens automatically as your AI systems operate. No manual data collection.
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-[#F47F21] mb-3">Audit-Ready</div>
                                <p className="text-gray-300">
                                    Every compliance requirement is backed by actual evidence from AgentsFlow—not just documents.
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-[#F47F21] mb-3">Complete</div>
                                <p className="text-gray-300">
                                    From AI governance to regulatory compliance—one integrated solution for the entire lifecycle.
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}
export default AgentsFlowAndIComplyIntegration;