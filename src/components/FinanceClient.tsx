'use client'

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import ContactFormModal from '@/components/ContactFormModal';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Shield,
  CheckCircle,
  FileText,
  AlertTriangle,
  ArrowRight,
  TrendingUp,
  Lock,
  Eye,
  DollarSign,
  BarChart3,
  Users,
  Scale
} from 'lucide-react';

const FinanceClient = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0A0F1A] text-white">

        {/* Breadcrumb */}
        <div className="border-b border-white/5 bg-[#0F172A]/30 pt-20">
          <div className="container mx-auto px-4 py-4 sm:px-6">
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <Link href="/" className="hover:text-white">AgentFlow.ai</Link>
              <span>/</span>
              <Link href="/industries" className="hover:text-white">Industries</Link>
              <span>/</span>
              <span className="text-[#F47F21]">Financial Services</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative overflow-hidden pb-16 pt-20">
          <div className="absolute inset-0 bg-gradient-to-br from-[#F47F21]/5 via-transparent to-[#FF6B35]/5" />

          <div className="container relative mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mx-auto max-w-4xl space-y-6 text-center"
            >
              <Badge variant="secondary" className="border-[#F47F21]/20 bg-[#F47F21]/10 text-[#F47F21]">
                Financial Services
              </Badge>

              <h1 className="text-4xl font-bold leading-tight lg:text-5xl">
                AI Governance for{' '}
                <span className="bg-gradient-to-r from-[#F47F21] to-[#FF6B35] bg-clip-text text-transparent">
                  Financial Services
                </span>
              </h1>

              <p className="text-xl leading-relaxed text-gray-300">
                Navigate complex regulatory requirements while safely deploying AI. Expert managed services for SOX, PCI-DSS, SEC regulations, and emerging AI compliance frameworks.
              </p>

              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <Button
                  size="lg"
                  className="bg-[#F47F21] text-white hover:bg-[#F47F21]/90"
                  onClick={() => setContactModalOpen(true)}
                >
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Industry Challenges */}
        <section className="bg-[#0F172A]/30 py-16">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12 text-center"
            >
              <h2 className="mb-4 text-3xl font-bold">Unique AI Challenges in Finance</h2>
              <p className="mx-auto max-w-3xl text-xl text-gray-300">
                Financial institutions face unprecedented complexity deploying AI while maintaining regulatory compliance
              </p>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="border-white/10 bg-[#0F172A]/50 backdrop-blur-md">
                <CardHeader>
                  <Scale className="mb-4 h-12 w-12 text-[#F47F21]" />
                  <CardTitle>Regulatory Scrutiny</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-gray-300">
                    Multiple overlapping regulations: SOX, PCI-DSS, SEC, FINRA, plus emerging AI-specific rules from regulators.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start"><AlertTriangle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> Model risk management requirements</li>
                    <li className="flex items-start"><AlertTriangle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> Algorithmic bias in lending/trading</li>
                    <li className="flex items-start"><AlertTriangle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> Explainability for auditors</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-white/10 bg-[#0F172A]/50 backdrop-blur-md">
                <CardHeader>
                  <Lock className="mb-4 h-12 w-12 text-[#F47F21]" />
                  <CardTitle>Data Sensitivity</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-gray-300">
                    Financial data requires the highest security and privacy protections with strict access controls and audit trails.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start"><AlertTriangle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> PII and financial data in prompts</li>
                    <li className="flex items-start"><AlertTriangle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> Third-party AI provider risks</li>
                    <li className="flex items-start"><AlertTriangle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> Cross-border data transfer</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-white/10 bg-[#0F172A]/50 backdrop-blur-md">
                <CardHeader>
                  <TrendingUp className="mb-4 h-12 w-12 text-[#F47F21]" />
                  <CardTitle>Model Risk</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-gray-300">
                    AI hallucinations and errors can result in financial losses, market manipulation, or regulatory penalties.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start"><AlertTriangle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> Incorrect financial advice</li>
                    <li className="flex items-start"><AlertTriangle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> Trading algorithm errors</li>
                    <li className="flex items-start"><AlertTriangle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> Compliance calculation mistakes</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Regulatory Frameworks */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12 text-center"
            >
              <h2 className="mb-4 text-3xl font-bold">Relevant Compliance Frameworks</h2>
              <p className="mx-auto max-w-3xl text-xl text-gray-300">
                We ensure your AI systems meet all financial services regulatory requirements
              </p>
            </motion.div>

            <div className="mx-auto max-w-5xl space-y-6">
              <Card className="border-white/10 bg-[#0F172A]/50 backdrop-blur-md">
                <CardContent className="p-8">
                  <div className="grid gap-8 md:grid-cols-2">
                    <div>
                      <h3 className="mb-4 flex items-center text-xl font-bold">
                        <Shield className="mr-2 h-6 w-6 text-[#F47F21]" />
                        US Regulations
                      </h3>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <CheckCircle className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-[#F47F21]" />
                          <div>
                            <strong>SOX (Sarbanes-Oxley)</strong>
                            <p className="text-sm text-gray-400">Financial reporting controls and data integrity</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-[#F47F21]" />
                          <div>
                            <strong>PCI-DSS</strong>
                            <p className="text-sm text-gray-400">Payment card data security standards</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-[#F47F21]" />
                          <div>
                            <strong>SEC Regulations</strong>
                            <p className="text-sm text-gray-400">Securities trading and disclosure requirements</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-[#F47F21]" />
                          <div>
                            <strong>FINRA Guidelines</strong>
                            <p className="text-sm text-gray-400">Broker-dealer compliance and supervision</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="mb-4 flex items-center text-xl font-bold">
                        <FileText className="mr-2 h-6 w-6 text-[#F47F21]" />
                        International Standards
                      </h3>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <CheckCircle className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-[#F47F21]" />
                          <div>
                            <strong>EU AI Act</strong>
                            <p className="text-sm text-gray-400">High-risk AI system requirements for finance</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-[#F47F21]" />
                          <div>
                            <strong>ISO 42001</strong>
                            <p className="text-sm text-gray-400">AI management system standards</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-[#F47F21]" />
                          <div>
                            <strong>GDPR</strong>
                            <p className="text-sm text-gray-400">Data protection for EU customers</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-[#F47F21]" />
                          <div>
                            <strong>Basel III/IV</strong>
                            <p className="text-sm text-gray-400">Operational risk and model governance</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Tailored Use Cases */}
        <section className="bg-[#0F172A]/30 py-16">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12 text-center"
            >
              <h2 className="mb-4 text-3xl font-bold">Managed Services for Financial Institutions</h2>
              <p className="mx-auto max-w-3xl text-xl text-gray-300">
                Industry-specific implementations of our AI governance platform
              </p>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* Model Risk Management */}
              <Card className="border-white/10 bg-[#0F172A]/50 backdrop-blur-md transition-all hover:border-[#F47F21]/50">
                <CardHeader>
                  <BarChart3 className="mb-4 h-12 w-12 text-[#F47F21]" />
                  <CardTitle>Model Risk Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-gray-300">
                    Comprehensive AI model validation, ongoing monitoring, and governance aligned with SR 11-7 and OCC guidelines.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start"><CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> Model inventory and classification</li>
                    <li className="flex items-start"><CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> Ongoing performance monitoring</li>
                    <li className="flex items-start"><CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> Validation documentation</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Financial Data Governance */}
              <Card className="border-white/10 bg-[#0F172A]/50 backdrop-blur-md transition-all hover:border-[#F47F21]/50">
                <CardHeader>
                  <Lock className="mb-4 h-12 w-12 text-[#F47F21]" />
                  <CardTitle>Financial Data Governance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-gray-300">
                    Secure handling of sensitive financial data in AI systems with encryption, access controls, and audit trails.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start"><CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> PII/PCI data masking</li>
                    <li className="flex items-start"><CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> Transaction data protection</li>
                    <li className="flex items-start"><CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> Third-party risk management</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Compliance Monitoring */}
              <Card className="border-white/10 bg-[#0F172A]/50 backdrop-blur-md transition-all hover:border-[#F47F21]/50">
                <CardHeader>
                  <Eye className="mb-4 h-12 w-12 text-[#F47F21]" />
                  <CardTitle>Real-Time Compliance Monitoring</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-gray-300">
                    Continuous monitoring for regulatory violations, bias, and errors in AI-driven financial processes.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start"><CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> Fair lending compliance</li>
                    <li className="flex items-start"><CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> Trading algorithm oversight</li>
                    <li className="flex items-start"><CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> Automated alerts and remediation</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Audit Readiness */}
              <Card className="border-white/10 bg-[#0F172A]/50 backdrop-blur-md transition-all hover:border-[#F47F21]/50">
                <CardHeader>
                  <FileText className="mb-4 h-12 w-12 text-[#F47F21]" />
                  <CardTitle>Financial Services Audit Prep</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-gray-300">
                    Maintain audit-ready evidence for SOX, SEC, and regulatory examinations with automated documentation.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start"><CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> SOX controls testing</li>
                    <li className="flex items-start"><CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> Regulatory exam support</li>
                    <li className="flex items-start"><CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> Continuous evidence collection</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Change Management */}
              <Card className="border-white/10 bg-[#0F172A]/50 backdrop-blur-md transition-all hover:border-[#F47F21]/50">
                <CardHeader>
                  <Users className="mb-4 h-12 w-12 text-[#F47F21]" />
                  <CardTitle>Model Change Control</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-gray-300">
                    Rigorous change management for AI model updates with validation, testing, and approval workflows.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start"><CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> Impact analysis</li>
                    <li className="flex items-start"><CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> Staged rollouts</li>
                    <li className="flex items-start"><CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> Instant rollback capabilities</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Cost Optimization */}
              <Card className="border-white/10 bg-[#0F172A]/50 backdrop-blur-md transition-all hover:border-[#F47F21]/50">
                <CardHeader>
                  <DollarSign className="mb-4 h-12 w-12 text-[#F47F21]" />
                  <CardTitle>AI Spend Optimization</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-gray-300">
                    Track and optimize AI costs across business units, ensuring ROI while maintaining compliance.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start"><CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> Department-level tracking</li>
                    <li className="flex items-start"><CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> Model optimization</li>
                    <li className="flex items-start"><CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> Budget controls and alerts</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Success Metrics */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-4">
              <Card className="border-[#F47F21]/50 bg-gradient-to-br from-[#F47F21]/20 to-[#FF6B35]/20">
                <CardContent className="p-6 text-center">
                  <div className="mb-2 text-4xl font-bold text-[#F47F21]">100%</div>
                  <div className="mb-2 text-lg font-semibold">Audit Success</div>
                  <p className="text-sm text-gray-300">Pass SOX & SEC audits</p>
                </CardContent>
              </Card>

              <Card className="border-[#F47F21]/50 bg-gradient-to-br from-[#F47F21]/20 to-[#FF6B35]/20">
                <CardContent className="p-6 text-center">
                  <div className="mb-2 text-4xl font-bold text-[#F47F21]">75%</div>
                  <div className="mb-2 text-lg font-semibold">Faster Compliance</div>
                  <p className="text-sm text-gray-300">Reduce time to market</p>
                </CardContent>
              </Card>

              <Card className="border-[#F47F21]/50 bg-gradient-to-br from-[#F47F21]/20 to-[#FF6B35]/20">
                <CardContent className="p-6 text-center">
                  <div className="mb-2 text-4xl font-bold text-[#F47F21]">50%</div>
                  <div className="mb-2 text-lg font-semibold">Cost Reduction</div>
                  <p className="text-sm text-gray-300">Lower AI operational costs</p>
                </CardContent>
              </Card>

              <Card className="border-[#F47F21]/50 bg-gradient-to-br from-[#F47F21]/20 to-[#FF6B35]/20">
                <CardContent className="p-6 text-center">
                  <div className="mb-2 text-4xl font-bold text-[#F47F21]">Zero</div>
                  <div className="mb-2 text-lg font-semibold">Violations</div>
                  <p className="text-sm text-gray-300">Proactive risk mitigation</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#0F172A]/30 py-16">
          <div className="container mx-auto px-4 sm:px-6">
            <Card className="border-[#F47F21]/50 bg-gradient-to-br from-[#F47F21]/10 to-[#FF6B35]/10">
              <CardContent className="p-12 text-center">
                <h2 className="mb-4 text-3xl font-bold">Ready to Deploy AI Safely in Your Financial Institution?</h2>
                <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-300">
                  Let our experts handle compliance while you innovate. Schedule a consultation to discuss your specific regulatory requirements.
                </p>
                <Button
                  size="lg"
                  className="bg-[#F47F21] text-white hover:bg-[#F47F21]/90"
                  onClick={() => setContactModalOpen(true)}
                >
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        <ContactFormModal
          isOpen={contactModalOpen}
          onClose={() => setContactModalOpen(false)}
          serviceType="finance-industry"
        />
      </div>
  );
};

export default FinanceClient;

