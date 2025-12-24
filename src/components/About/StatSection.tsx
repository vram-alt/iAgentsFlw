'use client'
import { motion } from "framer-motion"
import { Card, CardContent } from "../ui/card"

const StatSection = () => {
    const stats = [
        { number: '500+', label: 'Enterprise Clients' },
        { number: '50+', label: 'Countries Served' },
        { number: '99.9%', label: 'Uptime SLA' },
        { number: '24/7', label: 'Support Available' }
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
                    <h2 className="text-4xl font-bold mb-4">By The Numbers</h2>
                    <p className="text-xl text-gray-300">Trusted by enterprises worldwide</p>
                </motion.div>

                <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10 hover:border-[#F47F21]/50 transition-all hover:scale-105">
                                <CardContent className="p-8 text-center">
                                    <div className="text-4xl font-bold text-[#F47F21] mb-2">{stat.number}</div>
                                    <div className="text-gray-400">{stat.label}</div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default StatSection