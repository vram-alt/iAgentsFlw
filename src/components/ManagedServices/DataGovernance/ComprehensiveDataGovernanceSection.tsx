'use client'

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import ContactFormModal from '@/components/ContactFormModal';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Database, 
  Shield, 
  CheckCircle, 
  Users,
  ArrowRight,
  Lock,
  Eye,
  FileText,
  Server,
  UserCheck,
  Settings
} from 'lucide-react';







const ComprehensiveDataGoveernanceSection =()=>{
     const [contactModalOpen, setContactModalOpen] = useState(false);
    return (
        <>
        <section className="py-16 bg-[#0F172A]/30">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Comprehensive Data Governance</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              End-to-end management of data flows, access controls, and compliance requirements
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardHeader>
                <UserCheck className="w-12 h-12 text-[#F47F21] mb-4" />
                <CardTitle>User Controls</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Role-based access control (RBAC) implementation</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> User permission management</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Access audit logging</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Self-service data controls</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardHeader>
                <Server className="w-12 h-12 text-[#F47F21] mb-4" />
                <CardTitle>MCP Server Access</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Model Context Protocol security</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> API access governance</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Integration point monitoring</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Server credential management</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardHeader>
                <Database className="w-12 h-12 text-[#F47F21] mb-4" />
                <CardTitle>Data Retention</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Retention policy enforcement</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Automated data lifecycle management</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Secure data archiving</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Right to deletion compliance</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardHeader>
                <FileText className="w-12 h-12 text-[#F47F21] mb-4" />
                <CardTitle>Consent Management</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Consent capture and tracking</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Purpose limitation enforcement</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Consent withdrawal processing</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Audit-ready documentation</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
        </>
    )
}
export default ComprehensiveDataGoveernanceSection