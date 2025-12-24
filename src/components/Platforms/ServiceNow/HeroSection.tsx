import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
    const [contactModalOpen, setContactModalOpen] = useState(false);

    return (
        <section className="pt-20 pb-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#F47F21]/5 via-transparent to-[#FF6B35]/5" />

            <div className="container mx-auto px-4 sm:px-6 relative">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto text-center space-y-6"
                >
                    <Badge variant="secondary" className="bg-[#F47F21]/10 text-[#F47F21] border-[#F47F21]/20">
                        ServiceNow Platform
                    </Badge>

                    <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                        AI Governance for{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F47F21] to-[#FF6B35]">
                            ServiceNow Now Assist
                        </span>
                    </h1>

                    <p className="text-xl text-gray-300 leading-relaxed">
                        Enhance ServiceNow Now Assist with comprehensive AI governance. AgentsFlow adds advanced monitoring, compliance controls, and enterprise-grade governance to your ITSM AI.
                    </p>

                    <div className="flex flex-wrap gap-4 justify-center pt-4">
                        <Button
                            size="lg"
                            className="bg-[#F47F21] hover:bg-[#F47F21]/90 text-white"
                            onClick={() => setContactModalOpen(true)}
                        >
                            Schedule Demo
                            <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
export default HeroSection