import type { Metadata } from 'next'
import GuardrailMonitoringClient from '@/components/GuardrailMonitoringClient'
import { getSiteUrl } from '@/lib/site-url'
import GuadrialMonirating from '@/components/ManagedServices/GuadrialMonirating'

const siteUrl = getSiteUrl()

export const metadata: Metadata = {
  title: 'Guardrail Monitoring - Managed Services | AgentsFlow AI',
  description: '24/7 monitoring and management of AI guardrails to ensure compliance and prevent policy violations.',
  alternates: {
    canonical: `${siteUrl}/managed-services/guardrail-monitoring`,
  },
}

export default function GuardrailMonitoringPage() {
  return <GuadrialMonirating />
}

