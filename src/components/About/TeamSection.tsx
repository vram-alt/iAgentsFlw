'use client'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Globe } from 'lucide-react'

const TramSection = () => {
    const team = [
        {
            name: 'Leadership Team',
            description: 'Decades of combined experience in compliance, AI, and enterprise software'
        },
        {
            name: 'Engineering',
            description: 'World-class engineers from top tech companies building scalable solutions'
        },
        {
            name: 'Compliance Experts',
            description: 'Former regulators and auditors ensuring best-in-class compliance guidance'
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
                    <h2 className="text-4xl font-bold mb-4">Our Team</h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Experts in AI, compliance, and enterprise technology
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {team.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10 hover:border-[#F47F21]/50 transition-all hover:scale-105 h-full">
                                <CardContent className="p-8 text-center">
                                    <Globe className="w-12 h-12 text-[#F47F21] mx-auto mb-4" />
                                    <h3 className="text-xl font-bold mb-3">{member.name}</h3>
                                    <p className="text-gray-400">{member.description}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TramSection