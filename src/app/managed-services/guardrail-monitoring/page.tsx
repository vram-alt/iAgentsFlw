import type { Metadata } from 'next'
import GuardrailMonitoringClient from '@/components/GuardrailMonitoringClient'
import { getSiteUrl } from '@/lib/site-url'
import GuadrialMonirating from '@/components/ManagedServices/GuadrialMonirating'
import { seoGenerateMetadata } from '@/components/Seo'
import { loadPage } from '@/sanity/loader/loadQuery'

const siteUrl = getSiteUrl()

export async function generateMetadata(): Promise<Metadata> {
  const pageUrl = `${siteUrl}/managed-services/guardrail-monitoring`
  const { data: page } = await loadPage('managed-services/guardrail-monitoring')

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
    title: 'Guardrail Monitoring - Managed Services | AgentsFlow AI',
    description: '24/7 monitoring and management of AI guardrails to ensure compliance and prevent policy violations.',
    url: pageUrl,
  })
}

export default function GuardrailMonitoringPage() {
  return <GuadrialMonirating />
}

