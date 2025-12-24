'use client'

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import ContactFormModal from '@/components/ContactFormModal';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  CheckSquare, 
  AlertTriangle, 
  CheckCircle, 
  Target,
  Users,
  ArrowRight,
  Clock,
  Calendar,
  TrendingUp,
  Shield,
  Eye,
  UserCheck
} from 'lucide-react';






const ComparehensiveOperationalChecklistSection =()=>{
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
                    <h2 className="text-3xl font-bold mb-4">Comprehensive Operational Checklists</h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                      Structured checks at different frequencies to catch issues before they impact your business
                    </p>
                  </motion.div>
        
                  <Tabs defaultValue="daily" className="max-w-5xl mx-auto">
                    <TabsList className="grid w-full grid-cols-3 bg-[#0F172A]/50">
                      <TabsTrigger value="daily">Daily</TabsTrigger>
                      <TabsTrigger value="weekly">Weekly</TabsTrigger>
                      <TabsTrigger value="monthly">Monthly</TabsTrigger>
                    </TabsList>
        
                    <TabsContent value="daily" className="mt-8">
                      <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
                        <CardHeader>
                          <CardTitle className="flex items-center">
                            <Clock className="w-6 h-6 text-[#F47F21] mr-2" />
                            Daily Operational Checks
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-6">
                            <div>
                              <h4 className="font-semibold text-lg mb-3">Hallucination Detection & Mitigation</h4>
                              <p className="text-gray-300 mb-4">
                                AI-generated incorrect or fabricated information is one of the biggest operational risks. Our daily checks include:
                              </p>
                              <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-black/20 p-4 rounded-lg">
                                  <div className="flex items-start space-x-2">
                                    <CheckCircle className="w-5 h-5 text-[#F47F21] mt-0.5 flex-shrink-0" />
                                    <div>
                                      <div className="font-medium mb-1">Automated Spot Checks</div>
                                      <p className="text-sm text-gray-400">Random sampling of AI outputs with validation against trusted sources</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-black/20 p-4 rounded-lg">
                                  <div className="flex items-start space-x-2">
                                    <CheckCircle className="w-5 h-5 text-[#F47F21] mt-0.5 flex-shrink-0" />
                                    <div>
                                      <div className="font-medium mb-1">Factuality Verification</div>
                                      <p className="text-sm text-gray-400">Cross-reference claims with knowledge bases and reliable sources</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-black/20 p-4 rounded-lg">
                                  <div className="flex items-start space-x-2">
                                    <CheckCircle className="w-5 h-5 text-[#F47F21] mt-0.5 flex-shrink-0" />
                                    <div>
                                      <div className="font-medium mb-1">Confidence Scoring</div>
                                      <p className="text-sm text-gray-400">Flag low-confidence responses for human review</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-black/20 p-4 rounded-lg">
                                  <div className="flex items-start space-x-2">
                                    <CheckCircle className="w-5 h-5 text-[#F47F21] mt-0.5 flex-shrink-0" />
                                    <div>
                                      <div className="font-medium mb-1">Pattern Detection</div>
                                      <p className="text-sm text-gray-400">Identify recurring hallucination patterns for systemic fixes</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
        
                            <div>
                              <h4 className="font-semibold text-lg mb-3">Performance Metrics Review</h4>
                              <ul className="space-y-2">
                                <li className="flex items-start"><AlertTriangle className="w-4 h-4 text-[#F47F21] mr-2 mt-1 flex-shrink-0" /> Response time monitoring and anomaly detection</li>
                                <li className="flex items-start"><AlertTriangle className="w-4 h-4 text-[#F47F21] mr-2 mt-1 flex-shrink-0" /> Error rate tracking across all AI workflows</li>
                                <li className="flex items-start"><AlertTriangle className="w-4 h-4 text-[#F47F21] mr-2 mt-1 flex-shrink-0" /> User satisfaction score analysis</li>
                                <li className="flex items-start"><AlertTriangle className="w-4 h-4 text-[#F47F21] mr-2 mt-1 flex-shrink-0" /> Cost per request optimization opportunities</li>
                              </ul>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </TabsContent>
        
                    <TabsContent value="weekly" className="mt-8">
                      <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
                        <CardHeader>
                          <CardTitle className="flex items-center">
                            <Calendar className="w-6 h-6 text-[#F47F21] mr-2" />
                            Weekly Operational Reviews
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-6">
                            <div>
                              <h4 className="font-semibold text-lg mb-3">Human-in-the-Loop Review</h4>
                              <p className="text-gray-300 mb-4">
                                Weekly comprehensive review sessions with domain experts to validate AI quality and catch edge cases.
                              </p>
                              <div className="grid md:grid-cols-3 gap-4">
                                <div className="bg-black/20 p-4 rounded-lg text-center">
                                  <UserCheck className="w-8 h-8 text-[#F47F21] mx-auto mb-2" />
                                  <div className="font-medium mb-1">Sample Review</div>
                                  <p className="text-sm text-gray-400">Expert review of 500+ interactions</p>
                                </div>
                                <div className="bg-black/20 p-4 rounded-lg text-center">
                                  <Target className="w-8 h-8 text-[#F47F21] mx-auto mb-2" />
                                  <div className="font-medium mb-1">Quality Scoring</div>
                                  <p className="text-sm text-gray-400">Accuracy, relevance, safety metrics</p>
                                </div>
                                <div className="bg-black/20 p-4 rounded-lg text-center">
                                  <TrendingUp className="w-8 h-8 text-[#F47F21] mx-auto mb-2" />
                                  <div className="font-medium mb-1">Trend Analysis</div>
                                  <p className="text-sm text-gray-400">Week-over-week improvements</p>
                                </div>
                              </div>
                            </div>
        
                            <div>
                              <h4 className="font-semibold text-lg mb-3">Feedback Loop Implementation</h4>
                              <ul className="space-y-2">
                                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-1 flex-shrink-0" /> Aggregate user feedback and implement improvements</li>
                                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-1 flex-shrink-0" /> Update guardrails based on new failure modes</li>
                                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-1 flex-shrink-0" /> Fine-tune prompt templates for better outputs</li>
                                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-1 flex-shrink-0" /> Document lessons learned and update runbooks</li>
                              </ul>
                            </div>
        
                            <div>
                              <h4 className="font-semibold text-lg mb-3">Compliance Verification</h4>
                              <p className="text-gray-300">
                                Verify adherence to internal policies, industry standards, and regulatory requirements through systematic checks.
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </TabsContent>
        
                    <TabsContent value="monthly" className="mt-8">
                      <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
                        <CardHeader>
                          <CardTitle className="flex items-center">
                            <Calendar className="w-6 h-6 text-[#F47F21] mr-2" />
                            Monthly Strategic Reviews
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-6">
                            <div>
                              <h4 className="font-semibold text-lg mb-3">Red Team Testing</h4>
                              <p className="text-gray-300 mb-4">
                                Adversarial testing to identify vulnerabilities, bypass attempts, and edge cases that could be exploited.
                              </p>
                              <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-black/20 p-4 rounded-lg">
                                  <div className="flex items-start space-x-2">
                                    <Shield className="w-5 h-5 text-[#F47F21] mt-0.5 flex-shrink-0" />
                                    <div>
                                      <div className="font-medium mb-1">Jailbreak Attempts</div>
                                      <p className="text-sm text-gray-400">Test prompt injection and system manipulation resistance</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-black/20 p-4 rounded-lg">
                                  <div className="flex items-start space-x-2">
                                    <Shield className="w-5 h-5 text-[#F47F21] mt-0.5 flex-shrink-0" />
                                    <div>
                                      <div className="font-medium mb-1">Bias Testing</div>
                                      <p className="text-sm text-gray-400">Systematic testing for demographic and content biases</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-black/20 p-4 rounded-lg">
                                  <div className="flex items-start space-x-2">
                                    <Shield className="w-5 h-5 text-[#F47F21] mt-0.5 flex-shrink-0" />
                                    <div>
                                      <div className="font-medium mb-1">Edge Case Discovery</div>
                                      <p className="text-sm text-gray-400">Identify unusual inputs that cause unexpected behavior</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-black/20 p-4 rounded-lg">
                                  <div className="flex items-start space-x-2">
                                    <Shield className="w-5 h-5 text-[#F47F21] mt-0.5 flex-shrink-0" />
                                    <div>
                                      <div className="font-medium mb-1">Vulnerability Assessment</div>
                                      <p className="text-sm text-gray-400">Security and safety vulnerability scanning</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
        
                            <div>
                              <h4 className="font-semibold text-lg mb-3">Hallucination Rate Analysis</h4>
                              <p className="text-gray-300 mb-3">
                                Comprehensive monthly analysis of hallucination patterns across all workflows with corrective action plans.
                              </p>
                              <ul className="space-y-2">
                                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-1 flex-shrink-0" /> Trend analysis: Are hallucinations increasing or decreasing?</li>
                                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-1 flex-shrink-0" /> Root cause identification for recurring issues</li>
                                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-1 flex-shrink-0" /> Model performance comparison and recommendations</li>
                                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-1 flex-shrink-0" /> Updated guardrail configurations to prevent future occurrences</li>
                              </ul>
                            </div>
        
                            <div>
                              <h4 className="font-semibold text-lg mb-3">Strategic Planning</h4>
                              <p className="text-gray-300">
                                Review overall AI governance posture, plan improvements, and align with business objectives for the coming month.
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </TabsContent>
                  </Tabs>
                </div>
              </section>
        </>
    )
}
export default ComparehensiveOperationalChecklistSection