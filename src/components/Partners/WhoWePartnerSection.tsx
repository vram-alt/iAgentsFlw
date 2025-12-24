'use client'
import { motion } from "framer-motion"
import { CheckCircle, ArrowRight, Users, Shield, TrendingUp, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';


const WhoWePartnerSection = () => {
    return (
        <section className="py-12 sm:py-16 md:py-20 bg-card/10">
            <div className="container mx-auto px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6">
                        <span className="text-gradient">Who</span> We Partner With
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Strategic alliances with industry leaders to provide comprehensive AI governance solutions.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        {
                            title: "Cloud Providers",
                            description: "AWS, Azure, GCP integrations for seamless deployment",
                            icon: Shield,
                            partners: ["AWS", "Microsoft Azure", "Google Cloud"]
                        },
                        {
                            title: "AI Platforms",
                            description: "Direct integrations with major AI and ML platforms",
                            icon: Zap,
                            partners: ["OpenAI", "Anthropic", "Hugging Face"]
                        },
                        {
                            title: "Compliance Tools",
                            description: "Integration with existing GRC and compliance systems",
                            icon: CheckCircle,
                            partners: ["ServiceNow", "Archer", "MetricStream"]
                        },
                        {
                            title: "System Integrators",
                            description: "Implementation and consulting partners worldwide",
                            icon: Users,
                            partners: ["Deloitte", "PwC", "KPMG"]
                        }
                    ].map((category, index) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <Card className="border-2 border-white/20 h-full shadow-lg hover:shadow-xl transition-all">
                                <CardContent className="p-6 text-center">
                                    <category.icon className="w-16 h-16 mx-auto mb-4 text-brand-2" />
                                    <h3 className="text-xl font-display font-bold mb-3">{category.title}</h3>
                                    <p className="text-muted-foreground mb-4 text-sm">{category.description}</p>
                                    <div className="space-y-1">
                                        {category.partners.map((partner) => (
                                            <div key={partner} className="text-xs text-accent">{partner}</div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default WhoWePartnerSection