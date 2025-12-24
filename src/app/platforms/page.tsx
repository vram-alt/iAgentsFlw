import type { Metadata } from 'next'
import PlatformsClient from '@/components/PlatformsClient'
import { getSiteUrl } from '@/lib/site-url'
import Platforms from '@/components/Platforms'

const siteUrl = getSiteUrl()

export const metadata: Metadata = {
  title: 'Platform Integrations - AI Governance for Enterprise Platforms | AgentsFlow AI',
  description: 'Native integrations with Salesforce, ServiceNow, and Workday. Extend your platform\'s AI capabilities with comprehensive governance, compliance, and monitoring.',
  alternates: {
    canonical: `${siteUrl}/platforms`,
  },
  openGraph: {
    title: 'Platform Integrations - AI Governance for Enterprise Platforms | AgentsFlow AI',
    description: 'Native integrations with Salesforce, ServiceNow, and Workday. Extend your platform\'s AI capabilities with comprehensive governance, compliance, and monitoring.',
    url: `${siteUrl}/platforms`,
    type: 'website',
  },
}

export default function PlatformsPage() {
  return <Platforms />
}

