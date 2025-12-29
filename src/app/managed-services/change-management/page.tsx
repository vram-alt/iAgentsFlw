import type { Metadata } from 'next'
import ChangeManagementClient from '@/components/ChangeManagementClient'
import { getSiteUrl } from '@/lib/site-url'
import ChangeManagement from '@/components/ManagedServices/ChangeManagement'
import { seoGenerateMetadata } from '@/components/Seo'
import { loadPage } from '@/sanity/loader/loadQuery'

const siteUrl = getSiteUrl()

export async function generateMetadata(): Promise<Metadata> {
  const pageUrl = `${siteUrl}/managed-services/change-management`
  const { data: page } = await loadPage('managed-services/change-management')

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
    title: 'Change Management - Managed Services | AgentsFlow AI',
    description: 'Governed change management for AI models, prompts, and configurations.',
    url: pageUrl,
  })
}

export default function ChangeManagementPage() {
  return <ChangeManagement />
}

