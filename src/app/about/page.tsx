import type { Metadata } from 'next'
import AboutClient from '@/components/AboutClient'
import { getSiteUrl } from '@/lib/site-url'
import About from '@/components/About'
import { seoGenerateMetadata } from '@/components/Seo'
import { loadPage } from '@/sanity/loader/loadQuery'

const siteUrl = getSiteUrl()

export async function generateMetadata(): Promise<Metadata> {
  const pageUrl = `${siteUrl}/about`
  const { data: page } = await loadPage('about')

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
    title: 'About Us - AgentsFlow AI',
    description: 'Learn about AgentsFlow AI, our mission, values, and the team behind enterprise AI governance solutions.',
    url: pageUrl,
  })
}

export default function AboutPage() {
  return <About />
}

