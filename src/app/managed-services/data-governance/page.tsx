import type { Metadata } from 'next'
import DataGovernanceClient from '@/components/DataGovernanceClient'
import { getSiteUrl } from '@/lib/site-url'
import DataGovernance from '@/components/ManagedServices/DataGovernance'
import { seoGenerateMetadata } from '@/components/Seo'
import { loadPage } from '@/sanity/loader/loadQuery'

const siteUrl = getSiteUrl()

export async function generateMetadata(): Promise<Metadata> {
  const pageUrl = `${siteUrl}/managed-services/data-governance`
  const { data: page } = await loadPage('managed-services/data-governance')

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
    title: 'Data Governance - Managed Services | AgentsFlow AI',
    description: 'Comprehensive data governance and privacy management for AI systems.',
    url: pageUrl,
  })
}

export default function DataGovernancePage() {
  return <DataGovernance />
}

