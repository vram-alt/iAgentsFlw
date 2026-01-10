import type { Metadata } from 'next'
import HomePageClient from '@/components/HomePageClient'
import { getSiteUrl } from '@/lib/site-url'
import HomeIndex from '@/components/Home'
import { seoGenerateMetadata } from '@/components/Seo'
import { loadPage } from '@/sanity/loader/loadQuery'

const siteUrl = getSiteUrl()

export async function generateMetadata(): Promise<Metadata> {
  const pageUrl = `${siteUrl}/`
  const { data: page } = await loadPage('home')

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
    title: 'ATrusted partner, Enterprise AI Governance & Responsible AI| Gaurdrails Management | Agents Change Management | Observability |Security & Data privacy',
    description: 'AI governance platform with Guardrails that strengthens compliance, reduces risk, protects data, and ensures secure and responsible AI operations.',
    keywords: ['azure guardrails', 'AI governance', 'compliance', 'enterprise AI'],
    url: pageUrl,
    imageUrl: '/AgentsFlow-logo.png',
    siteName: 'AgentsFlow AI',
    locale: 'en_US',
    imageWidth: 1200,
    imageHeight: 630,
    imageAlt: 'AgentsFlow AI',
  })
}

export default function HomePage() {
  return <HomeIndex />
}

