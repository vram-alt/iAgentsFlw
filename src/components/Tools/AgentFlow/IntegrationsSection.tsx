import { motion } from "framer-motion";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
const IntegrationsSection = () => {
    const [contactModalOpen, setContactModalOpen] = useState(false);
    const integrations = [
        { name: "ServiceNow", category: "ITSM" },
        { name: "Salesforce", category: "CRM" },
        { name: "Workday", category: "HR" },
        { name: "Slack", category: "Communication" },
        { name: "Microsoft Teams", category: "Communication" },
        { name: "Jira", category: "Project Management" },
        { name: "GitHub", category: "Developer Tools" },
        { name: "Okta", category: "Identity" },
        { name: "AWS", category: "Cloud" },
        { name: "Azure", category: "Cloud" },
        { name: "GCP", category: "Cloud" },
        { name: "Zendesk", category: "Support" }
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
                        Integrates With Your <span className="text-gradient">Entire Stack</span>
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Connect to 50+ enterprise tools without vendor lock-in
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
                                transition={{ delay: index * 0.05 }}
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
                            Request Integration List
                            <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
export default IntegrationsSection;