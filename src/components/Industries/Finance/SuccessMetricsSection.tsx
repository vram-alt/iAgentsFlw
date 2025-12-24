'use client'
import { Card, CardContent } from "@/components/ui/card"

const SuccessMetricsSection = () => {
    return (
        <section className="py-16">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-4">
                    <Card className="border-[#F47F21]/50 bg-gradient-to-br from-[#F47F21]/20 to-[#FF6B35]/20">
                        <CardContent className="p-6 text-center">
                            <div className="mb-2 text-4xl font-bold text-[#F47F21]">100%</div>
                            <div className="mb-2 text-lg font-semibold">Audit Success</div>
                            <p className="text-sm text-gray-300">Pass SOX & SEC audits</p>
                        </CardContent>
                    </Card>

                    <Card className="border-[#F47F21]/50 bg-gradient-to-br from-[#F47F21]/20 to-[#FF6B35]/20">
                        <CardContent className="p-6 text-center">
                            <div className="mb-2 text-4xl font-bold text-[#F47F21]">75%</div>
                            <div className="mb-2 text-lg font-semibold">Faster Compliance</div>
                            <p className="text-sm text-gray-300">Reduce time to market</p>
                        </CardContent>
                    </Card>

                    <Card className="border-[#F47F21]/50 bg-gradient-to-br from-[#F47F21]/20 to-[#FF6B35]/20">
                        <CardContent className="p-6 text-center">
                            <div className="mb-2 text-4xl font-bold text-[#F47F21]">50%</div>
                            <div className="mb-2 text-lg font-semibold">Cost Reduction</div>
                            <p className="text-sm text-gray-300">Lower AI operational costs</p>
                        </CardContent>
                    </Card>

                    <Card className="border-[#F47F21]/50 bg-gradient-to-br from-[#F47F21]/20 to-[#FF6B35]/20">
                        <CardContent className="p-6 text-center">
                            <div className="mb-2 text-4xl font-bold text-[#F47F21]">Zero</div>
                            <div className="mb-2 text-lg font-semibold">Violations</div>
                            <p className="text-sm text-gray-300">Proactive risk mitigation</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}

export default SuccessMetricsSection