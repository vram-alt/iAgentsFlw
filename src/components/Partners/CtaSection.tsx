'use client'
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const CtaSection = () => {
    return (
        <section className="py-12 sm:py-16 md:py-20 bg-card/10">
            <div className="container mx-auto px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    <h2 className="text-4xl font-display font-bold mb-6">
                        Ready to <span className="text-gradient">Partner</span> with Us?
                    </h2>
                    <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Join our growing ecosystem of partners and help shape the future of AI compliance.
                    </p>
                    <p className="text-lg text-muted-foreground mb-8">
                        Contact us at: <a href="mailto:hello@iagentsflow" className="text-brand-2 hover:underline font-medium">hello@AgentsFlow.com</a>
                    </p>
                    <a href="mailto:hello@iagentsflow" target="_blank" rel="noopener noreferrer">
                        <Button
                            size="lg"
                            className="bg-brand-2 hover:bg-brand-2/90 text-white font-medium px-8 py-4 text-lg"
                        >
                            Become a Partner
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                    </a>
                </motion.div>
            </div>
        </section>
    )
}

export default CtaSection