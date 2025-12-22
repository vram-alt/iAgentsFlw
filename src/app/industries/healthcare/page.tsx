import type { Metadata } from 'next'
import HealthcareClient from '@/components/HealthcareClient'
import { getSiteUrl } from '@/lib/site-url'

const siteUrl = getSiteUrl()

export const metadata: Metadata = {
  title: 'Healthcare AI Governance and Compliance Platform | AgentFlow AI',
  description: 'Advanced governance for healthcare that boosts compliance, reduces risk, protects sensitive data, and ensures secure, ethical, and transparent use of clinical AI.',
  keywords: ['ai governance for healthcare', 'HIPAA compliance', 'healthcare AI', 'PHI protection', 'clinical AI'],
  alternates: {
    canonical: `${siteUrl}/industries/healthcare`,
  },
  openGraph: {
    title: 'Healthcare AI Governance and Compliance Platform | AgentFlow AI',
    description: 'Advanced governance for healthcare that boosts compliance, reduces risk, protects sensitive data, and ensures secure, ethical, and transparent use of clinical AI.',
    url: `${siteUrl}/industries/healthcare`,
    type: 'website',
  },
}

export default function HealthcarePage() {
  return <HealthcareClient />
}

