'use client'
import { motion } from "framer-motion"
import Link from "next/link"

const CtaSection = () => {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-[#F47F21]/10 via-[#FF6B35]/5 to-transparent py-20">
            <div className="absolute inset-0">
                <div className="absolute left-1/4 top-1/4 h-96 w-96 animate-pulse rounded-full bg-[#F47F21]/10 blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 h-96 w-96 animate-pulse rounded-full bg-blue-500/10 blur-3xl" />
            </div>

            <div className="container relative mx-auto px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mx-auto max-w-3xl rounded-3xl border-2 border-[#F47F21]/20 bg-[#0F172A]/50 p-12 text-center backdrop-blur-md"
                >
                    <h2 className="mb-6 text-4xl font-bold md:text-5xl">
                        Ready to Transform Your Compliance?
                    </h2>
                    <p className="mb-10 text-xl text-gray-300">
                        Join hundreds of enterprises already using AgentsFlow to automate and streamline their compliance processes.
                    </p>
                    <div className="flex flex-col justify-center gap-4 sm:flex-row">
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center rounded-lg bg-[#F47F21] px-8 py-4 text-lg font-semibold text-white transition-all hover:scale-105 hover:bg-[#F47F21]/90"
                        >
                            Get Started
                        </Link>
                        <Link
                            href="/tools/agentsflow"
                            className="inline-flex items-center justify-center rounded-lg border-2 border-white/20 px-8 py-4 text-lg font-semibold text-white transition-all hover:scale-105 hover:border-[#F47F21]"
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