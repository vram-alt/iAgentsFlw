'use client'

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Shield, 
  TrendingUp,
  Users,
  Clock,
} from 'lucide-react';






const ManagedbyExpertsSection =()=>{
     const [contactModalOpen, setContactModalOpen] = useState(false);
    return (
        <>
        <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Why This Should Be Managed by Experts</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              AI guardrail management requires deep expertise, constant vigilance, and rapid response capabilities
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#F47F21]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-[#F47F21]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Specialized Knowledge</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Our experts understand the nuances of AI behavior, common failure patterns, and industry-specific compliance requirements. They can quickly identify issues that automated systems might miss and implement fixes that address root causes rather than symptoms.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#F47F21]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-[#F47F21]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Continuous Optimization</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Expert teams continuously analyze patterns, optimize guardrail configurations, and adapt to evolving AI capabilities. This ongoing refinement ensures your systems stay ahead of emerging risks while maintaining optimal performance.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#F47F21]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-[#F47F21]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Rapid Response Time</h3>
                    <p className="text-gray-300 leading-relaxed">
                      When AI systems generate problematic outputs or violate guardrails, every minute counts. Our 24/7 expert team can respond immediately, implementing fixes and mitigations before issues escalate into business or compliance problems.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#F47F21]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-[#F47F21]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Compliance Assurance</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Regulations like EU AI Act, GDPR, and industry-specific standards require documented oversight of AI systems. Expert management provides the audit trails, documentation, and governance evidence needed to demonstrate compliance.
                    </p>
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
export default ManagedbyExpertsSection