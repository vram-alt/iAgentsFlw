import { motion } from 'framer-motion';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, TrendingUp, Users } from 'lucide-react';

const WhoAreWeSection = () => {
    return(
<section className = "py-12 sm:py-16 md:py-20 bg-[#0F172A]/30" >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12 md:mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4 md:mb-6 px-2 text-white">
                        Who <span className="text-gradient">Are We</span>
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-2">
                        InfoComply.ai is a trusted leader in AI governance consulting. Our team of experts helps organizations build and operate AI responsibly—ensuring compliance, reducing risk, and earning customer trust. With deep regulatory expertise and proven governance frameworks, we empower enterprises to confidently navigate complex AI regulations and accelerate responsible AI adoption.
                    </p>
                </motion.div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                    {[
                        {
                            title: 'Governance Experts',
                            description: 'Our team ensures your AI systems are governed with continuous alignment on security, privacy, and compliance',
                            icon: Shield
                        },
                        {
                            title: 'Strategic Advisors',
                            description: 'Executive-level insights and frameworks to accelerate responsible AI adoption across your organization',
                            icon: TrendingUp
                        },
                        {
                            title: 'Trusted Partners',
                            description: 'Working alongside Fortune 500 teams to build and maintain robust AI governance programs',
                            icon: Users
                        }
                    ].map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                        >
                            <Card className="bg-[#172135] backdrop-blur-md border-2 border-white/20 h-full shadow-lg hover:shadow-xl transition-all group">
                                <CardContent className="p-6 sm:p-8 text-center">
                                    <item.icon className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 text-[#1A7DFF] drop-shadow-lg group-hover:scale-110 transition-transform" />
                                    <h3 className="font-display font-bold text-lg sm:text-xl mb-3 sm:mb-4 text-white">{item.title}</h3>
                                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed">{item.description}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
      </section >
    )
}

export default WhoAreWeSection