import type { Metadata } from 'next'
import WorkdayClient from '@/components/WorkdayClient'
import { getSiteUrl } from '@/lib/site-url'

const siteUrl = getSiteUrl()

export const metadata: Metadata = {
  title: 'AI Governance for Workday AI | AgentFlow AI',
  description: 'Ensure fair, compliant AI in HCM and Financial Management with bias detection, data protection, and EEOC compliance.',
  alternates: {
    canonical: `${siteUrl}/platforms/workday`,
  },
  openGraph: {
    title: 'AI Governance for Workday AI | AgentFlow AI',
    description: 'Ensure fair, compliant AI in HCM and Financial Management with bias detection, data protection, and EEOC compliance.',
    url: `${siteUrl}/platforms/workday`,
    type: 'website',
  },
}

export default function WorkdayPage() {
  return <WorkdayClient />
}

