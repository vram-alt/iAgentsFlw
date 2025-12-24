import { motion } from 'framer-motion';
import KPIBadge from '../KPIBadge';

const GovernanceCrisisSection = () => {
    return (
        <section className="py-12 sm:py-16 md:py-24 relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12 md:mb-16 lg:mb-20"
                >
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4 md:mb-6 px-2 text-white">
                        The <span className="text-gradient">AI Governance Crisis</span> is Here
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-2">
                        While enterprises rush to deploy AI agents, they're creating ungoverned
                        ecosystems that put compliance, costs, and customer trust at risk.
                    </p>
                </motion.div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6 md:gap-8">
                    {[
                        {
                            stat: "73%",
                            label: "of enterprises have untracked AI costs",
                            trend: "up",
                            color: "text-red-400"
                        },
                        {
                            stat: "340ms",
                            label: "average latency issues at scale",
                            trend: "up",
                            color: "text-yellow-400"
                        },
                        {
                            stat: "89%",
                            label: "face hallucination risks unchecked",
                            trend: "up",
                            color: "text-red-400"
                        },
                        {
                            stat: "67%",
                            label: "have compliance gaps waiting to happen",
                            trend: "up",
                            color: "text-red-400"
                        },
                        {
                            stat: "82%",
                            label: "need continuous monitoring and adjusted guardrails to prevent security issues",
                            trend: "up",
                            color: "text-red-400"
                        }
                    ].map((item, index) => (
                        <motion.div
                            key={item.label}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <KPIBadge
                                value={item.stat}
                                label={item.label}
                                trend={item.trend as "up" | "down" | "neutral"}
                                className="h-full"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default GovernanceCrisisSection;