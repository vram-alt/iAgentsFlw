import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
    Shield,
    CheckCircle,
    Cloud,
} from 'lucide-react';
const AICapabilities = () => {
    return (
        <section className="py-16 bg-[#0F172A]/30">
            <div className="container mx-auto px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold mb-4">Extending Salesforce AI Capabilities</h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Salesforce provides the foundation. AgentsFlow adds comprehensive governance and compliance.
                    </p>
                </motion.div>

                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
                    <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
                        <CardHeader>
                            <Cloud className="w-12 h-12 text-[#00A1E0] mb-4" />
                            <CardTitle>What Salesforce Provides</CardTitle>
                            <p className="text-sm text-gray-400">Built-in Einstein Trust Layer capabilities</p>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <CheckCircle className="w-5 h-5 text-[#00A1E0] mr-3 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <strong>Data Masking</strong>
                                        <p className="text-sm text-gray-400">PII/PCI field masking before LLM calls</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="w-5 h-5 text-[#00A1E0] mr-3 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <strong>Grounding</strong>
                                        <p className="text-sm text-gray-400">Responses grounded in Salesforce data</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="w-5 h-5 text-[#00A1E0] mr-3 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <strong>Safety Filters</strong>
                                        <p className="text-sm text-gray-400">Basic toxicity and bias filters</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="w-5 h-5 text-[#00A1E0] mr-3 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <strong>Activity Logging</strong>
                                        <p className="text-sm text-gray-400">Basic audit logs of prompts/responses</p>
                                    </div>
                                </li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-br from-[#F47F21]/10 to-[#FF6B35]/10 border-[#F47F21]/50">
                        <CardHeader>
                            <Shield className="w-12 h-12 text-[#F47F21] mb-4" />
                            <CardTitle>What AgentsFlow Adds</CardTitle>
                            <p className="text-sm text-gray-400">Advanced governance and compliance layer</p>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <CheckCircle className="w-5 h-5 text-[#F47F21] mr-3 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <strong>Advanced Guardrails</strong>
                                        <p className="text-sm text-gray-400">Custom business and compliance rules beyond basic filters</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="w-5 h-5 text-[#F47F21] mr-3 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <strong>Continuous Monitoring</strong>
                                        <p className="text-sm text-gray-400">24/7 hallucination detection and quality metrics</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="w-5 h-5 text-[#F47F21] mr-3 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <strong>Compliance Automation</strong>
                                        <p className="text-sm text-gray-400">Industry-specific compliance workflows and evidence collection</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="w-5 h-5 text-[#F47F21] mr-3 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <strong>Managed Services</strong>
                                        <p className="text-sm text-gray-400">Expert team managing governance 24/7</p>
                                    </div>
                                </li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}
export default AICapabilities