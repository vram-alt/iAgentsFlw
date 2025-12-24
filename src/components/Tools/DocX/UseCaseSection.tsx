'use client'
import { useState } from 'react';
import { motion } from "framer-motion"
import { Scale, Briefcase, Shield,DollarSign,CheckCircle,FileText } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const UseCaseSection = () => {
      const [selectedCategory, setSelectedCategory] = useState('contracts');
    
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
    )
}
export default UseCaseSection