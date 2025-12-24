import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ValueMetricsSection = () => {
    return (
        <section className="py-16">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    <Card className="bg-gradient-to-br from-[#F47F21]/20 to-[#FF6B35]/20 border-[#F47F21]/50 text-center">
                        <CardContent className="p-6">
                            <div className="text-3xl font-bold text-[#F47F21] mb-2">100%</div>
                            <div className="text-sm text-gray-300">AI interaction coverage with no blind spots</div>
                        </CardContent>
                    </Card>
                    <Card className="bg-gradient-to-br from-[#F47F21]/20 to-[#FF6B35]/20 border-[#F47F21]/50 text-center">
                        <CardContent className="p-6">
                            <div className="text-3xl font-bold text-[#F47F21] mb-2">&lt;5min</div>
                            <div className="text-sm text-gray-300">Average detection to alert time</div>
                        </CardContent>
                    </Card>
                    <Card className="bg-gradient-to-br from-[#F47F21]/20 to-[#FF6B35]/20 border-[#F47F21]/50 text-center">
                        <CardContent className="p-6">
                            <div className="text-3xl font-bold text-[#F47F21] mb-2">92%</div>
                            <div className="text-sm text-gray-300">Issue prevention before user impact</div>
                        </CardContent>
                    </Card>
                    <Card className="bg-gradient-to-br from-[#F47F21]/20 to-[#FF6B35]/20 border-[#F47F21]/50 text-center">
                        <CardContent className="p-6">
                            <div className="text-3xl font-bold text-[#F47F21] mb-2">50+</div>
                            <div className="text-sm text-gray-300">Quality metrics tracked continuously</div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}

export default ValueMetricsSection