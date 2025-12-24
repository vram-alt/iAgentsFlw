'use client'
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
    Activity,
    AlertTriangle,
    CheckCircle,
    Eye,
    Target,
    BarChart3,
    Shield,
} from 'lucide-react';

const WhatWeFMonitorSection = () => {
    return (
        <section className="py-16 bg-[#0F172A]/30">
            <div className="container mx-auto px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold mb-4">What We Monitor</h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Comprehensive monitoring across all critical AI quality and performance dimensions
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
                        <CardHeader>
                            <AlertTriangle className="w-12 h-12 text-[#F47F21] mb-4" />
                            <CardTitle>Hallucination Rates</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2 text-gray-300 text-sm">
                                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Real-time hallucination detection across workflows</li>
                                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Trend analysis and pattern identification</li>
                                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Root cause analysis for recurring issues</li>
                                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Automatic alerts on threshold breaches</li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
                        <CardHeader>
                            <Eye className="w-12 h-12 text-[#F47F21] mb-4" />
                            <CardTitle>Human Validation</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2 text-gray-300 text-sm">
                                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Expert review of flagged outputs</li>
                                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Quality scoring by domain experts</li>
                                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Contextual accuracy verification</li>
                                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Edge case identification</li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
                        <CardHeader>
                            <Target className="w-12 h-12 text-[#F47F21] mb-4" />
                            <CardTitle>Automated Spot Checks</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2 text-gray-300 text-sm">
                                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Random sampling of AI outputs</li>
                                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Automated quality checks</li>
                                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Consistency verification</li>
                                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Performance baseline tracking</li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
                        <CardHeader>
                            <BarChart3 className="w-12 h-12 text-[#F47F21] mb-4" />
                            <CardTitle>Quality Metrics</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2 text-gray-300 text-sm">
                                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Accuracy and relevance scores</li>
                                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Response completeness tracking</li>
                                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> User satisfaction metrics</li>
                                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Benchmark comparison</li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
                        <CardHeader>
                            <Activity className="w-12 h-12 text-[#F47F21] mb-4" />
                            <CardTitle>Performance Tracking</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2 text-gray-300 text-sm">
                                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Response time monitoring</li>
                                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Token usage optimization</li>
                                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Error rate analysis</li>
                                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> System health indicators</li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
                        <CardHeader>
                            <Shield className="w-12 h-12 text-[#F47F21] mb-4" />
                            <CardTitle>Safety & Compliance</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2 text-gray-300 text-sm">
                                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Policy violation detection</li>
                                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Bias and toxicity screening</li>
                                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> PII exposure monitoring</li>
                                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Regulatory alignment checks</li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}

export default WhatWeFMonitorSection