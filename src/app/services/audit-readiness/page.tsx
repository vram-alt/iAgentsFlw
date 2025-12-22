import type { Metadata } from 'next'
import AuditReadinessClient from '@/components/AuditReadinessClient'
import { getSiteUrl } from '@/lib/site-url'

const siteUrl = getSiteUrl()

export const metadata: Metadata = {
  title: 'Audit Readiness - Prepare for Regulatory Audits | AgentFlow AI',
  description: 'Prepare your organization for regulatory audits with comprehensive documentation, evidence collection, and expert guidance to ensure compliance confidence.',
  alternates: {
    canonical: `${siteUrl}/services/audit-readiness`,
  },
  openGraph: {
    title: 'Audit Readiness - Prepare for Regulatory Audits | AgentFlow AI',
    description: 'Prepare your organization for regulatory audits with comprehensive documentation, evidence collection, and expert guidance.',
    url: `${siteUrl}/services/audit-readiness`,
    type: 'website',
  },
}

export default function AuditReadinessPage() {
  return <AuditReadinessClient />
}

