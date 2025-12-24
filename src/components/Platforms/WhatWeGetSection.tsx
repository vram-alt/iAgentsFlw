import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';


const WhatWeGetSection = () => {
    return (
        <section className="py-16 bg-[#0F172A]/30">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl font-bold mb-4">What You Get</h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <Card className="bg-[#172135] backdrop-blur-md border-white/10">
                            <CardHeader>
                                <CardTitle className="flex items-center">
                                    <div className="w-8 h-8 bg-[#F47F21]/20 rounded flex items-center justify-center mr-3">
                                        <span className="text-[#F47F21] font-bold">1</span>
                                    </div>
                                    Quick Deployment
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-300">
                                    Install from your platform&apos;s marketplace and configure in minutes. No complex infrastructure or data migration required.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="bg-[#172135] backdrop-blur-md border-white/10">
                            <CardHeader>
                                <CardTitle className="flex items-center">
                                    <div className="w-8 h-8 bg-[#F47F21]/20 rounded flex items-center justify-center mr-3">
                                        <span className="text-[#F47F21] font-bold">2</span>
                                    </div>
                                    Seamless Experience
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-300">
                                    Governance controls appear natively in your platform UI. Users don&apos;t need to learn a new system or leave their workflow.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="bg-[#172135] backdrop-blur-md border-white/10">
                            <CardHeader>
                                <CardTitle className="flex items-center">
                                    <div className="w-8 h-8 bg-[#F47F21]/20 rounded flex items-center justify-center mr-3">
                                        <span className="text-[#F47F21] font-bold">3</span>
                                    </div>
                                    Complete Visibility
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-300">
                                    Monitor all AI activity across your platform from a single dashboard. Track compliance, performance, and usage in real-time.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="bg-[#172135] backdrop-blur-md border-white/10">
                            <CardHeader>
                                <CardTitle className="flex items-center">
                                    <div className="w-8 h-8 bg-[#F47F21]/20 rounded flex items-center justify-center mr-3">
                                        <span className="text-[#F47F21] font-bold">4</span>
                                    </div>
                                    Expert Support
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-300">
                                    Our team includes platform-certified experts who understand your specific implementation and can optimize governance for your needs.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default WhatWeGetSection