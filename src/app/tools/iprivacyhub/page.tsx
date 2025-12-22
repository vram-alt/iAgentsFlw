import type { Metadata } from 'next'
import IPrivacyHubClient from '@/components/IPrivacyHubClient'
import { getSiteUrl } from '@/lib/site-url'

const siteUrl = getSiteUrl()

export const metadata: Metadata = {
  title: 'iPrivacyHub - AI Enterprise Privacy Platform | AgentFlow AI',
  description: 'AI enterprise privacy platform for comprehensive data protection and privacy compliance management.',
  alternates: {
    canonical: `${siteUrl}/tools/iprivacyhub`,
  },
  openGraph: {
    title: 'iPrivacyHub - AI Enterprise Privacy Platform | AgentFlow AI',
    description: 'AI enterprise privacy platform for comprehensive data protection and privacy compliance management.',
    url: `${siteUrl}/tools/iprivacyhub`,
    type: 'website',
  },
}

export default function IPrivacyHubPage() {
  return <IPrivacyHubClient />
}

