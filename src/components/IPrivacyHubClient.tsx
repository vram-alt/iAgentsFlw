'use client'

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Shield,
  Lock,
  Eye,
  FileText,
  Users,
  AlertTriangle,
  CheckCircle,
  ArrowRight,
  Database,
  Clock,
  TrendingDown,
  Globe,
  FileCheck,
  Scale,
  Zap,
  Settings,
  BarChart3,
  RefreshCw,
  UserX,
  Search,
  Download,
  Bell,
  Target,
  Workflow,
  CheckSquare,
  XCircle,
  ClipboardCheck,
  Book
} from 'lucide-react';
import ContactFormModal from '@/components/ContactFormModal';

const IPrivacyHubClient = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState('dpo');
  const [selectedModule, setSelectedModule] = useState('dsar');

  const roles = {
    dpo: {
      title: 'DPO / Privacy',
      icon: Shield,
      outcomes: [
        'Cut DSAR cycle times with routing & SLA tracking',
        'Generate RoPA and DPIA packs in clicks',
        'Publish consent & cookie preferences consistently',
        'Automated breach notification workflows'
      ],
      metric: '>50% faster request fulfillment'
    },
    security: {
      title: 'Security & GRC',
      icon: Lock,
      outcomes: [
        'Evidence locker and approval trails for audits',
        'Program scoring with real-time dashboards',
        'Incident runbooks and breach timeline tracking',
        'Automated compliance reporting'
      ],
      metric: 'Audit prep in days, not weeks'
    },
    legal: {
      title: 'Legal Counsel',
      icon: Scale,
      outcomes: [
        'Map privacy regulations to obligations and actions',
        'Export regulator-ready documentation instantly',
        'Keep immutable record of privacy decisions',
        'Track cross-border data transfers'
      ],
      metric: 'Fewer back-and-forth with auditors'
    },
    ai: {
      title: 'AI/Data Teams',
      icon: Database,
      outcomes: [
        'PII detection and redaction in AI training data',
        'Data minimization patterns for AI systems',
        'Purpose limitation enforcement for models',
        'Privacy-preserving AI techniques integration'
      ],
      metric: 'Privacy by design, not as afterthought'
    }
  };

  const modules = {
    dsar: {
      title: 'Data Subject Access Requests',
      icon: FileText,
      description: 'Automate DSAR workflows from intake to fulfillment across all your AI systems',
      metrics: [
        { label: 'Response Time', value: '72%', desc: 'faster than manual' },
        { label: 'Compliance Rate', value: '100%', desc: 'on-time responses' },
        { label: 'Request Volume', value: '500+', desc: 'processed monthly' }
      ],
      features: [
        {
          title: 'Intake Automation',
          description: 'Multi-channel request collection (email, forms, API)',
          icon: Download
        },
        {
          title: 'Identity Verification',
          description: 'Automated identity proofing with fraud detection',
          icon: CheckCircle
        },
        {
          title: 'Data Discovery',
          description: 'Scan AI training data, models, logs, and databases',
          icon: Search
        },
        {
          title: 'Orchestration',
          description: 'Route requests to right teams with SLA tracking',
          icon: Workflow
        },
        {
          title: 'Response Generation',
          description: 'Auto-compile reports in regulatory formats',
          icon: FileCheck
        },
        {
          title: 'Audit Trail',
          description: 'Complete timeline of actions and decisions',
          icon: Clock
        }
      ],
      supportedRequests: [
        'Access Requests',
        'Deletion/Erasure',
        'Rectification',
        'Data Portability',
        'Restriction of Processing',
        'Objection',
        'Opt-Out (CCPA)',
        'Do Not Sell (CPRA)'
      ]
    },
    consent: {
      title: 'Consent & Preference Management',
      icon: CheckSquare,
      description: 'Centralized consent management for AI systems with real-time enforcement',
      metrics: [
        { label: 'Consent Rate', value: '35%', desc: 'higher with UX optimization' },
        { label: 'Compliance Score', value: '98%', desc: 'audit readiness' },
        { label: 'User Trust', value: '+45%', desc: 'transparency increase' }
      ],
      features: [
        {
          title: 'Consent Capture',
          description: 'Granular consent collection with clear language',
          icon: CheckSquare
        },
        {
          title: 'Preference Center',
          description: 'Self-service portal for users to manage preferences',
          icon: Settings
        },
        {
          title: 'Real-time Enforcement',
          description: 'Sync consent state to all AI systems instantly',
          icon: Zap
        },
        {
          title: 'Consent Proof',
          description: 'Timestamped audit trail of consent capture',
          icon: Shield
        },
        {
          title: 'Withdrawal Processing',
          description: 'Instant consent withdrawal across all systems',
          icon: UserX
        },
        {
          title: 'Cookie Management',
          description: 'Compliant cookie banners and tracking controls',
          icon: Globe
        }
      ],
      supportedRequests: [
        'Purpose-based Consent',
        'Granular Preferences',
        'Cookie Consent',
        'Marketing Opt-in/out',
        'AI Training Consent',
        'Profiling Consent',
        'Third-party Sharing',
        'Children\'s Consent (COPPA)'
      ]
    },
    pii: {
      title: 'PII Detection & Data Minimization',
      icon: Eye,
      description: 'Automatically detect, classify, and minimize personal data in AI systems',
      metrics: [
        { label: 'Detection Accuracy', value: '97%', desc: 'PII identification rate' },
        { label: 'Data Reduced', value: '60%', desc: 'unnecessary PII eliminated' },
        { label: 'Risk Reduction', value: '85%', desc: 'exposure minimized' }
      ],
      features: [
        {
          title: 'Intelligent Scanning',
          description: 'ML-powered PII detection across structured & unstructured data',
          icon: Search
        },
        {
          title: 'Classification',
          description: 'Auto-categorize: identity, financial, health, biometric, behavioral',
          icon: FileText
        },
        {
          title: 'Redaction',
          description: 'Format-preserving redaction for AI training data',
          icon: Eye
        },
        {
          title: 'Anonymization',
          description: 'K-anonymity, differential privacy, pseudonymization',
          icon: Lock
        },
        {
          title: 'Purpose Limitation',
          description: 'Enforce data use only for specified purposes',
          icon: Target
        },
        {
          title: 'Retention Control',
          description: 'Auto-delete data after retention period expires',
          icon: Clock
        }
      ],
      supportedRequests: [
        'Names & Contact Info',
        'Financial Data',
        'Health Information (PHI)',
        'Biometric Data',
        'Location Data',
        'Behavioral Patterns',
        'Voice & Audio',
        'Images & Video',
        'Device Identifiers'
      ]
    },
    ropa: {
      title: 'Records of Processing (RoPA) & DPIA',
      icon: Book,
      description: 'Automated generation and maintenance of privacy documentation',
      metrics: [
        { label: 'Time Saved', value: '90%', desc: 'vs manual documentation' },
        { label: 'Audit Success', value: '100%', desc: 'regulator-ready reports' },
        { label: 'Updates', value: 'Real-time', desc: 'always current' }
      ],
      features: [
        {
          title: 'Auto-Discovery',
          description: 'Scan systems to identify processing activities',
          icon: Search
        },
        {
          title: 'RoPA Generation',
          description: 'GDPR Article 30 compliant records',
          icon: FileText
        },
        {
          title: 'DPIA Workflow',
          description: 'Risk assessment for high-risk processing',
          icon: AlertTriangle
        },
        {
          title: 'Transfer Tracking',
          description: 'Map and document cross-border data flows',
          icon: Globe
        },
        {
          title: 'Third-party Mapping',
          description: 'Track processors, sub-processors, and vendors',
          icon: Users
        },
        {
          title: 'Export Reports',
          description: 'Regulator-ready formats (EU, UK, CCPA)',
          icon: Download
        }
      ],
      supportedRequests: [
        'Processing Activities Registry',
        'Data Protection Impact Assessments',
        'Legitimate Interest Assessments',
        'Transfer Impact Assessments',
        'Vendor Risk Assessments',
        'AI Ethics Assessments',
        'Algorithmic Impact Assessments',
        'Children\'s Data Assessments'
      ]
    },
    breach: {
      title: 'Breach Management & Notifications',
      icon: AlertTriangle,
      description: 'Rapid breach detection, assessment, and notification workflows',
      metrics: [
        { label: 'Detection Time', value: '<1 hour', desc: 'from incident' },
        { label: 'Notification Speed', value: '<24 hrs', desc: 'to regulators' },
        { label: 'Compliance', value: '100%', desc: '72-hour GDPR deadline' }
      ],
      features: [
        {
          title: 'Incident Detection',
          description: 'Integration with SIEM and security tools for alerts',
          icon: Bell
        },
        {
          title: 'Risk Assessment',
          description: 'Auto-categorize severity and regulatory obligations',
          icon: Shield
        },
        {
          title: 'Timeline Tracking',
          description: 'Immutable log of breach discovery and response',
          icon: Clock
        },
        {
          title: 'Notification Engine',
          description: 'Auto-generate notices for regulators and data subjects',
          icon: FileText
        },
        {
          title: 'Regulator Portal',
          description: 'Direct filing to ICO, CNIL, state AGs, etc.',
          icon: Download
        },
        {
          title: 'Communication',
          description: 'Mass notification to affected individuals',
          icon: Users
        }
      ],
      supportedRequests: [
        'GDPR 72-hour Notifications',
        'CCPA/CPRA Breach Reporting',
        'State Law Notifications (US)',
        'HIPAA Breach Reporting',
        'Credit Monitoring Offers',
        'Breach Register',
        'Incident Response Plans',
        'Post-Breach Audit'
      ]
    },
    compliance: {
      title: 'Multi-Framework Compliance',
      icon: Globe,
      description: 'Centralized compliance management for global privacy regulations',
      metrics: [
        { label: 'Frameworks', value: '15+', desc: 'supported regulations' },
        { label: 'Coverage', value: '95%', desc: 'of global markets' },
        { label: 'Updates', value: 'Real-time', desc: 'regulation changes' }
      ],
      features: [
        {
          title: 'Regulation Mapping',
          description: 'Map requirements to controls and evidence',
          icon: FileCheck
        },
        {
          title: 'Compliance Dashboard',
          description: 'Real-time compliance posture scoring',
          icon: BarChart3
        },
        {
          title: 'Gap Analysis',
          description: 'Identify compliance gaps and remediation steps',
          icon: Target
        },
        {
          title: 'Evidence Collection',
          description: 'Auto-collect audit evidence continuously',
          icon: Database
        },
        {
          title: 'Reporting',
          description: 'Generate compliance reports for stakeholders',
          icon: FileText
        },
        {
          title: 'Policy Management',
          description: 'Centralized privacy policies and notices',
          icon: Book
        }
      ],
      supportedRequests: [
        'GDPR (EU)',
        'CCPA/CPRA (California)',
        'LGPD (Brazil)',
        'PIPEDA (Canada)',
        'PDPA (Singapore)',
        'POPIA (South Africa)',
        'UK GDPR',
        'APPI (Japan)',
        'PDPL (Saudi Arabia)',
        'US State Laws (VA, CO, CT, UT)',
        'HIPAA (Healthcare)',
        'COPPA (Children)'
      ]
    }
  };

  const complianceFrameworks = [
    { name: 'GDPR', region: 'EU' },
    { name: 'CCPA/CPRA', region: 'California' },
    { name: 'LGPD', region: 'Brazil' },
    { name: 'PIPEDA', region: 'Canada' },
    { name: 'PDPA', region: 'Singapore' },
    { name: 'POPIA', region: 'South Africa' },
    { name: 'UK GDPR', region: 'United Kingdom' },
    { name: 'APPI', region: 'Japan' }
  ];

  const integrations = [
    { name: 'Salesforce', category: 'CRM' },
    { name: 'Workday', category: 'HR' },
    { name: 'ServiceNow', category: 'ITSM' },
    { name: 'Snowflake', category: 'Data Warehouse' },
    { name: 'AWS S3', category: 'Storage' },
    { name: 'Azure Data Lake', category: 'Storage' },
    { name: 'Databricks', category: 'Data Platform' },
    { name: 'MongoDB', category: 'Database' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'Okta', category: 'Identity' },
    { name: 'Active Directory', category: 'Identity' },
    { name: 'Splunk', category: 'SIEM' }
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
          <div className="max-w-5xl mx-auto text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <Badge className="bg-[#F47F21]/10 text-[#F47F21] border-[#F47F21]/20 text-lg px-4 py-2">
                <Shield className="w-4 h-4 mr-2" />
                iPrivacyHub by AgentsFlow
              </Badge>

              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                AI Enterprise{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F47F21] to-[#FF6B35]">
                  Privacy Platform
                </span>
              </h1>

              <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
                Automate privacy compliance for AI systems. DSAR workflows, consent management, PII detection, and{" "}
                <span className="font-semibold text-white">15+ global privacy frameworks</span> in one platform.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button
                size="lg"
                className="bg-[#F47F21] hover:bg-[#F47F21]/90 text-white text-lg px-8"
                onClick={() => setContactModalOpen(true)}
              >
                Request Demo
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/20 hover:border-[#F47F21] text-lg px-8"
                onClick={() => document.getElementById('modules')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Modules
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid md:grid-cols-4 gap-6 pt-8 max-w-4xl mx-auto"
            >
              {[
                { icon: Clock, label: '72% Faster', desc: 'DSAR response' },
                { icon: CheckCircle, label: '100%', desc: 'Compliance rate' },
                { icon: TrendingDown, label: '85%', desc: 'Risk reduction' },
                { icon: Globe, label: '15+', desc: 'Frameworks' }
              ].map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                  >
                    <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
                      <CardContent className="p-6 text-center">
                        <Icon className="w-8 h-8 text-[#F47F21] mx-auto mb-2" />
                        <div className="text-2xl font-bold text-white mb-1">{stat.label}</div>
                        <div className="text-sm text-gray-400">{stat.desc}</div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Role-Based Outcomes */}
      <section className="py-20 bg-[#0F172A]/30">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">
              Built for Real Teams, <span className="text-gradient">Not Checklists</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Purpose-built workflows for DPOs, Security, Legal, and AI teams
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Role Selector */}
            <div>
              <div className="grid grid-cols-2 gap-3">
                {Object.entries(roles).map(([key, role]) => {
                  const Icon = role.icon;
                  return (
                    <motion.button
                      key={key}
                      onClick={() => setSelectedRole(key)}
                      className={`p-6 rounded-xl text-left transition-all ${
                        selectedRole === key
                          ? 'bg-[#F47F21] text-white shadow-lg scale-105'
                          : 'bg-[#0F172A]/50 text-gray-300 hover:bg-[#0F172A]/80 border border-white/10'
                      }`}
                      whileHover={{ scale: selectedRole === key ? 1.05 : 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Icon className="w-8 h-8 mb-3" />
                      <div className="font-semibold text-lg">{role.title}</div>
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* Role Outcomes */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedRole}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10 h-full">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      {(() => {
                        const Icon = roles[selectedRole as keyof typeof roles].icon;
                        return <Icon className="w-10 h-10 text-[#F47F21]" />;
                      })()}
                      <h3 className="text-2xl font-bold">
                        {roles[selectedRole as keyof typeof roles].title}
                      </h3>
                    </div>

                    <ul className="space-y-4 mb-6">
                      {roles[selectedRole as keyof typeof roles].outcomes.map((outcome, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start gap-3"
                        >
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-300">{outcome}</span>
                        </motion.li>
                      ))}
                    </ul>

                    <div className="bg-gradient-to-r from-[#F47F21]/10 to-[#FF6B35]/10 border border-[#F47F21]/20 rounded-lg p-4">
                      <div className="text-sm text-gray-400 mb-1">Impact Metric</div>
                      <div className="text-lg font-semibold text-[#F47F21]">
                        {roles[selectedRole as keyof typeof roles].metric}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Privacy Modules */}
      <section id="modules" className="py-20 bg-gradient-to-br from-[#0A0F1A] via-[#0F172A] to-[#0A0F1A]">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">
              Comprehensive <span className="text-gradient">Privacy Modules</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              End-to-end privacy automation for every use case
            </p>
          </motion.div>

          <Tabs value={selectedModule} onValueChange={setSelectedModule} className="max-w-7xl mx-auto">
            <TabsList className="grid grid-cols-3 lg:grid-cols-6 mb-8 bg-[#0F172A]/50 p-1">
              {Object.entries(modules).map(([key, module]) => {
                const Icon = module.icon;
                return (
                  <TabsTrigger
                    key={key}
                    value={key}
                    className="data-[state=active]:bg-[#F47F21] data-[state=active]:text-white flex items-center gap-2"
                  >
                    <Icon className="w-4 h-4" />
                    <span className="hidden lg:inline">{module.title.split(' ')[0]}</span>
                  </TabsTrigger>
                );
              })}
            </TabsList>

            {Object.entries(modules).map(([key, module]) => {
              const Icon = module.icon;
              return (
                <TabsContent key={key} value={key}>
                  <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
                    <CardHeader>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#F47F21] to-[#FF6B35] flex items-center justify-center">
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl mb-2">{module.title}</CardTitle>
                          <p className="text-gray-300">{module.description}</p>
                        </div>
                      </div>

                      {/* Metrics */}
                      <div className="grid md:grid-cols-3 gap-4 mb-6">
                        {module.metrics.map((metric, index) => (
                          <Card key={index} className="bg-black/20 border-white/10">
                            <CardContent className="p-4 text-center">
                              <div className="text-3xl font-bold text-[#F47F21] mb-1">
                                {metric.value}
                              </div>
                              <div className="text-sm font-semibold text-white mb-1">
                                {metric.label}
                              </div>
                              <div className="text-xs text-gray-400">{metric.desc}</div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </CardHeader>

                    <CardContent>
                      {/* Features Grid */}
                      <div className="mb-8">
                        <h3 className="text-xl font-bold mb-4">Key Features</h3>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                          {module.features.map((feature, index) => {
                            const FeatureIcon = feature.icon;
                            return (
                              <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 }}
                              >
                                <Card className="bg-black/20 border-white/10 h-full hover:border-[#F47F21]/50 transition-all hover:scale-105 group">
                                  <CardContent className="p-4">
                                    <FeatureIcon className="w-6 h-6 text-[#F47F21] mb-3 group-hover:scale-110 transition-transform" />
                                    <h4 className="font-semibold text-white mb-2">{feature.title}</h4>
                                    <p className="text-sm text-gray-400">{feature.description}</p>
                                  </CardContent>
                                </Card>
                              </motion.div>
                            );
                          })}
                        </div>
                      </div>

                      {/* Supported Capabilities */}
                      <div className="bg-black/20 border-2 border-white/20 rounded-lg p-6">
                        <h4 className="font-semibold text-white mb-4">Supported Capabilities</h4>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
                          {module.supportedRequests.map((capability, index) => (
                            <Badge
                              key={index}
                              variant="secondary"
                              className="bg-white/5 text-gray-300 border-white/10 justify-start"
                            >
                              <CheckCircle className="w-3 h-3 mr-2 text-green-400" />
                              {capability}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              );
            })}
          </Tabs>
        </div>
      </section>

      {/* Compliance Frameworks */}
      <section className="py-20 bg-[#0F172A]/30">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">
              Global <span className="text-gradient">Privacy Frameworks</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Compliance with 15+ privacy regulations across 50+ countries
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {complianceFrameworks.map((framework, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10 hover:border-[#F47F21]/50 transition-all hover:scale-105 group">
                  <CardContent className="p-8 text-center">
                    <div className="font-bold text-white text-3xl mb-2">{framework.name}</div>
                    <div className="text-base text-gray-400">{framework.region}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white/20 hover:border-[#F47F21]"
              onClick={() => setContactModalOpen(true)}
            >
              See Full Framework List
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20 bg-gradient-to-br from-[#0A0F1A] via-[#0F172A] to-[#0A0F1A]">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">
              Enterprise <span className="text-gradient">Integrations</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Connect privacy controls across your entire data ecosystem
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {integrations.map((integration, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.03 }}
                >
                  <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10 hover:border-[#F47F21]/50 transition-all hover:scale-105">
                    <CardContent className="p-4 text-center">
                      <div className="font-semibold text-white text-sm mb-1">{integration.name}</div>
                      <Badge variant="secondary" className="text-xs bg-white/5">
                        {integration.category}
                      </Badge>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
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
            <Shield className="w-16 h-16 text-[#F47F21] mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Privacy-First AI Starts Here
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Automate privacy compliance for your AI systems. DSAR workflows, consent management, and global regulatory coverage in one platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-[#F47F21] hover:bg-[#F47F21]/90 text-white text-lg px-8"
                onClick={() => setContactModalOpen(true)}
              >
                Request Demo
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/20 hover:border-[#F47F21] text-lg px-8"
                asChild
              >
                <a href="/tools/icomply">Explore iComply</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>


      {/* Contact Form Modal */}
      <ContactFormModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        serviceType="iprivacyhub"
      />
    </div>
  );
};

export default IPrivacyHubClient;

