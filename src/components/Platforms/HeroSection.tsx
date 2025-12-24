import { useState } from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';


const HeroSection = () => {
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
                        Platform Integrations
                    </Badge>

                    <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                        AI Governance for{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F47F21] to-[#FF6B35]">
                            Leading Enterprise Platforms
                        </span>
                    </h1>

                    <p className="text-xl text-gray-300 leading-relaxed">
                        Native integrations with Salesforce, ServiceNow, and Workday. Extend your platform&apos;s AI capabilities with comprehensive governance, compliance, and monitoring.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}
export default HeroSection