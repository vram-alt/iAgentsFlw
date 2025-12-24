'use client'

import { motion } from "framer-motion"
import { CheckCircle, ArrowRight, Users, Shield, TrendingUp, Zap } from 'lucide-react';

const BenifitSection = () => {
    return (
        <section className="py-12 sm:py-16 md:py-20">
            <div className="container mx-auto px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6">
                        Partnership <span className="text-gradient">Benefits</span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Mutual value creation through strategic partnerships and collaborative innovation.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="text-3xl font-display font-bold mb-8">For Partners</h3>
                        <div className="space-y-6">
                            {[
                                "Access to cutting-edge AI compliance technology",
                                "Joint go-to-market opportunities",
                                "Technical integration and API access",
                                "Co-marketing and thought leadership",
                                "Revenue sharing and referral programs"
                            ].map((benefit, index) => (
                                <div key={index} className="flex items-start space-x-3">
                                    <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                                    <span className="text-lg">{benefit}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="text-3xl font-display font-bold mb-8">For Customers</h3>
                        <div className="space-y-6">
                            {[
                                "Seamless integration with existing systems",
                                "Best-in-class implementation support",
                                "Comprehensive solution coverage",
                                "Reduced time to compliance",
                                "Lower total cost of ownership"
                            ].map((benefit, index) => (
                                <div key={index} className="flex items-start space-x-3">
                                    <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                                    <span className="text-lg">{benefit}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default BenifitSection