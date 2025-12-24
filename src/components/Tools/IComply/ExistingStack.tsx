import { motion } from "framer-motion"
const ExistingStack = () => {
    return (
        <section className="py-12 sm:py-16 md:py-20 bg-[#0F172A]/30">
            <div className="container mx-auto px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-6">Works with your existing stack.</h2>
                    <p className="text-xl text-gray-300">Connect to identity providers, ITSM tools, data stores, and more.</p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
                    {/* Identity & CRM */}
                    <div className="text-center">
                        <h3 className="font-semibold mb-4 text-[#F47F21]">Identity & CRM</h3>
                        <div className="space-y-3">
                            <div className="bg-white/5 p-3 rounded-lg">Okta</div>
                            <div className="bg-white/5 p-3 rounded-lg">Azure AD</div>
                            <div className="bg-white/5 p-3 rounded-lg">Salesforce</div>
                            <div className="bg-white/5 p-3 rounded-lg">HubSpot</div>
                        </div>
                    </div>

                    {/* ITSM & Workflows */}
                    <div className="text-center">
                        <h3 className="font-semibold mb-4 text-[#F47F21]">ITSM & Workflows</h3>
                        <div className="space-y-3">
                            <div className="bg-white/5 p-3 rounded-lg">ServiceNow</div>
                            <div className="bg-white/5 p-3 rounded-lg">Jira</div>
                            <div className="bg-white/5 p-3 rounded-lg">Zapier</div>
                            <div className="bg-white/5 p-3 rounded-lg">Monday.com</div>
                        </div>
                    </div>

                    {/* Data & Analytics */}
                    <div className="text-center">
                        <h3 className="font-semibold mb-4 text-[#F47F21]">Data & Analytics</h3>
                        <div className="space-y-3">
                            <div className="bg-white/5 p-3 rounded-lg">Snowflake</div>
                            <div className="bg-white/5 p-3 rounded-lg">BigQuery</div>
                            <div className="bg-white/5 p-3 rounded-lg">Databricks</div>
                            <div className="bg-white/5 p-3 rounded-lg">Tableau</div>
                        </div>
                    </div>

                    {/* Messaging & Collab */}
                    <div className="text-center">
                        <h3 className="font-semibold mb-4 text-[#F47F21]">Messaging & Collab</h3>
                        <div className="space-y-3">
                            <div className="bg-white/5 p-3 rounded-lg">Slack</div>
                            <div className="bg-white/5 p-3 rounded-lg">Teams</div>
                            <div className="bg-white/5 p-3 rounded-lg">Gmail</div>
                            <div className="bg-white/5 p-3 rounded-lg">Outlook</div>
                        </div>
                    </div>

                    {/* Security/Observability */}
                    <div className="text-center">
                        <h3 className="font-semibold mb-4 text-[#F47F21]">Security/Observability</h3>
                        <div className="space-y-3">
                            <div className="bg-white/5 p-3 rounded-lg">Splunk</div>
                            <div className="bg-white/5 p-3 rounded-lg">DataDog</div>
                            <div className="bg-white/5 p-3 rounded-lg">AWS CloudTrail</div>
                            <div className="bg-white/5 p-3 rounded-lg">Azure Monitor</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ExistingStack;