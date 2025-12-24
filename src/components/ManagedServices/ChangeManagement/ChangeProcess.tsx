import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  GitBranch, 
  CheckCircle, 
  TrendingUp,
  Users,
  ArrowRight,
  Target,
  AlertTriangle,
  FileText,
  RefreshCw,
  Shield,
  BarChart3,
  Zap
} from 'lucide-react';

const ChangeProcess = () => {
    return (
         <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Our Structured Change Process</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A proven methodology that minimizes risk while maximizing agility
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto space-y-6">
            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#F47F21]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="text-2xl font-bold text-[#F47F21]">1</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3">Impact Analysis</h3>
                    <p className="text-gray-300 mb-4">
                      Before any change, we conduct comprehensive impact analysis to understand potential effects on quality, performance, cost, and compliance.
                    </p>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-black/20 p-4 rounded">
                        <BarChart3 className="w-6 h-6 text-[#F47F21] mb-2" />
                        <div className="font-semibold mb-1">Performance Impact</div>
                        <p className="text-xs text-gray-400">Latency, throughput, reliability effects</p>
                      </div>
                      <div className="bg-black/20 p-4 rounded">
                        <Target className="w-6 h-6 text-[#F47F21] mb-2" />
                        <div className="font-semibold mb-1">Quality Impact</div>
                        <p className="text-xs text-gray-400">Accuracy, relevance, safety changes</p>
                      </div>
                      <div className="bg-black/20 p-4 rounded">
                        <TrendingUp className="w-6 h-6 text-[#F47F21] mb-2" />
                        <div className="font-semibold mb-1">Cost Impact</div>
                        <p className="text-xs text-gray-400">Budget implications and ROI</p>
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
                    <div className="text-2xl font-bold text-[#F47F21]">2</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3">Validation & Testing</h3>
                    <p className="text-gray-300 mb-4">
                      Rigorous testing in staging environments using real-world scenarios, edge cases, and automated test suites.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> <span>Automated regression testing against baseline quality metrics</span></li>
                      <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> <span>Human expert review of sample outputs</span></li>
                      <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> <span>A/B testing to compare new vs. old performance</span></li>
                      <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> <span>Load testing to ensure performance under stress</span></li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#F47F21]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="text-2xl font-bold text-[#F47F21]">3</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3">Controlled Release</h3>
                    <p className="text-gray-300 mb-4">
                      Gradual rollout with monitoring at each stage, ready to rollback if issues arise.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-black/20 rounded">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-[#F47F21]/20 rounded flex items-center justify-center text-sm font-bold">10%</div>
                          <span>Canary deployment to limited users</span>
                        </div>
                        <Badge variant="secondary" className="bg-blue-500/20 text-blue-400">24-48hrs</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-black/20 rounded">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-[#F47F21]/20 rounded flex items-center justify-center text-sm font-bold">50%</div>
                          <span>Expanded rollout with active monitoring</span>
                        </div>
                        <Badge variant="secondary" className="bg-blue-500/20 text-blue-400">2-3 days</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-black/20 rounded">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-[#F47F21]/20 rounded flex items-center justify-center text-sm font-bold">100%</div>
                          <span>Full deployment to all users</span>
                        </div>
                        <Badge variant="secondary" className="bg-green-500/20 text-green-400">After validation</Badge>
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
                    <div className="text-2xl font-bold text-[#F47F21]">4</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3">Post-Release Monitoring</h3>
                    <p className="text-gray-300 mb-4">
                      Intensive monitoring after deployment to catch any unexpected issues and verify improvement goals are met.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <div className="font-semibold mb-2 text-[#F47F21]">What We Monitor</div>
                        <ul className="space-y-1 text-sm">
                          <li className="flex items-start"><CheckCircle className="w-3 h-3 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Error rates & anomalies</li>
                          <li className="flex items-start"><CheckCircle className="w-3 h-3 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Quality metrics vs. baseline</li>
                          <li className="flex items-start"><CheckCircle className="w-3 h-3 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> User feedback & satisfaction</li>
                          <li className="flex items-start"><CheckCircle className="w-3 h-3 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Performance & cost metrics</li>
                        </ul>
                      </div>
                      <div>
                        <div className="font-semibold mb-2 text-[#F47F21]">Rollback Triggers</div>
                        <ul className="space-y-1 text-sm">
                          <li className="flex items-start"><AlertTriangle className="w-3 h-3 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> {'>'}5% error rate increase</li>
                          <li className="flex items-start"><AlertTriangle className="w-3 h-3 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> {'>'}10% quality degradation</li>
                          <li className="flex items-start"><AlertTriangle className="w-3 h-3 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Critical safety violations</li>
                          <li className="flex items-start"><AlertTriangle className="w-3 h-3 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Stakeholder escalation</li>
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
export default ChangeProcess