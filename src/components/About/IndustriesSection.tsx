'use client'
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Card, CardContent } from "../ui/card"
import { Building2 } from "lucide-react"

const IndustriesSecion = () => {
    const industries = [
        {
            name: 'Financial Services',
            description: 'Specialized compliance solutions for banks, insurance companies, and financial institutions navigating complex regulations.',
            link: '/industries/finance',
            focus: ['Basel III/IV Compliance', 'AML/KYC Automation', 'Model Risk Management', 'Regulatory Reporting']
        },
        {
            name: 'Healthcare',
            description: 'HIPAA-compliant AI solutions for healthcare providers, ensuring patient data protection and regulatory compliance.',
            link: '/industries/healthcare',
            focus: ['HIPAA Compliance', 'Patient Privacy', 'Clinical AI Governance', 'PHI Protection']
        },
        {
            name: 'Insurance',
            description: 'Insurance-specific compliance and governance solutions for underwriting, claims, and risk management AI systems.',
            link: '/industries/insurance',
            focus: ['Actuarial AI', 'Claims Processing', 'Risk Assessment', 'Regulatory Compliance']
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
                        <Building2 className="w-10 h-10 text-[#F47F21]" />
                        <h2 className="text-4xl font-bold">Industries We Serve</h2>
                    </div>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Specialized solutions for regulated industries
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {industries.map((industry, index) => (
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
                                        {industry.name}
                                    </h3>
                                    <p className="text-gray-400 mb-4 leading-relaxed">
                                        {industry.description}
                                    </p>
                                    <div className="space-y-2 mb-4">
                                        <div className="text-sm font-semibold text-gray-300 mb-2">Focus Areas:</div>
                                        {industry.focus.map((area, idx) => (
                                            <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                                                <div className="w-1.5 h-1.5 rounded-full bg-[#F47F21]" />
                                                {area}
                                            </div>
                                        ))}
                                    </div>
                                    <Link
                                        href={industry.link}
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

export default IndustriesSecion