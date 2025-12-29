import type { Metadata } from 'next'
import { getSiteUrl } from '@/lib/site-url'
import AuditReadinessClient from '@/components/AuditReadinessClient'
import { seoGenerateMetadata } from '@/components/Seo'
import { loadPage } from '@/sanity/loader/loadQuery'

const siteUrl = getSiteUrl()

export async function generateMetadata(): Promise<Metadata> {
  const pageUrl = `${siteUrl}/managed-services/audit-readiness`
  const { data: page } = await loadPage('managed-services/audit-readiness')

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
    title: 'Audit Readiness - Managed Services | AgentsFlow AI',
    description: 'Managed audit readiness and evidence collection for AI compliance audits.',
    url: pageUrl,
  })
}

export default function ManagedAuditReadinessPage() {
  return <AuditReadinessClient />
}

