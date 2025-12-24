import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Upload, Brain, Download, FileSearch } from "lucide-react";
const HowItWorksSection = () => {
    const conversionSteps = [
        {
          icon: Upload,
          title: "Upload Your Documents",
          description: "Drag & drop or select PDFs, Word docs, or scanned images",
          color: "from-blue-500 to-cyan-500"
        },
        {
          icon: Brain,
          title: "AI Processing",
          description: "Advanced OCR and NLP extract structured data",
          color: "from-[#F47F21] to-[#FF6B35]"
        },
        {
          icon: FileSearch,
          title: "Intelligent Analysis",
          description: "Identify key terms, clauses, risks, and compliance issues",
          color: "from-purple-500 to-pink-500"
        },
        {
          icon: Download,
          title: "Export & Integrate",
          description: "CSV, Markdown, JSON, or direct ERP/CRM integration",
          color: "from-green-500 to-emerald-500"
        }
      ];
    
    return (
        <section id="how-it-works" className="py-20 bg-[#0F172A]/30">
            <div className="container mx-auto px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl font-bold mb-4">
                        How to Convert Your <span className="text-gradient">Documents</span>
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        AI-powered document processing in four simple steps
                    </p>
                </motion.div>

                <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {conversionSteps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10 h-full hover:border-[#F47F21]/50 transition-all hover:scale-105 group">
                                    <CardContent className="p-6 text-center">
                                        <div
                                            className={`w-16 h-16 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
                                        >
                                            <Icon className="w-8 h-8 text-white" />
                                        </div>
                                        <div className="text-sm font-bold text-[#F47F21] mb-2">Step {index + 1}</div>
                                        <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                                        <p className="text-sm text-gray-300">{step.description}</p>
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
export default HowItWorksSection;