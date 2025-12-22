import type { Metadata } from 'next'
import AdvisoryArchitectureClient from '@/components/AdvisoryArchitectureClient'
import { getSiteUrl } from '@/lib/site-url'

const siteUrl = getSiteUrl()

export const metadata: Metadata = {
  title: 'Advisory & Architecture Services | AgentFlow AI',
  description: 'Industry-specific blueprints and guardrails for AI governance.',
  alternates: {
    canonical: `${siteUrl}/services/advisory-architecture`,
  },
  openGraph: {
    title: 'Advisory & Architecture Services | AgentFlow AI',
    description: 'Industry-specific blueprints and guardrails for AI governance.',
    url: `${siteUrl}/services/advisory-architecture`,
    type: 'website',
  },
}

export default function AdvisoryArchitecturePage() {
  return <AdvisoryArchitectureClient />
}

