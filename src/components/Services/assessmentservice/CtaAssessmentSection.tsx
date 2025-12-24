'use client'

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';







const CtaAssessmentSection =()=>{
     const [contactModalOpen, setContactModalOpen] = useState(false);
    return (
        <>
        <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl font-display font-bold mb-6">
              Ready to Start Your <span className="text-gradient">Assessment</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get a comprehensive understanding of your AI compliance posture in just 4-6 weeks.
            </p>
            <Button 
              size="lg" 
              className="bg-brand-2 hover:bg-brand-2/90 text-white font-medium px-8 py-4 text-lg"
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
export default CtaAssessmentSection