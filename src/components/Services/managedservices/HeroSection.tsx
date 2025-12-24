'use client'

import { useState } from 'react';
import { motion } from 'framer-motion';





const HeroSection =()=>{
    const [contactModalOpen, setContactModalOpen] = useState(false);
    return (
        <>
         
              
              {/* Hero Section */}
              <section className="pt-32 pb-20 bg-gradient-to-br from-brand-1/10 to-brand-2/10">
                <div className="container mx-auto px-4 sm:px-6">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                  >
                    <h1 className="text-4xl lg:text-6xl font-display font-bold mb-6">
                      Managed <span className="text-gradient">Governance Services</span>
                    </h1>
                    <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto mb-8">
                      A joint team (automations + humans) operating your AI & compliance controls 24/7
                    </p>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                      <strong>Who:</strong> Organizations scaling agents/systems across units or regions
                    </p>
                  </motion.div>
                </div>
              </section>
             
        </>
    )
}
export default HeroSection