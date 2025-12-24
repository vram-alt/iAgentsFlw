'use client'
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
const HeroSection = () => {
    const heroRef = useRef(null);
    const isHeroInView = useInView(heroRef);
    const [contactModalOpen, setContactModalOpen] = useState(false);
    const [activeModule, setActiveModule] = useState('assessments');
    const [selectedModules, setSelectedModules] = useState<string[]>([]);
    const modules = {
        assessments: {
            id: 'assessments',
            name: 'AI Risk Assessments',
            status: 'EU AI Act Ready',
            description: 'Comprehensive AI risk assessments including FRIA (Fundamental Rights Impact Assessment), conformity assessments, and impact analysis for high-risk AI systems.',
            features: [
                'EU AI Act assessment templates',
                'Fundamental Rights Impact Assessment (FRIA)',
                'Multi-stage workflows, roles & approvers',
                'Evidence collection & attestations',
                'Integration with AgentsFlow for AI system data'
            ]
        },
        program: {
            id: 'program',
            name: 'Regulatory Compliance Program',
            status: 'Multi-Regulation Support',
            description: 'Turn AI regulations into living compliance programs across entities and regions. Track EU AI Act, GDPR-AI dependencies, and other AI regulations.',
            features: [
                'EU AI Act obligation tracking (Articles & Annexes)',
                'GDPR-AI Act dependency mapping',
                'Evidence locker; audit & attestation packs',
                'Program scoring & compliance dashboards',
                'Cross-regulation alignment tracking'
            ]
        },
        aigovernance: {
            id: 'aigovernance',
            name: 'AI System Documentation',
            status: 'Audit-Ready',
            description: 'Automated documentation for AI systems pulling data directly from AgentsFlow for audit readiness and regulatory compliance.',
            features: [
                'Technical documentation generation',
                'AgentsFlow integration for real-time AI data',
                'Audit trail and compliance evidence',
                'Automated report generation for regulators',
                'Version control and change tracking'
            ]
        },
        monitoring: {
            id: 'monitoring',
            name: 'Continuous Monitoring',
            status: 'Real-Time Compliance',
            description: 'Monitor AI systems for compliance drift, regulatory changes, and risk indicators with automated alerts and remediation workflows.',
            features: [
                'Post-market monitoring for AI systems',
                'Regulatory change notifications',
                'Risk indicator tracking and alerts',
                'Incident management and reporting',
                'Integration with AgentsFlow observability'
            ]
        },
        humanrights: {
            id: 'humanrights',
            name: 'Human Rights & Bias Detection',
            status: 'FRIA Support',
            description: 'Track and mitigate fundamental rights impacts and bias in AI systems as required by EU AI Act Article 27.',
            features: [
                'Fundamental rights impact tracking',
                'Bias detection and mitigation workflows',
                'Sensitive data processing safeguards',
                'Human oversight documentation',
                'Transparency and explainability records'
            ]
        },
        sandbox: {
            id: 'sandbox',
            name: 'Regulatory Sandbox Management',
            status: 'Innovation Support',
            description: 'Manage AI regulatory sandbox testing with compliance tracking and documentation for controlled environments.',
            features: [
                'Sandbox testing documentation',
                'Data processing consent management',
                'Public interest alignment tracking',
                'Exit strategy and compliance transition',
                'Regulator communication workflows'
            ]
        }
    };
    return (
        <section ref={heroRef} className="pt-20 pb-32 relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0E2A47] via-[#0A0F1A] to-[#1A0F0A]" />
                <motion.div
                    className="absolute inset-0 opacity-20"
                    animate={{
                        backgroundPosition: ['0% 0%', '100% 100%'],
                    }}
                    transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23F47F21' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                        backgroundSize: '60px 60px'
                    }}
                />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
                                AI Compliance <span className="text-[#F47F21]">Automation</span>.
                            </h1>
                            <p className="text-xl text-gray-300 leading-relaxed mb-8">
                                Automate AI regulatory compliance, risk management, and audit readiness for EU AI Act and beyond. Integrated with AgentsFlow for complete AI governance.
                            </p>
                        </motion.div>

                        {/* Badge Chips */}
                        <motion.div
                            className="flex flex-wrap gap-2 mb-8"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            {['EU AI Act', 'Risk Assessments', 'FRIA', 'Audit Ready', 'AgentsFlow Integration', 'Evidence'].map((badge, index) => (
                                <motion.div
                                    key={badge}
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.6 + index * 0.1 }}
                                >
                                    <Badge variant="outline" className="border-[#F47F21]/50 text-[#F47F21] hover:bg-[#F47F21]/10">
                                        {badge}
                                    </Badge>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* CTAs */}
                        <motion.div
                            className="flex flex-col sm:flex-row gap-4"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            <Button
                                size="lg"
                                className="bg-[#F47F21] hover:bg-[#F47F21]/90 text-white font-medium px-8 py-4 relative overflow-hidden group"
                                onClick={() => setContactModalOpen(true)}
                            >
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-[#F47F21] to-[#FF6B35]"
                                    initial={{ x: "-100%" }}
                                    whileHover={{ x: "0%" }}
                                    transition={{ duration: 0.3 }}
                                />
                                <span className="relative z-10 flex items-center">
                                    <Play className="w-5 h-5 mr-2" />
                                    Contact Us
                                </span>
                            </Button>
                        </motion.div>

                        {/* Trust Line */}
                        <motion.p
                            className="text-sm text-gray-400"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                        >
                            Supports EU AI Act, ISO/IEC 42001, NIST AI RMF, and all AI regulations.
                        </motion.p>
                    </motion.div>

                    {/* Right Visual - Device Mockup Carousel */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="relative"
                    >
                        <div className="bg-[#0F172A]/50 backdrop-blur-md rounded-3xl p-8 border border-white/20 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#F47F21]/10 to-transparent" />

                            <div className="relative z-10">
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="text-lg font-semibold">iComply Dashboard</h3>
                                    <div className="flex space-x-2">
                                        <div className="w-3 h-3 bg-red-400 rounded-full" />
                                        <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                                        <div className="w-3 h-3 bg-green-400 rounded-full" />
                                    </div>
                                </div>

                                {/* Module Carousel */}
                                <div className="space-y-4">
                                    {Object.values(modules).slice(0, 4).map((module, index) => (
                                        <motion.div
                                            key={module.id}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.2 + 1 }}
                                            className="bg-[#0A0F1A]/30 rounded-lg p-4 border border-white/5"
                                        >
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center space-x-3">
                                                    <div className="w-8 h-8 bg-[#F47F21]/20 rounded-lg flex items-center justify-center">
                                                        <div className="w-2 h-2 bg-[#F47F21] rounded-full" />
                                                    </div>
                                                    <div>
                                                        <div className="text-sm font-medium">{module.name}</div>
                                                        <div className="text-xs text-gray-400">{module.status}</div>
                                                    </div>
                                                </div>
                                                <div className="text-xs text-green-400">Active</div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
export default HeroSection;