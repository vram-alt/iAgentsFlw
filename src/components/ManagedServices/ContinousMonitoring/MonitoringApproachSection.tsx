'use client'
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  CheckCircle,
  Users,
  RefreshCw,
  Zap
} from 'lucide-react';

const MonitoringApproachSection = () => {
    return (
        <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Our Hybrid Monitoring Approach</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Combining the best of automation and human expertise for comprehensive coverage
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto space-y-8">
            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-[#F47F21]/20 rounded-lg flex items-center justify-center">
                        <Zap className="w-6 h-6 text-[#F47F21]" />
                      </div>
                      <h3 className="text-2xl font-bold">Automated Layer</h3>
                    </div>
                    <p className="text-gray-300 mb-4">
                      AI-powered monitoring runs continuously, checking every output against quality standards, safety policies, and performance benchmarks.
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> <span>100% coverage of all AI interactions</span></li>
                      <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> <span>Real-time detection and alerting</span></li>
                      <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> <span>Pattern recognition at scale</span></li>
                      <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> <span>Instant statistical analysis</span></li>
                    </ul>
                  </div>

                  <div>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-[#F47F21]/20 rounded-lg flex items-center justify-center">
                        <Users className="w-6 h-6 text-[#F47F21]" />
                      </div>
                      <h3 className="text-2xl font-bold">Human Layer</h3>
                    </div>
                    <p className="text-gray-300 mb-4">
                      Expert reviewers validate findings, catch nuanced issues, and provide contextual judgment that automated systems can&apos;t match.
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> <span>Domain expert validation</span></li>
                      <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> <span>Contextual quality assessment</span></li>
                      <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> <span>Edge case identification</span></li>
                      <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> <span>Strategic improvement insights</span></li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <RefreshCw className="w-7 h-7 text-[#F47F21] mr-3" />
                  Continuous Improvement Loop
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="bg-black/20 p-4 rounded-lg text-center">
                    <div className="text-3xl font-bold text-[#F47F21] mb-2">1</div>
                    <div className="font-semibold mb-2">Monitor</div>
                    <p className="text-xs text-gray-400">Continuous tracking of all AI outputs and metrics</p>
                  </div>
                  <div className="bg-black/20 p-4 rounded-lg text-center">
                    <div className="text-3xl font-bold text-[#F47F21] mb-2">2</div>
                    <div className="font-semibold mb-2">Analyze</div>
                    <p className="text-xs text-gray-400">Identify patterns, trends, and anomalies</p>
                  </div>
                  <div className="bg-black/20 p-4 rounded-lg text-center">
                    <div className="text-3xl font-bold text-[#F47F21] mb-2">3</div>
                    <div className="font-semibold mb-2">Act</div>
                    <p className="text-xs text-gray-400">Implement fixes and optimizations</p>
                  </div>
                  <div className="bg-black/20 p-4 rounded-lg text-center">
                    <div className="text-3xl font-bold text-[#F47F21] mb-2">4</div>
                    <div className="font-semibold mb-2">Verify</div>
                    <p className="text-xs text-gray-400">Confirm improvements and iterate</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    )
}

export default MonitoringApproachSection