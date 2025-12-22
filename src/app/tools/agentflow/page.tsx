import type { Metadata } from 'next'
import AgentFlowClient from '@/components/AgentFlowClient'
import { getSiteUrl } from '@/lib/site-url'

const siteUrl = getSiteUrl()

export const metadata: Metadata = {
  title: 'AgentFlow - Enterprise Apps & AI Governance Platform | AgentFlow AI',
  description: 'Enterprise Apps & AI Governance platform for comprehensive visibility and control across your application ecosystem.',
  alternates: {
    canonical: `${siteUrl}/tools/agentflow`,
  },
  openGraph: {
    title: 'AgentFlow - Enterprise Apps & AI Governance Platform | AgentFlow AI',
    description: 'Enterprise Apps & AI Governance platform for comprehensive visibility and control across your application ecosystem.',
    url: `${siteUrl}/tools/agentFlow`,
    type: 'website',
  },
}

export default function AgentFlowPage() {
  return <AgentFlowClient />
}

