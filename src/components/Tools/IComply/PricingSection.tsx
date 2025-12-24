import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
const PricingSection = () => {
      const [pricingTab, setPricingTab] = useState<'mid-market' | 'enterprise'>('mid-market');
    
    return (
        <section className="py-12 sm:py-16 md:py-20 bg-[#0F172A]/30">
            <div className="container mx-auto px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-6">Pricing & Getting started</h2>
                    <div className="flex justify-center mb-8">
                        <div className="bg-white/5 p-1 rounded-lg">
                            <button
                                onClick={() => setPricingTab('mid-market')}
                                className={`px-6 py-2 rounded-md transition-colors ${pricingTab === 'mid-market'
                                        ? 'bg-[#F47F21] text-white'
                                        : 'text-gray-300 hover:text-white hover:bg-white/10'
                                    }`}
                            >
                                Mid-market
                            </button>
                            <button
                                onClick={() => setPricingTab('enterprise')}
                                className={`px-6 py-2 rounded-md transition-colors ${pricingTab === 'enterprise'
                                        ? 'bg-[#F47F21] text-white'
                                        : 'text-gray-300 hover:text-white hover:bg-white/10'
                                    }`}
                            >
                                Enterprise
                            </button>
                        </div>
                    </div>
                </motion.div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={pricingTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="max-w-2xl mx-auto text-center"
                    >
                        {pricingTab === 'mid-market' ? (
                            <>
                                <p className="text-xl text-gray-300 mb-8">
                                    Implementation typically takes 4-8 weeks depending on your existing systems and data complexity.
                                    Pricing starts at <span className="text-[#F47F21] font-semibold">$2,500/month</span> for mid-market organizations.
                                </p>
                                <p className="text-lg text-gray-400 mb-12">
                                    Perfect for companies with 200-2,000 employees. Includes core compliance modules,
                                    standard integrations, and business hours support. Most customers see ROI within 6 months.
                                </p>
                                <div className="grid md:grid-cols-3 gap-6 mb-8">
                                    <div className="p-4 bg-white/5 rounded-lg">
                                        <div className="text-2xl font-bold text-[#F47F21] mb-2">4-8 weeks</div>
                                        <div className="text-sm text-gray-400">Implementation</div>
                                    </div>
                                    <div className="p-4 bg-white/5 rounded-lg">
                                        <div className="text-2xl font-bold text-[#F47F21] mb-2">$2.5K+</div>
                                        <div className="text-sm text-gray-400">Starting price/month</div>
                                    </div>
                                    <div className="p-4 bg-white/5 rounded-lg">
                                        <div className="text-2xl font-bold text-[#F47F21] mb-2">6 months</div>
                                        <div className="text-sm text-gray-400">Typical ROI</div>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                <p className="text-xl text-gray-300 mb-8">
                                    Enterprise implementation takes 8-16 weeks with dedicated success management.
                                    Pricing varies based on <span className="text-[#F47F21] font-semibold">employee count, data volume, and compliance requirements</span>.
                                </p>
                                <p className="text-lg text-gray-400 mb-12">
                                    For organizations with 2,000+ employees requiring advanced features, custom integrations,
                                    24/7 support, and dedicated compliance expertise. Contact us for custom pricing.
                                </p>
                                <div className="grid md:grid-cols-3 gap-6 mb-8">
                                    <div className="p-4 bg-white/5 rounded-lg">
                                        <div className="text-2xl font-bold text-[#F47F21] mb-2">8-16 weeks</div>
                                        <div className="text-sm text-gray-400">Implementation</div>
                                    </div>
                                    <div className="p-4 bg-white/5 rounded-lg">
                                        <div className="text-2xl font-bold text-[#F47F21] mb-2">Custom</div>
                                        <div className="text-sm text-gray-400">Pricing</div>
                                    </div>
                                    <div className="p-4 bg-white/5 rounded-lg">
                                        <div className="text-2xl font-bold text-[#F47F21] mb-2">24/7</div>
                                        <div className="text-sm text-gray-400">Support</div>
                                    </div>
                                </div>
                            </>
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    )
}
export default PricingSection