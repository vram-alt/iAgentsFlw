'use client'

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight} from 'lucide-react';







const HeroSection =()=>{
     const [contactModalOpen, setContactModalOpen] = useState(false);
    return (
        <>
        <section className="pt-32 pb-20 bg-gradient-to-br from-brand-1/10 to-brand-2/10">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center max-w-4xl mx-auto"
                  >
                    <h1 className="text-5xl lg:text-6xl font-display font-bold mb-6">
                      Audit <span className="text-gradient">Readiness</span>
                    </h1>
                    <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                      Prepare your organization for regulatory audits with comprehensive documentation, 
                      evidence collection, and expert guidance to ensure compliance confidence.
                    </p>
                    <Button 
                      size="lg" 
                      className="bg-brand-2 hover:bg-brand-2/90 text-white px-8 py-4"
                      onClick={() => setContactModalOpen(true)}
                    >
                      Contact Us
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </motion.div>
                </div>
              </section>
        </>
    )
}
export default HeroSection