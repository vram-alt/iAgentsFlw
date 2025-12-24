'use client'

import { useState } from 'react';
import { motion } from 'framer-motion';






const TypicleTimeLineSection =()=>{
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
              Typical <span className="text-gradient">Timeline</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our structured approach ensures thorough preparation within 4-8 weeks
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  week: "Week 1-2",
                  title: "Assessment",
                  description: "Current state analysis and gap identification"
                },
                {
                  week: "Week 3-4",
                  title: "Documentation",
                  description: "Evidence collection and documentation review"
                },
                {
                  week: "Week 5-6",
                  title: "Mock Audit",
                  description: "Practice audit and team preparation"
                },
                {
                  week: "Week 7-8",
                  title: "Finalization",
                  description: "Final preparations and readiness validation"
                }
              ].map((phase, index) => (
                <motion.div
                  key={phase.week}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-brand-2/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-brand-2 font-bold">{index + 1}</span>
                  </div>
                  <h3 className="font-display font-bold text-lg mb-2">{phase.week}</h3>
                  <h4 className="font-semibold mb-2">{phase.title}</h4>
                  <p className="text-sm text-muted-foreground">{phase.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
        </>
    )
}
export default TypicleTimeLineSection