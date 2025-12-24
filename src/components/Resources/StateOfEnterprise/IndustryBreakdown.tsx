import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';


const IndustryBreakdown = () => {
    return (
         <section className="py-16 bg-[#0F172A]/30">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">AI Adoption by Industry</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Maturity and challenges vary significantly across sectors
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardHeader>
                <CardTitle>Financial Services</CardTitle>
                <Badge variant="secondary" className="bg-[#F47F21]/10 text-[#F47F21] w-fit">Highest Maturity</Badge>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <div className="text-3xl font-bold text-[#F47F21]">91%</div>
                  <p className="text-sm text-gray-400">AI adoption rate</p>
                </div>
                <p className="text-gray-300 text-sm mb-3">
                  Leading in model risk management and regulatory compliance due to strict oversight.
                </p>
                <p className="text-xs text-gray-500">
                  Top challenge: Balancing innovation with SOX/PCI compliance
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardHeader>
                <CardTitle>Healthcare</CardTitle>
                <Badge variant="secondary" className="bg-[#F47F21]/10 text-[#F47F21] w-fit">Rapid Growth</Badge>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <div className="text-3xl font-bold text-[#F47F21]">76%</div>
                  <p className="text-sm text-gray-400">AI adoption rate</p>
                </div>
                <p className="text-gray-300 text-sm mb-3">
                  Growing fast but concerned about PHI protection and clinical accuracy.
                </p>
                <p className="text-xs text-gray-500">
                  Top challenge: HIPAA compliance and patient safety
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardHeader>
                <CardTitle>Insurance</CardTitle>
                <Badge variant="secondary" className="bg-[#F47F21]/10 text-[#F47F21] w-fit">Emerging Focus</Badge>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <div className="text-3xl font-bold text-[#F47F21]">69%</div>
                  <p className="text-sm text-gray-400">AI adoption rate</p>
                </div>
                <p className="text-gray-300 text-sm mb-3">
                  Focus on algorithmic fairness in underwriting and claims processing.
                </p>
                <p className="text-xs text-gray-500">
                  Top challenge: Bias testing and state regulations
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    )
}
export default IndustryBreakdown