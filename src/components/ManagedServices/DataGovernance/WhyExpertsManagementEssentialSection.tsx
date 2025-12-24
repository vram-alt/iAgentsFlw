'use client'

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import ContactFormModal from '@/components/ContactFormModal';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Database, 
  Shield, 
  CheckCircle, 
  Users,
  ArrowRight,
  Lock,
  Eye,
  FileText,
  Server,
  UserCheck,
  Settings
} from 'lucide-react';






const WhyExpertsManagementEssentialsSection =()=>{
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
            <h2 className="text-3xl font-bold mb-4">Why Expert Management is Essential</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Data governance for AI requires specialized knowledge of regulations, technical implementation, and organizational change management
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#F47F21]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-[#F47F21]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Regulatory Complexity</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Data governance must navigate GDPR, CCPA, HIPAA, and emerging AI regulations like the EU AI Act. Experts understand these requirements and implement controls that satisfy multiple frameworks simultaneously, reducing compliance risk.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#F47F21]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Settings className="w-6 h-6 text-[#F47F21]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Technical Implementation</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Implementing effective data governance requires deep technical knowledge of AI systems, data flows, and security controls. Our experts configure systems correctly the first time, avoiding costly mistakes and security gaps.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#F47F21]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-[#F47F21]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Cross-Functional Coordination</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Data governance touches legal, security, IT, and business teams. Expert management provides neutral facilitation and clear frameworks that get all stakeholders aligned and moving forward.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#F47F21]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 text-[#F47F21]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Continuous Compliance</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Regulations evolve, AI systems change, and data flows shift. Managed services ensure your governance keeps pace, with regular reviews, updates, and proactive adaptation to new requirements.
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
export default WhyExpertsManagementEssentialsSection