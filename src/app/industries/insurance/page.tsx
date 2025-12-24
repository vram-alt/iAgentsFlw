import type { Metadata } from 'next'
import InsuranceClient from '@/components/InsuranceClient'
import { getSiteUrl } from '@/lib/site-url'
import Insurance from '@/components/Industries/Insurance'

const siteUrl = getSiteUrl()

export const metadata: Metadata = {
  title: 'Trusted AI Governance Frameworks for Insurance | AgentsFlow AI',
  description: 'Trusted governance for insurance that improves compliance, reduces underwriting risks, protects data, and ensures transparent and responsible AI use.',
  keywords: ['ai governance for insurance', 'insurance AI', 'underwriting AI', 'claims AI', 'NAIC compliance'],
  alternates: {
    canonical: `${siteUrl}/industries/insurance`,
  },
  openGraph: {
    title: 'Trusted AI Governance Frameworks for Insurance | AgentsFlow AI',
    description: 'Trusted governance for insurance that improves compliance, reduces underwriting risks, protects data, and ensures transparent and responsible AI use.',
    url: `${siteUrl}/industries/insurance`,
    type: 'website',
  },
}

export default function InsurancePage() {
  return <Insurance />
}

