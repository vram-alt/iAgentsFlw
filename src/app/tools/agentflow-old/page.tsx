import type { Metadata } from 'next'
import AgentFlowClient from '@/components/AgentFlowClient'
import { getSiteUrl } from '@/lib/site-url'

const siteUrl = getSiteUrl()

export const metadata: Metadata = {
  title: 'AgentFlow - Production-Safe AI Agents for Enterprise | AgentFlow AI',
  description: 'Production-safe AI agents for enterprise with built-in governance, compliance, and security controls.',
  alternates: {
    canonical: `${siteUrl}/tools/agentflow-old`,
  },
  openGraph: {
    title: 'AgentFlow - Production-Safe AI Agents for Enterprise | AgentFlow AI',
    description: 'Production-safe AI agents for enterprise with built-in governance, compliance, and security controls.',
    url: `${siteUrl}/tools/agentflow-old`,
    type: 'website',
  },
}

export default function AgentFlowPage() {
  return <AgentFlowClient />
}

