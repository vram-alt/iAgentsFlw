'use client'
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Card, CardContent } from "../ui/card"
import { Server } from "lucide-react" 

const PlatformSection = () => {
    const platforms = [
        {
            name: 'Salesforce',
            description: 'Deep integration with Salesforce for AI governance, compliance monitoring, and data protection across your CRM ecosystem.',
            link: '/platforms/salesforce',
            capabilities: ['AI Usage Tracking', 'Data Governance', 'Einstein Analytics', 'Custom Workflows']
        },
        {
            name: 'ServiceNow',
            description: 'Native ServiceNow integration for compliance automation, incident management, and governance workflows.',
            link: '/platforms/servicenow',
            capabilities: ['ITSM Integration', 'Compliance Automation', 'Change Management', 'Risk Tracking']
        },
        {
            name: 'Workday',
            description: 'Seamless Workday integration for HR compliance, data privacy, and workforce AI governance.',
            link: '/platforms/workday',
            capabilities: ['HR Compliance', 'Data Privacy', 'Workforce Analytics', 'Policy Enforcement']
        }
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
                        <Server className="w-10 h-10 text-[#F47F21]" />
                        <h2 className="text-4xl font-bold">Platform Integrations</h2>
                    </div>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Native integrations with leading enterprise platforms
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {platforms.map((platform, index) => (
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
                                        {platform.name}
                                    </h3>
                                    <p className="text-gray-400 mb-4 leading-relaxed">
                                        {platform.description}
                                    </p>
                                    <div className="space-y-2 mb-4">
                                        <div className="text-sm font-semibold text-gray-300 mb-2">Capabilities:</div>
                                        {platform.capabilities.map((capability, idx) => (
                                            <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                                                <div className="w-1.5 h-1.5 rounded-full bg-[#F47F21]" />
                                                {capability}
                                            </div>
                                        ))}
                                    </div>
                                    <Link
                                        href={platform.link}
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

export default PlatformSection