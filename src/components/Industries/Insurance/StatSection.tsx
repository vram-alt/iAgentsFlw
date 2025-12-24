import { Card, CardContent } from '@/components/ui/card';

const StatSection = () => {
    return (
        <section className="py-16">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-4">
                    <Card className="border-[#F47F21]/50 bg-gradient-to-br from-[#F47F21]/20 to-[#FF6B35]/20">
                        <CardContent className="p-6 text-center">
                            <div className="mb-2 text-4xl font-bold text-[#F47F21]">100%</div>
                            <div className="mb-2 text-lg font-semibold">Fair Outcomes</div>
                            <p className="text-sm text-gray-300">Zero discrimination findings</p>
                        </CardContent>
                    </Card>

                    <Card className="border-[#F47F21]/50 bg-gradient-to-br from-[#F47F21]/20 to-[#FF6B35]/20">
                        <CardContent className="p-6 text-center">
                            <div className="mb-2 text-4xl font-bold text-[#F47F21]">95%</div>
                            <div className="mb-2 text-lg font-semibold">Claims Accuracy</div>
                            <p className="text-sm text-gray-300">Reduced processing errors</p>
                        </CardContent>
                    </Card>

                    <Card className="border-[#F47F21]/50 bg-gradient-to-br from-[#F47F21]/20 to-[#FF6B35]/20">
                        <CardContent className="p-6 text-center">
                            <div className="mb-2 text-4xl font-bold text-[#F47F21]">70%</div>
                            <div className="mb-2 text-lg font-semibold">Faster Audits</div>
                            <p className="text-sm text-gray-300">Streamlined state exams</p>
                        </CardContent>
                    </Card>

                    <Card className="border-[#F47F21]/50 bg-gradient-to-br from-[#F47F21]/20 to-[#FF6B35]/20">
                        <CardContent className="p-6 text-center">
                            <div className="mb-2 text-4xl font-bold text-[#F47F21]">60%</div>
                            <div className="mb-2 text-lg font-semibold">Cost Savings</div>
                            <p className="text-sm text-gray-300">Lower compliance overhead</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}

export default StatSection