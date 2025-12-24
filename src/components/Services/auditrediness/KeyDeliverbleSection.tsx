'use client'

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle} from 'lucide-react';






const KeyDeliverbleSection =()=>{
     const [contactModalOpen, setContactModalOpen] = useState(false);
  
    return (
        <>
        <section className="py-12 sm:py-16 md:py-20 bg-card/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-display font-bold mb-6">
              Key <span className="text-gradient">Deliverables</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to confidently face regulatory audits and demonstrate compliance
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="glass border-2 border-white/20 h-full shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-display">Audit Package</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {[
                      "Complete compliance documentation library",
                      "Organized evidence repository with audit trails",
                      "Policy and procedure documentation",
                      "Risk assessment and mitigation records",
                      "Training and awareness documentation",
                      "Incident response and remediation logs"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-brand-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="glass border-2 border-white/20 h-full shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-display">Readiness Assessment</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {[
                      "Comprehensive readiness scorecard",
                      "Gap analysis with remediation priorities",
                      "Mock audit findings and recommendations",
                      "Team preparation and training materials",
                      "Response templates and communication guides",
                      "Ongoing monitoring and maintenance plan"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-brand-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
        </>
    )
}
export default KeyDeliverbleSection