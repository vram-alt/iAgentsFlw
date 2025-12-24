import { motion } from 'framer-motion';
import { Card, CardContent} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const IntegrationSection = () => {
      const integrations = [
    { name: "SAP", category: "ERP" },
    { name: "Oracle", category: "ERP" },
    { name: "NetSuite", category: "ERP" },
    { name: "Salesforce", category: "CRM" },
    { name: "Workday", category: "HR/Finance" },
    { name: "ServiceNow", category: "ITSM" },
    { name: "DocuSign", category: "E-Signature" },
    { name: "Adobe Sign", category: "E-Signature" },
    { name: "SharePoint", category: "Document Management" },
    { name: "Box", category: "Cloud Storage" },
    { name: "Dropbox", category: "Cloud Storage" },
    { name: "Google Drive", category: "Cloud Storage" }
  ];
    return (
        <section className="py-20 bg-[#0F172A]/30">
            <div className="container mx-auto px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl font-bold mb-4">
                        Seamless <span className="text-gradient">Integrations</span>
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Connect with your existing enterprise systems
                    </p>
                </motion.div>

                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        {integrations.map((integration, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                            >
                                <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10 hover:border-[#F47F21]/50 transition-all hover:scale-105">
                                    <CardContent className="p-4 text-center">
                                        <div className="font-semibold text-white text-sm mb-1">{integration.name}</div>
                                        <Badge variant="secondary" className="text-xs bg-white/5">
                                            {integration.category}
                                        </Badge>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

    )
}
export default IntegrationSection