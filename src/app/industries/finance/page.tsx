import type { Metadata } from 'next'
import FinanceClient from '@/components/FinanceClient'
import { getSiteUrl } from '@/lib/site-url'
import Finance from '@/components/Industries/Finance'

const siteUrl = getSiteUrl()

export const metadata: Metadata = {
  title: 'AI Governance Solutions for the Finance Industry | AgentsFlow AI',
  description: 'Comprehensive governance for finance with frameworks that improve compliance, reduce risk, increase transparency, and support secure and ethical AI operations',
  keywords: ['ai governance for finance', 'financial services compliance', 'SOX compliance', 'PCI-DSS', 'SEC regulations'],
  alternates: {
    canonical: `${siteUrl}/industries/finance`,
  },
  openGraph: {
    title: 'AI Governance Solutions for the Finance Industry | AgentsFlow AI',
    description: 'Comprehensive governance for finance with frameworks that improve compliance, reduce risk, increase transparency, and support secure and ethical AI operations',
    url: `${siteUrl}/industries/finance`,
    type: 'website',
  },
}

export default function FinancePage() {
  return <Finance />
}

