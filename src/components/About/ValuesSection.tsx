'use client';
import { motion } from "framer-motion"
import { Shield, Target, Users, Zap } from "lucide-react"
import { Card, CardContent } from "../ui/card"

const ValuesSection = () => {
    const values = [
        {
            icon: Shield,
            title: 'Trust & Security',
            description: 'We prioritize the security and privacy of your data above all else, ensuring compliance with global standards.'
        },
        {
            icon: Target,
            title: 'Innovation First',
            description: 'Constantly pushing boundaries with cutting-edge AI and automation technologies to solve complex compliance challenges.'
        },
        {
            icon: Users,
            title: 'Customer Success',
            description: 'Your success is our mission. We provide dedicated support and guidance throughout your compliance journey.'
        },
        {
            icon: Zap,
            title: 'Speed & Efficiency',
            description: 'Automating compliance processes to save time and resources while maintaining the highest quality standards.'
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
                    <h2 className="text-4xl font-bold mb-4">Our Values</h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        The principles that guide everything we do
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {values.map((value, index) => {
                        const Icon = value.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10 hover:border-[#F47F21]/50 transition-all hover:scale-105 h-full">
                                    <CardContent className="p-8">
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#F47F21] to-[#FF6B35] flex items-center justify-center flex-shrink-0">
                                                <Icon className="w-6 h-6 text-white" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                                                <p className="text-gray-400">{value.description}</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}

export default ValuesSection