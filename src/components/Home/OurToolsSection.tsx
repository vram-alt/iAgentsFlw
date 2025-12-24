import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
const OurToolsSection = () => {
    return (
        <section id="tools" className="py-12 sm:py-16 md:py-24 relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12 md:mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4 md:mb-6 px-2 text-white">
                        Our <span className="text-gradient">Tools</span>
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 md:mb-12 px-2">
                        Agentic platforms that power our work instead of advanced
                    </p>
                </motion.div>

                <div className="text-center">
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-stretch sm:items-center px-4">
                        <Link href="/tools/agentsflow" className="w-full sm:w-auto">
                            <Button size="lg" className="w-full sm:w-auto bg-[#0080FF] hover:bg-[#0066CC] text-white px-6 sm:px-8 py-3 sm:py-4">
                                Explore AgentsFlow
                                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                            </Button>
                        </Link>
                        <Link href="/tools/icomply" className="w-full sm:w-auto">
                            <Button variant="outline" size="lg" className="w-full sm:w-auto border border-white/20 text-white hover:bg-[#0080FF] hover:text-white px-6 sm:px-8 py-3 sm:py-4 bg-transparent">
                                Explore iComply
                                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default OurToolsSection;