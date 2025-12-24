import type { Metadata } from 'next'
import ServicesClient from '@/components/ServicesClient'
import { getSiteUrl } from '@/lib/site-url'
import Services from '@/components/Services'

const siteUrl = getSiteUrl()

export const metadata: Metadata = {
  title: 'AI Governance Services - Assessment & Managed Services | AgentsFlow AI',
  description: 'Comprehensive AI governance services including assessments, managed services, advisory architecture, and audit readiness.',
  alternates: {
    canonical: `${siteUrl}/services`,
  },
  openGraph: {
    title: 'AI Governance Services - Assessment & Managed Services | AgentsFlow AI',
    description: 'Comprehensive AI governance services including assessments, managed services, advisory architecture, and audit readiness.',
    url: `${siteUrl}/services`,
    type: 'website',
  },
}

export default function ServicesPage() {
  return <Services />
}

