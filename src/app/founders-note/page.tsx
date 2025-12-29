import type { Metadata } from 'next'
import FoundersNoteClient from '@/components/FoundersNoteClient'
import { getSiteUrl } from '@/lib/site-url'
import Services from '@/components/Services'
import { seoGenerateMetadata } from '@/components/Seo'
import { loadPage } from '@/sanity/loader/loadQuery'

const siteUrl = getSiteUrl()

export async function generateMetadata(): Promise<Metadata> {
  const pageUrl = `${siteUrl}/services`
  const { data: page } = await loadPage('founders-note')

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
    title: 'AI Governance Services - Assessment & Managed Services | AgentsFlow AI',
    description: 'Comprehensive AI governance services including assessments, managed services, advisory architecture, and audit readiness.',
    url: pageUrl,
  })
}

export default function FoundersNotePage() {
  return <FoundersNoteClient />
}

