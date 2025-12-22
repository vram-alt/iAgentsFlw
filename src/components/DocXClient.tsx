'use client'

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  FileText,
  Upload,
  Download,
  Sparkles,
  CheckCircle,
  ArrowRight,
  FileCheck,
  Receipt,
  Scale,
  TrendingUp,
  Clock,
  Shield,
  Lock,
  Database,
  Zap,
  FileSearch,
  Briefcase,
  DollarSign,
  AlertTriangle,
  BarChart3,
  FileType,
  FileCode,
  Brain,
  Search,
  Target,
  Users
} from 'lucide-react';
import ContactFormModal from '@/components/ContactFormModal';

const DocXClient = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('contracts');

  const conversionSteps = [
    {
      icon: Upload,
      title: "Upload Your Documents",
      description: "Drag & drop or select PDFs, Word docs, or scanned images",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Brain,
      title: "AI Processing",
      description: "Advanced OCR and NLP extract structured data",
      color: "from-[#F47F21] to-[#FF6B35]"
    },
    {
      icon: FileSearch,
      title: "Intelligent Analysis",
      description: "Identify key terms, clauses, risks, and compliance issues",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Download,
      title: "Export & Integrate",
      description: "CSV, Markdown, JSON, or direct ERP/CRM integration",
      color: "from-green-500 to-emerald-500"
    }
  ];

  const metrics = [
    {
      value: "95",
      suffix: "%",
      label: "Accuracy",
      sublabel: "in data extraction",
      icon: Target,
      color: "text-green-400"
    },
    {
      value: "10",
      suffix: "x",
      label: "Faster Processing",
      sublabel: "vs manual entry",
      icon: Zap,
      color: "text-[#F47F21]"
    },
    {
      value: "70",
      suffix: "%",
      label: "Cost Reduction",
      sublabel: "in document processing",
      icon: TrendingUp,
      color: "text-blue-400"
    }
  ];

  const useCases = {
    contracts: {
      title: "Contracts & Legal",
      icon: Scale,
      description: "Automate contract review, clause extraction, risk assessment, and compliance checks",
      features: [
        { 
          title: "Contract Analysis", 
          description: "Automatically extract key terms, obligations, dates, and parties",
          metrics: "Review time: 2 hours → 5 min"
        },
        { 
          title: "Clause Detection", 
          description: "Identify critical clauses: termination, liability, confidentiality, IP rights",
          metrics: "100% clause coverage"
        },
        { 
          title: "Risk Flagging", 
          description: "Highlight unusual terms, missing provisions, and non-standard language",
          metrics: "85% risk reduction"
        },
        { 
          title: "Compliance Validation", 
          description: "Ensure contracts meet GDPR, SOX, HIPAA, and industry standards",
          metrics: "Audit-ready reports"
        }
      ],
      examples: ["NDAs", "MSAs", "SOWs", "Vendor Agreements", "Employment Contracts", "Licensing"]
    },
    procurement: {
      title: "Procurement & Vendor Management",
      icon: Briefcase,
      description: "Streamline purchase orders, vendor contracts, and procurement documentation",
      features: [
        { 
          title: "PO Processing", 
          description: "Extract line items, prices, delivery dates from purchase orders",
          metrics: "Process time: 30 min → 2 min"
        },
        { 
          title: "Vendor Onboarding", 
          description: "Auto-validate vendor documents, certifications, insurance, and compliance",
          metrics: "80% faster onboarding"
        },
        { 
          title: "Spend Analysis", 
          description: "Aggregate procurement data for spend visibility and savings opportunities",
          metrics: "15% cost savings identified"
        },
        { 
          title: "Contract Renewal", 
          description: "Track expiration dates, auto-renewal clauses, and renegotiation triggers",
          metrics: "Zero missed renewals"
        }
      ],
      examples: ["Purchase Orders", "RFPs", "Vendor Contracts", "SOWs", "Invoices", "Quotes"]
    },
    compliance: {
      title: "Compliance & Risk",
      icon: Shield,
      description: "Ensure regulatory compliance across all documents and identify potential risks",
      features: [
        { 
          title: "Regulatory Mapping", 
          description: "Map contract terms to GDPR, SOX, CCPA, HIPAA requirements",
          metrics: "100% regulation coverage"
        },
        { 
          title: "Audit Trail", 
          description: "Complete document lineage with version control and approval workflows",
          metrics: "SOC 2 Type II ready"
        },
        { 
          title: "Policy Enforcement", 
          description: "Validate documents against internal policies and approval matrices",
          metrics: "90% policy adherence"
        },
        { 
          title: "Risk Scoring", 
          description: "AI-powered risk assessment for every contract and document",
          metrics: "Predictive risk alerts"
        }
      ],
      examples: ["Audit Reports", "Compliance Docs", "Policy Documents", "Risk Assessments"]
    },
    invoices: {
      title: "Invoices & Finance",
      icon: DollarSign,
      description: "Automate invoice processing, AP/AR workflows, and financial document management",
      features: [
        { 
          title: "Invoice Data Extraction", 
          description: "Capture vendor, amounts, line items, taxes, payment terms from any format",
          metrics: "99% accuracy rate"
        },
        { 
          title: "3-Way Matching", 
          description: "Auto-match invoices with POs and receipts for approval automation",
          metrics: "5x faster reconciliation"
        },
        { 
          title: "Duplicate Detection", 
          description: "Prevent duplicate payments with intelligent matching algorithms",
          metrics: "Zero duplicate payments"
        },
        { 
          title: "ERP Integration", 
          description: "Direct posting to SAP, Oracle, NetSuite, QuickBooks with validation",
          metrics: "Real-time sync"
        }
      ],
      examples: ["Vendor Invoices", "Credit Notes", "Receipts", "Expense Reports", "Statements"]
    }
  };

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Extraction",
      description: "Advanced OCR and NLP extract data from any document format - PDFs, scans, images, Word docs.",
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      icon: FileSearch,
      title: "Intelligent Search",
      description: "Semantic search across all documents. Find clauses, terms, obligations instantly.",
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      icon: AlertTriangle,
      title: "Risk & Compliance",
      description: "Auto-flag non-standard terms, missing clauses, and compliance violations.",
      color: "from-red-500/20 to-orange-500/20"
    },
    {
      icon: FileCode,
      title: "Multi-Format Export",
      description: "Export to CSV, JSON, Markdown, Excel, or directly integrate with your systems.",
      color: "from-[#F47F21]/20 to-[#FF6B35]/20"
    },
    {
      icon: Database,
      title: "Document Repository",
      description: "Centralized, searchable repository with version control and access management.",
      color: "from-green-500/20 to-emerald-500/20"
    },
    {
      icon: BarChart3,
      title: "Analytics & Insights",
      description: "Contract analytics, spend analysis, vendor performance, and compliance dashboards.",
      color: "from-indigo-500/20 to-violet-500/20"
    }
  ];

  const integrations = [
    { name: "SAP", category: "ERP" },
    { name: "Oracle", category: "ERP" },
    { name: "NetSuite", category: "ERP" },
    { name: "Salesforce", category: "CRM" },
    { name: "Workday", category: "HR/Finance" },
    { name: "ServiceNow", category: "ITSM" },
    { name: "DocuSign", category: "E-Signature" },
    { name: "Adobe Sign", category: "E-Signature" },
    { name: "SharePoint", category: "Document Management" },
    { name: "Box", category: "Cloud Storage" },
    { name: "Dropbox", category: "Cloud Storage" },
    { name: "Google Drive", category: "Cloud Storage" }
  ];

  const complianceStandards = [
    "GDPR Compliant",
    "HIPAA Ready",
    "SOC 2 Type II",
    "ISO 27001",
    "CCPA Compliant",
    "SOX Ready"
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
                <Sparkles className="w-4 h-4 mr-2" />
                DocX.AI - Document Intelligence Platform
              </Badge>

              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Convert Your Financial{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F47F21] to-[#FF6B35]">
                  PDF to CSV
                </span>
              </h1>

              <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
                Enterprise contract and document intelligence platform. Transform contracts, invoices, and financial documents into{" "}
                <span className="font-semibold text-white">structured data</span> with AI-powered extraction and analysis.
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
                <Upload className="w-5 h-5 mr-2" />
                Upload Your PDF
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/20 hover:border-[#F47F21] text-lg px-8"
                onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
              >
                See How It Works
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-3 pt-4"
            >
              {complianceStandards.map((standard, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="bg-white/5 text-gray-300 border-white/10"
                >
                  <CheckCircle className="w-3 h-3 mr-1 text-green-400" />
                  {standard}
                </Badge>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-[#0F172A]/30">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">
              How to Convert Your <span className="text-gradient">Documents</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              AI-powered document processing in four simple steps
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {conversionSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10 h-full hover:border-[#F47F21]/50 transition-all hover:scale-105 group">
                    <CardContent className="p-6 text-center">
                      <div
                        className={`w-16 h-16 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-sm font-bold text-[#F47F21] mb-2">Step {index + 1}</div>
                      <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                      <p className="text-sm text-gray-300">{step.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-20 bg-gradient-to-br from-[#F47F21]/5 via-transparent to-blue-500/5">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">
              Enterprise-Grade <span className="text-gradient">Performance</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {metrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10 hover:border-[#F47F21]/50 transition-all hover:scale-105">
                    <CardContent className="p-8 text-center">
                      <Icon className={`w-12 h-12 ${metric.color} mx-auto mb-4`} />
                      <div className="text-5xl font-bold mb-2">
                        {metric.value}
                        <span className="text-3xl">{metric.suffix}</span>
                      </div>
                      <div className="text-lg font-semibold text-white mb-1">{metric.label}</div>
                      <div className="text-sm text-gray-400">{metric.sublabel}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-[#0F172A]/30">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">
              Purpose-Built for <span className="text-gradient">Every Department</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From legal contracts to finance invoices—intelligent automation for every document type
            </p>
          </motion.div>

          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="max-w-6xl mx-auto">
            <TabsList className="grid grid-cols-2 lg:grid-cols-4 mb-8 bg-[#172135]p-1">
              {Object.entries(useCases).map(([key, useCase]) => {
                const Icon = useCase.icon;
                return (
                  <TabsTrigger
                    key={key}
                    value={key}
                    className="data-[state=active]:bg-[#F47F21] data-[state=active]:text-white"
                  >
                    <Icon className="w-4 h-4 mr-2" />
                    <span className="hidden sm:inline">{useCase.title.split(' ')[0]}</span>
                    <span className="sm:hidden">{useCase.title.split(' ')[0]}</span>
                  </TabsTrigger>
                );
              })}
            </TabsList>

            {Object.entries(useCases).map(([key, useCase]) => {
              const Icon = useCase.icon;
              return (
                <TabsContent key={key} value={key}>
                  <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
                    <CardHeader>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#F47F21] to-[#FF6B35] flex items-center justify-center">
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl">{useCase.title}</CardTitle>
                          <p className="text-gray-300 mt-1">{useCase.description}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-6 mb-6">
                        {useCase.features.map((feature, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <Card className="bg-black/20 border-white/10 h-full">
                              <CardContent className="p-6">
                                <div className="flex items-start gap-3 mb-3">
                                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                  <div>
                                    <h4 className="font-bold text-white mb-2">{feature.title}</h4>
                                    <p className="text-sm text-gray-300 mb-3">{feature.description}</p>
                                    <Badge className="bg-[#F47F21]/10 text-[#F47F21] border-[#F47F21]/20 text-xs">
                                      {feature.metrics}
                                    </Badge>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          </motion.div>
                        ))}
                      </div>

                      <div className="bg-black/20 border-2 border-white/20 rounded-lg p-4">
                        <h4 className="font-semibold text-white mb-3">Supported Document Types:</h4>
                        <div className="flex flex-wrap gap-2">
                          {useCase.examples.map((example, index) => (
                            <Badge
                              key={index}
                              variant="secondary"
                              className="bg-white/5 text-gray-300 border-white/10"
                            >
                              <FileText className="w-3 h-3 mr-1" />
                              {example}
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

      {/* Features Grid */}
      <section className="py-20 bg-gradient-to-br from-[#0A0F1A] via-[#0F172A] to-[#0A0F1A]">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">
              Powerful <span className="text-gradient">Features</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to transform documents into actionable intelligence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10 h-full hover:border-[#F47F21]/50 transition-all hover:scale-105 group">
                    <CardContent className="p-6">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                        <Icon className="w-7 h-7 text-[#F47F21]" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                      <p className="text-gray-300">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 bg-[#0F172A]/30">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">
              Seamless <span className="text-gradient">Integrations</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Connect with your existing enterprise systems
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
                  transition={{ delay: index * 0.05 }}
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
            <Sparkles className="w-16 h-16 text-[#F47F21] mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Start Converting Documents Today
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Transform your contracts, invoices, and financial documents into structured data with AI-powered intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-[#F47F21] hover:bg-[#F47F21]/90 text-white text-lg px-8"
                onClick={() => setContactModalOpen(true)}
              >
                <Upload className="w-5 h-5 mr-2" />
                Upload Your PDF
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/20 hover:border-[#F47F21] text-lg px-8"
                onClick={() => setContactModalOpen(true)}
              >
                Request a Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>


      {/* Contact Form Modal */}
      <ContactFormModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        serviceType="docx"
      />
    </div>
  );
};

export default DocXClient;










