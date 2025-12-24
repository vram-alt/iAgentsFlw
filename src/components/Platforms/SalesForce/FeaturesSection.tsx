
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
    Shield,
    CheckCircle,
    FileText,
    Lock,
    Users,
    Database,
    Activity
} from 'lucide-react';

const FeaturesSection = () => {
    return (
        <section className="py-16">
            <div className="container mx-auto px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold mb-4">AgentsFlow for Salesforce</h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Native integration with Salesforce Einstein, Agentforce, and Data Cloud
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Agentforce Governance */}
                    <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10 hover:border-[#F47F21]/50 transition-all">
                        <CardHeader>
                            <Users className="w-12 h-12 text-[#F47F21] mb-4" />
                            <CardTitle>Agentforce Governance</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-300 mb-4">
                                Comprehensive governance for Salesforce AI agents with action monitoring and approval workflows.
                            </p>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Agent action approval gates</li>
                                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> High-risk action detection</li>
                                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Agent behavior monitoring</li>
                            </ul>
                        </CardContent>
                    </Card>

                    {/* Data Cloud Integration */}
                    <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10 hover:border-[#F47F21]/50 transition-all">
                        <CardHeader>
                            <Database className="w-12 h-12 text-[#F47F21] mb-4" />
                            <CardTitle>Data Cloud Governance</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-300 mb-4">
                                Control what data from Data Cloud is accessible to AI with field-level permissions and usage tracking.
                            </p>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Data access controls</li>
                                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Usage monitoring and alerts</li>
                                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Consent enforcement</li>
                            </ul>
                        </CardContent>
                    </Card>

                    {/* Einstein Trust Layer Extension */}
                    <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10 hover:border-[#F47F21]/50 transition-all">
                        <CardHeader>
                            <Shield className="w-12 h-12 text-[#F47F21] mb-4" />
                            <CardTitle>Trust Layer Enhancement</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-300 mb-4">
                                Extend Einstein Trust Layer with custom compliance rules, advanced bias detection, and industry frameworks.
                            </p>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Custom guardrails</li>
                                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Industry compliance templates</li>
                                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Advanced bias testing</li>
                            </ul>
                        </CardContent>
                    </Card>

                    {/* Prompt Management */}
                    <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10 hover:border-[#F47F21]/50 transition-all">
                        <CardHeader>
                            <FileText className="w-12 h-12 text-[#F47F21] mb-4" />
                            <CardTitle>Prompt Governance</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-300 mb-4">
                                Version control, testing, and approval workflows for Salesforce AI prompt templates.
                            </p>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Prompt versioning</li>
                                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> A/B testing capabilities</li>
                                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Change approval workflows</li>
                            </ul>
                        </CardContent>
                    </Card>

                    {/* Model Monitoring */}
                    <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10 hover:border-[#F47F21]/50 transition-all">
                        <CardHeader>
                            <Activity className="w-12 h-12 text-[#F47F21] mb-4" />
                            <CardTitle>Einstein Model Monitoring</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-300 mb-4">
                                Real-time monitoring of Einstein model performance, accuracy, and compliance across all use cases.
                            </p>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Quality metrics dashboard</li>
                                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Hallucination detection</li>
                                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Performance degradation alerts</li>
                            </ul>
                        </CardContent>
                    </Card>

                    {/* Audit & Compliance */}
                    <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10 hover:border-[#F47F21]/50 transition-all">
                        <CardHeader>
                            <Lock className="w-12 h-12 text-[#F47F21] mb-4" />
                            <CardTitle>Salesforce AI Audit</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-300 mb-4">
                                Comprehensive audit trails and compliance reporting for Salesforce AI usage across your organization.
                            </p>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Enhanced audit logging</li>
                                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Compliance score tracking</li>
                                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Automated evidence collection</li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}
export default FeaturesSection