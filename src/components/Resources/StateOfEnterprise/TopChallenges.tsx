import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  AlertTriangle,
  Shield,
  Target,
  BarChart3,
  Users,
  Zap,
} from 'lucide-react';
const TopChallenges = () => {
    return (
        <section className="py-16 bg-[#0F172A]/30">
            <div className="container mx-auto px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold mb-4">Top AI Governance Challenges</h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        What&apos;s keeping enterprises up at night
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
                        <CardHeader>
                            <div className="w-12 h-12 bg-[#F47F21]/20 rounded-lg flex items-center justify-center mb-4">
                                <AlertTriangle className="w-6 h-6 text-[#F47F21]" />
                            </div>
                            <CardTitle>Data Privacy & Security</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-300 mb-4">62% of organizations cite this as their #1 concern</p>
                            <ul className="space-y-2 text-sm text-gray-400">
                                <li>• PII/PHI exposure in prompts</li>
                                <li>• Third-party AI provider risks</li>
                                <li>• Data residency requirements</li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
                        <CardHeader>
                            <div className="w-12 h-12 bg-[#F47F21]/20 rounded-lg flex items-center justify-center mb-4">
                                <Target className="w-6 h-6 text-[#F47F21]" />
                            </div>
                            <CardTitle>Hallucinations & Accuracy</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-300 mb-4">58% struggle with AI reliability</p>
                            <ul className="space-y-2 text-sm text-gray-400">
                                <li>• Incorrect information generation</li>
                                <li>• Lack of confidence scoring</li>
                                <li>• Difficulty detecting errors</li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
                        <CardHeader>
                            <div className="w-12 h-12 bg-[#F47F21]/20 rounded-lg flex items-center justify-center mb-4">
                                <Shield className="w-6 h-6 text-[#F47F21]" />
                            </div>
                            <CardTitle>Regulatory Compliance</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-300 mb-4">51% uncertain about compliance requirements</p>
                            <ul className="space-y-2 text-sm text-gray-400">
                                <li>• Evolving AI regulations (EU AI Act)</li>
                                <li>• Industry-specific requirements</li>
                                <li>• Audit readiness gaps</li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
                        <CardHeader>
                            <div className="w-12 h-12 bg-[#F47F21]/20 rounded-lg flex items-center justify-center mb-4">
                                <Users className="w-6 h-6 text-[#F47F21]" />
                            </div>
                            <CardTitle>Bias & Fairness</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-300 mb-4">47% concerned about algorithmic bias</p>
                            <ul className="space-y-2 text-sm text-gray-400">
                                <li>• Discriminatory outcomes</li>
                                <li>• Lack of testing frameworks</li>
                                <li>• Reputation risk</li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
                        <CardHeader>
                            <div className="w-12 h-12 bg-[#F47F21]/20 rounded-lg flex items-center justify-center mb-4">
                                <BarChart3 className="w-6 h-6 text-[#F47F21]" />
                            </div>
                            <CardTitle>Cost & ROI Visibility</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-300 mb-4">44% lack visibility into AI spending</p>
                            <ul className="space-y-2 text-sm text-gray-400">
                                <li>• Unpredictable costs</li>
                                <li>• Difficult ROI measurement</li>
                                <li>• Budget overruns</li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
                        <CardHeader>
                            <div className="w-12 h-12 bg-[#F47F21]/20 rounded-lg flex items-center justify-center mb-4">
                                <Zap className="w-6 h-6 text-[#F47F21]" />
                            </div>
                            <CardTitle>Skill Gaps</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-300 mb-4">41% lack AI governance expertise</p>
                            <ul className="space-y-2 text-sm text-gray-400">
                                <li>• Shortage of skilled staff</li>
                                <li>• Complex tool landscape</li>
                                <li>• Training requirements</li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}
export default TopChallenges