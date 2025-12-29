import type { Metadata } from 'next'
import HealthcareClient from '@/components/HealthcareClient'
import { getSiteUrl } from '@/lib/site-url'
import HealthCare from '@/components/Industries/Healthcare'
import { seoGenerateMetadata } from '@/components/Seo'
import { loadPage } from '@/sanity/loader/loadQuery'

const siteUrl = getSiteUrl()

export async function generateMetadata(): Promise<Metadata> {
  const pageUrl = `${siteUrl}/industries/healthcare`
  const { data: page } = await loadPage('industries/healthcare')

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
    title: 'Healthcare AI Governance and Compliance Platform | AgentsFlow AI',
    description: 'Advanced governance for healthcare that boosts compliance, reduces risk, protects sensitive data, and ensures secure, ethical, and transparent use of clinical AI.',
    keywords: ['ai governance for healthcare', 'HIPAA compliance', 'healthcare AI', 'PHI protection', 'clinical AI'],
    url: pageUrl,
  })
}

export default function HealthcarePage() {
  return <HealthCare />
}

