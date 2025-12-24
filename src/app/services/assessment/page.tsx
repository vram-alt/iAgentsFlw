import type { Metadata } from 'next'
import AssessmentClient from '@/components/AssessmentClient'
import { getSiteUrl } from '@/lib/site-url'
import Assessments from '@/components/Services/assessmentservice'

const siteUrl = getSiteUrl()

export const metadata: Metadata = {
  title: 'AI Compliance Assessment - Comprehensive Evaluation | AgentsFlow AI',
  description: 'Comprehensive evaluation of your current AI compliance posture, risk exposure, and regulatory readiness across all AI systems and processes.',
  alternates: {
    canonical: `${siteUrl}/services/assessment`,
  },
  openGraph: {
    title: 'AI Compliance Assessment - Comprehensive Evaluation | AgentsFlow AI',
    description: 'Comprehensive evaluation of your current AI compliance posture, risk exposure, and regulatory readiness.',
    url: `${siteUrl}/services/assessment`,
    type: 'website',
  },
}

export default function AssessmentPage() {
  return <Assessments />
}

