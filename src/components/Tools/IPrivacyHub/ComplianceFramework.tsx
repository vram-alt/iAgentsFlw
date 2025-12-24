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

const ComplianceFramework = () => {
    const [contactModalOpen, setContactModalOpen] = useState(false);

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
    )
}
export default ComplianceFramework