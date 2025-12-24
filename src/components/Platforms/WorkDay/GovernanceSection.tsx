import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, CheckCircle,  Users, Lock, Eye, UserCheck, Database } from 'lucide-react';

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
                    <h2 className="text-3xl font-bold mb-4">Workday AI Governance</h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Comprehensive governance for Workday AI across HCM, Financial Management, and Planning
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10 hover:border-[#F47F21]/50 transition-all">
                        <CardHeader>
                            <UserCheck className="w-12 h-12 text-[#F47F21] mb-4" />
                            <CardTitle>HR AI Fairness</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-300 mb-4">
                                Ensure fair, unbiased AI in recruiting, performance management, and compensation decisions.
                            </p>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Hiring bias detection</li>
                                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Performance review monitoring</li>
                                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Pay equity analysis</li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10 hover:border-[#F47F21]/50 transition-all">
                        <CardHeader>
                            <Lock className="w-12 h-12 text-[#F47F21] mb-4" />
                            <CardTitle>Employee Data Protection</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-300 mb-4">
                                Protect sensitive employee information in AI systems with comprehensive data governance.
                            </p>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> PII masking</li>
                                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Access controls</li>
                                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Data retention policies</li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10 hover:border-[#F47F21]/50 transition-all">
                        <CardHeader>
                            <Eye className="w-12 h-12 text-[#F47F21] mb-4" />
                            <CardTitle>Financial AI Monitoring</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-300 mb-4">
                                Monitor AI in financial planning, forecasting, and expense management for accuracy and compliance.
                            </p>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Forecast validation</li>
                                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> SOX compliance</li>
                                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Anomaly detection</li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10 hover:border-[#F47F21]/50 transition-all">
                        <CardHeader>
                            <Shield className="w-12 h-12 text-[#F47F21] mb-4" />
                            <CardTitle>Compliance Automation</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-300 mb-4">
                                Automated compliance checks for EEOC, GDPR, CCPA, and other HR/Finance regulations.
                            </p>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> EEOC reporting</li>
                                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> GDPR rights management</li>
                                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Audit trail generation</li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10 hover:border-[#F47F21]/50 transition-all">
                        <CardHeader>
                            <Database className="w-12 h-12 text-[#F47F21] mb-4" />
                            <CardTitle>Data Governance</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-300 mb-4">
                                Comprehensive data governance for sensitive HR and financial data used by Workday AI.
                            </p>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Data classification</li>
                                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Usage monitoring</li>
                                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Consent management</li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10 hover:border-[#F47F21]/50 transition-all">
                        <CardHeader>
                            <Users className="w-12 h-12 text-[#F47F21] mb-4" />
                            <CardTitle>Managed Services</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-300 mb-4">
                                24/7 expert management of Workday AI governance, compliance, and monitoring.
                            </p>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Continuous monitoring</li>
                                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Proactive remediation</li>
                                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Expert consultation</li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}
export default GovernanceSection