'use client'
import { motion } from "framer-motion"

const HeroSection = () => {
    return (
        <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20">
            <div className="container mx-auto px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl lg:text-6xl font-display font-bold mb-6">
                        Partner <span className="text-gradient">Ecosystem</span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Building a comprehensive AI compliance ecosystem through strategic partnerships
                        and integrations with leading technology providers.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}

export default HeroSection