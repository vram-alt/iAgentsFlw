import type { Metadata } from 'next'
import AgentsFlowClient from '@/components/AgentsFlowClient'
import { getSiteUrl } from '@/lib/site-url'

const siteUrl = getSiteUrl()

export const metadata: Metadata = {
  title: 'AgentsFlow - Production-Safe AI Agents for Enterprise | AgentsFlow AI',
  description: 'Production-safe AI agents for enterprise with built-in governance, compliance, and security controls.',
  alternates: {
    canonical: `${siteUrl}/tools/AgentsFlow-old`,
  },
  openGraph: {
    title: 'AgentsFlow - Production-Safe AI Agents for Enterprise | AgentsFlow AI',
    description: 'Production-safe AI agents for enterprise with built-in governance, compliance, and security controls.',
    url: `${siteUrl}/tools/AgentsFlow-old`,
    type: 'website',
  },
}

export default function AgentsFlowPage() {
  return <AgentsFlowClient />
}

