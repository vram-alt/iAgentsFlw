import type { Metadata } from 'next'
import WorkdayClient from '@/components/WorkdayClient'
import { getSiteUrl } from '@/lib/site-url'
import WorkDay from '@/components/Platforms/WorkDay'
import { seoGenerateMetadata } from '@/components/Seo'
import { loadPage } from '@/sanity/loader/loadQuery'

const siteUrl = getSiteUrl()

export async function generateMetadata(): Promise<Metadata> {
  const pageUrl = `${siteUrl}/platforms/workday`
  const { data: page } = await loadPage('platforms/workday')

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
    title: 'AI Governance for Workday AI | AgentsFlow AI',
    description: 'Ensure fair, compliant AI in HCM and Financial Management with bias detection, data protection, and EEOC compliance.',
    url: pageUrl,
  })
}

export default function WorkdayPage() {
  return <WorkDay />
}

