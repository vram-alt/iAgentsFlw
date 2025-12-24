'use client'
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  DollarSign, 
  TrendingDown, 
  BarChart3,
  Target
} from 'lucide-react';

const WhyExportsSection = () => {
    return (
        <section className="py-16 bg-[#0F172A]/30">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Why Expert Management Saves Money</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              AI cost optimization requires deep technical knowledge and continuous attention
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#F47F21]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="w-6 h-6 text-[#F47F21]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Data-Driven Decisions</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Our experts analyze spending patterns across hundreds of deployments, identifying optimization opportunities that internal teams miss. We know what works and can implement proven cost-saving strategies immediately.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#F47F21]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingDown className="w-6 h-6 text-[#F47F21]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Proactive Optimization</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Rather than reacting to high bills, we continuously monitor and optimize spend. Model prices change, new efficient models launch, and usage patterns shift—we stay ahead of these changes to keep costs down.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#F47F21]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-[#F47F21]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Vendor Neutrality</h3>
                    <p className="text-gray-300 leading-relaxed">
                      We have no allegiance to specific AI providers. Our recommendations are purely based on what&apos;s best for your use case and budget, ensuring you get optimal value regardless of vendor.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#F47F21]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <DollarSign className="w-6 h-6 text-[#F47F21]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">ROI Focus</h3>
                    <p className="text-gray-300 leading-relaxed">
                      We track not just spend, but value delivered. Our reporting shows which AI investments are paying off and which need optimization or elimination, ensuring every dollar contributes to business outcomes.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    )
}

export default WhyExportsSection