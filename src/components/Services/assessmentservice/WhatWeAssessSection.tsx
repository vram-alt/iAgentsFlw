'use client'
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, ArrowRight, Search, FileText, AlertTriangle, Target } from 'lucide-react';







const WhatWeAssessSection =()=>{
     const [contactModalOpen, setContactModalOpen] = useState(false);
    return (
        <>
        <section className="py-12 sm:py-16 md:py-20 bg-card/10">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6">
              What We <span className="text-gradient">Assess</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our comprehensive assessment covers all critical aspects of AI compliance and governance.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "AI Inventory",
                description: "Complete catalog of all AI systems, models, and applications",
                icon: Search,
                items: ["AI system discovery", "Model cataloging", "Data flow mapping", "Usage patterns"]
              },
              {
                title: "Risk Assessment",
                description: "Identification and evaluation of compliance and operational risks",
                icon: AlertTriangle,
                items: ["Risk identification", "Impact analysis", "Probability scoring", "Risk prioritization"]
              },
              {
                title: "Compliance Gap Analysis",
                description: "Current state vs. regulatory requirements comparison",
                icon: FileText,
                items: ["GDPR compliance", "AI Act readiness", "Industry standards", "Internal policies"]
              },
              {
                title: "Remediation Roadmap",
                description: "Prioritized action plan for achieving compliance",
                icon: Target,
                items: ["Quick wins", "Medium-term goals", "Long-term strategy", "Resource planning"]
              }
            ].map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="border-2 border-white/20 h-full shadow-lg hover:shadow-xl transition-all">
                  <CardContent className="p-6">
                    <area.icon className="w-12 h-12 mb-4 text-brand-2" />
                    <h3 className="text-xl font-display font-bold mb-3">{area.title}</h3>
                    <p className="text-muted-foreground mb-4 text-sm">{area.description}</p>
                    <ul className="space-y-1">
                      {area.items.map((item, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-xs">
                          <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
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
export default WhatWeAssessSection