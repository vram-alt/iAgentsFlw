import type { Metadata } from 'next';
import AiGoPage from '@/components/Tools/ai-go/AiGoPage';
import { getSiteUrl } from '@/lib/site-url';

const siteUrl = getSiteUrl();
const pagePath = '/tools/ai-go';
const canonicalUrl = `${siteUrl}${pagePath}`;

const title = 'AI.GO — Enterprise AI Governance Control Plane';
const description =
  'AgentsFlow AI.GO: unified control plane for AI agents, policy enforcement, compliance automation, risk monitoring, and stakeholder-ready governance across your enterprise.';

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'AI governance',
    'AI control plane',
    'enterprise AI compliance',
    'AI agents',
    'EU AI Act',
    'NIST AI RMF',
    'ISO 42001',
    'AgentsFlow',
    'AI.GO',
  ],
  alternates: {
    canonical: canonicalUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: canonicalUrl,
    siteName: 'AgentsFlow AI',
    title: `${title} | AgentsFlow AI`,
    description,
    images: [
      {
        url: '/AgentsFlow-logo.png',
        width: 1200,
        height: 630,
        alt: 'AgentsFlow AI — AI governance',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${title} | AgentsFlow AI`,
    description,
    images: ['/AgentsFlow-logo.png'],
  },
};

export default function AiGoRoutePage() {
  return <AiGoPage />;
}
