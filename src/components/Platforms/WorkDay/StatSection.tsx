import { Card, CardContent, } from '@/components/ui/card';

const StatSection = () => {
    return (
        <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-[#F47F21]/20 to-[#FF6B35]/20 border-[#F47F21]/50">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-[#F47F21] mb-2">100%</div>
                <div className="text-lg font-semibold mb-2">Fair Hiring</div>
                <p className="text-sm text-gray-300">Zero bias findings</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-[#F47F21]/20 to-[#FF6B35]/20 border-[#F47F21]/50">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-[#F47F21] mb-2">80%</div>
                <div className="text-lg font-semibold mb-2">Faster Compliance</div>
                <p className="text-sm text-gray-300">Automated checks</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-[#F47F21]/20 to-[#FF6B35]/20 border-[#F47F21]/50">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-[#F47F21] mb-2">Zero</div>
                <div className="text-lg font-semibold mb-2">Data Breaches</div>
                <p className="text-sm text-gray-300">Proactive protection</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    )
}
export default StatSection