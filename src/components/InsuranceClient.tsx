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
  Target,
  Lock,
  Eye,
  TrendingUp,
  Users,
  Scale,
  FileCheck
} from 'lucide-react';

const InsuranceClient = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0A0F1A] text-white">
      
      {/* Breadcrumb */}
      <div className="border-b border-white/5 bg-[#0F172A]/30 pt-20">
        <div className="container mx-auto px-4 py-4 sm:px-6">
          <div className="flex items-center space-x-2 text-sm text-gray-400">
            <Link href="/" className="hover:text-white">AgentsFlow.ai</Link>
            <span>/</span>
            <Link href="/industries" className="hover:text-white">Industries</Link>
            <span>/</span>
            <span className="text-[#F47F21]">Insurance</span>
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
              Insurance Industry
            </Badge>
            
            <h1 className="text-4xl font-bold leading-tight lg:text-5xl">
              AI Governance for{' '}
              <span className="bg-gradient-to-r from-[#F47F21] to-[#FF6B35] bg-clip-text text-transparent">
                Insurance
              </span>
            </h1>
            
            <p className="text-xl leading-relaxed text-gray-300">
              Deploy AI in insurance while ensuring fair underwriting, claims accuracy, and regulatory compliance. Expert managed services for safe, unbiased insurance AI.
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
            <h2 className="mb-4 text-3xl font-bold">Unique AI Challenges in Insurance</h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-300">
              Insurance companies face critical fairness and accuracy requirements when deploying AI
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-white/10 bg-[#0F172A]/50 backdrop-blur-md">
              <CardHeader>
                <Scale className="mb-4 h-12 w-12 text-[#F47F21]" />
                <CardTitle>Algorithmic Fairness</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-gray-300">
                  AI systems must avoid discriminatory outcomes in underwriting, pricing, and claims processing.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start"><AlertTriangle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> Protected class discrimination</li>
                  <li className="flex items-start"><AlertTriangle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> Proxy variable detection</li>
                  <li className="flex items-start"><AlertTriangle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> Adverse action notices</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-white/10 bg-[#0F172A]/50 backdrop-blur-md">
              <CardHeader>
                <Target className="mb-4 h-12 w-12 text-[#F47F21]" />
                <CardTitle>Claims Accuracy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-gray-300">
                  AI hallucinations in claims processing can lead to wrongful denials or fraudulent approvals.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start"><AlertTriangle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> Claim validity verification</li>
                  <li className="flex items-start"><AlertTriangle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> Fraud detection accuracy</li>
                  <li className="flex items-start"><AlertTriangle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> Payment calculation errors</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-white/10 bg-[#0F172A]/50 backdrop-blur-md">
              <CardHeader>
                <FileCheck className="mb-4 h-12 w-12 text-[#F47F21]" />
                <CardTitle>Regulatory Scrutiny</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-gray-300">
                  State insurance departments and federal regulators are increasingly focused on AI in insurance.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start"><AlertTriangle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> State-by-state requirements</li>
                  <li className="flex items-start"><AlertTriangle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> Model documentation demands</li>
                  <li className="flex items-start"><AlertTriangle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> Explainability requirements</li>
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
            <h2 className="mb-4 text-3xl font-bold">Insurance Compliance Frameworks</h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-300">
              We ensure your AI systems meet all insurance regulatory requirements
            </p>
          </motion.div>

          <div className="mx-auto max-w-5xl space-y-6">
            <Card className="border-white/10 bg-[#0F172A]/50 backdrop-blur-md">
              <CardContent className="p-8">
                <div className="grid gap-8 md:grid-cols-2">
                  <div>
                    <h3 className="mb-4 flex items-center text-xl font-bold">
                      <Shield className="mr-2 h-6 w-6 text-[#F47F21]" />
                      US Insurance Regulations
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-[#F47F21]" />
                        <div>
                          <strong>NAIC Model Laws</strong>
                          <p className="text-sm text-gray-400">State insurance regulatory frameworks</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-[#F47F21]" />
                        <div>
                          <strong>Fair Credit Reporting Act</strong>
                          <p className="text-sm text-gray-400">Consumer credit information in underwriting</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-[#F47F21]" />
                        <div>
                          <strong>State Privacy Laws</strong>
                          <p className="text-sm text-gray-400">CCPA, CPRA, and emerging state regulations</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-[#F47F21]" />
                        <div>
                          <strong>SOX (for public insurers)</strong>
                          <p className="text-sm text-gray-400">Financial reporting and controls</p>
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
                          <p className="text-sm text-gray-400">High-risk AI for insurance underwriting</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-[#F47F21]" />
                        <div>
                          <strong>GDPR</strong>
                          <p className="text-sm text-gray-400">EU customer data protection</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-[#F47F21]" />
                        <div>
                          <strong>Solvency II (EU)</strong>
                          <p className="text-sm text-gray-400">Risk management and reporting</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-[#F47F21]" />
                        <div>
                          <strong>ISO 42001</strong>
                          <p className="text-sm text-gray-400">AI management systems</p>
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
            <h2 className="mb-4 text-3xl font-bold">Managed Services for Insurance</h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-300">
              Specialized AI governance for insurance carriers and brokers
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Fair Underwriting */}
            <Card className="border-white/10 bg-[#0F172A]/50 backdrop-blur-md transition-all hover:border-[#F47F21]/50">
              <CardHeader>
                <Scale className="mb-4 h-12 w-12 text-[#F47F21]" />
                <CardTitle>Fair Underwriting AI</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-gray-300">
                  Continuous bias monitoring and fairness testing for AI-driven underwriting systems.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start"><CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> Disparate impact analysis</li>
                  <li className="flex items-start"><CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> Protected attribute monitoring</li>
                  <li className="flex items-start"><CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> Adverse action documentation</li>
                </ul>
              </CardContent>
            </Card>

            {/* Claims Processing */}
            <Card className="border-white/10 bg-[#0F172A]/50 backdrop-blur-md transition-all hover:border-[#F47F21]/50">
              <CardHeader>
                <FileCheck className="mb-4 h-12 w-12 text-[#F47F21]" />
                <CardTitle>Claims AI Governance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-gray-300">
                  Quality assurance for AI in claims processing, fraud detection, and payment calculations.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start"><CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> Decision validation</li>
                  <li className="flex items-start"><CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> Fraud model monitoring</li>
                  <li className="flex items-start"><CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> Human oversight workflows</li>
                </ul>
              </CardContent>
            </Card>

            {/* Model Explainability */}
            <Card className="border-white/10 bg-[#0F172A]/50 backdrop-blur-md transition-all hover:border-[#F47F21]/50">
              <CardHeader>
                <Eye className="mb-4 h-12 w-12 text-[#F47F21]" />
                <CardTitle>AI Explainability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-gray-300">
                  Generate clear explanations for AI decisions to meet regulatory and consumer disclosure requirements.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start"><CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> Decision reason codes</li>
                  <li className="flex items-start"><CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> Consumer-friendly explanations</li>
                  <li className="flex items-start"><CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> Regulatory documentation</li>
                </ul>
              </CardContent>
            </Card>

            {/* Data Privacy */}
            <Card className="border-white/10 bg-[#0F172A]/50 backdrop-blur-md transition-all hover:border-[#F47F21]/50">
              <CardHeader>
                <Lock className="mb-4 h-12 w-12 text-[#F47F21]" />
                <CardTitle>Customer Data Protection</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-gray-300">
                  Secure handling of sensitive customer data in AI systems with privacy-preserving techniques.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start"><CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> PII masking and encryption</li>
                  <li className="flex items-start"><CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> Access controls and logging</li>
                  <li className="flex items-start"><CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> Third-party risk management</li>
                </ul>
              </CardContent>
            </Card>

            {/* Regulatory Audit */}
            <Card className="border-white/10 bg-[#0F172A]/50 backdrop-blur-md transition-all hover:border-[#F47F21]/50">
              <CardHeader>
                <FileText className="mb-4 h-12 w-12 text-[#F47F21]" />
                <CardTitle>State Exam Readiness</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-gray-300">
                  Maintain audit-ready documentation for state insurance department examinations and market conduct reviews.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start"><CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> Model governance documentation</li>
                  <li className="flex items-start"><CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> Fairness testing evidence</li>
                  <li className="flex items-start"><CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> Continuous compliance tracking</li>
                </ul>
              </CardContent>
            </Card>

            {/* Model Risk */}
            <Card className="border-white/10 bg-[#0F172A]/50 backdrop-blur-md transition-all hover:border-[#F47F21]/50">
              <CardHeader>
                <TrendingUp className="mb-4 h-12 w-12 text-[#F47F21]" />
                <CardTitle>Insurance Model Risk</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-gray-300">
                  Comprehensive model risk management for actuarial and pricing AI systems.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start"><CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> Model validation and testing</li>
                  <li className="flex items-start"><CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> Performance monitoring</li>
                  <li className="flex items-start"><CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> Change management controls</li>
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
                <div className="mb-2 text-lg font-semibold">Fair Outcomes</div>
                <p className="text-sm text-gray-300">Zero discrimination findings</p>
              </CardContent>
            </Card>

            <Card className="border-[#F47F21]/50 bg-gradient-to-br from-[#F47F21]/20 to-[#FF6B35]/20">
              <CardContent className="p-6 text-center">
                <div className="mb-2 text-4xl font-bold text-[#F47F21]">95%</div>
                <div className="mb-2 text-lg font-semibold">Claims Accuracy</div>
                <p className="text-sm text-gray-300">Reduced processing errors</p>
              </CardContent>
            </Card>

            <Card className="border-[#F47F21]/50 bg-gradient-to-br from-[#F47F21]/20 to-[#FF6B35]/20">
              <CardContent className="p-6 text-center">
                <div className="mb-2 text-4xl font-bold text-[#F47F21]">70%</div>
                <div className="mb-2 text-lg font-semibold">Faster Audits</div>
                <p className="text-sm text-gray-300">Streamlined state exams</p>
              </CardContent>
            </Card>

            <Card className="border-[#F47F21]/50 bg-gradient-to-br from-[#F47F21]/20 to-[#FF6B35]/20">
              <CardContent className="p-6 text-center">
                <div className="mb-2 text-4xl font-bold text-[#F47F21]">60%</div>
                <div className="mb-2 text-lg font-semibold">Cost Savings</div>
                <p className="text-sm text-gray-300">Lower compliance overhead</p>
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
              <h2 className="mb-4 text-3xl font-bold">Deploy Fair, Compliant AI in Your Insurance Business</h2>
              <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-300">
                Ensure fairness, accuracy, and regulatory compliance. Schedule a consultation to discuss your insurance AI needs.
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
        serviceType="insurance-industry"
      />
    </div>
  );
};

export default InsuranceClient;

