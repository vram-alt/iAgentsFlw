import type { Metadata } from 'next'
import PartnersClient from '@/components/PartnersClient'
import { getSiteUrl } from '@/lib/site-url'

const siteUrl = getSiteUrl()

export const metadata: Metadata = {
  title: 'Partner Ecosystem - AgentFlow AI',
  description: 'Building a comprehensive AI compliance ecosystem through strategic partnerships and integrations with leading technology providers.',
  alternates: {
    canonical: `${siteUrl}/partners`,
  },
  openGraph: {
    title: 'Partner Ecosystem - AgentFlow AI',
    description: 'Building a comprehensive AI compliance ecosystem through strategic partnerships and integrations with leading technology providers.',
    url: `${siteUrl}/partners`,
    type: 'website',
  },
}

export default function PartnersPage() {
  return <PartnersClient />
}

