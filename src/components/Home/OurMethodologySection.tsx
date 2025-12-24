import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
const OurMethodologySection = () => {
    return (
        <section className="py-12 sm:py-16 md:py-24 bg-[#0F172A]/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12 md:mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4 md:mb-6 px-2 text-white">
                        Our <span className="text-gradient">Methodology</span>
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-2">
                        A proven approach to AI governance that balances innovation with compliance
                    </p>
                </motion.div>

                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                    {[
                        {
                            step: "01",
                            title: "Assess",
                            description: "Comprehensive evaluation of your current AI landscape and compliance posture"
                        },
                        {
                            step: "02",
                            title: "Design",
                            description: "Custom governance framework tailored to your industry and regulatory requirements"
                        },
                        {
                            step: "03",
                            title: "Implement",
                            description: "Deploy tools and processes with minimal disruption to existing workflows"
                        },
                        {
                            step: "04",
                            title: "Monitor",
                            description: "Continuous monitoring and optimization to ensure ongoing compliance and performance"
                        }
                    ].map((item, index) => (
                        <motion.div
                            key={item.step}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                        >
                            <Card className="bg-[#172135] backdrop-blur-md border-2 border-white/20 h-full shadow-lg hover:shadow-xl transition-all text-center">
                                <CardContent className="p-6 sm:p-8">
                                    <div className="text-3xl sm:text-4xl font-bold text-[#1A7DFF] mb-3 sm:mb-4">{item.step}</div>
                                    <h3 className="text-lg sm:text-xl font-display font-bold mb-3 sm:mb-4 text-white">{item.title}</h3>
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
export default OurMethodologySection;