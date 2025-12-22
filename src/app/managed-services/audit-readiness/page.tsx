import type { Metadata } from 'next'
import AuditReadinessClient from '@/components/AuditReadinessClient'
import { getSiteUrl } from '@/lib/site-url'

const siteUrl = getSiteUrl()

export const metadata: Metadata = {
  title: 'Audit Readiness - Managed Services | AgentFlow AI',
  description: 'Managed audit readiness and evidence collection for AI compliance audits.',
  alternates: {
    canonical: `${siteUrl}/managed-services/audit-readiness`,
  },
}

export default function ManagedAuditReadinessPage() {
  return <AuditReadinessClient />
}

