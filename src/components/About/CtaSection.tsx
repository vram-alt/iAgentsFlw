'use client'
import { motion } from "framer-motion"
import Link from "next/link"

const CtaSection = () => {
    return (
        <section className="py-20 bg-gradient-to-br from-[#F47F21]/10 via-[#FF6B35]/5 to-transparent relative overflow-hidden">
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#F47F21]/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 relative">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto p-12 rounded-3xl bg-[#0F172A]/50 backdrop-blur-md border-2 border-[#F47F21]/20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Ready to Transform Your Compliance?
                    </h2>
                    <p className="text-xl text-gray-300 mb-10">
                        Join hundreds of enterprises already using AgentsFlow.ai to automate and streamline their compliance processes.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-[#F47F21] rounded-lg hover:bg-[#F47F21]/90 transition-all hover:scale-105"
                        >
                            Get Started
                        </Link>
                        <Link
                            href="/tools/AgentsFlow"
                            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-white/20 rounded-lg hover:border-[#F47F21] transition-all hover:scale-105"
                        >
                            Explore Our Tools
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default CtaSection