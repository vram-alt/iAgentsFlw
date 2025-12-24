'use client'
import { motion } from "framer-motion"
import { Card } from "../ui/card"
import { Wrench } from "lucide-react"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { CardContent } from "../ui/card"

const ToolsSection = () => {
    const tools = [
        {
            name: 'AgentsFlow',
            description: 'Enterprise Apps & AI Governance platform for comprehensive visibility and control across your application ecosystem.',
            link: '/tools/AgentsFlow',
            features: ['AI Usage Monitoring', 'Shadow AI Detection', 'Policy Enforcement', 'Risk Assessment']
        },
        {
            name: 'iComply',
            description: 'Intelligent compliance automation platform that transforms complex regulatory requirements into streamlined processes.',
            link: '/tools/icomply',
            features: ['Automated Compliance', 'Real-time Monitoring', 'Audit Trail', 'Regulatory Updates']
        },
        // {
        //     name: 'AgentsFlow',
        //     description: 'Production-safe AI agents for enterprise with built-in governance, compliance, and security controls.',
        //     link: '/tools/AgentsFlow',
        //     features: ['AI Agent Orchestration', 'Safety Guardrails', 'Workflow Automation', 'Enterprise Integration']
        // },
        // {
        //     name: 'DocX.AI',
        //     description: 'Enterprise document intelligence platform powered by AI for automated processing and analysis.',
        //     link: '/tools/docx',
        //     features: ['Document Processing', 'Smart Extraction', 'Compliance Checking', 'Version Control']
        // },
        // {
        //     name: 'iPrivacyHub',
        //     description: 'AI enterprise privacy platform for comprehensive data protection and privacy compliance management.',
        //     link: '/tools/iprivacyhub',
        //     features: ['DSAR Automation', 'Consent Management', 'PII Detection', 'Multi-Framework Support']
        // }
    ];
    return (
        <section className="py-20 bg-gradient-to-br from-[#0A0F1A] via-[#0F172A] to-[#0A0F1A]">
            <div className="container mx-auto px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <Wrench className="w-10 h-10 text-[#F47F21]" />
                        <h2 className="text-4xl font-bold">Our Tools</h2>
                    </div>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Comprehensive AI governance and compliance platform suite
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                    {tools.map((tool, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10 hover:border-[#F47F21]/50 transition-all hover:scale-105 h-full group">
                                <CardContent className="p-6">
                                    <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-[#F47F21] transition-colors">
                                        {tool.name}
                                    </h3>
                                    <p className="text-gray-400 mb-4 leading-relaxed">
                                        {tool.description}
                                    </p>
                                    <div className="space-y-2 mb-4">
                                        {tool.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                                                <div className="w-1.5 h-1.5 rounded-full bg-[#F47F21]" />
                                                {feature}
                                            </div>
                                        ))}
                                    </div>
                                    <Link
                                        href={tool.link}
                                        className="inline-flex items-center gap-2 text-[#F47F21] hover:text-[#FF6B35] transition-colors font-medium"
                                    >
                                        Learn More <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ToolsSection