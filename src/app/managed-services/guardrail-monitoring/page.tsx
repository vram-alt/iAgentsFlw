import type { Metadata } from 'next'
import GuardrailMonitoringClient from '@/components/GuardrailMonitoringClient'
import { getSiteUrl } from '@/lib/site-url'

const siteUrl = getSiteUrl()

export const metadata: Metadata = {
  title: 'Guardrail Monitoring - Managed Services | AgentFlow AI',
  description: '24/7 monitoring and management of AI guardrails to ensure compliance and prevent policy violations.',
  alternates: {
    canonical: `${siteUrl}/managed-services/guardrail-monitoring`,
  },
}

export default function GuardrailMonitoringPage() {
  return <GuardrailMonitoringClient />
}

