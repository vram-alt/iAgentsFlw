import type { Metadata } from 'next'
import ContinuousMonitoringClient from '@/components/ContinuousMonitoringClient'
import { getSiteUrl } from '@/lib/site-url'
import ContinousMonitoring from '@/components/ManagedServices/ContinousMonitoring'

const siteUrl = getSiteUrl()

export const metadata: Metadata = {
  title: 'Continuous Monitoring - Managed Services | AgentsFlow AI',
  description: '24/7 continuous monitoring of AI systems for compliance and performance.',
  alternates: {
    canonical: `${siteUrl}/managed-services/continuous-monitoring`,
  },
}

export default function ContinuousMonitoringPage() {
  return <ContinousMonitoring />
}

