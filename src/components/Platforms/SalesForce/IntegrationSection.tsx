import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Lock,
  Zap,
  GitBranch,
} from 'lucide-react';

const IntegrationSection = () => {
    return (
        <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Seamless Integration</h2>
          </motion.div>

          <Card className="max-w-4xl mx-auto bg-[#0F172A]/50 backdrop-blur-md border-white/10">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <GitBranch className="w-12 h-12 text-[#F47F21] mx-auto mb-4" />
                  <h4 className="font-bold mb-2">Native Integration</h4>
                  <p className="text-sm text-gray-400">Salesforce-native app installed from AppExchange</p>
                </div>
                <div>
                  <Lock className="w-12 h-12 text-[#F47F21] mx-auto mb-4" />
                  <h4 className="font-bold mb-2">Zero Data Copy</h4>
                  <p className="text-sm text-gray-400">All data stays within your Salesforce org</p>
                </div>
                <div>
                  <Zap className="w-12 h-12 text-[#F47F21] mx-auto mb-4" />
                  <h4 className="font-bold mb-2">5 Minute Setup</h4>
                  <p className="text-sm text-gray-400">Quick deployment with guided configuration</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    )
}
export default IntegrationSection 