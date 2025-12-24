import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { 
  ArrowRight,
  TrendingUp,
  AlertTriangle,
  Shield,
  Target,
  BarChart3,
  Users,
  Zap,
  CheckCircle,
  Download
} from 'lucide-react';

const KeyFindings = () => {
    return (
        <section className="py-16 bg-[#0F172A]/30">
            <div className="container mx-auto px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold mb-4">Key Findings</h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        The most critical insights from our 2025 research
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    <Card className="bg-gradient-to-br from-[#F47F21]/20 to-[#FF6B35]/20 border-[#F47F21]/50">
                        <CardContent className="p-6 text-center">
                            <TrendingUp className="w-12 h-12 text-[#F47F21] mx-auto mb-4" />
                            <div className="text-4xl font-bold text-[#F47F21] mb-2">87%</div>
                            <div className="text-lg font-semibold mb-2">AI Adoption</div>
                            <p className="text-sm text-gray-300">of enterprises now using AI in production</p>
                        </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-br from-[#F47F21]/20 to-[#FF6B35]/20 border-[#F47F21]/50">
                        <CardContent className="p-6 text-center">
                            <AlertTriangle className="w-12 h-12 text-[#F47F21] mx-auto mb-4" />
                            <div className="text-4xl font-bold text-[#F47F21] mb-2">73%</div>
                            <div className="text-lg font-semibold mb-2">Governance Gap</div>
                            <p className="text-sm text-gray-300">lack formal AI governance framework</p>
                        </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-br from-[#F47F21]/20 to-[#FF6B35]/20 border-[#F47F21]/50">
                        <CardContent className="p-6 text-center">
                            <Shield className="w-12 h-12 text-[#F47F21] mx-auto mb-4" />
                            <div className="text-4xl font-bold text-[#F47F21] mb-2">62%</div>
                            <div className="text-lg font-semibold mb-2">Security Concerns</div>
                            <p className="text-sm text-gray-300">cite data privacy as top AI risk</p>
                        </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-br from-[#F47F21]/20 to-[#FF6B35]/20 border-[#F47F21]/50">
                        <CardContent className="p-6 text-center">
                            <Target className="w-12 h-12 text-[#F47F21] mx-auto mb-4" />
                            <div className="text-4xl font-bold text-[#F47F21] mb-2">$2.4M</div>
                            <div className="text-lg font-semibold mb-2">Average Cost</div>
                            <p className="text-sm text-gray-300">of AI governance gaps per year</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}
export default KeyFindings