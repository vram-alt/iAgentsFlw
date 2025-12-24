import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
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

const RoleBasedOutcomes = () => {
    const [selectedRole, setSelectedRole] = useState('dpo');
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
    return (
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
                                        className={`p-6 rounded-xl text-left transition-all ${selectedRole === key
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
    )
}
export default RoleBasedOutcomes