import type { Metadata } from 'next'
import AuditReadinessClient from '@/components/AuditReadinessClient'
import { getSiteUrl } from '@/lib/site-url'
import AuditRediness from '@/components/Services/auditrediness'
import { seoGenerateMetadata } from '@/components/Seo'
import { loadPage } from '@/sanity/loader/loadQuery'

const siteUrl = getSiteUrl()

export async function generateMetadata(): Promise<Metadata> {
  const pageUrl = `${siteUrl}/services/audit-readiness`
  const { data: page } = await loadPage('services/audit-readiness')

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
    title: 'Audit Readiness - Prepare for Regulatory Audits | AgentsFlow AI',
    description: 'Prepare your organization for regulatory audits with comprehensive documentation, evidence collection, and expert guidance to ensure compliance confidence.',
    url: pageUrl,
  })
}

export default function AuditReadinessPage() {
  return <AuditRediness />
}

