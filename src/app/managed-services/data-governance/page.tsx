import type { Metadata } from 'next'
import DataGovernanceClient from '@/components/DataGovernanceClient'
import { getSiteUrl } from '@/lib/site-url'
import DataGovernance from '@/components/ManagedServices/DataGovernance'

const siteUrl = getSiteUrl()

export const metadata: Metadata = {
  title: 'Data Governance - Managed Services | AgentsFlow AI',
  description: 'Comprehensive data governance and privacy management for AI systems.',
  alternates: {
    canonical: `${siteUrl}/managed-services/data-governance`,
  },
}

export default function DataGovernancePage() {
  return <DataGovernance />
}

