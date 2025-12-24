import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  BarChart3,
} from 'lucide-react';

const AdoptionTrends = () => {
    return (
        <section className="py-16">
            <div className="container mx-auto px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold mb-4">Enterprise AI Adoption Trends</h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        How organizations are deploying AI across functions and industries
                    </p>
                </motion.div>

                <div className="max-w-5xl mx-auto space-y-6">
                    <Card className="bg-[#172135] backdrop-blur-md border-white/10">
                        <CardHeader>
                            <CardTitle className="flex items-center">
                                <BarChart3 className="w-6 h-6 text-[#F47F21] mr-3" />
                                Top AI Use Cases in 2025
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <div>
                                    <div className="flex justify-between mb-2">
                                        <span className="text-gray-300">Customer Service & Support</span>
                                        <span className="text-[#F47F21] font-semibold">68%</span>
                                    </div>
                                    <div className="w-full bg-gray-700 rounded-full h-2">
                                        <div className="bg-[#F47F21] h-2 rounded-full" style={{ width: '68%' }}></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between mb-2">
                                        <span className="text-gray-300">Sales & Marketing</span>
                                        <span className="text-[#F47F21] font-semibold">54%</span>
                                    </div>
                                    <div className="w-full bg-gray-700 rounded-full h-2">
                                        <div className="bg-[#F47F21] h-2 rounded-full" style={{ width: '54%' }}></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between mb-2">
                                        <span className="text-gray-300">Process Automation</span>
                                        <span className="text-[#F47F21] font-semibold">47%</span>
                                    </div>
                                    <div className="w-full bg-gray-700 rounded-full h-2">
                                        <div className="bg-[#F47F21] h-2 rounded-full" style={{ width: '47%' }}></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between mb-2">
                                        <span className="text-gray-300">Data Analysis & Insights</span>
                                        <span className="text-[#F47F21] font-semibold">43%</span>
                                    </div>
                                    <div className="w-full bg-gray-700 rounded-full h-2">
                                        <div className="bg-[#F47F21] h-2 rounded-full" style={{ width: '43%' }}></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between mb-2">
                                        <span className="text-gray-300">Code Generation & Development</span>
                                        <span className="text-[#F47F21] font-semibold">38%</span>
                                    </div>
                                    <div className="w-full bg-gray-700 rounded-full h-2">
                                        <div className="bg-[#F47F21] h-2 rounded-full" style={{ width: '38%' }}></div>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}
export default AdoptionTrends