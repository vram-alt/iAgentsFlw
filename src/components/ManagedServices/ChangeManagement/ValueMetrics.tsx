import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';


const ValueMetrix = () => {
    return (
        <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="bg-gradient-to-br from-[#F47F21]/20 to-[#FF6B35]/20 border-[#F47F21]/50 text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-[#F47F21] mb-2">98%</div>
                <div className="text-sm text-gray-300">Change success rate without rollbacks</div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-[#F47F21]/20 to-[#FF6B35]/20 border-[#F47F21]/50 text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-[#F47F21] mb-2">50%</div>
                <div className="text-sm text-gray-300">Faster time to production</div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-[#F47F21]/20 to-[#FF6B35]/20 border-[#F47F21]/50 text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-[#F47F21] mb-2">&lt;15min</div>
                <div className="text-sm text-gray-300">Average rollback time if needed</div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-[#F47F21]/20 to-[#FF6B35]/20 border-[#F47F21]/50 text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-[#F47F21] mb-2">100%</div>
                <div className="text-sm text-gray-300">Audit-ready documentation</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    )
}
export default ValueMetrix