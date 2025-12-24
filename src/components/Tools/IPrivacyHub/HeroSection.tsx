import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Shield, 
  CheckCircle,
  ArrowRight,
  Clock,
  TrendingDown,
  Globe, 
} from 'lucide-react';

const HeroSection = () => {
    const [contactModalOpen, setContactModalOpen] = useState(false);

    return (
        <section className="pt-32 pb-20 relative overflow-hidden">
            <div className="absolute inset-0">
                <div className="absolute top-20 left-20 w-96 h-96 bg-[#F47F21]/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 relative">
                <div className="max-w-5xl mx-auto text-center space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <Badge className="bg-[#F47F21]/10 text-[#F47F21] border-[#F47F21]/20 text-lg px-4 py-2">
                            <Shield className="w-4 h-4 mr-2" />
                            iPrivacyHub by AgentsFlow
                        </Badge>

                        <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                            AI Enterprise{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F47F21] to-[#FF6B35]">
                                Privacy Platform
                            </span>
                        </h1>

                        <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
                            Automate privacy compliance for AI systems. DSAR workflows, consent management, PII detection, and{" "}
                            <span className="font-semibold text-white">15+ global privacy frameworks</span> in one platform.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <Button
                            size="lg"
                            className="bg-[#F47F21] hover:bg-[#F47F21]/90 text-white text-lg px-8"
                            onClick={() => setContactModalOpen(true)}
                        >
                            Request Demo
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-2 border-white/20 hover:border-[#F47F21] text-lg px-8"
                            onClick={() => document.getElementById('modules')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            Explore Modules
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="grid md:grid-cols-4 gap-6 pt-8 max-w-4xl mx-auto"
                    >
                        {[
                            { icon: Clock, label: '72% Faster', desc: 'DSAR response' },
                            { icon: CheckCircle, label: '100%', desc: 'Compliance rate' },
                            { icon: TrendingDown, label: '85%', desc: 'Risk reduction' },
                            { icon: Globe, label: '15+', desc: 'Frameworks' }
                        ].map((stat, index) => {
                            const Icon = stat.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 + index * 0.1 }}
                                >
                                    <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
                                        <CardContent className="p-6 text-center">
                                            <Icon className="w-8 h-8 text-[#F47F21] mx-auto mb-2" />
                                            <div className="text-2xl font-bold text-white mb-1">{stat.label}</div>
                                            <div className="text-sm text-gray-400">{stat.desc}</div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
export default HeroSection