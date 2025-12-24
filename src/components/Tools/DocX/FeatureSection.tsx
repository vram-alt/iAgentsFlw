import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Brain, FileSearch, AlertTriangle,FileCode,Database,BarChart3 } from "lucide-react"

const FeatureSection = () => {
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
    )
}
export default FeatureSection