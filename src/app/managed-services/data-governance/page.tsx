import type { Metadata } from 'next'
import DataGovernanceClient from '@/components/DataGovernanceClient'
import { getSiteUrl } from '@/lib/site-url'

const siteUrl = getSiteUrl()

export const metadata: Metadata = {
  title: 'Data Governance - Managed Services | AgentFlow AI',
  description: 'Comprehensive data governance and privacy management for AI systems.',
  alternates: {
    canonical: `${siteUrl}/managed-services/data-governance`,
  },
}

export default function DataGovernancePage() {
  return <DataGovernanceClient />
}

