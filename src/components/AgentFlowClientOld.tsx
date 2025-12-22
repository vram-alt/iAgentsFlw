'use client'

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Bot,
  Users,
  Shield,
  CheckCircle,
  ArrowRight,
  Zap,
  Clock,
  TrendingDown,
  TrendingUp,
  FileText,
  Lock,
  Monitor,
  GitBranch,
  MessageSquare,
  Briefcase,
  Scale,
  DollarSign,
  Settings,
  BarChart3,
  AlertTriangle,
  CheckSquare,
  Database,
  Workflow
} from 'lucide-react';
import ContactFormModal from '@/components/ContactFormModal';

const AgentFlowClient = () => {
  const [activeNode, setActiveNode] = useState(0);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [selectedUseCase, setSelectedUseCase] = useState('itsm');

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNode((prev) => (prev + 1) % 4);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const workflowNodes = [
    {
      icon: Users,
      label: "1. Request",
      title: "User Request",
      description: "Employee submits ticket or request",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Bot,
      label: "2. AI Agent",
      title: "Agent Processes",
      description: "AI understands context & acts",
      color: "from-[#F47F21] to-[#FF6B35]"
    },
    {
      icon: Shield,
      label: "3. Guardrails",
      title: "Policy Check",
      description: "Validates against compliance rules",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: CheckCircle,
      label: "4. Complete",
      title: "Auto-Resolved",
      description: "User notified instantly",
      color: "from-green-500 to-emerald-500"
    }
  ];

  const metrics = [
    {
      value: "42",
      suffix: "%",
      label: "↓ MTTR",
      sublabel: "drop in 90 days",
      icon: TrendingDown,
      color: "text-green-400"
    },
    {
      value: "35",
      suffix: "%",
      label: "↑ Self-service deflection",
      sublabel: "via policy-aware answers",
      icon: TrendingUp,
      color: "text-[#F47F21]"
    },
    {
      value: "28",
      suffix: "%",
      label: "↓ Cycle time",
      sublabel: "for onboarding and approvals",
      icon: Clock,
      color: "text-blue-400"
    }
  ];

  const useCases = {
    itsm: {
      title: "IT Service Management",
      icon: Monitor,
      description: "Auto-resolve tier-1 tickets, password resets, access provisioning, and incident triage",
      examples: [
        { title: "Password Reset", time: "2 min → 30 sec", impact: "75% faster" },
        { title: "Access Requests", time: "4 hours → 15 min", impact: "94% faster" },
        { title: "Incident Triage", time: "20 min → 3 min", impact: "85% faster" }
      ]
    },
    legal: {
      title: "Legal Operations",
      icon: Scale,
      description: "Automate contract review, NDA generation, compliance checks, and legal triage",
      examples: [
        { title: "NDA Generation", time: "2 days → 10 min", impact: "99% faster" },
        { title: "Contract Review", time: "5 days → 2 hours", impact: "95% faster" },
        { title: "Compliance Check", time: "3 hours → 15 min", impact: "92% faster" }
      ]
    },
    hr: {
      title: "HR & People Ops",
      icon: Users,
      description: "Streamline onboarding, policy Q&A, leave requests, and employee issue resolution",
      examples: [
        { title: "Onboarding Tasks", time: "3 days → 4 hours", impact: "89% faster" },
        { title: "Leave Approval", time: "2 days → 1 hour", impact: "96% faster" },
        { title: "Policy Questions", time: "1 day → 5 min", impact: "99% faster" }
      ]
    },
    finance: {
      title: "Finance & Operations",
      icon: DollarSign,
      description: "Automate invoice processing, expense approvals, vendor onboarding, and audit queries",
      examples: [
        { title: "Invoice Processing", time: "2 hours → 10 min", impact: "92% faster" },
        { title: "Expense Approval", time: "3 days → 2 hours", impact: "97% faster" },
        { title: "Vendor Onboarding", time: "1 week → 1 day", impact: "86% faster" }
      ]
    }
  };

  const features = [
    {
      icon: Shield,
      title: "Guardrails & Policies",
      description: "Deterministic checks before every action. Define rules, thresholds, and approval workflows.",
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      icon: FileText,
      title: "Audit & Observability",
      description: "Full event trails with step-level detail. Complete transparency for compliance teams.",
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      icon: Lock,
      title: "RBAC & Privacy",
      description: "Least-privilege by design with data minimization patterns. SOC 2 Type II ready.",
      color: "from-green-500/20 to-emerald-500/20"
    },
    {
      icon: Workflow,
      title: "Visual Workflow Builder",
      description: "No-code workflow designer. Drag-and-drop nodes, set conditions, add guardrails.",
      color: "from-[#F47F21]/20 to-[#FF6B35]/20"
    },
    {
      icon: Database,
      title: "Multi-System Integration",
      description: "Connect to ServiceNow, Workday, Salesforce, Slack, Teams, and 50+ enterprise tools.",
      color: "from-amber-500/20 to-orange-500/20"
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description: "Track resolution times, deflection rates, agent performance, and cost savings.",
      color: "from-indigo-500/20 to-violet-500/20"
    }
  ];

  const integrations = [
    { name: "ServiceNow", category: "ITSM" },
    { name: "Salesforce", category: "CRM" },
    { name: "Workday", category: "HR" },
    { name: "Slack", category: "Communication" },
    { name: "Microsoft Teams", category: "Communication" },
    { name: "Jira", category: "Project Management" },
    { name: "GitHub", category: "Developer Tools" },
    { name: "Okta", category: "Identity" },
    { name: "AWS", category: "Cloud" },
    { name: "Azure", category: "Cloud" },
    { name: "GCP", category: "Cloud" },
    { name: "Zendesk", category: "Support" }
  ];

  return (
    <div className="min-h-screen bg-[#0A0F1A] text-white">

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-[#F47F21]/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#FF6B35]/10 rounded-full blur-3xl animate-pulse" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            {/* Left Side - Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <Badge className="bg-[#F47F21]/10 text-[#F47F21] border-[#F47F21]/20">
                  <Bot className="w-3 h-3 mr-1" />
                  AgentFlow by AgentFlow
                </Badge>

                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  From SaaS to{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F47F21] to-[#FF6B35]">
                    Agentic Enterprise
                  </span>
                </h1>

                <p className="text-xl text-gray-300 leading-relaxed">
                  Ship <span className="font-semibold text-white">production-safe AI agents</span> across IT, Legal, HR, and Finance—so routine requests become{" "}
                  <span className="font-semibold text-white">autonomous workflows</span> with real KPIs: lower MTTR, higher deflection, faster cycle times.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-[#F47F21] hover:bg-[#F47F21]/90 text-white text-lg px-8"
                  onClick={() => setContactModalOpen(true)}
                >
                  Book a Demo
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/20 hover:border-[#F47F21] text-lg px-8"
                  onClick={() => document.getElementById('workflow-viz')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  See How It Works
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>

              <p className="text-sm text-gray-400">
                No vendor lock-in. Start with one workflow that moves a KPI.
              </p>
            </motion.div>

            {/* Right Side - Stats */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-sm font-semibold text-gray-300">Live Stats</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-3xl font-bold text-green-400">24/7</p>
                      <p className="text-sm text-gray-400">Always Active</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-[#F47F21]">&lt;2s</p>
                      <p className="text-sm text-gray-400">Avg Response</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-blue-400">99.9%</p>
                      <p className="text-sm text-gray-400">Uptime SLA</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-purple-400">50+</p>
                      <p className="text-sm text-gray-400">Integrations</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-[#F47F21]/10 to-[#FF6B35]/10 backdrop-blur-md border-[#F47F21]/20">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-4">Built for Compliance</h3>
                  <div className="space-y-3">
                    {['SOC 2 Type II Ready', 'GDPR Compliant', 'HIPAA Compatible', 'ISO 27001 Aligned'].map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-sm text-gray-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interactive Workflow Visualization */}
      <section id="workflow-viz" className="py-20 bg-[#0F172A]/30">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">
              See It In <span className="text-gradient">Action</span>
            </h2>
            <p className="text-xl text-gray-300">
              Watch how an agent processes a request from start to finish
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {workflowNodes.map((node, index) => {
              const Icon = node.icon;
              const isActive = activeNode === index;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  onClick={() => setActiveNode(index)}
                  className="cursor-pointer mb-6"
                >
                  <div
                    className={`relative p-6 rounded-xl border-2 transition-all duration-300 ${
                      isActive
                        ? 'bg-gradient-to-r from-[#F47F21]/10 to-[#FF6B35]/10 border-[#F47F21] shadow-xl scale-105'
                        : 'bg-[#172135]border-white/10 hover:border-[#F47F21]/50 hover:shadow-lg'
                    }`}
                  >
                    <div className="flex items-center gap-6">
                      {/* Step Icon */}
                      <div
                        className={`flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br ${node.color} flex items-center justify-center shadow-lg ${
                          isActive ? 'scale-110' : ''
                        } transition-transform`}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs font-bold text-[#F47F21]">{node.label}</span>
                          {isActive && (
                            <motion.div
                              className="w-2 h-2 rounded-full bg-[#F47F21]"
                              animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                              transition={{ duration: 1.5, repeat: Infinity }}
                            />
                          )}
                        </div>
                        <h4 className="font-bold text-white text-lg mb-1">{node.title}</h4>
                        <p className="text-gray-300">{node.description}</p>
                      </div>

                      {/* Arrow */}
                      {index < workflowNodes.length - 1 && (
                        <motion.div
                          animate={{
                            y: isActive ? [0, 5, 0] : 0,
                            opacity: isActive ? [0.5, 1, 0.5] : 0.3
                          }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <ArrowRight
                            className={`w-8 h-8 ${isActive ? 'text-[#F47F21]' : 'text-gray-500'} rotate-90`}
                          />
                        </motion.div>
                      )}
                    </div>

                    {/* Active indicator line */}
                    {isActive && (
                      <motion.div
                        className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#F47F21] to-[#FF6B35] rounded-l-xl"
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-20 bg-gradient-to-br from-[#F47F21]/5 via-transparent to-[#FF6B35]/5">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">
              Proof That Shows Up On Your <span className="text-gradient">Dashboard</span>
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

          <p className="text-center text-sm text-gray-400 mt-8">
            Illustrative from typical pilots; your results may vary.
          </p>
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
              Use Cases Across <span className="text-gradient">Every Department</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From IT service desk to legal ops—automate workflows that matter
            </p>
          </motion.div>

          <Tabs value={selectedUseCase} onValueChange={setSelectedUseCase} className="max-w-6xl mx-auto">
            <TabsList className="grid grid-cols-4 mb-8 bg-[#0F172A]/50 p-1">
              {Object.entries(useCases).map(([key, useCase]) => {
                const Icon = useCase.icon;
                return (
                  <TabsTrigger
                    key={key}
                    value={key}
                    className="data-[state=active]:bg-[#F47F21] data-[state=active]:text-white"
                  >
                    <Icon className="w-4 h-4 mr-2" />
                    {useCase.title.split(' ')[0]}
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
                      <div className="grid md:grid-cols-3 gap-6">
                        {useCase.examples.map((example, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <Card className="bg-black/20 border-white/10 h-full">
                              <CardContent className="p-6">
                                <h4 className="font-bold text-white mb-3">{example.title}</h4>
                                <div className="space-y-2">
                                  <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-400">Time saved:</span>
                                    <span className="text-sm font-semibold text-[#F47F21]">
                                      {example.time}
                                    </span>
                                  </div>
                                  <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-400">Impact:</span>
                                    <Badge className="bg-green-500/10 text-green-400 border-green-500/20">
                                      {example.impact}
                                    </Badge>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          </motion.div>
                        ))}
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
              Enterprise-Grade <span className="text-gradient">Features</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built to be trusted by compliance, security, and governance teams
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
              Integrates With Your <span className="text-gradient">Entire Stack</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Connect to 50+ enterprise tools without vendor lock-in
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
                Request Integration List
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#F47F21]/10 via-[#FF6B35]/5 to-transparent relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#F47F21]/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#FF6B35]/10 rounded-full blur-3xl animate-pulse" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto p-12 rounded-3xl bg-[#0F172A]/50 backdrop-blur-md border-2 border-[#F47F21]/20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Start With One Agent That Moves a KPI
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              We&apos;ll help you define the workflow, wire the guardrails, and measure the win.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-[#F47F21] hover:bg-[#F47F21]/90 text-white text-lg px-8"
                onClick={() => setContactModalOpen(true)}
              >
                Book a Demo
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
        serviceType="agentflow"
      />
    </div>
  );
};

export default AgentFlowClient;










