'use client'

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {Shield, FileText, Clock, Award } from 'lucide-react';







const OurApporachSection =()=>{
     const [contactModalOpen, setContactModalOpen] = useState(false);
    return (
        <>
        <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-display font-bold mb-6">
              Our <span className="text-gradient">Approach</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A systematic approach to audit preparation that ensures you&apos;re ready for any regulatory examination
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: FileText,
                title: "Documentation Review",
                description: "Comprehensive review of all AI governance documentation and policies"
              },
              {
                icon: Shield,
                title: "Evidence Collection",
                description: "Systematic collection and organization of compliance evidence and audit trails"
              },
              {
                icon: Clock,
                title: "Mock Audits",
                description: "Practice audits to identify gaps and prepare your team for the real examination"
              },
              {
                icon: Award,
                title: "Remediation Support",
                description: "Expert guidance to address any identified gaps or compliance issues"
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="glass border-2 border-white/20 h-full shadow-lg hover:shadow-xl transition-all text-center">
                  <CardContent className="p-8">
                    <item.icon className="w-16 h-16 mx-auto mb-6 text-brand-2" />
                    <h3 className="text-xl font-display font-bold mb-4">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
        </>
    )
}
export default OurApporachSection