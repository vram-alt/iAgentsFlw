import type { Metadata } from 'next'
import OperationalChecklistClient from '@/components/OperationalChecklistClient'
import { getSiteUrl } from '@/lib/site-url'
import OperationalChecklist from '@/components/ManagedServices/OperationalChecklist'
import { seoGenerateMetadata } from '@/components/Seo'
import { loadPage } from '@/sanity/loader/loadQuery'

const siteUrl = getSiteUrl()

export async function generateMetadata(): Promise<Metadata> {
  const pageUrl = `${siteUrl}/managed-services/operational-checklist`
  const { data: page } = await loadPage('managed-services/operational-checklist')

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
    title: 'Operational Checklist - Managed Services | AgentsFlow AI',
    description: 'Automated operational checklists and compliance workflows for AI systems.',
    url: pageUrl,
  })
}

export default function OperationalChecklistPage() {
  return <OperationalChecklist />
}

