'use client'
import { Card, CardContent } from "@/components/ui/card"

const StatSection = () => {
    return (
        <section className="py-16">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-4">
                    <Card className="border-[#F47F21]/50 bg-gradient-to-br from-[#F47F21]/20 to-[#FF6B35]/20">
                        <CardContent className="p-6 text-center">
                            <div className="mb-2 text-4xl font-bold text-[#F47F21]">100%</div>
                            <div className="mb-2 text-lg font-semibold">HIPAA Compliant</div>
                            <p className="text-sm text-gray-300">Full regulatory adherence</p>
                        </CardContent>
                    </Card>

                    <Card className="border-[#F47F21]/50 bg-gradient-to-br from-[#F47F21]/20 to-[#FF6B35]/20">
                        <CardContent className="p-6 text-center">
                            <div className="mb-2 text-4xl font-bold text-[#F47F21]">Zero</div>
                            <div className="mb-2 text-lg font-semibold">PHI Breaches</div>
                            <p className="text-sm text-gray-300">Proactive protection</p>
                        </CardContent>
                    </Card>

                    <Card className="border-[#F47F21]/50 bg-gradient-to-br from-[#F47F21]/20 to-[#FF6B35]/20">
                        <CardContent className="p-6 text-center">
                            <div className="mb-2 text-4xl font-bold text-[#F47F21]">80%</div>
                            <div className="mb-2 text-lg font-semibold">Faster Deployment</div>
                            <p className="text-sm text-gray-300">Accelerated compliance</p>
                        </CardContent>
                    </Card>

                    <Card className="border-[#F47F21]/50 bg-gradient-to-br from-[#F47F21]/20 to-[#FF6B35]/20">
                        <CardContent className="p-6 text-center">
                            <div className="mb-2 text-4xl font-bold text-[#F47F21]">99.9%</div>
                            <div className="mb-2 text-lg font-semibold">Uptime</div>
                            <p className="text-sm text-gray-300">Critical care reliability</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}

export default StatSection