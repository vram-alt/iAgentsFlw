import type { Metadata } from 'next'
import SpendManagementClient from '@/components/SpendManagementClient'
import { getSiteUrl } from '@/lib/site-url'
import SpendManagement from '@/components/ManagedServices/SpendManagement'
import { seoGenerateMetadata } from '@/components/Seo'
import { loadPage } from '@/sanity/loader/loadQuery'

const siteUrl = getSiteUrl()

export async function generateMetadata(): Promise<Metadata> {
  const pageUrl = `${siteUrl}/managed-services/spend-management`
  const { data: page } = await loadPage('managed-services/spend-management')


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

  // return seoGenerateMetadata({
  //   title: 'Spend Management - Managed Services | AgentsFlow AI',
  //   description: 'AI cost optimization and spend management services.',
  //   url: pageUrl,
  // })
}

export default function SpendManagementPage() {
  return <SpendManagement />
}

