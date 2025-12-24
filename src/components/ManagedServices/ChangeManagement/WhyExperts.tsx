import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
    GitBranch,
    Users,
    FileText,
    Shield,
} from 'lucide-react';

const WhyExperts = () => {
    return (
        <section className="py-16 bg-[#0F172A]/30">
            <div className="container mx-auto px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold mb-4">Why Expert Change Management is Critical</h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        AI changes carry unique risks that require specialized knowledge and disciplined processes
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
                        <CardContent className="p-8">
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-[#F47F21]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Shield className="w-6 h-6 text-[#F47F21]" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-3">Unpredictable AI Behavior</h3>
                                    <p className="text-gray-300 leading-relaxed">
                                        Unlike traditional software, AI systems can behave unpredictably after changes. Experts know how to test for edge cases, validate quality comprehensively, and detect subtle degradation that automated tests miss.
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
                        <CardContent className="p-8">
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-[#F47F21]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <FileText className="w-6 h-6 text-[#F47F21]" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-3">Compliance Documentation</h3>
                                    <p className="text-gray-300 leading-relaxed">
                                        Regulations increasingly require documentation of AI system changes, including rationale, testing, and approval. Our process generates audit-ready records automatically, ensuring you&apos;re always prepared for compliance reviews.
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
                        <CardContent className="p-8">
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-[#F47F21]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <GitBranch className="w-6 h-6 text-[#F47F21]" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-3">Risk Mitigation</h3>
                                    <p className="text-gray-300 leading-relaxed">
                                        Gradual rollouts, monitoring, and instant rollback capabilities minimize the blast radius of issues. Our experts have managed thousands of AI changes and know how to balance speed with safety.
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
                        <CardContent className="p-8">
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-[#F47F21]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Users className="w-6 h-6 text-[#F47F21]" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-3">Cross-Functional Coordination</h3>
                                    <p className="text-gray-300 leading-relaxed">
                                        Changes often affect multiple teams. We coordinate across engineering, product, compliance, and business stakeholders, ensuring everyone is informed and aligned throughout the process.
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}
export default WhyExperts