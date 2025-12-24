'use client'

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  CheckCircle, 
} from 'lucide-react';






const SpecificValueforCustomersSection =()=>{
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
            <h2 className="text-3xl font-bold mb-4">Specific Value for Customers</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="bg-gradient-to-br from-[#F47F21]/20 to-[#FF6B35]/20 border-[#F47F21]/50">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-[#F47F21] mb-2">85%</div>
                <div className="text-lg font-semibold mb-2">Faster Issue Resolution</div>
                <p className="text-sm text-gray-300">Expert teams identify and resolve guardrail violations 85% faster than in-house teams</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-[#F47F21]/20 to-[#FF6B35]/20 border-[#F47F21]/50">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-[#F47F21] mb-2">99.9%</div>
                <div className="text-lg font-semibold mb-2">Uptime Guarantee</div>
                <p className="text-sm text-gray-300">24/7 monitoring ensures your AI systems remain compliant and operational</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-[#F47F21]/20 to-[#FF6B35]/20 border-[#F47F21]/50">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-[#F47F21] mb-2">60%</div>
                <div className="text-lg font-semibold mb-2">Cost Reduction</div>
                <p className="text-sm text-gray-300">Lower TCO compared to building and maintaining internal expertise</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 max-w-4xl mx-auto">
            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">Key Benefits</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-[#F47F21] mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold mb-1">Reduce Risk Exposure</div>
                        <p className="text-sm text-gray-400">Proactive monitoring prevents AI-related incidents before they impact your business or reputation</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-[#F47F21] mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold mb-1">Accelerate Innovation</div>
                        <p className="text-sm text-gray-400">Deploy AI faster knowing experts are monitoring safety and compliance</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-[#F47F21] mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold mb-1">Maintain Compliance</div>
                        <p className="text-sm text-gray-400">Stay aligned with evolving AI regulations and industry standards</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-[#F47F21] mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold mb-1">Improve AI Quality</div>
                        <p className="text-sm text-gray-400">Continuous optimization enhances accuracy and reduces hallucinations</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-[#F47F21] mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold mb-1">Scale Confidently</div>
                        <p className="text-sm text-gray-400">Expert oversight scales with your AI deployment without adding headcount</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-[#F47F21] mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold mb-1">Access Expertise</div>
                        <p className="text-sm text-gray-400">Tap into specialized AI governance knowledge without long-term hiring commitments</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
        </>
    )
}
export default SpecificValueforCustomersSection