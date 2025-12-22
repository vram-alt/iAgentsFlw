import type { Metadata } from 'next'
import HomePageClient from '@/components/HomePageClient'
import { getSiteUrl } from '@/lib/site-url'

const siteUrl = getSiteUrl()

export const metadata: Metadata = {
  title: 'AI Governance Platform with Azure Guardrails | AgentFlow AI',
  description: 'AI governance platform with Azure guardrails that strengthens compliance, reduces risk, protects data, and ensures secure and responsible AI operations.',
  keywords: ['azure guardrails', 'AI governance', 'compliance', 'enterprise AI'],
  alternates: {
    canonical: `${siteUrl}/`,
  },
  openGraph: {
    title: 'AI Governance Platform with Azure Guardrails | AgentFlow AI',
    description: 'AI governance platform with Azure guardrails that strengthens compliance, reduces risk, protects data, and ensures secure and responsible AI operations.',
    url: `${siteUrl}/`,
    siteName: 'AgentFlow AI',
    images: [
      {
        url: '/AgentFlow-logo.png',
        width: 1200,
        height: 630,
        alt: 'AgentFlow AI',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

export default function HomePage() {
  return <HomePageClient />
}

