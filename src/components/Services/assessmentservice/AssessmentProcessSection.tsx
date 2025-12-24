'use client'

import { useState } from 'react';
import { motion } from 'framer-motion';






const AssessmentProcessSection =()=>{
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
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6">
              Assessment <span className="text-gradient">Process</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our proven methodology ensures comprehensive coverage and actionable insights.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "Automated scanning and manual discovery of all AI systems",
                duration: "1-2 weeks"
              },
              {
                step: "02",
                title: "Analysis",
                description: "Deep dive assessment of compliance gaps and risks",
                duration: "2-3 weeks"
              },
              {
                step: "03",
                title: "Reporting",
                description: "Comprehensive findings and recommendations report",
                duration: "1 week"
              },
              {
                step: "04",
                title: "Planning",
                description: "Prioritized roadmap and implementation planning",
                duration: "1 week"
              }
            ].map((phase, index) => (
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl font-bold text-brand-2 mb-4 opacity-80">
                  {phase.step}
                </div>
                <h3 className="text-2xl font-display font-bold mb-3">{phase.title}</h3>
                <p className="text-muted-foreground mb-2">{phase.description}</p>
                <div className="text-accent font-medium text-sm">{phase.duration}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

        </>
    )
}
export default AssessmentProcessSection