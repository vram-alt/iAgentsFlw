'use client'

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {  ArrowRight } from 'lucide-react';







const CtaSection =()=>{
    const [contactModalOpen, setContactModalOpen] = useState(false);
    return (
        <>
         <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-brand-1/20 to-brand-2/20">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6">
              Ready to Elevate Your <span className="text-gradient">AI Governance</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
              Let our experts handle the complexity while you focus on building and deploying AI innovations.
            </p>
            
            <Button 
              size="lg" 
              className="bg-brand-2 hover:bg-brand-2/90 text-white px-8 py-4 text-lg"
              onClick={() => setContactModalOpen(true)}
            >
              Schedule Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>
        </>
    )
}
export default CtaSection