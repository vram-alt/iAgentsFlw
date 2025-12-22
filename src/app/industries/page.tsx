import type { Metadata } from 'next'
import IndustriesClient from '@/components/IndustriesClient'
import { getSiteUrl } from '@/lib/site-url'

const siteUrl = getSiteUrl()

export const metadata: Metadata = {
  title: 'Industry Solutions - AI Governance by Industry | AgentFlow AI',
  description: 'Industry-specific AI governance solutions tailored to your regulatory requirements, compliance frameworks, and unique operational challenges.',
  alternates: {
    canonical: `${siteUrl}/industries`,
  },
  openGraph: {
    title: 'Industry Solutions - AI Governance by Industry | AgentFlow AI',
    description: 'Industry-specific AI governance solutions tailored to your regulatory requirements, compliance frameworks, and unique operational challenges.',
    url: `${siteUrl}/industries`,
    type: 'website',
  },
}

export default function IndustriesPage() {
  return <IndustriesClient />
}

