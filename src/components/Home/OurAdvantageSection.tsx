import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, TrendingUp, DollarSign, Users, Play, CheckCircle } from 'lucide-react';

const OurAdvantageSection = () => {
    return (
        <section className="py-12 sm:py-16 md:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12 md:mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4 md:mb-6 px-2 text-white">
                        Our <span className="text-gradient">Advantage</span>
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-2">
                        Why leading enterprises choose InfoComply.ai for their AI governance needs
                    </p>
                </motion.div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {[
                        {
                            title: "Regulatory Expertise",
                            description: "Deep knowledge of AI regulations across jurisdictions, from EU AI Act to emerging frameworks",
                            icon: Shield
                        },
                        {
                            title: "Enterprise Scale",
                            description: "Built for Fortune 500 complexity with enterprise-grade security and scalability",
                            icon: TrendingUp
                        },
                        {
                            title: "Proven ROI",
                            description: "Average 300% ROI within 12 months through reduced compliance costs and faster deployments",
                            icon: DollarSign
                        },
                        {
                            title: "Industry Focus",
                            description: "Specialized solutions for financial services, healthcare, and other regulated industries",
                            icon: Users
                        },
                        {
                            title: "Continuous Innovation",
                            description: "Regular updates to stay ahead of evolving regulations and emerging AI risks",
                            icon: Play
                        },
                        {
                            title: "Expert Support",
                            description: "Dedicated compliance experts and technical support to ensure your success",
                            icon: CheckCircle
                        }
                    ].map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <Card className="bg-[#172135] backdrop-blur-md border-2 border-white/20 h-full shadow-lg hover:shadow-xl transition-all group">
                                <CardContent className="p-6 sm:p-8 text-center">
                                    <item.icon className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-4 sm:mb-6 text-[#1A7DFF] drop-shadow-lg group-hover:scale-110 transition-transform" />
                                    <h3 className="font-display font-bold text-lg sm:text-xl mb-3 sm:mb-4 text-white">{item.title}</h3>
                                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed">{item.description}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default OurAdvantageSection;