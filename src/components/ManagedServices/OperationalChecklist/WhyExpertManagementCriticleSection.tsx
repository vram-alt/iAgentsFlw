'use client'

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Target,
  Users,
  Clock,
  TrendingUp,
  Shield,
  Eye
} from 'lucide-react';







const WhyExpertManagementCriticleSection =()=>{
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
            <h2 className="text-3xl font-bold mb-4">Why Expert Management is Critical</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Operational checklists require disciplined execution, deep AI expertise, and the ability to identify subtle issues
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardContent className="p-6">
                <Eye className="w-10 h-10 text-[#F47F21] mb-4" />
                <h3 className="text-lg font-bold mb-2">Trained Eye for Quality</h3>
                <p className="text-gray-300 text-sm">
                  Experts can spot subtle quality degradation, emerging patterns, and nuanced issues that automated systems miss. Years of experience enable them to distinguish between acceptable variation and concerning trends.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardContent className="p-6">
                <Target className="w-10 h-10 text-[#F47F21] mb-4" />
                <h3 className="text-lg font-bold mb-2">Systematic Approach</h3>
                <p className="text-gray-300 text-sm">
                  Professional teams follow proven methodologies, ensuring consistent execution of checklists without fatigue or oversight. They know what to look for and how to document findings properly.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardContent className="p-6">
                <Users className="w-10 h-10 text-[#F47F21] mb-4" />
                <h3 className="text-lg font-bold mb-2">Cross-Industry Knowledge</h3>
                <p className="text-gray-300 text-sm">
                  Our experts bring insights from multiple industries and use cases, applying best practices and lessons learned from hundreds of AI deployments to your specific context.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardContent className="p-6">
                <Clock className="w-10 h-10 text-[#F47F21] mb-4" />
                <h3 className="text-lg font-bold mb-2">Time & Resource Efficiency</h3>
                <p className="text-gray-300 text-sm">
                  Building internal capability requires hiring, training, and ongoing management. Managed services provide instant access to expertise without overhead, allowing your team to focus on core business.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardContent className="p-6">
                <Shield className="w-10 h-10 text-[#F47F21] mb-4" />
                <h3 className="text-lg font-bold mb-2">Adversarial Testing Expertise</h3>
                <p className="text-gray-300 text-sm">
                  Red team testing requires specialized skills in adversarial thinking and attack methodologies. Our security experts know how to break systems to make them stronger.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardContent className="p-6">
                <TrendingUp className="w-10 h-10 text-[#F47F21] mb-4" />
                <h3 className="text-lg font-bold mb-2">Continuous Improvement</h3>
                <p className="text-gray-300 text-sm">
                  Expert teams not only execute checklists but continuously refine them based on findings, emerging threats, and evolving best practices, ensuring your processes stay current.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
        </>
    )
}
export default WhyExpertManagementCriticleSection