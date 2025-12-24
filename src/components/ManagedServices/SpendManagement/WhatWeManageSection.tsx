'use client'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { 
  CheckCircle, 
  Users,
  Zap,
  Bot,
  PieChart
} from 'lucide-react';

const WhatWeManageSection = () => {
    return (
        <section className="py-16 bg-[#0F172A]/30">
            <div className="container mx-auto px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold mb-4">Comprehensive Cost Control</h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Track, analyze, and optimize AI spending across every dimension of your organization
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
                        <CardHeader>
                            <Users className="w-12 h-12 text-[#F47F21] mb-4" />
                            <CardTitle>Department-Based Tracking</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2 text-gray-300 text-sm">
                                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Cost allocation by department</li>
                                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Budget limits and alerts</li>
                                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Usage trend analysis</li>
                                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Chargeback reporting</li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
                        <CardHeader>
                            <Bot className="w-12 h-12 text-[#F47F21] mb-4" />
                            <CardTitle>Agent-Based Analysis</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2 text-gray-300 text-sm">
                                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Per-agent cost tracking</li>
                                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> ROI measurement</li>
                                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Performance vs. cost ratio</li>
                                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Optimization recommendations</li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
                        <CardHeader>
                            <PieChart className="w-12 h-12 text-[#F47F21] mb-4" />
                            <CardTitle>GenAI Landscape View</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2 text-gray-300 text-sm">
                                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Cross-platform spend visibility</li>
                                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Provider comparison</li>
                                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Total AI investment tracking</li>
                                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Strategic planning insights</li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
                        <CardHeader>
                            <Zap className="w-12 h-12 text-[#F47F21] mb-4" />
                            <CardTitle>Model Optimization</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2 text-gray-300 text-sm">
                                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Model selection guidance</li>
                                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Cost-performance tuning</li>
                                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Token usage optimization</li>
                                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Caching strategy implementation</li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}

export default WhatWeManageSection