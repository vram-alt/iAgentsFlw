import type { Metadata } from 'next'
import SpendManagementClient from '@/components/SpendManagementClient'
import { getSiteUrl } from '@/lib/site-url'

const siteUrl = getSiteUrl()

export const metadata: Metadata = {
  title: 'Spend Management - Managed Services | AgentFlow AI',
  description: 'AI cost optimization and spend management services.',
  alternates: {
    canonical: `${siteUrl}/managed-services/spend-management`,
  },
}

export default function SpendManagementPage() {
  return <SpendManagementClient />
}

