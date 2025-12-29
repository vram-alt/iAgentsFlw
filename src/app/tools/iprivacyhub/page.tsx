import type { Metadata } from 'next'
import IPrivacyHubClient from '@/components/IPrivacyHubClient'
import { getSiteUrl } from '@/lib/site-url'
import IPrivacyHub from '@/components/Tools/IPrivacyHub'
import { seoGenerateMetadata } from '@/components/Seo'
import { loadPage } from '@/sanity/loader/loadQuery'

const siteUrl = getSiteUrl()

export async function generateMetadata(): Promise<Metadata> {
  const pageUrl = `${siteUrl}/tools/iprivacyhub`
  const { data: page } = await loadPage('tools-iprivacyhub')

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
    title: 'iPrivacyHub - AI Enterprise Privacy Platform | AgentsFlow AI',
    description: 'AI enterprise privacy platform for comprehensive data protection and privacy compliance management.',
    url: pageUrl,
  })
}

export default function IPrivacyHubPage() {
  return <IPrivacyHub />
}

