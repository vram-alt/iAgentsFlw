'use client'

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ContactFormModal from '@/components/ContactFormModal';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';








const HeroSection =()=>{
    return (
        <>
        <section id="overview" className="relative overflow-hidden pb-16 pt-20">
                <div className="absolute inset-0 bg-gradient-to-br from-[#F47F21]/5 via-transparent to-[#FF6B35]/5" />
                
                <div className="container relative mx-auto px-4 sm:px-6">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8 text-center"
                  >
                    <div className="space-y-6">
                      <h1 className="text-5xl font-bold leading-tight lg:text-6xl ">
                        Expert hands for your{' '}
                        <span className="bg-gradient-to-r from-[#F47F21] to-[#FF6B35] bg-clip-text text-transparent">
                          AI, privacy & security
                        </span>{' '}
                        programs.
                      </h1>
                      
                      <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-300">
                        From first assessment to continuous governance, our team brings frameworks, workflows, 
                        and humans-in-the-loop to keep you compliant and confident.
                      </p>
        
                      <div className="flex flex-wrap justify-center gap-3">
                        <Badge variant="secondary" className="border-[#F47F21]/20 bg-[#F47F21]/10 text-[#F47F21]">
                          Advisory & Architecture
                        </Badge>
                        <Badge variant="secondary" className="border-[#F47F21]/20 bg-[#F47F21]/10 text-[#F47F21]">
                          Managed Governance
                        </Badge>
                        <Badge variant="secondary" className="border-[#F47F21]/20 bg-[#F47F21]/10 text-[#F47F21]">
                          Audit Readiness
                        </Badge>
                      </div>
                    </div>
        
                    <div className="flex flex-col justify-center gap-4 sm:flex-row">
                      <Button 
                        size="lg" 
                        className="bg-[#F47F21] px-8 py-4 text-lg font-semibold text-white hover:bg-[#F47F21]/90"
                        onClick={() => setShowContactForm(true)}
                      >
                        Talk to an expert
                      </Button>
                      <Button 
                        size="lg" 
                        variant="outline" 
                        className="border-[#F47F21] px-8 py-4 text-lg font-semibold text-[#F47F21] hover:bg-[#F47F21] hover:text-white"
                        onClick={() => setActiveSection('scoping')}
                      >
                        Scope my project
                      </Button>
                    </div>
                  </motion.div>
                </div>
              </section>
        </>
    )
}
export default HeroSection