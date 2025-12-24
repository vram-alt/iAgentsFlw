'use client'

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Shield, 
  AlertTriangle, 
  CheckCircle, 
  TrendingUp,
  Target,
  Users,
  ArrowRight,
  Clock,
  Zap,
  FileText
} from 'lucide-react';






const WhatWeProvideSection =()=>{
    const [contactModalOpen, setContactModalOpen] = useState(false);
    return (
        <>
         <section className="py-16 bg-[#0F172A]/30">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">What We Provide</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive guardrail monitoring across your entire AI infrastructure
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardHeader>
                <Target className="w-12 h-12 text-[#F47F21] mb-4" />
                <CardTitle>Project/Resource Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-1 flex-shrink-0" /> Project-based monitoring</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-1 flex-shrink-0" /> Resource utilization tracking</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-1 flex-shrink-0" /> Agent performance metrics</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-1 flex-shrink-0" /> Model-specific analytics</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardHeader>
                <Shield className="w-12 h-12 text-[#F47F21] mb-4" />
                <CardTitle>Built-in Guardrails</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-1 flex-shrink-0" /> Input validation guardrails</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-1 flex-shrink-0" /> Output safety filters</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-1 flex-shrink-0" /> OOB setup or custom rules</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-1 flex-shrink-0" /> Policy enforcement</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardHeader>
                <AlertTriangle className="w-12 h-12 text-[#F47F21] mb-4" />
                <CardTitle>TripWire Management</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-1 flex-shrink-0" /> Exception detection</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-1 flex-shrink-0" /> Automated alerting</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-1 flex-shrink-0" /> Root cause analysis</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-1 flex-shrink-0" /> Fix recommendations</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardHeader>
                <FileText className="w-12 h-12 text-[#F47F21] mb-4" />
                <CardTitle>Business Rails</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-1 flex-shrink-0" /> Policy management</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-1 flex-shrink-0" /> Workflow orchestration</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-1 flex-shrink-0" /> Approval workflows</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-1 flex-shrink-0" /> Compliance monitoring</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardHeader>
                <Zap className="w-12 h-12 text-[#F47F21] mb-4" />
                <CardTitle>Actionable Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-1 flex-shrink-0" /> Real-time dashboards</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-1 flex-shrink-0" /> Trend analysis</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-1 flex-shrink-0" /> Performance optimization</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-1 flex-shrink-0" /> Fix prioritization</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardHeader>
                <Clock className="w-12 h-12 text-[#F47F21] mb-4" />
                <CardTitle>24/7 Monitoring</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-1 flex-shrink-0" /> Round-the-clock coverage</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-1 flex-shrink-0" /> Immediate incident response</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-1 flex-shrink-0" /> Proactive issue detection</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-1 flex-shrink-0" /> Expert escalation</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
        </>
    )
}
export default WhatWeProvideSection