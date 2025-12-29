import type { Metadata } from 'next'
import PartnersClient from '@/components/PartnersClient'
import { getSiteUrl } from '@/lib/site-url'
import Partners from '@/components/Partners'
import { seoGenerateMetadata } from '@/components/Seo'
import { loadPage } from '@/sanity/loader/loadQuery'

const siteUrl = getSiteUrl()

export async function generateMetadata(): Promise<Metadata> {
  const pageUrl = `${siteUrl}/partners`
  const { data: page } = await loadPage('partners')

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
    title: 'Partner Ecosystem - AgentsFlow AI',
    description: 'Building a comprehensive AI compliance ecosystem through strategic partnerships and integrations with leading technology providers.',
    url: pageUrl,
  })
}

export default function PartnersPage() {
  return <Partners />
}

