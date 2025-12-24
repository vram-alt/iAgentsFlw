import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import {

    Zap,
    Shield,
    Database
} from 'lucide-react';

const WhyPlatformNative = () => {
    return (
        <section className="py-16">
            <div className="container mx-auto px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold mb-4">Why Platform-Native Integration Matters</h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Deep integration means better governance and faster time to value
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    <Card className="bg-[#172135] backdrop-blur-md border-white/10">
                        <CardContent className="p-6">
                            <Shield className="w-12 h-12 text-[#F47F21] mb-4" />
                            <h3 className="text-xl font-bold mb-3">Zero Data Movement</h3>
                            <p className="text-gray-300">
                                All governance happens within your platform. No data leaves your environment, ensuring maximum security and compliance.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="bg-[#172135] backdrop-blur-md border-white/10">
                        <CardContent className="p-6">
                            <Zap className="w-12 h-12 text-[#F47F21] mb-4" />
                            <h3 className="text-xl font-bold mb-3">Real-Time Monitoring</h3>
                            <p className="text-gray-300">
                                Native integration enables real-time guardrails and monitoring, preventing issues before they impact users or compliance.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="bg-[#172135] backdrop-blur-md border-white/10">
                        <CardContent className="p-6">
                            <Database className="w-12 h-12 text-[#F47F21] mb-4" />
                            <h3 className="text-xl font-bold mb-3">Platform-Aware</h3>
                            <p className="text-gray-300">
                                Understand platform-specific AI features, data models, and workflows to provide governance that actually works.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}
export default WhyPlatformNative