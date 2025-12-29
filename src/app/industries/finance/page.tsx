import type { Metadata } from 'next'
import FinanceClient from '@/components/FinanceClient'
import { getSiteUrl } from '@/lib/site-url'
import Finance from '@/components/Industries/Finance'
import { seoGenerateMetadata } from '@/components/Seo'
import { loadPage } from '@/sanity/loader/loadQuery'

const siteUrl = getSiteUrl()

export async function generateMetadata(): Promise<Metadata> {
  const pageUrl = `${siteUrl}/industries/finance`
  const { data: page } = await loadPage('industries/finance')

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
    title: 'AI Governance Solutions for the Finance Industry | AgentsFlow AI',
    description: 'Comprehensive governance for finance with frameworks that improve compliance, reduce risk, increase transparency, and support secure and ethical AI operations',
    keywords: ['ai governance for finance', 'financial services compliance', 'SOX compliance', 'PCI-DSS', 'SEC regulations'],
    url: pageUrl,
  })
}

export default function FinancePage() {
  return <Finance />
}

