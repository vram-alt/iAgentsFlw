'use client'

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Shield, 
  Monitor,
  GitBranch,
  FileText,
  Award,
} from 'lucide-react';
import ServicelevelComposer from './ServicelevelComposer';






const ManagedGovernanceSection =()=>{
    return (
        <>
         <section id="managed" className="bg-[#0F172A]/50 py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-4xl font-bold">Managed Governance</h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-300">
              A joint team (automations + humans) operating your AI & compliance controls 24/7.
            </p>
            <p className="mt-2 text-gray-400">
              <strong>Who:</strong> Organizations scaling agents/systems across units or regions.
            </p>
          </motion.div>

          {/* What We Run */}
          <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Shield, title: 'Policies & Guardrails', desc: 'AgentsFlow with HITL queues' },
              { icon: GitBranch, title: 'Change Management', desc: 'Models/prompts/tools with approvals & canaries' },
              { icon: Monitor, title: 'Observability', desc: 'Latency/cost/usage + cost controls' },
              { icon: FileText, title: 'Privacy Ops', desc: 'DSAR, consent, RoPA & breach workflows (iComply)' },
              { icon: Award, title: 'Evidence Capture', desc: 'Monthly compliance score and audit packs' }
            ].map((item, index) => (
              <Card key={index} className="border-white/10 bg-[#0F172A]/50 backdrop-blur-md">
                <CardContent className="p-6">
                  <item.icon className="mb-3 h-8 w-8 text-[#F47F21]" />
                  <h4 className="mb-2 font-bold">{item.title}</h4>
                  <p className="text-sm text-gray-300">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Interactive Service Level Composer */}
          <ServicelevelComposer />
        </div>
      </section>
        </>
    )
}
export default ManagedGovernanceSection