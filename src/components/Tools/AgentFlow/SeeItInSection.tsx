import { motion } from 'framer-motion'
import { useState } from 'react'
import { Bot, CheckCircle, Shield, Users,ArrowRight } from 'lucide-react'

const SeeItInSection = () => {
    const [activeNode, setActiveNode] = useState(0);
     const workflowNodes = [
        {
          icon: Users,
          label: "1. Request",
          title: "User Request",
          description: "Employee submits ticket or request",
          color: "from-blue-500 to-cyan-500"
        },
        {
          icon: Bot,
          label: "2. AI Agent",
          title: "Agent Processes",
          description: "AI understands context & acts",
          color: "from-[#F47F21] to-[#FF6B35]"
        },
        {
          icon: Shield,
          label: "3. Guardrails",
          title: "Policy Check",
          description: "Validates against compliance rules",
          color: "from-purple-500 to-pink-500"
        },
        {
          icon: CheckCircle,
          label: "4. Complete",
          title: "Auto-Resolved",
          description: "User notified instantly",
          color: "from-green-500 to-emerald-500"
        }
      ];
    return (
        <section id="workflow-viz" className="py-20 bg-[#0F172A]/30">
            <div className="container mx-auto px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl font-bold mb-4">
                        See It In <span className="text-gradient">Action</span>
                    </h2>
                    <p className="text-xl text-gray-300">
                        Watch how an agent processes a request from start to finish
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    {workflowNodes.map((node, index) => {
                        const Icon = node.icon;
                        const isActive = activeNode === index;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.15 }}
                                onClick={() => setActiveNode(index)}
                                className="cursor-pointer mb-6"
                            >
                                <div
                                    className={`relative p-6 rounded-xl border-2 transition-all duration-300 ${isActive
                                            ? 'bg-gradient-to-r from-[#F47F21]/10 to-[#FF6B35]/10 border-[#F47F21] shadow-xl scale-105'
                                            : 'bg-[#172135]border-white/10 hover:border-[#F47F21]/50 hover:shadow-lg'
                                        }`}
                                >
                                    <div className="flex items-center gap-6">
                                        {/* Step Icon */}
                                        <div
                                            className={`flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br ${node.color} flex items-center justify-center shadow-lg ${isActive ? 'scale-110' : ''
                                                } transition-transform`}
                                        >
                                            <Icon className="w-8 h-8 text-white" />
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 mb-2">
                                                <span className="text-xs font-bold text-[#F47F21]">{node.label}</span>
                                                {isActive && (
                                                    <motion.div
                                                        className="w-2 h-2 rounded-full bg-[#F47F21]"
                                                        animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                                                        transition={{ duration: 1.5, repeat: Infinity }}
                                                    />
                                                )}
                                            </div>
                                            <h4 className="font-bold text-white text-lg mb-1">{node.title}</h4>
                                            <p className="text-gray-300">{node.description}</p>
                                        </div>

                                        {/* Arrow */}
                                        {index < workflowNodes.length - 1 && (
                                            <motion.div
                                                animate={{
                                                    y: isActive ? [0, 5, 0] : 0,
                                                    opacity: isActive ? [0.5, 1, 0.5] : 0.3
                                                }}
                                                transition={{ duration: 1.5, repeat: Infinity }}
                                            >
                                                <ArrowRight
                                                    className={`w-8 h-8 ${isActive ? 'text-[#F47F21]' : 'text-gray-500'} rotate-90`}
                                                />
                                            </motion.div>
                                        )}
                                    </div>

                                    {/* Active indicator line */}
                                    {isActive && (
                                        <motion.div
                                            className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#F47F21] to-[#FF6B35] rounded-l-xl"
                                            initial={{ scaleY: 0 }}
                                            animate={{ scaleY: 1 }}
                                            transition={{ duration: 0.3 }}
                                        />
                                    )}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}
export default SeeItInSection;