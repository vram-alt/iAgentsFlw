'use client'
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Activity,
  TrendingUp,
  Eye,
  RefreshCw
} from 'lucide-react';
const WhyExportsSection = () => {
    return (
        <section className="py-16 bg-[#0F172A]/30">
            <div className="container mx-auto px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold mb-4">Why Expert Monitoring is Essential</h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Effective monitoring requires specialized tools, domain knowledge, and 24/7 vigilance
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
                        <CardContent className="p-8">
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-[#F47F21]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Activity className="w-6 h-6 text-[#F47F21]" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-3">Specialized Tooling</h3>
                                    <p className="text-gray-300 leading-relaxed">
                                        Our monitoring platform combines purpose-built AI quality tools with custom integrations for your specific tech stack. Building this capability in-house requires significant investment and ongoing maintenance.
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
                        <CardContent className="p-8">
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-[#F47F21]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Eye className="w-6 h-6 text-[#F47F21]" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-3">Trained Expertise</h3>
                                    <p className="text-gray-300 leading-relaxed">
                                        Our team includes AI researchers, domain experts, and quality specialists who know what to look for. They can distinguish between acceptable variation and concerning trends that require intervention.
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
                        <CardContent className="p-8">
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-[#F47F21]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <RefreshCw className="w-6 h-6 text-[#F47F21]" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-3">24/7 Coverage</h3>
                                    <p className="text-gray-300 leading-relaxed">
                                        AI systems don&apos;t sleep, and neither does our monitoring. Round-the-clock coverage ensures issues are caught and addressed immediately, regardless of time zone or business hours.
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
                        <CardContent className="p-8">
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-[#F47F21]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <TrendingUp className="w-6 h-6 text-[#F47F21]" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-3">Cross-Platform Insights</h3>
                                    <p className="text-gray-300 leading-relaxed">
                                        We monitor hundreds of AI deployments, giving us unique insight into common patterns, emerging issues, and best practices that benefit all our clients through shared learning.
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

export default WhyExportsSection