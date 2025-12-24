import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, CheckCircle, Lock, Eye,  } from 'lucide-react';

const GovernanceSection = () => {
    return (
        <section className="py-16 bg-[#0F172A]/30">
            <div className="container mx-auto px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold mb-4">ServiceNow AI Governance</h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Comprehensive governance for ServiceNow Now Assist, Virtual Agent, and AI Search
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10 hover:border-[#F47F21]/50 transition-all">
                        <CardHeader>
                            <Shield className="w-12 h-12 text-[#F47F21] mb-4" />
                            <CardTitle>ITSM AI Guardrails</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-300 mb-4">
                                Custom guardrails for IT service management AI ensuring accurate responses and proper escalation.
                            </p>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Incident response validation</li>
                                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Change request monitoring</li>
                                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Knowledge base accuracy</li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10 hover:border-[#F47F21]/50 transition-all">
                        <CardHeader>
                            <Lock className="w-12 h-12 text-[#F47F21] mb-4" />
                            <CardTitle>Data Access Control</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-300 mb-4">
                                Control what CMDB and service data Now Assist can access with field-level permissions.
                            </p>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> CMDB access controls</li>
                                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Sensitive data masking</li>
                                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Role-based AI access</li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10 hover:border-[#F47F21]/50 transition-all">
                        <CardHeader>
                            <Eye className="w-12 h-12 text-[#F47F21] mb-4" />
                            <CardTitle>Continuous Monitoring</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-300 mb-4">
                                24/7 monitoring of Now Assist performance, accuracy, and compliance across all ITSM workflows.
                            </p>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Response quality metrics</li>
                                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Resolution accuracy tracking</li>
                                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> SLA compliance monitoring</li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}
export default GovernanceSection