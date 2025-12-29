import type { Metadata } from 'next'
import ServiceNowClient from '@/components/ServiceNowClient'
import { getSiteUrl } from '@/lib/site-url'
import ServiceNow from '@/components/Platforms/ServiceNow'
import { seoGenerateMetadata } from '@/components/Seo'
import { loadPage } from '@/sanity/loader/loadQuery'

const siteUrl = getSiteUrl()

export async function generateMetadata(): Promise<Metadata> {
  const pageUrl = `${siteUrl}/platforms/servicenow`
  const { data: page } = await loadPage('platforms/servicenow')

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
    title: 'AI Governance for ServiceNow Now Assist | AgentsFlow AI',
    description: 'Govern ServiceNow Now Assist, Virtual Agent, and AI Search with ITSM-specific guardrails and comprehensive quality monitoring.',
    url: pageUrl,
  })
}

export default function ServiceNowPage() {
  return <ServiceNow />
}

