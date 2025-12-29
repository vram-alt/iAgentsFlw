import type { Metadata } from 'next'
import AgentsFlowClient from '@/components/AgentsFlowClient'
import { getSiteUrl } from '@/lib/site-url'
import { seoGenerateMetadata } from '@/components/Seo'
import { loadPage } from '@/sanity/loader/loadQuery'

const siteUrl = getSiteUrl()

export async function generateMetadata(): Promise<Metadata> {
  const pageUrl = `${siteUrl}/tools/agentflow-old`
  const { data: page } = await loadPage('tools-agentflow-old')

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
    title: 'AgentsFlow - Production-Safe AI Agents for Enterprise | AgentsFlow AI',
    description: 'Production-safe AI agents for enterprise with built-in governance, compliance, and security controls.',
    url: pageUrl,
  })
}

export default function AgentsFlowPage() {
  return <AgentsFlowClient />
}

