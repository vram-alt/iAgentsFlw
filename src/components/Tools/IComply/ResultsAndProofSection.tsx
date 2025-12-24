import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

const ResultsAndProofSection = () => {
    return (
         <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Results & Proof</h2>
            <p className="text-xl text-gray-300">Real outcomes from organizations using iComply</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardContent className="p-8 text-center">
                <div className="text-4xl font-bold text-[#F47F21] mb-4">90%</div>
                <h3 className="text-xl font-semibold mb-2">Faster EU AI Act Compliance</h3>
                <p className="text-gray-300">Time to audit readiness reduced from 6 months to 3 weeks</p>
                <div className="mt-4 text-sm text-gray-400">
                  &ldquo;iComply + AgentsFlow gave us instant audit-ready documentation&rdquo;
                  <br />— AI Compliance Officer, Tech Unicorn
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardContent className="p-8 text-center">
                <div className="text-4xl font-bold text-[#F47F21] mb-4">$3.2M</div>
                <h3 className="text-xl font-semibold mb-2">Annual Cost Savings</h3>
                <p className="text-gray-300">Reduced compliance costs and avoided regulatory fines</p>
                <div className="mt-4 text-sm text-gray-400">
                  &ldquo;Automated compliance saved us millions in consulting fees&rdquo;
                  <br />— Chief AI Officer, Healthcare Platform
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardContent className="p-8 text-center">
                <div className="text-4xl font-bold text-[#F47F21] mb-4">100%</div>
                <h3 className="text-xl font-semibold mb-2">AI Audit Pass Rate</h3>
                <p className="text-gray-300">Zero findings in EU AI Act assessments across all clients</p>
                <div className="mt-4 text-sm text-gray-400">
                  &ldquo;Regulators praised our real-time compliance evidence&rdquo;
                  <br />— Chief Compliance Officer, Global AI Firm
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    )
}
export default ResultsAndProofSection