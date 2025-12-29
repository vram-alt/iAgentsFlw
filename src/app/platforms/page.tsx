import type { Metadata } from 'next'
import PlatformsClient from '@/components/PlatformsClient'
import { getSiteUrl } from '@/lib/site-url'
import Platforms from '@/components/Platforms'
import { seoGenerateMetadata } from '@/components/Seo'
import { loadPage } from '@/sanity/loader/loadQuery'

const siteUrl = getSiteUrl()

export async function generateMetadata(): Promise<Metadata> {
  const pageUrl = `${siteUrl}/platforms`
  const { data: page } = await loadPage('platforms')

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
    title: 'Platform Integrations - AI Governance for Enterprise Platforms | AgentsFlow AI',
    description: 'Native integrations with Salesforce, ServiceNow, and Workday. Extend your platform\'s AI capabilities with comprehensive governance, compliance, and monitoring.',
    url: pageUrl,
  })
}

export default function PlatformsPage() {
  return <Platforms />
}

