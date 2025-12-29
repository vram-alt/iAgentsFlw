import type { Metadata } from 'next'
import InsuranceClient from '@/components/InsuranceClient'
import { getSiteUrl } from '@/lib/site-url'
import Insurance from '@/components/Industries/Insurance'
import { seoGenerateMetadata } from '@/components/Seo'
import { loadPage } from '@/sanity/loader/loadQuery'

const siteUrl = getSiteUrl()

export async function generateMetadata(): Promise<Metadata> {
  const pageUrl = `${siteUrl}/industries/insurance`
  const { data: page } = await loadPage('industries/insurance')

  if (page) {
    const keywordsArray = page?.seo?.keywords && typeof page.seo.keywords === 'string'
      ? page.seo.keywords.split(',').map((k: string) => k.trim()).filter((k: string) => k.length > 0)
      : undefined

    return seoGenerateMetadata({
      title: page?.seo?.metaTitle || '',
      description: page?.seo?.metaDescription || '',
      url: pageUrl,
      imageUrl: page?.seo?.metaImage || '',
      keywords: keywordsArray,
    })
  }

  return seoGenerateMetadata({
    title: 'Trusted AI Governance Frameworks for Insurance | AgentsFlow AI',
    description: 'Trusted governance for insurance that improves compliance, reduces underwriting risks, protects data, and ensures transparent and responsible AI use.',
    keywords: ['ai governance for insurance', 'insurance AI', 'underwriting AI', 'claims AI', 'NAIC compliance'],
    url: pageUrl,
  })
}

export default function InsurancePage() {
  return <Insurance />
}

