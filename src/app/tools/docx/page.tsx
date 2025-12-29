import type { Metadata } from 'next'
import DocXClient from '@/components/DocXClient'
import { getSiteUrl } from '@/lib/site-url'
import DocX from '@/components/Tools/DocX'
import { seoGenerateMetadata } from '@/components/Seo'
import { loadPage } from '@/sanity/loader/loadQuery'

const siteUrl = getSiteUrl()

export async function generateMetadata(): Promise<Metadata> {
  const pageUrl = `${siteUrl}/tools/docx`
  const { data: page } = await loadPage('tools-docx')

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
    title: 'DocX.AI - Enterprise Document Intelligence Platform | AgentsFlow AI',
    description: 'Enterprise document intelligence platform powered by AI for automated processing and analysis.',
    url: pageUrl,
  })
}

export default function DocXPage() {
  return <DocX />
}

