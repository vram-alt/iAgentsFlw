import type { Metadata } from 'next'
import IndustriesClient from '@/components/IndustriesClient'
import { getSiteUrl } from '@/lib/site-url'
import { seoGenerateMetadata } from '@/components/Seo'
import { loadPage } from '@/sanity/loader/loadQuery'

const siteUrl = getSiteUrl()

export async function generateMetadata(): Promise<Metadata> {
  const pageUrl = `${siteUrl}/industries`
  const { data: page } = await loadPage('industries')

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
    title: 'Industry Solutions - AI Governance by Industry | AgentsFlow AI',
    description: 'Industry-specific AI governance solutions tailored to your regulatory requirements, compliance frameworks, and unique operational challenges.',
    url: pageUrl,
  })
}

export default function IndustriesPage() {
  return <IndustriesClient />
}

