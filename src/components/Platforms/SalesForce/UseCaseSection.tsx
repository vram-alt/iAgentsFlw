import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  CheckCircle, 
  Eye,
  Zap,
  Users,
} from 'lucide-react';

const UseCaseSection = () => {
    return (
        <section className="py-16 bg-[#0F172A]/30">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Salesforce AI Use Cases</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Common Salesforce AI scenarios enhanced by AgentsFlow
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto space-y-6">
            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <Zap className="w-8 h-8 text-[#F47F21] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-3">Sales AI Agents</h3>
                    <p className="text-gray-300 mb-4">
                      Agentforce SDRs generating emails, updating opportunities, and making recommendations. AgentsFlow ensures brand consistency, prevents data leakage, and monitors for inappropriate content.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                      <div className="bg-black/20 p-4 rounded">
                        <h4 className="font-semibold mb-2 text-[#F47F21]">Challenges</h4>
                        <ul className="space-y-1 text-sm">
                          <li className="flex items-start"><Eye className="w-3 h-3 text-gray-400 mr-2 mt-1 flex-shrink-0" /> Inaccurate customer data in emails</li>
                          <li className="flex items-start"><Eye className="w-3 h-3 text-gray-400 mr-2 mt-1 flex-shrink-0" /> Off-brand messaging</li>
                          <li className="flex items-start"><Eye className="w-3 h-3 text-gray-400 mr-2 mt-1 flex-shrink-0" /> Unauthorized discounting</li>
                        </ul>
                      </div>
                      <div className="bg-black/20 p-4 rounded">
                        <h4 className="font-semibold mb-2 text-[#F47F21]">AgentsFlow Solution</h4>
                        <ul className="space-y-1 text-sm">
                          <li className="flex items-start"><CheckCircle className="w-3 h-3 text-[#F47F21] mr-2 mt-1 flex-shrink-0" /> Content validation before send</li>
                          <li className="flex items-start"><CheckCircle className="w-3 h-3 text-[#F47F21] mr-2 mt-1 flex-shrink-0" /> Brand guideline enforcement</li>
                          <li className="flex items-start"><CheckCircle className="w-3 h-3 text-[#F47F21] mr-2 mt-1 flex-shrink-0" /> Pricing approval workflows</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <Users className="w-8 h-8 text-[#F47F21] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-3">Service AI Agents</h3>
                    <p className="text-gray-300 mb-4">
                      Einstein Service Agents resolving cases, accessing customer data, and escalating issues. AgentsFlow ensures PHI/PII protection, accurate responses, and compliance with SLAs.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                      <div className="bg-black/20 p-4 rounded">
                        <h4 className="font-semibold mb-2 text-[#F47F21]">Challenges</h4>
                        <ul className="space-y-1 text-sm">
                          <li className="flex items-start"><Eye className="w-3 h-3 text-gray-400 mr-2 mt-1 flex-shrink-0" /> Hallucinated troubleshooting steps</li>
                          <li className="flex items-start"><Eye className="w-3 h-3 text-gray-400 mr-2 mt-1 flex-shrink-0" /> Sensitive data exposure</li>
                          <li className="flex items-start"><Eye className="w-3 h-3 text-gray-400 mr-2 mt-1 flex-shrink-0" /> Incorrect policy citations</li>
                        </ul>
                      </div>
                      <div className="bg-black/20 p-4 rounded">
                        <h4 className="font-semibold mb-2 text-[#F47F21]">AgentsFlow Solution</h4>
                        <ul className="space-y-1 text-sm">
                          <li className="flex items-start"><CheckCircle className="w-3 h-3 text-[#F47F21] mr-2 mt-1 flex-shrink-0" /> Response accuracy validation</li>
                          <li className="flex items-start"><CheckCircle className="w-3 h-3 text-[#F47F21] mr-2 mt-1 flex-shrink-0" /> PHI/PII masking</li>
                          <li className="flex items-start"><CheckCircle className="w-3 h-3 text-[#F47F21] mr-2 mt-1 flex-shrink-0" /> Policy compliance checking</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    )
}
export default UseCaseSection 