import type { Metadata } from 'next'
import ContinuousMonitoringClient from '@/components/ContinuousMonitoringClient'
import { getSiteUrl } from '@/lib/site-url'
import ContinousMonitoring from '@/components/ManagedServices/ContinousMonitoring'
import { seoGenerateMetadata } from '@/components/Seo'
import { loadPage } from '@/sanity/loader/loadQuery'

const siteUrl = getSiteUrl()

export async function generateMetadata(): Promise<Metadata> {
  const pageUrl = `${siteUrl}/managed-services/continuous-monitoring`
  const { data: page } = await loadPage('managed-services/continuous-monitoring')

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
    title: 'Continuous Monitoring - Managed Services | AgentsFlow AI',
    description: '24/7 continuous monitoring of AI systems for compliance and performance.',
    url: pageUrl,
  })
}

export default function ContinuousMonitoringPage() {
  return <ContinousMonitoring />
}

