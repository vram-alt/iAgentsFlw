import type { Metadata } from 'next'
import ChangeManagementClient from '@/components/ChangeManagementClient'
import { getSiteUrl } from '@/lib/site-url'
import ChangeManagement from '@/components/ManagedServices/ChangeManagement'

const siteUrl = getSiteUrl()

export const metadata: Metadata = {
  title: 'Change Management - Managed Services | AgentsFlow AI',
  description: 'Governed change management for AI models, prompts, and configurations.',
  alternates: {
    canonical: `${siteUrl}/managed-services/change-management`,
  },
}

export default function ChangeManagementPage() {
  return <ChangeManagement />
}

