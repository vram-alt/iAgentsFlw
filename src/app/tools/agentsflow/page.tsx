import type { Metadata } from 'next'
import AgentsFlowClient from '@/components/AgentsFlowClient'
import { getSiteUrl } from '@/lib/site-url'
import { seoGenerateMetadata } from '@/components/Seo'
import { loadPage } from '@/sanity/loader/loadQuery'

const siteUrl = getSiteUrl()

export async function generateMetadata(): Promise<Metadata> {
  const pageUrl = `${siteUrl}/tools/agentsflow`
  const { data: page } = await loadPage('tools/agentsflow')

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
    title: 'AgentsFlow - Enterprise Apps & AI Governance Platform | AgentsFlow AI',
    description: 'Enterprise Apps & AI Governance platform for comprehensive visibility and control across your application ecosystem.',
    url: pageUrl,
  })
}

export default function AgentsFlowPage() {
  return <AgentsFlowClient />
}

