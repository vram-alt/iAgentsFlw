'use client'

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Shield, Target, Users, Zap, Award, Globe, Wrench, Briefcase, Server, Building2, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutClient = () => {
  const values = [
    {
      icon: Shield,
      title: 'Trust & Security',
      description: 'We prioritize the security and privacy of your data above all else, ensuring compliance with global standards.'
    },
    {
      icon: Target,
      title: 'Innovation First',
      description: 'Constantly pushing boundaries with cutting-edge AI and automation technologies to solve complex compliance challenges.'
    },
    {
      icon: Users,
      title: 'Customer Success',
      description: 'Your success is our mission. We provide dedicated support and guidance throughout your compliance journey.'
    },
    {
      icon: Zap,
      title: 'Speed & Efficiency',
      description: 'Automating compliance processes to save time and resources while maintaining the highest quality standards.'
    }
  ];

  const stats = [
    { number: '500+', label: 'Enterprise Clients' },
    { number: '50+', label: 'Countries Served' },
    { number: '99.9%', label: 'Uptime SLA' },
    { number: '24/7', label: 'Support Available' }
  ];

  const team = [
    {
      name: 'Leadership Team',
      description: 'Decades of combined experience in compliance, AI, and enterprise software'
    },
    {
      name: 'Engineering',
      description: 'World-class engineers from top tech companies building scalable solutions'
    },
    {
      name: 'Compliance Experts',
      description: 'Former regulators and auditors ensuring best-in-class compliance guidance'
    }
  ];

  const tools = [
    {
      name: 'AppsBee',
      description: 'Enterprise Apps & AI Governance platform for comprehensive visibility and control across your application ecosystem.',
      link: '/tools/appsbee',
      features: ['AI Usage Monitoring', 'Shadow AI Detection', 'Policy Enforcement', 'Risk Assessment']
    },
    {
      name: 'iComply',
      description: 'Intelligent compliance automation platform that transforms complex regulatory requirements into streamlined processes.',
      link: '/tools/icomply',
      features: ['Automated Compliance', 'Real-time Monitoring', 'Audit Trail', 'Regulatory Updates']
    },
    {
      name: 'AgentFlow',
      description: 'Production-safe AI agents for enterprise with built-in governance, compliance, and security controls.',
      link: '/tools/agentflow',
      features: ['AI Agent Orchestration', 'Safety Guardrails', 'Workflow Automation', 'Enterprise Integration']
    },
    {
      name: 'DocX.AI',
      description: 'Enterprise document intelligence platform powered by AI for automated processing and analysis.',
      link: '/tools/docx',
      features: ['Document Processing', 'Smart Extraction', 'Compliance Checking', 'Version Control']
    },
    {
      name: 'iPrivacyHub',
      description: 'AI enterprise privacy platform for comprehensive data protection and privacy compliance management.',
      link: '/tools/iprivacyhub',
      features: ['DSAR Automation', 'Consent Management', 'PII Detection', 'Multi-Framework Support']
    }
  ];

  const services = [
    {
      name: 'Assessment Services',
      description: 'Comprehensive AI compliance evaluation and risk assessment to identify gaps and opportunities.',
      link: '/services/assessment',
      includes: ['Current State Analysis', 'Risk Assessment', 'Gap Analysis', 'Roadmap Development']
    },
    {
      name: 'Managed Services',
      description: '24/7 monitoring and oversight of your AI compliance and governance programs with expert support.',
      link: '/services/managed-services',
      includes: ['Continuous Monitoring', 'Incident Response', 'Policy Updates', 'Reporting & Analytics']
    },
    {
      name: 'Audit Readiness',
      description: 'Complete audit preparation and support to ensure you\'re ready for regulatory reviews.',
      link: '/services/audit-readiness',
      includes: ['Documentation Review', 'Mock Audits', 'Evidence Collection', 'Audit Support']
    }
  ];

  const platforms = [
    {
      name: 'Salesforce',
      description: 'Deep integration with Salesforce for AI governance, compliance monitoring, and data protection across your CRM ecosystem.',
      link: '/platforms/salesforce',
      capabilities: ['AI Usage Tracking', 'Data Governance', 'Einstein Analytics', 'Custom Workflows']
    },
    {
      name: 'ServiceNow',
      description: 'Native ServiceNow integration for compliance automation, incident management, and governance workflows.',
      link: '/platforms/servicenow',
      capabilities: ['ITSM Integration', 'Compliance Automation', 'Change Management', 'Risk Tracking']
    },
    {
      name: 'Workday',
      description: 'Seamless Workday integration for HR compliance, data privacy, and workforce AI governance.',
      link: '/platforms/workday',
      capabilities: ['HR Compliance', 'Data Privacy', 'Workforce Analytics', 'Policy Enforcement']
    }
  ];

  const industries = [
    {
      name: 'Financial Services',
      description: 'Specialized compliance solutions for banks, insurance companies, and financial institutions navigating complex regulations.',
      link: '/industries/finance',
      focus: ['Basel III/IV Compliance', 'AML/KYC Automation', 'Model Risk Management', 'Regulatory Reporting']
    },
    {
      name: 'Healthcare',
      description: 'HIPAA-compliant AI solutions for healthcare providers, ensuring patient data protection and regulatory compliance.',
      link: '/industries/healthcare',
      focus: ['HIPAA Compliance', 'Patient Privacy', 'Clinical AI Governance', 'PHI Protection']
    },
    {
      name: 'Insurance',
      description: 'Insurance-specific compliance and governance solutions for underwriting, claims, and risk management AI systems.',
      link: '/industries/insurance',
      focus: ['Actuarial AI', 'Claims Processing', 'Risk Assessment', 'Regulatory Compliance']
    }
  ];

  return (
    <div className="min-h-screen bg-[#0A0F1A] text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-[#F47F21]/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center space-y-6"
          >
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F47F21] to-[#FF6B35]">
                AgentFlow.ai
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed">
              Leading the AI compliance revolution with intelligent automation and enterprise-grade governance solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-[#0F172A]/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="text-center">
                <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
                <p className="text-xl text-gray-300 leading-relaxed">
                  To empower enterprises with AI-driven compliance solutions that transform complex regulatory requirements 
                  into streamlined, automated processes. We believe compliance should be proactive, not reactive – and 
                  technology should make it effortless.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#F47F21]/10 to-[#FF6B35]/10 border border-[#F47F21]/20 rounded-2xl p-8 mt-12">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <Award className="w-8 h-8 text-[#F47F21]" />
                  Our Vision
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  To create a world where AI systems operate with complete transparency, accountability, and compliance – 
                  enabling innovation without compromise. We envision enterprises confidently deploying AI at scale, 
                  knowing they&apos;re protected by intelligent, adaptive compliance frameworks.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20 bg-gradient-to-br from-[#0A0F1A] via-[#0F172A] to-[#0A0F1A]">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Wrench className="w-10 h-10 text-[#F47F21]" />
              <h2 className="text-4xl font-bold">Our Tools</h2>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI governance and compliance platform suite
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10 hover:border-[#F47F21]/50 transition-all hover:scale-105 h-full group">
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-[#F47F21] transition-colors">
                      {tool.name}
                    </h3>
                    <p className="text-gray-400 mb-4 leading-relaxed">
                      {tool.description}
                    </p>
                    <div className="space-y-2 mb-4">
                      {tool.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#F47F21]" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    <Link
                      href={tool.link}
                      className="inline-flex items-center gap-2 text-[#F47F21] hover:text-[#FF6B35] transition-colors font-medium"
                    >
                      Learn More <ArrowRight className="w-4 h-4" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-[#0F172A]/30">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Briefcase className="w-10 h-10 text-[#F47F21]" />
              <h2 className="text-4xl font-bold">Our Services</h2>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Expert-led compliance and governance services
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10 hover:border-[#F47F21]/50 transition-all hover:scale-105 h-full group">
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-[#F47F21] transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-gray-400 mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="space-y-2 mb-4">
                      <div className="text-sm font-semibold text-gray-300 mb-2">Includes:</div>
                      {service.includes.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#F47F21]" />
                          {item}
                        </div>
                      ))}
                    </div>
                    <Link
                      href={service.link}
                      className="inline-flex items-center gap-2 text-[#F47F21] hover:text-[#FF6B35] transition-colors font-medium"
                    >
                      Learn More <ArrowRight className="w-4 h-4" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20 bg-gradient-to-br from-[#0A0F1A] via-[#0F172A] to-[#0A0F1A]">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Server className="w-10 h-10 text-[#F47F21]" />
              <h2 className="text-4xl font-bold">Platform Integrations</h2>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Native integrations with leading enterprise platforms
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {platforms.map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10 hover:border-[#F47F21]/50 transition-all hover:scale-105 h-full group">
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-[#F47F21] transition-colors">
                      {platform.name}
                    </h3>
                    <p className="text-gray-400 mb-4 leading-relaxed">
                      {platform.description}
                    </p>
                    <div className="space-y-2 mb-4">
                      <div className="text-sm font-semibold text-gray-300 mb-2">Capabilities:</div>
                      {platform.capabilities.map((capability, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#F47F21]" />
                          {capability}
                        </div>
                      ))}
                    </div>
                    <Link
                      href={platform.link}
                      className="inline-flex items-center gap-2 text-[#F47F21] hover:text-[#FF6B35] transition-colors font-medium"
                    >
                      Learn More <ArrowRight className="w-4 h-4" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-[#0F172A]/30">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Building2 className="w-10 h-10 text-[#F47F21]" />
              <h2 className="text-4xl font-bold">Industries We Serve</h2>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Specialized solutions for regulated industries
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10 hover:border-[#F47F21]/50 transition-all hover:scale-105 h-full group">
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-[#F47F21] transition-colors">
                      {industry.name}
                    </h3>
                    <p className="text-gray-400 mb-4 leading-relaxed">
                      {industry.description}
                    </p>
                    <div className="space-y-2 mb-4">
                      <div className="text-sm font-semibold text-gray-300 mb-2">Focus Areas:</div>
                      {industry.focus.map((area, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#F47F21]" />
                          {area}
                        </div>
                      ))}
                    </div>
                    <Link
                      href={industry.link}
                      className="inline-flex items-center gap-2 text-[#F47F21] hover:text-[#FF6B35] transition-colors font-medium"
                    >
                      Learn More <ArrowRight className="w-4 h-4" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-[#0A0F1A] via-[#0F172A] to-[#0A0F1A]">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">By The Numbers</h2>
            <p className="text-xl text-gray-300">Trusted by enterprises worldwide</p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10 hover:border-[#F47F21]/50 transition-all hover:scale-105">
                  <CardContent className="p-8 text-center">
                    <div className="text-4xl font-bold text-[#F47F21] mb-2">{stat.number}</div>
                    <div className="text-gray-400">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-[#0F172A]/30">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10 hover:border-[#F47F21]/50 transition-all hover:scale-105 h-full">
                    <CardContent className="p-8">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#F47F21] to-[#FF6B35] flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                          <p className="text-gray-400">{value.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-[#0A0F1A] via-[#0F172A] to-[#0A0F1A]">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Our Team</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experts in AI, compliance, and enterprise technology
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10 hover:border-[#F47F21]/50 transition-all hover:scale-105 h-full">
                  <CardContent className="p-8 text-center">
                    <Globe className="w-12 h-12 text-[#F47F21] mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-3">{member.name}</h3>
                    <p className="text-gray-400">{member.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#F47F21]/10 via-[#FF6B35]/5 to-transparent relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#F47F21]/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto p-12 rounded-3xl bg-[#0F172A]/50 backdrop-blur-md border-2 border-[#F47F21]/20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Compliance?
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Join hundreds of enterprises already using AgentFlow.ai to automate and streamline their compliance processes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-[#F47F21] rounded-lg hover:bg-[#F47F21]/90 transition-all hover:scale-105"
              >
                Get Started
              </Link>
              <Link
                href="/tools/appsbee"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-white/20 rounded-lg hover:border-[#F47F21] transition-all hover:scale-105"
              >
                Explore Our Tools
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutClient;

