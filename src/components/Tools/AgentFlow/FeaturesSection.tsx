import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { BarChart3, Shield, Lock, Database, Workflow, FileText } from "lucide-react";

const FeaturesSection = () => {
    const features = [
        {
          icon: Shield,
          title: "Guardrails & Policies",
          description: "Deterministic checks before every action. Define rules, thresholds, and approval workflows.",
          color: "from-purple-500/20 to-pink-500/20"
        },
        {
          icon: FileText,
          title: "Audit & Observability",
          description: "Full event trails with step-level detail. Complete transparency for compliance teams.",
          color: "from-blue-500/20 to-cyan-500/20"
        },
        {
          icon: Lock,
          title: "RBAC & Privacy",
          description: "Least-privilege by design with data minimization patterns. SOC 2 Type II ready.",
          color: "from-green-500/20 to-emerald-500/20"
        },
        {
          icon: Workflow,
          title: "Visual Workflow Builder",
          description: "No-code workflow designer. Drag-and-drop nodes, set conditions, add guardrails.",
          color: "from-[#F47F21]/20 to-[#FF6B35]/20"
        },
        {
          icon: Database,
          title: "Multi-System Integration",
          description: "Connect to ServiceNow, Workday, Salesforce, Slack, Teams, and 50+ enterprise tools.",
          color: "from-amber-500/20 to-orange-500/20"
        },
        {
          icon: BarChart3,
          title: "Real-time Analytics",
          description: "Track resolution times, deflection rates, agent performance, and cost savings.",
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
                        Enterprise-Grade <span className="text-gradient">Features</span>
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Built to be trusted by compliance, security, and governance teams
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
export default FeaturesSection