'use client'
import { motion } from "framer-motion"
import { Award } from "lucide-react"

const MissionSection = () => {
    return (
        <section className="py-20 bg-[#0F172A]/30">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="text-center">
                            <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
                            <p className="text-xl text-gray-300 leading-relaxed">
                                To empower enterprises with AI-driven compliance solutions that transform complex regulatory requirements
                                into streamlined, automated processes. We believe compliance should be proactive, not reactive – and
                                technology should make it effortless.
                            </p>
                        </div>

                        <div className="bg-gradient-to-r from-[#F47F21]/10 to-[#FF6B35]/10 border border-[#F47F21]/20 rounded-2xl p-8 mt-12">
                            <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                                <Award className="w-8 h-8 text-[#F47F21]" />
                                Our Vision
                            </h3>
                            <p className="text-lg text-gray-300 leading-relaxed">
                                To create a world where AI systems operate with complete transparency, accountability, and compliance –
                                enabling innovation without compromise. We envision enterprises confidently deploying AI at scale,
                                knowing they&apos;re protected by intelligent, adaptive compliance frameworks.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default MissionSection