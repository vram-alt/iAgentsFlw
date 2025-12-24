import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card";
import { Target, Zap, TrendingUp } from "lucide-react"
const MetrixSection = () => {
    const metrics = [
        {
          value: "95",
          suffix: "%",
          label: "Accuracy",
          sublabel: "in data extraction",
          icon: Target,
          color: "text-green-400"
        },
        {
          value: "10",
          suffix: "x",
          label: "Faster Processing",
          sublabel: "vs manual entry",
          icon: Zap,
          color: "text-[#F47F21]"
        },
        {
          value: "70",
          suffix: "%",
          label: "Cost Reduction",
          sublabel: "in document processing",
          icon: TrendingUp,
          color: "text-blue-400"
        }
      ];
    return (
        <section className="py-20 bg-gradient-to-br from-[#F47F21]/5 via-transparent to-blue-500/5">
            <div className="container mx-auto px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl font-bold mb-4">
                        Enterprise-Grade <span className="text-gradient">Performance</span>
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {metrics.map((metric, index) => {
                        const Icon = metric.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10 hover:border-[#F47F21]/50 transition-all hover:scale-105">
                                    <CardContent className="p-8 text-center">
                                        <Icon className={`w-12 h-12 ${metric.color} mx-auto mb-4`} />
                                        <div className="text-5xl font-bold mb-2">
                                            {metric.value}
                                            <span className="text-3xl">{metric.suffix}</span>
                                        </div>
                                        <div className="text-lg font-semibold text-white mb-1">{metric.label}</div>
                                        <div className="text-sm text-gray-400">{metric.sublabel}</div>
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
export default MetrixSection;