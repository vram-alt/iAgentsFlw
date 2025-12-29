import type { Metadata } from 'next'
import ManagedServicesClient from '@/components/ManagedServicesClient'
import { getSiteUrl } from '@/lib/site-url'
import ManagedServices from '@/components/Services/managedservices'
import { seoGenerateMetadata } from '@/components/Seo'
import { loadPage } from '@/sanity/loader/loadQuery'

const siteUrl = getSiteUrl()

export async function generateMetadata(): Promise<Metadata> {
  const pageUrl = `${siteUrl}/services/managed-services`
  const { data: page } = await loadPage('services/managed-services')

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
    title: 'Managed Governance Services - 24/7 AI Compliance | AgentsFlow AI',
    description: 'A joint team (automations + humans) operating your AI & compliance controls 24/7. Organizations scaling agents/systems across units or regions.',
    url: pageUrl,
  })
}

export default function ManagedServicesPage() {
  return <ManagedServices />
}

