import type { Metadata } from 'next'
import ContactClient from '@/components/ContactClient'
import { getSiteUrl } from '@/lib/site-url'
import Contact from '@/components/Contact'
import { seoGenerateMetadata } from '@/components/Seo'
import { loadPage } from '@/sanity/loader/loadQuery'

const siteUrl = getSiteUrl()

export async function generateMetadata(): Promise<Metadata> {
  const pageUrl = `${siteUrl}/contact`
  const { data: page } = await loadPage('contact')

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
    title: 'Contact Us - Get in Touch | AgentsFlow AI',
    description: 'Ready to transform your AI governance and compliance? Let\'s talk about how we can help.',
    url: pageUrl,
  })
}

export default function ContactPage() {
  return <Contact />
}

