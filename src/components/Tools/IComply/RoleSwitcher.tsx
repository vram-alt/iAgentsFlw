import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
const RoleSwitcher = () => {
    const [activeRole, setActiveRole] = useState('dpo');

    const roles = {
        dpo: {
            title: 'DPO / Privacy',
            outcomes: [
                'Cut DSAR cycle times with routing & SLA',
                'Generate RoPA and DPIA packs in clicks',
                'Publish consent & cookie preferences consistently'
            ],
            metric: '>50% faster request fulfillment'
        },
        security: {
            title: 'Security & GRC',
            outcomes: [
                'Evidence locker and approval trails',
                'Program scoring with dashboards',
                'Incident runbooks and breach timeline'
            ],
            metric: 'Audit prep in days, not weeks'
        },
        legal: {
            title: 'Legal',
            outcomes: [
                'Map articles to obligations and actions',
                'Export regulator-ready documentation',
                'Keep an immutable record of decisions'
            ],
            metric: 'Fewer back-and-forth with auditors'
        },
        data: {
            title: 'Data/IT',
            outcomes: [
                'Integrations for identity, CRM and data stores',
                'APIs for ingesting events and publishing status',
                'Low-ops: single pane of truth for privacy work'
            ],
            metric: 'Less custom glue; fewer tickets'
        }
    };

    return (
        <section className="py-12 sm:py-16 md:py-20">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-6">Built for real teams, not checklists.</h2>
                        <div className="grid grid-cols-2 gap-3">
                            {Object.entries(roles).map(([key, role]) => (
                                <motion.button
                                    key={key}
                                    onClick={() => setActiveRole(key)}
                                    className={`p-4 rounded-lg text-left transition-all ${activeRole === key
                                        ? 'bg-[#F47F21] text-white'
                                        : 'bg-[#172135]text-gray-300 hover:bg-[#0F172A]/80'
                                        }`}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <div className="font-medium">{role.title}</div>
                                </motion.button>
                            ))}
                        </div>
                    </div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeRole}
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -30 }}
                            transition={{ duration: 0.3 }}
                            className="bg-[#0F172A]/30 backdrop-blur-md rounded-2xl p-8 border border-white/10"
                        >
                            <h3 className="text-xl font-bold mb-6 text-[#F47F21]">
                                {roles[activeRole as keyof typeof roles].title}
                            </h3>
                            <ul className="space-y-4 mb-6">
                                {roles[activeRole as keyof typeof roles].outcomes.map((outcome, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-start space-x-3"
                                    >
                                        <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                                        <span>{outcome}</span>
                                    </motion.li>
                                ))}
                            </ul>
                            <div className="bg-[#F47F21]/10 rounded-lg p-4">
                                <div className="text-sm text-gray-400 mb-1">Typical outcome:</div>
                                <div className="font-bold text-[#F47F21]">
                                    {roles[activeRole as keyof typeof roles].metric}
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};


export default RoleSwitcher;