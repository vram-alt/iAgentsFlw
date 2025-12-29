import type { Metadata } from 'next'
import StateOfEnterpriseClient from '@/components/StateOfEnterpriseClient'
import { getSiteUrl } from '@/lib/site-url'
import StateOfEnterprise from '@/components/Resources/StateOfEnterprise'
import { seoGenerateMetadata } from '@/components/Seo'
import { loadPage } from '@/sanity/loader/loadQuery'

const siteUrl = getSiteUrl()

export async function generateMetadata(): Promise<Metadata> {
  const pageUrl = `${siteUrl}/resources/state-of-enterprise`
  const { data: page } = await loadPage('resources/state-of-enterprise')

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
    title: 'State of Enterprise AI - Resources | AgentsFlow AI',
    description: 'Comprehensive report on the current state of enterprise AI adoption and governance.',
    url: pageUrl,
  })
}

export default function StateOfEnterprisePage() {
  return <StateOfEnterprise />
}

