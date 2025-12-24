import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
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
    Book
} from 'lucide-react';

const PrivacyModules = () => {
    const [selectedModule, setSelectedModule] = useState('dsar');
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
    return (
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
    )
}
export default PrivacyModules