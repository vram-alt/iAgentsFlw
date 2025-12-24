'use client'
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"
import { CheckCircle, Plus, Minus } from "lucide-react"
import { AnimatePresence } from "framer-motion"
const FrameworkMatrix = () => {
  const [hoveredCell, setHoveredCell] = useState<string | null>(null);
  
  const frameworks = ['EU AI Act', 'ISO/IEC 42001', 'NIST AI RMF', 'GDPR-AI', 'Canada AIDA', 'China PIPL', 'Singapore'];
  const modules = ['Risk Assessments', 'Compliance Program', 'AI Documentation', 'Monitoring', 'Human Rights', 'Sandbox'];
  
  const support = {
    'Risk Assessments-EU AI Act': 'full',
    'Risk Assessments-ISO/IEC 42001': 'full',
    'Risk Assessments-NIST AI RMF': 'full',
    'Risk Assessments-GDPR-AI': 'full',
    'Risk Assessments-Canada AIDA': 'full',
    'Compliance Program-EU AI Act': 'full',
    'Compliance Program-ISO/IEC 42001': 'full',
    'Compliance Program-NIST AI RMF': 'full',
    'Compliance Program-GDPR-AI': 'full',
    'Compliance Program-Canada AIDA': 'full',
    'Compliance Program-China PIPL': 'full',
    'AI Documentation-EU AI Act': 'full',
    'AI Documentation-ISO/IEC 42001': 'full',
    'AI Documentation-NIST AI RMF': 'full',
    'AI Documentation-GDPR-AI': 'full',
    'Monitoring-EU AI Act': 'full',
    'Monitoring-ISO/IEC 42001': 'full',
    'Monitoring-NIST AI RMF': 'full',
    'Monitoring-GDPR-AI': 'full',
    'Human Rights-EU AI Act': 'full',
    'Human Rights-GDPR-AI': 'full',
    'Sandbox-EU AI Act': 'full',
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr>
            <th className="text-left p-4"></th>
            {frameworks.map((framework) => (
              <th key={framework} className="text-center p-2 text-xs font-medium text-gray-400">
                {framework}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {modules.map((module) => (
            <tr key={module}>
              <td className="p-4 font-medium">{module}</td>
              {frameworks.map((framework) => {
                const key = `${module}-${framework}`;
                const supportLevel = support[key as keyof typeof support];
                
                return (
                  <td 
                    key={framework} 
                    className="text-center p-2 relative"
                    onMouseEnter={() => setHoveredCell(key)}
                    onMouseLeave={() => setHoveredCell(null)}
                  >
                    <motion.div
                      className={`w-8 h-8 mx-auto rounded-lg flex items-center justify-center cursor-pointer ${
                        supportLevel === 'full' ? 'bg-green-500/20 text-green-400' :
                        supportLevel === 'addon' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-gray-500/20 text-gray-500'
                      }`}
                      whileHover={{ scale: 1.2 }}
                    >
                      {supportLevel === 'full' ? <CheckCircle className="w-4 h-4" /> :
                       supportLevel === 'addon' ? <Plus className="w-4 h-4" /> :
                       <Minus className="w-4 h-4" />}
                    </motion.div>
                    
                    <AnimatePresence>
                      {hoveredCell === key && supportLevel && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute z-10 bg-[#0F172A] border-2 border-white/20 rounded-lg p-3 text-xs w-48 -translate-x-1/2 left-1/2 top-full mt-2"
                        >
                          {supportLevel === 'full' ? 'Native support' : 
                           supportLevel === 'addon' ? 'Available as addon' : 'Not applicable'}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


const FrameWorkMatrix = () => {
    return (
        <section className="py-12 sm:py-16 md:py-20">
            <div className="container mx-auto px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-6">AI Regulation Coverage Across All Frameworks.</h2>
                    <p className="text-xl text-gray-300">Comprehensive support for EU AI Act, ISO/IEC 42001, NIST AI RMF, and global AI regulations. Automate compliance regardless of the regulation.</p>
                </motion.div>

                <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
                    <CardContent className="p-8">
                        <FrameworkMatrix />
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}
export default FrameWorkMatrix