import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import ContactFormModal from '@/components/ContactFormModal';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
    ArrowRight,
    Cloud,
    Server,
    Users,
    Zap,
    Shield,
    Database
} from 'lucide-react';

const PlatformCardsSection = () => {
    return (
        <section className="py-16 bg-[#0F172A]/30">
            <div className="container mx-auto px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold mb-4">Explore Platform Solutions</h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Deep integrations with the enterprise platforms you already use
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {/* Salesforce */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        <Link href="/platforms/salesforce">
                            <Card className="bg-[#172135] backdrop-blur-md border-white/10 h-full hover:border-[#F47F21]/50 hover:scale-105 transition-all cursor-pointer group">
                                <CardHeader>
                                    <div className="w-16 h-16 bg-[#00A1E0]/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                        <Cloud className="w-8 h-8 text-[#00A1E0]" />
                                    </div>
                                    <CardTitle className="flex items-center justify-between">
                                        <span>Salesforce</span>
                                        <ArrowRight className="w-5 h-5 text-[#F47F21] opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-300 mb-6">
                                        Enhance Einstein Trust Layer and Agentforce with advanced governance, custom guardrails, and comprehensive monitoring.
                                    </p>

                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="text-sm font-semibold text-[#F47F21] mb-2">Key Features</h4>
                                            <ul className="text-sm text-gray-400 space-y-1">
                                                <li>• Agentforce action approval gates</li>
                                                <li>• Data Cloud governance</li>
                                                <li>• Trust Layer enhancement</li>
                                            </ul>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-semibold text-[#F47F21] mb-2">Use Cases</h4>
                                            <div className="flex flex-wrap gap-2">
                                                <Badge variant="secondary" className="bg-white/5 text-xs">Sales AI</Badge>
                                                <Badge variant="secondary" className="bg-white/5 text-xs">Service Agents</Badge>
                                                <Badge variant="secondary" className="bg-white/5 text-xs">Einstein</Badge>
                                            </div>
                                        </div>

                                        <div className="pt-2">
                                            <p className="text-xs text-gray-500">
                                                <strong>Integration:</strong> Native AppExchange app
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                    </motion.div>

                    {/* ServiceNow */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <Link href="/platforms/servicenow">
                            <Card className="bg-[#172135] backdrop-blur-md border-white/10 h-full hover:border-[#F47F21]/50 hover:scale-105 transition-all cursor-pointer group">
                                <CardHeader>
                                    <div className="w-16 h-16 bg-[#62D84E]/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                        <Server className="w-8 h-8 text-[#62D84E]" />
                                    </div>
                                    <CardTitle className="flex items-center justify-between">
                                        <span>ServiceNow</span>
                                        <ArrowRight className="w-5 h-5 text-[#F47F21] opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-300 mb-6">
                                        Govern Now Assist, Virtual Agent, and AI Search with ITSM-specific guardrails and comprehensive quality monitoring.
                                    </p>

                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="text-sm font-semibold text-[#F47F21] mb-2">Key Features</h4>
                                            <ul className="text-sm text-gray-400 space-y-1">
                                                <li>• ITSM AI guardrails</li>
                                                <li>• CMDB access controls</li>
                                                <li>• Incident response validation</li>
                                            </ul>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-semibold text-[#F47F21] mb-2">Use Cases</h4>
                                            <div className="flex flex-wrap gap-2">
                                                <Badge variant="secondary" className="bg-white/5 text-xs">Now Assist</Badge>
                                                <Badge variant="secondary" className="bg-white/5 text-xs">Virtual Agent</Badge>
                                                <Badge variant="secondary" className="bg-white/5 text-xs">AI Search</Badge>
                                            </div>
                                        </div>

                                        <div className="pt-2">
                                            <p className="text-xs text-gray-500">
                                                <strong>Integration:</strong> ServiceNow App Store
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                    </motion.div>

                    {/* Workday */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        <Link href="/platforms/workday">
                            <Card className="bg-[#172135] backdrop-blur-md border-white/10 h-full hover:border-[#F47F21]/50 hover:scale-105 transition-all cursor-pointer group">
                                <CardHeader>
                                    <div className="w-16 h-16 bg-[#EB7C00]/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                        <Users className="w-8 h-8 text-[#EB7C00]" />
                                    </div>
                                    <CardTitle className="flex items-center justify-between">
                                        <span>Workday</span>
                                        <ArrowRight className="w-5 h-5 text-[#F47F21] opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-300 mb-6">
                                        Ensure fair, compliant AI in HCM and Financial Management with bias detection, data protection, and EEOC compliance.
                                    </p>

                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="text-sm font-semibold text-[#F47F21] mb-2">Key Features</h4>
                                            <ul className="text-sm text-gray-400 space-y-1">
                                                <li>• HR AI fairness testing</li>
                                                <li>• Employee data protection</li>
                                                <li>• Financial AI monitoring</li>
                                            </ul>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-semibold text-[#F47F21] mb-2">Use Cases</h4>
                                            <div className="flex flex-wrap gap-2">
                                                <Badge variant="secondary" className="bg-white/5 text-xs">Recruiting</Badge>
                                                <Badge variant="secondary" className="bg-white/5 text-xs">Performance</Badge>
                                                <Badge variant="secondary" className="bg-white/5 text-xs">Finance</Badge>
                                            </div>
                                        </div>

                                        <div className="pt-2">
                                            <p className="text-xs text-gray-500">
                                                <strong>Integration:</strong> Workday Marketplace
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
export default PlatformCardsSection