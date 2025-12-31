import type { Metadata } from 'next'
import { getSiteUrl } from '@/lib/site-url'
import { seoGenerateMetadata } from '@/components/Seo'
import PrivacyPolicy from '@/components/PrivacyPolicy'

const siteUrl = getSiteUrl()

export async function generateMetadata(): Promise<Metadata> {
  const pageUrl = `${siteUrl}/privacy-policy`

  return seoGenerateMetadata({
    title: 'Privacy Policy - AgentsFlow AI',
    description: 'Privacy Policy for AgentsFlow AI. Learn how we collect, use, and protect your personal information.',
    url: pageUrl,
  })
}

export default function PrivacyPolicyPage() {
  return <PrivacyPolicy />
}

