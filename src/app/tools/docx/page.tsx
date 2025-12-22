import type { Metadata } from 'next'
import DocXClient from '@/components/DocXClient'
import { getSiteUrl } from '@/lib/site-url'

const siteUrl = getSiteUrl()

export const metadata: Metadata = {
  title: 'DocX.AI - Enterprise Document Intelligence Platform | AgentFlow AI',
  description: 'Enterprise document intelligence platform powered by AI for automated processing and analysis.',
  alternates: {
    canonical: `${siteUrl}/tools/docx`,
  },
  openGraph: {
    title: 'DocX.AI - Enterprise Document Intelligence Platform | AgentFlow AI',
    description: 'Enterprise document intelligence platform powered by AI for automated processing and analysis.',
    url: `${siteUrl}/tools/docx`,
    type: 'website',
  },
}

export default function DocXPage() {
  return <DocXClient />
}

