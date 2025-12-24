import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown } from "lucide-react"

const FaqSection = () => {
    return (
       <section className="py-12 sm:py-16 md:py-20 bg-[#0F172A]/30">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-300">Everything you need to know about iComply</p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
                <CardContent className="p-6">
                  <details className="group">
                    <summary className="flex items-center justify-between cursor-pointer font-semibold text-lg">
                      How long does implementation take?
                      <ChevronDown className="w-5 h-5 group-open:rotate-180 transition-transform" />
                    </summary>
                    <div className="mt-4 text-gray-300">
                      <p>Typical implementation takes 4-8 weeks depending on your existing systems and data complexity. We provide dedicated implementation support and can often accelerate timelines for urgent compliance needs.</p>
                    </div>
                  </details>
                </CardContent>
              </Card>

              <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
                <CardContent className="p-6">
                  <details className="group">
                    <summary className="flex items-center justify-between cursor-pointer font-semibold text-lg">
                      What AI regulations does iComply support?
                      <ChevronDown className="w-5 h-5 group-open:rotate-180 transition-transform" />
                    </summary>
                    <div className="mt-4 text-gray-300">
                      <p>iComply supports all major AI regulations including EU AI Act, ISO/IEC 42001, NIST AI Risk Management Framework, and GDPR-AI dependencies. We can automate compliance for any AI regulation—our platform is regulation-agnostic and adaptable to emerging frameworks worldwide including Canada&apos;s AIDA, China&apos;s PIPL, and Singapore&apos;s AI governance framework.</p>
                    </div>
                  </details>
                </CardContent>
              </Card>

              <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
                <CardContent className="p-6">
                  <details className="group">
                    <summary className="flex items-center justify-between cursor-pointer font-semibold text-lg">
                      Can iComply integrate with our existing tools?
                      <ChevronDown className="w-5 h-5 group-open:rotate-180 transition-transform" />
                    </summary>
                    <div className="mt-4 text-gray-300">
                      <p>Yes, iComply integrates with 200+ tools including identity providers (Okta, Azure AD), ITSM platforms (ServiceNow, Jira), data stores (Snowflake, BigQuery), and communication tools (Slack, Teams).</p>
                    </div>
                  </details>
                </CardContent>
              </Card>

              <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
                <CardContent className="p-6">
                  <details className="group">
                    <summary className="flex items-center justify-between cursor-pointer font-semibold text-lg">
                      What&apos;s the difference between iComply and AgentsFlow?
                      <ChevronDown className="w-5 h-5 group-open:rotate-180 transition-transform" />
                    </summary>
                    <div className="mt-4 text-gray-300">
                      <p>AgentsFlow focuses on AI governance (models, agents, prompts), while iComply handles AI compliance automation (risk assessments, audit readiness, regulatory obligations). Together they provide complete coverage—AgentsFlow tracks your AI systems in real-time, and iComply uses that data to automate compliance documentation and evidence generation for EU AI Act and other regulations.</p>
                    </div>
                  </details>
                </CardContent>
              </Card>

              <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
                <CardContent className="p-6">
                  <details className="group">
                    <summary className="flex items-center justify-between cursor-pointer font-semibold text-lg">
                      Do you offer professional services?
                      <ChevronDown className="w-5 h-5 group-content:rotate-180 transition-transform" />
                    </summary>
                    <div className="mt-4 text-gray-300">
                      <p>Yes, we offer assessment services, managed compliance operations, and audit readiness support. Our team includes former regulators and compliance experts who can guide your program.</p>
                    </div>
                  </details>
                </CardContent>
              </Card>

              <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
                <CardContent className="p-6">
                  <details className="group">
                    <summary className="flex items-center justify-between cursor-pointer font-semibold text-lg">
                      What kind of support do you provide?
                      <ChevronDown className="w-5 h-5 group-open:rotate-180 transition-transform" />
                    </summary>
                    <div className="mt-4 text-gray-300">
                      <p>We provide 24/7 technical support, dedicated customer success managers, regular training sessions, and access to our compliance expert network for complex regulatory questions.</p>
                    </div>
                  </details>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    )
}
export default FaqSection;