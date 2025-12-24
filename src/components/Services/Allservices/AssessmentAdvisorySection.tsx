'use client'

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  CheckCircle, 
  ArrowRight,
} from 'lucide-react';
import AssessmentPlannerSection from './AssessmentPlaneerSection';









const AssessmentAdvisorySection =()=>{

    
    return (
        <>
         <section id="assessment" className="py-12 sm:py-16 md:py-20">
                <div className="container mx-auto px-4 sm:px-6">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 text-center"
                  >
                    <h2 className="mb-4 text-4xl font-bold">Assessment (Advisory & Architecture)</h2>
                    <p className="mx-auto max-w-3xl text-xl text-gray-300">
                      A structured, 4–6 week engagement to map your current state, gaps, and an executable roadmap.
                    </p>
                    <p className="mt-2 text-gray-400">
                      <strong>Who:</strong> Privacy/GRC leaders, AI/Platform owners, Legal, Data/IT.
                    </p>
                  </motion.div>
        
                  {/* Deliverables */}
                  <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {[
                      'Current-state inventory (agents/apps/dataflows/vendors)',
                      'Gap analysis vs chosen frameworks (GDPR/CCPA/LGPD, EU AI Act, ISO/IEC 42001, ISO 27001/NIST)',
                      'Risk register + prioritized remediation plan',
                      'Target operating model (roles, RACI, cadence)',
                      'Quick-start workflows (assessments, DSAR, breaches, change control)'
                    ].map((deliverable, index) => (
                      <Card key={index} className="border-white/10 bg-[#0F172A]/50 backdrop-blur-md">
                        <CardContent className="p-6">
                          <CheckCircle className="mb-3 h-6 w-6 text-green-400" />
                          <p className="text-sm">{deliverable}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
        
                  {/* Timeline */}
                  <div className="mb-12">
                    <h3 className="mb-6 text-center text-2xl font-bold">Typical Timeline</h3>
                    <div className="flex flex-wrap justify-center gap-4">
                      {[
                        { phase: 'Week 1', activity: 'Discover' },
                        { phase: 'Week 2-3', activity: 'Assess' },
                        { phase: 'Week 4', activity: 'Plan' },
                        { phase: 'Week 5-6', activity: 'Pilot' }
                      ].map((item, index) => (
                        <div key={index} className="flex items-center">
                          <div className="rounded-lg bg-[#F47F21]/10 p-4 text-center">
                            <div className="font-bold text-[#F47F21]">{item.phase}</div>
                            <div className="text-sm text-gray-300">{item.activity}</div>
                          </div>
                          {index < 3 && <ArrowRight className="mx-2 h-6 w-6 text-gray-400" />}
                        </div>
                      ))}
                    </div>
                  </div>
        
                  {/* Interactive Assessment Planner */}
                  <AssessmentPlannerSection/>
                  
                </div>
              </section>
        
        </>
    )
}
export default AssessmentAdvisorySection