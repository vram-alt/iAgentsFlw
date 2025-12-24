
'use client'

import { useState } from 'react';
import { motion } from 'framer-motion';






const HeroSectionAccessment =()=>{
    const [contactModalOpen, setContactModalOpen] = useState(false);
  
    return (
        <>
       <div className="bg-background text-foreground">
      
      {/* Hero Section */}
      <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl lg:text-6xl font-display font-bold mb-6">
              AI Compliance <span className="text-gradient">Assessment</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive evaluation of your current AI compliance posture, risk exposure, 
              and regulatory readiness across all AI systems and processes.
            </p>
          </motion.div>
        </div>
      </section>
      </div>
        </>
    )
}
export default HeroSectionAccessment