'use client'

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle} from 'lucide-react';








const WhatYouReceiveSection =()=>{
     const [contactModalOpen, setContactModalOpen] = useState(false);
    return (
        <>
        <section className="py-12 sm:py-16 md:py-20 bg-card/10">
        <div className="container mx-auto px-4 sm:px-6 ">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6">
              What You <span className="text-gradient">Receive</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="border-2 border-white/20 h-full shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-brand-2">Executive Summary Report</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    "Current compliance posture overview",
                    "Key risk areas and exposure levels",
                    "Regulatory readiness assessment",
                    "Strategic recommendations",
                    "Investment priorities and ROI projections"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="glass border-2 border-white/20 h-full shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-accent">Technical Implementation Guide</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    "Detailed remediation roadmap",
                    "Technical implementation specifications",
                    "Policy and procedure templates",
                    "Monitoring and alerting setup",
                    "Training and change management plan"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

        </>
    )
}
export default WhatYouReceiveSection