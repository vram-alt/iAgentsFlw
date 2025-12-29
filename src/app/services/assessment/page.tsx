import type { Metadata } from 'next'
import AssessmentClient from '@/components/AssessmentClient'
import { getSiteUrl } from '@/lib/site-url'
import Assessments from '@/components/Services/assessmentservice'
import { seoGenerateMetadata } from '@/components/Seo'
import { loadPage } from '@/sanity/loader/loadQuery'

const siteUrl = getSiteUrl()

export async function generateMetadata(): Promise<Metadata> {
  const pageUrl = `${siteUrl}/services/assessment`
  const { data: page } = await loadPage('services/assessment')

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
    title: 'AI Compliance Assessment - Comprehensive Evaluation | AgentsFlow AI',
    description: 'Comprehensive evaluation of your current AI compliance posture, risk exposure, and regulatory readiness across all AI systems and processes.',
    url: pageUrl,
  })
}

export default function AssessmentPage() {
  return <Assessments />
}

