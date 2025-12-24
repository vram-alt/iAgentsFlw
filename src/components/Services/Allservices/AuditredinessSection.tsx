'use client'

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Award,
} from 'lucide-react';
import EvidencepackBuilderSection from './EvidencepackBuilderSection';







const AuditredinessSection =()=>{
    return (
        <>
        <section id="audit" className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-4xl font-bold">Audit Readiness</h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-300">
              Prepare, package, and pass audits with confidence.
            </p>
            <p className="mt-2 text-gray-400">
              <strong>Who:</strong> Teams facing regulator reviews, customer security questionnaires, or cert audits.
            </p>
          </motion.div>

          {/* Deliverables */}
          <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              'Evidence collection & gap closure plan',
              'Control testing snapshots',
              'Auditor/assessor coordination',
              'Reporting: executive pack + detailed workpapers',
              'Trust center publishing (optional)'
            ].map((deliverable, index) => (
              <Card key={index} className="border-white/10 bg-[#0F172A]/50 backdrop-blur-md">
                <CardContent className="p-6">
                  <Award className="mb-3 h-6 w-6 text-[#F47F21]" />
                  <p className="text-sm">{deliverable}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Interactive Evidence Pack Builder */}
        <EvidencepackBuilderSection/>
        </div>
      </section>
        </>
    )
}
export default AuditredinessSection