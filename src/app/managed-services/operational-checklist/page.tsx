import type { Metadata } from 'next'
import OperationalChecklistClient from '@/components/OperationalChecklistClient'
import { getSiteUrl } from '@/lib/site-url'

const siteUrl = getSiteUrl()

export const metadata: Metadata = {
  title: 'Operational Checklist - Managed Services | AgentFlow AI',
  description: 'Automated operational checklists and compliance workflows for AI systems.',
  alternates: {
    canonical: `${siteUrl}/managed-services/operational-checklist`,
  },
}

export default function OperationalChecklistPage() {
  return <OperationalChecklistClient />
}

