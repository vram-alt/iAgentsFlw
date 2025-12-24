'use client'
import { motion } from "framer-motion"
import Link from "next/link"
import { Briefcase, ArrowRight } from 'lucide-react';
import { Card, CardContent } from "../ui/card"

const ServicesSection = () => {
    const services = [
        {
            name: 'Assessment Services',
            description: 'Comprehensive AI compliance evaluation and risk assessment to identify gaps and opportunities.',
            link: '/services/assessment',
            includes: ['Current State Analysis', 'Risk Assessment', 'Gap Analysis', 'Roadmap Development']
        },
        {
            name: 'Managed Services',
            description: '24/7 monitoring and oversight of your AI compliance and governance programs with expert support.',
            link: '/services/managed-services',
            includes: ['Continuous Monitoring', 'Incident Response', 'Policy Updates', 'Reporting & Analytics']
        },
        {
            name: 'Audit Readiness',
            description: 'Complete audit preparation and support to ensure you\'re ready for regulatory reviews.',
            link: '/services/audit-readiness',
            includes: ['Documentation Review', 'Mock Audits', 'Evidence Collection', 'Audit Support']
        }
    ];
    return (
        <section className="py-20 bg-[#0F172A]/30">
            <div className="container mx-auto px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <Briefcase className="w-10 h-10 text-[#F47F21]" />
                        <h2 className="text-4xl font-bold">Our Services</h2>
                    </div>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Expert-led compliance and governance services
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {services.map((service, index) => (
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
                                        {service.name}
                                    </h3>
                                    <p className="text-gray-400 mb-4 leading-relaxed">
                                        {service.description}
                                    </p>
                                    <div className="space-y-2 mb-4">
                                        <div className="text-sm font-semibold text-gray-300 mb-2">Includes:</div>
                                        {service.includes.map((item, idx) => (
                                            <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                                                <div className="w-1.5 h-1.5 rounded-full bg-[#F47F21]" />
                                                {item}
                                            </div>
                                        ))}
                                    </div>
                                    <Link
                                        href={service.link}
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

export default ServicesSection