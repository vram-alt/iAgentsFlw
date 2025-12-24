import type { Metadata } from 'next'
import PartnersClient from '@/components/PartnersClient'
import { getSiteUrl } from '@/lib/site-url'
import Partners from '@/components/Partners'

const siteUrl = getSiteUrl()

export const metadata: Metadata = {
  title: 'Partner Ecosystem - AgentsFlow AI',
  description: 'Building a comprehensive AI compliance ecosystem through strategic partnerships and integrations with leading technology providers.',
  alternates: {
    canonical: `${siteUrl}/partners`,
  },
  openGraph: {
    title: 'Partner Ecosystem - AgentsFlow AI',
    description: 'Building a comprehensive AI compliance ecosystem through strategic partnerships and integrations with leading technology providers.',
    url: `${siteUrl}/partners`,
    type: 'website',
  },
}

export default function PartnersPage() {
  return <Partners />
}

