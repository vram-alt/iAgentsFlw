import type { Metadata } from 'next'
import IComplyClient from '@/components/IComplyClient'
import { getSiteUrl } from '@/lib/site-url'

const siteUrl = getSiteUrl()

export const metadata: Metadata = {
  title: 'iComply - Intelligent Compliance Automation Platform | AgentFlow AI',
  description: 'Intelligent compliance automation platform that transforms complex regulatory requirements into streamlined processes.',
  alternates: {
    canonical: `${siteUrl}/tools/icomply`,
  },
  openGraph: {
    title: 'iComply - Intelligent Compliance Automation Platform | AgentFlow AI',
    description: 'Intelligent compliance automation platform that transforms complex regulatory requirements into streamlined processes.',
    url: `${siteUrl}/tools/icomply`,
    type: 'website',
  },
}

export default function IComplyPage() {
  return <IComplyClient />
}

