import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  
  CheckCircle,
} from 'lucide-react';
const BestPractices = () => {
    return (
        <section className="py-16">
            <div className="container mx-auto px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold mb-4">What High Performers Do Differently</h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Insights from the top 10% of AI-mature organizations
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto space-y-4">
                    <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
                        <CardContent className="p-6">
                            <div className="flex items-start">
                                <CheckCircle className="w-6 h-6 text-[#F47F21] mr-4 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="text-xl font-bold mb-2">Establish Governance Early</h3>
                                    <p className="text-gray-300">
                                        High performers implement governance frameworks before scaling AI, not after. 92% have formal governance policies in place.
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
                        <CardContent className="p-6">
                            <div className="flex items-start">
                                <CheckCircle className="w-6 h-6 text-[#F47F21] mr-4 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="text-xl font-bold mb-2">Automate Compliance Monitoring</h3>
                                    <p className="text-gray-300">
                                        They use automated tools for continuous monitoring, reducing manual effort by 80% while improving coverage.
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
                        <CardContent className="p-6">
                            <div className="flex items-start">
                                <CheckCircle className="w-6 h-6 text-[#F47F21] mr-4 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="text-xl font-bold mb-2">Invest in Training</h3>
                                    <p className="text-gray-300">
                                        Provide comprehensive AI governance training to teams across the organization, not just technical staff.
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
                        <CardContent className="p-6">
                            <div className="flex items-start">
                                <CheckCircle className="w-6 h-6 text-[#F47F21] mr-4 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="text-xl font-bold mb-2">Partner with Experts</h3>
                                    <p className="text-gray-300">
                                        78% of high performers leverage managed services for specialized expertise and 24/7 monitoring capabilities.
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
export default BestPractices