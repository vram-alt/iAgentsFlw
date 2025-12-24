'use client'
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  CheckCircle, 
  Target,
  Zap,
  Settings,
  AlertTriangle
} from 'lucide-react';

const CostOptimizationsection = () => {
    return (
        <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Proven Cost Optimization Strategies</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Multiple approaches to reduce spend while maintaining or improving AI quality
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto space-y-6">
            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#F47F21]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-[#F47F21]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3">Right-Sizing Models</h3>
                    <p className="text-gray-300 mb-4">
                      Many workloads don&apos;t need the most expensive models. We analyze your use cases and recommend optimal model choices that balance cost and quality.
                    </p>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-black/20 p-3 rounded text-center">
                        <div className="text-2xl font-bold text-[#F47F21]">60%</div>
                        <div className="text-xs text-gray-400">Average savings from model optimization</div>
                      </div>
                      <div className="bg-black/20 p-3 rounded text-center">
                        <div className="text-2xl font-bold text-[#F47F21]">Same</div>
                        <div className="text-xs text-gray-400">Quality maintained or improved</div>
                      </div>
                      <div className="bg-black/20 p-3 rounded text-center">
                        <div className="text-2xl font-bold text-[#F47F21]">Faster</div>
                        <div className="text-xs text-gray-400">Often improved response times</div>
                      </div>
                    </div>
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
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3">Prompt Engineering</h3>
                    <p className="text-gray-300 mb-4">
                      Well-crafted prompts reduce token usage, improve response quality, and require fewer retries—directly impacting costs.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> <span>Optimize prompt length while maintaining effectiveness</span></li>
                      <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> <span>Implement dynamic context inclusion based on need</span></li>
                      <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> <span>Reduce retry rates through better instruction clarity</span></li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#F47F21]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-[#F47F21]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3">Smart Caching</h3>
                    <p className="text-gray-300 mb-4">
                      Cache frequently used responses, context, and intermediate results to dramatically reduce API calls and associated costs.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-black/20 p-4 rounded">
                        <div className="font-semibold mb-2">Response Caching</div>
                        <p className="text-sm text-gray-400">Store common queries and responses for instant, zero-cost retrieval</p>
                      </div>
                      <div className="bg-black/20 p-4 rounded">
                        <div className="font-semibold mb-2">Context Caching</div>
                        <p className="text-sm text-gray-400">Reuse expensive context across multiple interactions</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#F47F21]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="w-6 h-6 text-[#F47F21]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3">Budget Controls & Alerts</h3>
                    <p className="text-gray-300 mb-4">
                      Prevent budget overruns with proactive monitoring, alerts, and automatic throttling when limits are approached.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> <span>Department and project-level budget caps</span></li>
                      <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> <span>Multi-threshold alerting (75%, 90%, 100%)</span></li>
                      <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> <span>Automatic rate limiting to prevent overspend</span></li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    )
}

export default CostOptimizationsection