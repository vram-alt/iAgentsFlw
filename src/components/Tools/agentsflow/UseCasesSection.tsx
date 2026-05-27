import { motion } from "framer-motion";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Monitor, Scale, Users, DollarSign } from "lucide-react";
const UseCasesSection = () => {
    const [selectedUseCase, setSelectedUseCase] = useState('itsm');
    const useCases = {
        itsm: {
            title: "IT Service Management",
            icon: Monitor,
            description: "Auto-resolve tier-1 tickets, password resets, access provisioning, and incident triage",
            examples: [
                { title: "Password Reset", time: "2 min → 30 sec", impact: "75% faster" },
                { title: "Access Requests", time: "4 hours → 15 min", impact: "94% faster" },
                { title: "Incident Triage", time: "20 min → 3 min", impact: "85% faster" }
            ]
        },
        legal: {
            title: "Legal Operations",
            icon: Scale,
            description: "Automate contract review, NDA generation, compliance checks, and legal triage",
            examples: [
                { title: "NDA Generation", time: "2 days → 10 min", impact: "99% faster" },
                { title: "Contract Review", time: "5 days → 2 hours", impact: "95% faster" },
                { title: "Compliance Check", time: "3 hours → 15 min", impact: "92% faster" }
            ]
        },
        hr: {
            title: "HR & People Ops",
            icon: Users,
            description: "Streamline onboarding, policy Q&A, leave requests, and employee issue resolution",
            examples: [
                { title: "Onboarding Tasks", time: "3 days → 4 hours", impact: "89% faster" },
                { title: "Leave Approval", time: "2 days → 1 hour", impact: "96% faster" },
                { title: "Policy Questions", time: "1 day → 5 min", impact: "99% faster" }
            ]
        },
        finance: {
            title: "Finance & Operations",
            icon: DollarSign,
            description: "Automate invoice processing, expense approvals, vendor onboarding, and audit queries",
            examples: [
                { title: "Invoice Processing", time: "2 hours → 10 min", impact: "92% faster" },
                { title: "Expense Approval", time: "3 days → 2 hours", impact: "97% faster" },
                { title: "Vendor Onboarding", time: "1 week → 1 day", impact: "86% faster" }
            ]
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
                        Use Cases Across <span className="text-gradient">Every Department</span>
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        From IT service desk to legal ops—automate workflows that matter
                    </p>
                </motion.div>

                <Tabs value={selectedUseCase} onValueChange={setSelectedUseCase} className="max-w-6xl mx-auto">
                    <TabsList className="grid grid-cols-4 mb-8 bg-[#0F172A]/50 p-1">
                        {Object.entries(useCases).map(([key, useCase]) => {
                            const Icon = useCase.icon;
                            return (
                                <TabsTrigger
                                    key={key}
                                    value={key}
                                    className="data-[state=active]:bg-[#F47F21] data-[state=active]:text-white"
                                >
                                    <Icon className="w-4 h-4 mr-2" />
                                    {useCase.title.split(' ')[0]}
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
                                        <div className="grid md:grid-cols-3 gap-6">
                                            {useCase.examples.map((example, index) => (
                                                <motion.div
                                                    key={index}
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: index * 0.1 }}
                                                >
                                                    <Card className="bg-black/20 border-white/10 h-full">
                                                        <CardContent className="p-6">
                                                            <h4 className="font-bold text-white mb-3">{example.title}</h4>
                                                            <div className="space-y-2">
                                                                <div className="flex items-center justify-between">
                                                                    <span className="text-sm text-gray-400">Time saved:</span>
                                                                    <span className="text-sm font-semibold text-[#F47F21]">
                                                                        {example.time}
                                                                    </span>
                                                                </div>
                                                                <div className="flex items-center justify-between">
                                                                    <span className="text-sm text-gray-400">Impact:</span>
                                                                    <Badge className="bg-green-500/10 text-green-400 border-green-500/20">
                                                                        {example.impact}
                                                                    </Badge>
                                                                </div>
                                                            </div>
                                                        </CardContent>
                                                    </Card>
                                                </motion.div>
                                            ))}
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
export default UseCasesSection