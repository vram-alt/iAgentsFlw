import type { Metadata } from 'next'
import AboutClient from '@/components/AboutClient'
import { getSiteUrl } from '@/lib/site-url'

const siteUrl = getSiteUrl()

export const metadata: Metadata = {
  title: 'About Us - AgentFlow AI',
  description: 'Learn about AgentFlow AI, our mission, values, and the team behind enterprise AI governance solutions.',
  alternates: {
    canonical: `${siteUrl}/about`,
  },
  openGraph: {
    title: 'About Us - AgentFlow AI',
    description: 'Learn about AgentFlow AI, our mission, values, and the team behind enterprise AI governance solutions.',
    url: `${siteUrl}/about`,
    type: 'website',
  },
}

export default function AboutPage() {
  return <AboutClient />
}

