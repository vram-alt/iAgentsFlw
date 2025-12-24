import type { Metadata } from 'next'
import AboutClient from '@/components/AboutClient'
import { getSiteUrl } from '@/lib/site-url'
import About from '@/components/About'

const siteUrl = getSiteUrl()

export const metadata: Metadata = {
  title: 'About Us - AgentsFlow AI',
  description: 'Learn about AgentsFlow AI, our mission, values, and the team behind enterprise AI governance solutions.',
  alternates: {
    canonical: `${siteUrl}/about`,
  },
  openGraph: {
    title: 'About Us - AgentsFlow AI',
    description: 'Learn about AgentsFlow AI, our mission, values, and the team behind enterprise AI governance solutions.',
    url: `${siteUrl}/about`,
    type: 'website',
  },
}

export default function AboutPage() {
  return <About />
}

