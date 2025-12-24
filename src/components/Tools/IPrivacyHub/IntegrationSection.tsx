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

const IntegrationSection = () => {
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
    )
}
export default IntegrationSection 