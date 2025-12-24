import type { Metadata } from 'next'
import AgentsFlowClient from '@/components/AgentsFlowClient'
import { getSiteUrl } from '@/lib/site-url'

const siteUrl = getSiteUrl()

export const metadata: Metadata = {
  title: 'AgentsFlow - Enterprise Apps & AI Governance Platform | AgentsFlow AI',
  description: 'Enterprise Apps & AI Governance platform for comprehensive visibility and control across your application ecosystem.',
  alternates: {
    canonical: `${siteUrl}/tools/AgentsFlow`,
  },
  openGraph: {
    title: 'AgentsFlow - Enterprise Apps & AI Governance Platform | AgentsFlow AI',
    description: 'Enterprise Apps & AI Governance platform for comprehensive visibility and control across your application ecosystem.',
    url: `${siteUrl}/tools/AgentsFlow`,
    type: 'website',
  },
}

export default function AgentsFlowPage() {
  return <AgentsFlowClient />
}

