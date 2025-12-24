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
  Heart,
  Lock,
  Eye,
  Activity,
  Users,
  FileCheck,
  Database
} from 'lucide-react';

const HealthcareClient = () => {
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
              <span className="text-[#F47F21]">Healthcare</span>
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
                Healthcare & Life Sciences
              </Badge>

              <h1 className="text-4xl font-bold leading-tight lg:text-5xl">
                HIPAA-Compliant{' '}
                <span className="bg-gradient-to-r from-[#F47F21] to-[#FF6B35] bg-clip-text text-transparent">
                  AI Governance
                </span>
              </h1>

              <p className="text-xl leading-relaxed text-gray-300">
                Deploy AI in healthcare while protecting PHI and meeting HIPAA, HITECH, and FDA requirements. Expert managed services for safe, compliant healthcare AI.
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
              <h2 className="mb-4 text-3xl font-bold">Unique AI Challenges in Healthcare</h2>
              <p className="mx-auto max-w-3xl text-xl text-gray-300">
                Healthcare organizations face critical compliance and safety requirements when deploying AI
              </p>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="border-white/10 bg-[#0F172A]/50 backdrop-blur-md">
                <CardHeader>
                  <Lock className="mb-4 h-12 w-12 text-[#F47F21]" />
                  <CardTitle>PHI Protection</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-gray-300">
                    Protected Health Information (PHI) must be safeguarded in AI systems with strict access controls and encryption.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start"><AlertTriangle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> PHI in AI prompts and responses</li>
                    <li className="flex items-start"><AlertTriangle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> Business Associate Agreements</li>
                    <li className="flex items-start"><AlertTriangle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> Minimum necessary principle</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-white/10 bg-[#0F172A]/50 backdrop-blur-md">
                <CardHeader>
                  <Heart className="mb-4 h-12 w-12 text-[#F47F21]" />
                  <CardTitle>Patient Safety</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-gray-300">
                    AI errors in healthcare can have life-threatening consequences. Rigorous validation and monitoring are essential.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start"><AlertTriangle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> Clinical decision support accuracy</li>
                    <li className="flex items-start"><AlertTriangle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> Drug interaction hallucinations</li>
                    <li className="flex items-start"><AlertTriangle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> Diagnostic AI reliability</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-white/10 bg-[#0F172A]/50 backdrop-blur-md">
                <CardHeader>
                  <FileCheck className="mb-4 h-12 w-12 text-[#F47F21]" />
                  <CardTitle>Regulatory Complexity</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-gray-300">
                    Multiple overlapping regulations including HIPAA, HITECH, FDA guidelines, and state-specific privacy laws.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start"><AlertTriangle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> HIPAA Privacy & Security Rules</li>
                    <li className="flex items-start"><AlertTriangle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> FDA AI/ML medical device rules</li>
                    <li className="flex items-start"><AlertTriangle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> State breach notification laws</li>
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
              <h2 className="mb-4 text-3xl font-bold">Healthcare Compliance Frameworks</h2>
              <p className="mx-auto max-w-3xl text-xl text-gray-300">
                We ensure your AI systems meet all healthcare regulatory requirements
              </p>
            </motion.div>

            <div className="mx-auto max-w-5xl space-y-6">
              <Card className="border-white/10 bg-[#0F172A]/50 backdrop-blur-md">
                <CardContent className="p-8">
                  <div className="grid gap-8 md:grid-cols-2">
                    <div>
                      <h3 className="mb-4 flex items-center text-xl font-bold">
                        <Shield className="mr-2 h-6 w-6 text-[#F47F21]" />
                        US Healthcare Regulations
                      </h3>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <CheckCircle className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-[#F47F21]" />
                          <div>
                            <strong>HIPAA Privacy Rule</strong>
                            <p className="text-sm text-gray-400">PHI protection and patient consent requirements</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-[#F47F21]" />
                          <div>
                            <strong>HIPAA Security Rule</strong>
                            <p className="text-sm text-gray-400">Technical safeguards for electronic PHI</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-[#F47F21]" />
                          <div>
                            <strong>HITECH Act</strong>
                            <p className="text-sm text-gray-400">Breach notification and penalties</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-[#F47F21]" />
                          <div>
                            <strong>FDA Regulations</strong>
                            <p className="text-sm text-gray-400">AI/ML as medical device guidelines</p>
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
                            <p className="text-sm text-gray-400">High-risk medical AI requirements</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-[#F47F21]" />
                          <div>
                            <strong>GDPR</strong>
                            <p className="text-sm text-gray-400">EU patient data protection</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-[#F47F21]" />
                          <div>
                            <strong>ISO 27001/27701</strong>
                            <p className="text-sm text-gray-400">Information security and privacy management</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-[#F47F21]" />
                          <div>
                            <strong>ISO 42001</strong>
                            <p className="text-sm text-gray-400">AI management systems for healthcare</p>
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
              <h2 className="mb-4 text-3xl font-bold">Managed Services for Healthcare</h2>
              <p className="mx-auto max-w-3xl text-xl text-gray-300">
                Specialized AI governance for healthcare organizations
              </p>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* PHI Protection */}
              <Card className="border-white/10 bg-[#0F172A]/50 backdrop-blur-md transition-all hover:border-[#F47F21]/50">
                <CardHeader>
                  <Lock className="mb-4 h-12 w-12 text-[#F47F21]" />
                  <CardTitle>PHI Guardrails</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-gray-300">
                    Automated detection and protection of PHI in AI systems with real-time monitoring and masking.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start"><CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> PHI detection in prompts</li>
                    <li className="flex items-start"><CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> Data masking and anonymization</li>
                    <li className="flex items-start"><CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> Access logging and audit trails</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Clinical Safety */}
              <Card className="border-white/10 bg-[#0F172A]/50 backdrop-blur-md transition-all hover:border-[#F47F21]/50">
                <CardHeader>
                  <Activity className="mb-4 h-12 w-12 text-[#F47F21]" />
                  <CardTitle>Clinical Safety Monitoring</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-gray-300">
                    Continuous monitoring of clinical AI systems for accuracy, bias, and potential patient safety risks.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start"><CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> Clinical decision validation</li>
                    <li className="flex items-start"><CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> Drug interaction checking</li>
                    <li className="flex items-start"><CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> Alert fatigue prevention</li>
                  </ul>
                </CardContent>
              </Card>

              {/* HIPAA Compliance */}
              <Card className="border-white/10 bg-[#0F172A]/50 backdrop-blur-md transition-all hover:border-[#F47F21]/50">
                <CardHeader>
                  <Eye className="mb-4 h-12 w-12 text-[#F47F21]" />
                  <CardTitle>HIPAA Compliance Ops</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-gray-300">
                    End-to-end HIPAA compliance management for AI systems including risk assessments and controls.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start"><CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> Security risk assessments</li>
                    <li className="flex items-start"><CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> Business Associate management</li>
                    <li className="flex items-start"><CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> Breach response planning</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Consent Management */}
              <Card className="border-white/10 bg-[#0F172A]/50 backdrop-blur-md transition-all hover:border-[#F47F21]/50">
                <CardHeader>
                  <FileCheck className="mb-4 h-12 w-12 text-[#F47F21]" />
                  <CardTitle>Patient Consent & Rights</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-gray-300">
                    Manage patient consent for AI use, data access rights, and opt-out requests systematically.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start"><CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> Consent capture and tracking</li>
                    <li className="flex items-start"><CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> Patient access requests</li>
                    <li className="flex items-start"><CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> Opt-out management</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Audit Readiness */}
              <Card className="border-white/10 bg-[#0F172A]/50 backdrop-blur-md transition-all hover:border-[#F47F21]/50">
                <CardHeader>
                  <FileText className="mb-4 h-12 w-12 text-[#F47F21]" />
                  <CardTitle>Healthcare Audit Prep</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-gray-300">
                    Maintain audit-ready evidence for HIPAA, HHS audits, and JointCommission reviews.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start"><CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> HIPAA control testing</li>
                    <li className="flex items-start"><CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> Security documentation</li>
                    <li className="flex items-start"><CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> Continuous evidence collection</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Data Governance */}
              <Card className="border-white/10 bg-[#0F172A]/50 backdrop-blur-md transition-all hover:border-[#F47F21]/50">
                <CardHeader>
                  <Database className="mb-4 h-12 w-12 text-[#F47F21]" />
                  <CardTitle>Healthcare Data Governance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-gray-300">
                    Comprehensive data governance for clinical data in AI systems with lifecycle management.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start"><CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> Data retention policies</li>
                    <li className="flex items-start"><CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> De-identification validation</li>
                    <li className="flex items-start"><CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#F47F21]" /> Third-party data sharing</li>
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
                  <div className="mb-2 text-lg font-semibold">HIPAA Compliant</div>
                  <p className="text-sm text-gray-300">Full regulatory adherence</p>
                </CardContent>
              </Card>

              <Card className="border-[#F47F21]/50 bg-gradient-to-br from-[#F47F21]/20 to-[#FF6B35]/20">
                <CardContent className="p-6 text-center">
                  <div className="mb-2 text-4xl font-bold text-[#F47F21]">Zero</div>
                  <div className="mb-2 text-lg font-semibold">PHI Breaches</div>
                  <p className="text-sm text-gray-300">Proactive protection</p>
                </CardContent>
              </Card>

              <Card className="border-[#F47F21]/50 bg-gradient-to-br from-[#F47F21]/20 to-[#FF6B35]/20">
                <CardContent className="p-6 text-center">
                  <div className="mb-2 text-4xl font-bold text-[#F47F21]">80%</div>
                  <div className="mb-2 text-lg font-semibold">Faster Deployment</div>
                  <p className="text-sm text-gray-300">Accelerated compliance</p>
                </CardContent>
              </Card>

              <Card className="border-[#F47F21]/50 bg-gradient-to-br from-[#F47F21]/20 to-[#FF6B35]/20">
                <CardContent className="p-6 text-center">
                  <div className="mb-2 text-4xl font-bold text-[#F47F21]">99.9%</div>
                  <div className="mb-2 text-lg font-semibold">Uptime</div>
                  <p className="text-sm text-gray-300">Critical care reliability</p>
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
                <h2 className="mb-4 text-3xl font-bold">Deploy AI Safely in Your Healthcare Organization</h2>
                <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-300">
                  Protect PHI, ensure patient safety, and maintain HIPAA compliance. Schedule a consultation to discuss your healthcare AI needs.
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
          serviceType="healthcare-industry"
        />
      </div>
  );
};

export default HealthcareClient;

