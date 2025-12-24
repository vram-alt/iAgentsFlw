import type { Metadata } from 'next'
import ContactClient from '@/components/ContactClient'
import { getSiteUrl } from '@/lib/site-url'
import Contact from '@/components/Contact'

const siteUrl = getSiteUrl()

export const metadata: Metadata = {
  title: 'Contact Us - Get in Touch | AgentsFlow AI',
  description: 'Ready to transform your AI governance and compliance? Let\'s talk about how we can help.',
  alternates: {
    canonical: `${siteUrl}/contact`,
  },
  openGraph: {
    title: 'Contact Us - Get in Touch | AgentsFlow AI',
    description: 'Ready to transform your AI governance and compliance? Let\'s talk about how we can help.',
    url: `${siteUrl}/contact`,
    type: 'website',
  },
}

export default function ContactPage() {
  return <Contact />
}

