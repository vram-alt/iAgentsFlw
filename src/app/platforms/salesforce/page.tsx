import type { Metadata } from 'next'
import SalesforceClient from '@/components/SalesforceClient'
import { getSiteUrl } from '@/lib/site-url'

const siteUrl = getSiteUrl()

export const metadata: Metadata = {
  title: 'AI Governance for Salesforce AI | AgentFlow AI',
  description: 'Enhance Salesforce Einstein and Agentforce with comprehensive AI governance. AgentFlow extends the Einstein Trust Layer with advanced monitoring, compliance, and control capabilities.',
  alternates: {
    canonical: `${siteUrl}/platforms/salesforce`,
  },
  openGraph: {
    title: 'AI Governance for Salesforce AI | AgentFlow AI',
    description: 'Enhance Salesforce Einstein and Agentforce with comprehensive AI governance. AgentFlow extends the Einstein Trust Layer with advanced monitoring, compliance, and control capabilities.',
    url: `${siteUrl}/platforms/salesforce`,
    type: 'website',
  },
}

export default function SalesforcePage() {
  return <SalesforceClient />
}

