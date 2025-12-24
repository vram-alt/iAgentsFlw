'use client'

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, ArrowRight, Shield, Monitor, GitBranch, FileText, Award, Clock, Users, Zap, Database, DollarSign, Target, Globe } from 'lucide-react';






const WhatWeRunSection =()=>{
     const [contactModalOpen, setContactModalOpen] = useState(false);
    return (
        <>
        <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">What We Run</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive governance operations for your entire AI ecosystem
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Shield, title: 'Policies & Guardrails', desc: 'AgentsFlow with HITL queues' },
              { icon: GitBranch, title: 'Change Management', desc: 'Models/prompts/tools with approvals & canaries' },
              { icon: Monitor, title: 'Observability', desc: 'Latency/cost/usage + cost controls' },
              { icon: FileText, title: 'Privacy Ops', desc: 'DSAR, consent, RoPA & breach workflows (iComply)' },
              { icon: Award, title: 'Evidence Capture', desc: 'Monthly compliance score and audit packs' },
              { icon: Users, title: '24/7 Support', desc: 'Dedicated team for monitoring and response' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10 h-full hover:border-[#F47F21]/50 transition-all">
                  <CardContent className="p-6">
                    <item.icon className="w-12 h-12 text-[#F47F21] mb-4" />
                    <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                    <p className="text-sm text-gray-300">{item.desc}</p>
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
export default WhatWeRunSection