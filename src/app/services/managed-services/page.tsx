import type { Metadata } from 'next'
import ManagedServicesClient from '@/components/ManagedServicesClient'
import { getSiteUrl } from '@/lib/site-url'

const siteUrl = getSiteUrl()

export const metadata: Metadata = {
  title: 'Managed Governance Services - 24/7 AI Compliance | AgentFlow AI',
  description: 'A joint team (automations + humans) operating your AI & compliance controls 24/7. Organizations scaling agents/systems across units or regions.',
  alternates: {
    canonical: `${siteUrl}/services/managed-services`,
  },
  openGraph: {
    title: 'Managed Governance Services - 24/7 AI Compliance | AgentFlow AI',
    description: 'A joint team (automations + humans) operating your AI & compliance controls 24/7.',
    url: `${siteUrl}/services/managed-services`,
    type: 'website',
  },
}

export default function ManagedServicesPage() {
  return <ManagedServicesClient />
}

