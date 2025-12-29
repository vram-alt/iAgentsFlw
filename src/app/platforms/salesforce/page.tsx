import type { Metadata } from 'next'
import SalesforceClient from '@/components/SalesforceClient'
import { getSiteUrl } from '@/lib/site-url'
import SalesForce from '@/components/Platforms/SalesForce'
import { seoGenerateMetadata } from '@/components/Seo'
import { loadPage } from '@/sanity/loader/loadQuery'

const siteUrl = getSiteUrl()

export async function generateMetadata(): Promise<Metadata> {
  const pageUrl = `${siteUrl}/platforms/salesforce`
  const { data: page } = await loadPage('platforms/salesforce')

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
    title: 'AI Governance for Salesforce AI | AgentsFlow AI',
    description: 'Enhance Salesforce Einstein and Agentforce with comprehensive AI governance. AgentsFlow extends the Einstein Trust Layer with advanced monitoring, compliance, and control capabilities.',
    url: pageUrl,
  })
}

export default function SalesforcePage() {
  return <SalesForce />
}

