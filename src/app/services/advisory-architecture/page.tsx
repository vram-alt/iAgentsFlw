import type { Metadata } from 'next'
import AdvisoryArchitectureClient from '@/components/AdvisoryArchitectureClient'
import { getSiteUrl } from '@/lib/site-url'
import { seoGenerateMetadata } from '@/components/Seo'
import { loadPage } from '@/sanity/loader/loadQuery'

const siteUrl = getSiteUrl()

export async function generateMetadata(): Promise<Metadata> {
  const pageUrl = `${siteUrl}/services/advisory-architecture`
  const { data: page } = await loadPage('services/advisory-architecture')

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
    title: 'Advisory & Architecture Services | AgentsFlow AI',
    description: 'Industry-specific blueprints and guardrails for AI governance.',
    url: pageUrl,
  })
}

export default function AdvisoryArchitecturePage() {
  return <AdvisoryArchitectureClient />
}

