import { motion } from 'framer-motion';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ContactFormModal } from '@/components/ContactFormModal';

const WeHelpSection = () => {
    return(
        <section className="py-12 sm:py-16 md:py-24 bg-[#0F172A]/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4 md:mb-6 px-2 text-white">
              Two Ways We Help - <span className="text-gradient">Pick Your Path</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-2">
              Whether you need strategic guidance or hands-on management, we have the 
              right approach for your AI governance needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
            {[
              {
                title: "Advisory & Architecture",
                description: "Industry-specific blueprints, guardrails, cost/latency modeling, and compliance planning.",
                features: ["Strategic AI governance framework design", "Industry-specific compliance blueprints", "Cost and performance optimization models", "Executive-level governance insights"],
                timeline: "4-12 weeks",
                deliverable: "Complete governance architecture & roadmap",
                highlight: "Strategic guidance"
              },
              {
                title: "Managed Services", 
                description: "24/7 monitoring, human-in-the-loop validation, change management, and audit readiness.",
                features: ["Continuous monitoring and alerting", "Human-in-the-loop validation processes", "Automated change management", "Ongoing compliance maintenance"],
                timeline: "Ongoing partnership",
                deliverable: "Fully managed governance operations",
                highlight: "Hands-on management"
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="bg-[#172135] backdrop-blur-md border-2 border-white/20 h-full shadow-lg hover:shadow-xl transition-all group">
                  <CardHeader className="p-4 sm:p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3 sm:mb-4">
                      <CardTitle className="text-xl sm:text-2xl font-display text-[#1A7DFF]">{service.title}</CardTitle>
                      <span className="text-xs font-semibold text-[#1A7DFF] bg-[#F47F21]/10 px-3 py-1 rounded-full self-start sm:self-auto">
                        {service.highlight}
                      </span>
                    </div>
                    <p className="text-sm sm:text-base text-gray-300">{service.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-4 sm:space-y-6 p-4 sm:p-6">
                    <div>
                      <h4 className="font-semibold mb-3">What You Get:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-[#1A7DFF] flex-shrink-0" />
                            <span className="text-sm text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="border-t border-white/10 pt-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-400">Timeline:</span>
                        <span className="text-sm font-medium text-white">{service.timeline}</span>
                      </div>
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-sm text-gray-400">Deliverable:</span>
                        <span className="text-sm font-medium text-white">{service.deliverable}</span>                        
                      </div>
                    </div>

                    <Button 
                      onClick={() => openContactModal(service.title === "Advisory & Architecture" ? 'advisory' : 'managed')}
                      className="w-full bg-[#0080FF] hover:bg-[#0066CC] text-white transition-colors"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    )
}
export default WeHelpSection;