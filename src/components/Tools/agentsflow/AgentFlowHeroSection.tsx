import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { useState } from 'react'
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

const AgentsFlowHeroSection = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);
    return (
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
                  AgentsFlow by AgentsFlow
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
    )
}
export default AgentsFlowHeroSection