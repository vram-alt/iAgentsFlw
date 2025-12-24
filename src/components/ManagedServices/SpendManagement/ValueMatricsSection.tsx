'use client'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ValueMatricsSection = () => {
    return (
        <section className="py-16">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                    <Card className="bg-gradient-to-br from-[#F47F21]/20 to-[#FF6B35]/20 border-[#F47F21]/50">
                        <CardContent className="p-6 text-center">
                            <div className="text-4xl font-bold text-[#F47F21] mb-2">40-60%</div>
                            <div className="text-lg font-semibold mb-2">Cost Reduction</div>
                            <p className="text-sm text-gray-300">Average savings achieved through optimization</p>
                        </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-br from-[#F47F21]/20 to-[#FF6B35]/20 border-[#F47F21]/50">
                        <CardContent className="p-6 text-center">
                            <div className="text-4xl font-bold text-[#F47F21] mb-2">100%</div>
                            <div className="text-lg font-semibold mb-2">Visibility</div>
                            <p className="text-sm text-gray-300">Complete transparency into all AI spending</p>
                        </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-br from-[#F47F21]/20 to-[#FF6B35]/20 border-[#F47F21]/50">
                        <CardContent className="p-6 text-center">
                            <div className="text-4xl font-bold text-[#F47F21] mb-2">3-6mo</div>
                            <div className="text-lg font-semibold mb-2">ROI Timeline</div>
                            <p className="text-sm text-gray-300">Service pays for itself through savings</p>
                        </CardContent>
                    </Card>
                </div>

                <div className="mt-12 max-w-4xl mx-auto">
                    <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
                        <CardContent className="p-8">
                            <h3 className="text-2xl font-bold mb-6 text-center">Typical Cost Breakdown & Savings</h3>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between p-4 bg-black/20 rounded-lg">
                                    <div className="flex-1">
                                        <div className="font-semibold mb-1">Model API Costs</div>
                                        <div className="text-sm text-gray-400">OpenAI, Anthropic, Azure, etc.</div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-2xl font-bold text-red-400">Before: 70%</div>
                                        <div className="text-lg font-bold text-green-400">After: 35%</div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between p-4 bg-black/20 rounded-lg">
                                    <div className="flex-1">
                                        <div className="font-semibold mb-1">Infrastructure</div>
                                        <div className="text-sm text-gray-400">Hosting, vector DBs, caching</div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-2xl font-bold text-red-400">Before: 20%</div>
                                        <div className="text-lg font-bold text-green-400">After: 15%</div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between p-4 bg-black/20 rounded-lg">
                                    <div className="flex-1">
                                        <div className="font-semibold mb-1">Wasted Spend</div>
                                        <div className="text-sm text-gray-400">Failed requests, inefficient prompts</div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-2xl font-bold text-red-400">Before: 10%</div>
                                        <div className="text-lg font-bold text-green-400">After: 2%</div>
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

export default ValueMatricsSection