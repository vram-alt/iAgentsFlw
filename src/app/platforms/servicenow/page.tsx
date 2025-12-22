import type { Metadata } from 'next'
import ServiceNowClient from '@/components/ServiceNowClient'
import { getSiteUrl } from '@/lib/site-url'

const siteUrl = getSiteUrl()

export const metadata: Metadata = {
  title: 'AI Governance for ServiceNow Now Assist | AgentFlow AI',
  description: 'Govern ServiceNow Now Assist, Virtual Agent, and AI Search with ITSM-specific guardrails and comprehensive quality monitoring.',
  alternates: {
    canonical: `${siteUrl}/platforms/servicenow`,
  },
  openGraph: {
    title: 'AI Governance for ServiceNow Now Assist | AgentFlow AI',
    description: 'Govern ServiceNow Now Assist, Virtual Agent, and AI Search with ITSM-specific guardrails and comprehensive quality monitoring.',
    url: `${siteUrl}/platforms/servicenow`,
    type: 'website',
  },
}

export default function ServiceNowPage() {
  return <ServiceNowClient />
}

