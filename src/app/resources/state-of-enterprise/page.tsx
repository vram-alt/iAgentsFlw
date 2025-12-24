import type { Metadata } from 'next'
import StateOfEnterpriseClient from '@/components/StateOfEnterpriseClient'
import { getSiteUrl } from '@/lib/site-url'
import StateOfEnterprise from '@/components/Resources/StateOfEnterprise'

const siteUrl = getSiteUrl()

export const metadata: Metadata = {
  title: 'State of Enterprise AI - Resources | AgentsFlow AI',
  description: 'Comprehensive report on the current state of enterprise AI adoption and governance.',
  alternates: {
    canonical: `${siteUrl}/resources/state-of-enterprise`,
  },
}

export default function StateOfEnterprisePage() {
  return <StateOfEnterprise />
}

