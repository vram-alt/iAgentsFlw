import type { Metadata } from 'next'
import { getSiteUrl } from '@/lib/site-url'
import { seoGenerateMetadata } from '@/components/Seo'
import TermsOfUse from '@/components/TermsOfUse'

const siteUrl = getSiteUrl()

export async function generateMetadata(): Promise<Metadata> {
  const pageUrl = `${siteUrl}/terms-of-use`

  return seoGenerateMetadata({
    title: 'Terms of Use - AgentsFlow AI',
    description: 'Terms of Use for AgentsFlow AI. Read our terms and conditions for using our services.',
    url: pageUrl,
  })
}

export default function TermsOfUsePage() {
  return <TermsOfUse />
}

