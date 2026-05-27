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
            link: '/tools/agentsflow',
            features: ['AI Usage Monitoring', 'Shadow AI Detection', 'Policy Enforcement', 'Risk Assessment']
        },
        {
            name: 'iComply',
            description: 'Intelligent compliance automation platform that transforms complex regulatory requirements into streamlined processes.',
            link: '/tools/icomply',
            features: ['Automated Compliance', 'Real-time Monitoring', 'Audit Trail', 'Regulatory Updates']
        },
 
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
        <section className="bg-gradient-to-br from-[#0A0F1A] via-[#0F172A] to-[#0A0F1A] py-20">
            <div className="container mx-auto px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 text-center"
                >
                    <div className="mb-4 flex items-center justify-center gap-3">
                        <Wrench className="h-10 w-10 text-[#F47F21]" />
                        <h2 className="text-4xl font-bold">Our Tools</h2>
                    </div>
                    <p className="mx-auto max-w-3xl text-xl text-gray-300">
                        Comprehensive AI governance and compliance platform suite
                    </p>
                </motion.div>

                <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {tools.map((tool, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="group h-full border-white/10 bg-[#0F172A]/50 backdrop-blur-md transition-all hover:scale-105 hover:border-[#F47F21]/50">
                                <CardContent className="p-6">
                                    <h3 className="mb-3 text-2xl font-bold text-white transition-colors group-hover:text-[#F47F21]">
                                        {tool.name}
                                    </h3>
                                    <p className="mb-4 leading-relaxed text-gray-400">
                                        {tool.description}
                                    </p>
                                    <div className="mb-4 space-y-2">
                                        {tool.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                                                <div className="h-1.5 w-1.5 rounded-full bg-[#F47F21]" />
                                                {feature}
                                            </div>
                                        ))}
                                    </div>
                                    <Link
                                        href={tool.link}
                                        className="inline-flex items-center gap-2 font-medium text-[#F47F21] transition-colors hover:text-[#FF6B35]"
                                    >
                                        Learn More <ArrowRight className="h-4 w-4" />
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