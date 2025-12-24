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






const UserControlesAccessManagementSection =()=>{
    const [contactModalOpen, setContactModalOpen] = useState(false);
    return (
        <>
        <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto space-y-8">
            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Shield className="w-7 h-7 text-[#F47F21] mr-3" />
                  User Controls & Access Management
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300">
                  Granular control over who can access what data, how AI systems use personal information, and user-initiated data management actions.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-black/20 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Fine-Grained Permissions</h4>
                    <p className="text-sm text-gray-400">Define exactly what data each user, role, and AI agent can access</p>
                  </div>
                  <div className="bg-black/20 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Self-Service Preferences</h4>
                    <p className="text-sm text-gray-400">Enable users to manage their own data sharing preferences</p>
                  </div>
                  <div className="bg-black/20 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Access Reviews</h4>
                    <p className="text-sm text-gray-400">Regular audits of who has access to sensitive data</p>
                  </div>
                  <div className="bg-black/20 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Emergency Revocation</h4>
                    <p className="text-sm text-gray-400">Instant access removal in case of security incidents</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Lock className="w-7 h-7 text-[#F47F21] mr-3" />
                  MCP Server Access Governance
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300">
                  Secure management of Model Context Protocol servers, ensuring AI systems only access authorized data sources with proper authentication and monitoring.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> <span>Credential rotation and management for all MCP connections</span></li>
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> <span>Whitelist management for approved data sources and APIs</span></li>
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> <span>Real-time monitoring of data access patterns and anomalies</span></li>
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> <span>Integration security assessments for third-party services</span></li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Database className="w-7 h-7 text-[#F47F21] mr-3" />
                  Data Retention & Lifecycle
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300">
                  Automated management of data throughout its lifecycle, from collection through retention to deletion, ensuring compliance with regulatory requirements.
                </p>
                <div className="bg-black/20 p-6 rounded-lg">
                  <h4 className="font-semibold mb-4">Retention Policy Framework</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between py-2 border-b border-white/10">
                      <span className="text-gray-300">Training Data</span>
                      <Badge variant="secondary">Configurable Retention</Badge>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-white/10">
                      <span className="text-gray-300">User Interactions</span>
                      <Badge variant="secondary">30-90 Days Default</Badge>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-white/10">
                      <span className="text-gray-300">Audit Logs</span>
                      <Badge variant="secondary">7 Years (Compliance)</Badge>
                    </div>
                    <div className="flex items-center justify-between py-2">
                      <span className="text-gray-300">PII Data</span>
                      <Badge variant="secondary">Purpose-Limited</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Eye className="w-7 h-7 text-[#F47F21] mr-3" />
                  Consent & Purpose Management
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300">
                  Track and enforce data usage based on user consent and stated purposes, with full audit trails for regulatory compliance.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-black/20 p-4 rounded-lg text-center">
                    <Settings className="w-8 h-8 text-[#F47F21] mx-auto mb-2" />
                    <div className="font-semibold mb-1">Consent Capture</div>
                    <p className="text-xs text-gray-400">Collect and document user permissions</p>
                  </div>
                  <div className="bg-black/20 p-4 rounded-lg text-center">
                    <Shield className="w-8 h-8 text-[#F47F21] mx-auto mb-2" />
                    <div className="font-semibold mb-1">Purpose Enforcement</div>
                    <p className="text-xs text-gray-400">Ensure data used only for stated purposes</p>
                  </div>
                  <div className="bg-black/20 p-4 rounded-lg text-center">
                    <FileText className="w-8 h-8 text-[#F47F21] mx-auto mb-2" />
                    <div className="font-semibold mb-1">Audit Documentation</div>
                    <p className="text-xs text-gray-400">Complete records for compliance proof</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
        </>
    )
}
export default UserControlesAccessManagementSection