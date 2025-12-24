import { motion } from "framer-motion"
import { useState } from "react"
import DemoFlowVisualizer from "./DemoFlowVisualizer";
import { Card, CardContent } from "@/components/ui/card"
import { FileText, Target, Shield, CheckCircle, Users, Database, Monitor } from "lucide-react"
interface Module {
    id: string;
    name: string;
    status: string;
    description: string;
    features: string[];
}

interface ModuleShowcaseProps {
    module: Module;
    isActive: boolean;
    onActivate: (id: string) => void;
}

// Interactive Module Showcase Component
const ModuleShowcase = ({ module, isActive, onActivate }: ModuleShowcaseProps) => {
    const [hoveredFeature, setHoveredFeature] = useState<string | null>(null);

    const moduleIcons = {
        assessments: FileText,
        program: Target,
        aigovernance: Shield,
        monitoring: Monitor,
        humanrights: Users,
        sandbox: Database
    };

    const Icon = moduleIcons[module.id as keyof typeof moduleIcons];

    return (
        <motion.div
            className={`relative cursor-pointer transition-all duration-500 ${isActive ? 'scale-105' : 'hover:scale-102'
                }`}
            onClick={() => onActivate(module.id)}
            whileHover={{ y: -5 }}
            layout
        >
            <Card className={`h-full transition-all duration-500 ${isActive
                ? 'bg-[#F47F21]/10 border-[#F47F21] shadow-2xl shadow-[#F47F21]/20'
                : 'bg-[#172135]border-white/10 hover:border-[#F47F21]/50'
                }`}>
                <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                        <motion.div
                            className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${isActive ? 'bg-[#F47F21] text-white' : 'bg-[#F47F21]/20 text-[#F47F21]'
                                }`}
                            animate={{ rotate: isActive ? 360 : 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Icon className="w-6 h-6" />
                        </motion.div>
                        <div>
                            <h3 className="text-lg font-bold">{module.name}</h3>
                            <p className="text-sm text-gray-400">{module.status}</p>
                        </div>
                    </div>

                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">{module.description}</p>

                    <div className="space-y-2">
                        {module.features.map((feature: string, index: number) => (
                            <motion.div
                                key={index}
                                className={`text-xs p-2 rounded transition-all cursor-pointer ${hoveredFeature === feature
                                    ? 'bg-[#F47F21]/20 text-[#F47F21]'
                                    : 'text-gray-400 hover:text-gray-300'
                                    }`}
                                onMouseEnter={() => setHoveredFeature(feature)}
                                onMouseLeave={() => setHoveredFeature(null)}
                                whileHover={{ x: 5 }}
                            >
                                • {feature}
                            </motion.div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    );
};


const ModuleSection = () => {
    const [activeModule, setActiveModule] = useState('assessments');
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
        <section className="py-12 sm:py-16 md:py-20 bg-[#0F172A]/30">
            <div className="container mx-auto px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-6">Six modules. Complete AI compliance coverage.</h2>
                    <p className="text-xl text-gray-300">Click each module to explore AI compliance features. Integrates with AgentsFlow for seamless governance.</p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {Object.values(modules).map((module, index) => (
                        <motion.div
                            key={module.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <ModuleShowcase
                                module={module}
                                isActive={activeModule === module.id}
                                onActivate={setActiveModule}
                            />
                        </motion.div>
                    ))}
                </div>

                {/* Demo Flow Visualizer */}
                <DemoFlowVisualizer />
            </div>
        </section>
    )
}
export default ModuleSection