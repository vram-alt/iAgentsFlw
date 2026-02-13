'use client'
import { motion } from "framer-motion"

const HeroSection = () => {
    return (
        <section className="pt-32 pb-20 relative overflow-hidden">
            <div className="absolute inset-0">
                <div className="absolute top-20 left-20 w-96 h-96 bg-[#F47F21]/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 relative">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto text-center space-y-6"
                >
                    <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                        About{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F47F21] to-[#FF6B35]">
                            AgentsFlow.com
                        </span>
                    </h1>

                    <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed">
                        Leading the AI compliance revolution with intelligent automation and enterprise-grade governance solutions.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}

export default HeroSection