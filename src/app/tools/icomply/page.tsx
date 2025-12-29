import type { Metadata } from 'next'
import IComplyClient from '@/components/IComplyClient'
import { getSiteUrl } from '@/lib/site-url'
import IComply from '@/components/Tools/IComply'
import { seoGenerateMetadata } from '@/components/Seo'
import { loadPage } from '@/sanity/loader/loadQuery'

const siteUrl = getSiteUrl()

export async function generateMetadata(): Promise<Metadata> {
  const pageUrl = `${siteUrl}/tools/icomply`
  const { data: page } = await loadPage('tools/icomply')

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
    title: 'iComply - Intelligent Compliance Automation Platform | AgentsFlow AI',
    description: 'Intelligent compliance automation platform that transforms complex regulatory requirements into streamlined processes.',
    url: pageUrl,
  })
}

export default function IComplyPage() {
  return <IComply />
}

