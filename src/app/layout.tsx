import type { Metadata } from 'next'
import Script from 'next/script'
import { Inter, Sora } from 'next/font/google'
import { Providers } from '@/components/providers'
import Header from '@/components/Common/Header'
import Footer from '@/components/Common/Footer'
import { getSiteUrl } from '@/lib/site-url'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const siteUrl = getSiteUrl()
const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
 
    // ── 1. ORGANIZATION ──────────────────────────────────────────────────────
    // Powers the Google Knowledge Panel.
    // Requires: name, url, logo, sameAs
    // ─────────────────────────────────────────────────────────────────────────
    {
      "@type": "Organization",
      "@id": "https://iagentsflow.com/#organization",
      "name": "AgentsFlow AI",
      "keywords": [
        "ServiceNow AI Control Tower Implementation"
      ],
      "alternateName": ["iAgentsFlow", "AgentsFlow Corp"],
      "legalName": "AgentsFlow Corp",
      "url": "https://iagentsflow.com",
      "logo": {
        "@type": "ImageObject",
        "@id": "https://iagentsflow.com/#logo",
        "url": "https://iagentsflow.com/images/logo.webp",
        "contentUrl": "https://iagentsflow.com/images/logo.webp",
        "caption": "AgentsFlow AI Logo"
      },
      "image": { "@id": "https://iagentsflow.com/#logo" },
      "description": "Enterprise AI governance platform providing guardrails, compliance management, and responsible AI operations for Fortune 500 companies. Helps organizations navigate EU AI Act, GDPR, HIPAA, and emerging AI regulations.",
      "foundingDate": "2023",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Lewes",
        "addressRegion": "Delaware",
        "addressCountry": "US"
      },
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "contactType": "customer service",
          "telephone": "+1-800-211-8050",
          "email": "Hello@iagentsflow.com",
          "url": "https://iagentsflow.com/contact",
          "availableLanguage": "English"
        },
        {
          "@type": "ContactPoint",
          "contactType": "sales",
          "url": "https://iagentsflow.com/contact",
          "availableLanguage": "English"
        }
      ],
      "email": "Hello@iagentsflow.com",
      "telephone": "+1-800-211-8050",
      "knowsAbout": [
        "AI Governance",
        "Enterprise AI Compliance",
        "AI Guardrails",
        "Responsible AI",
        "EU AI Act Compliance",
        "ISO/IEC 42001",
        "NIST AI Risk Management Framework",
        "HIPAA Compliance",
        "AI Change Management",
        "AI Observability"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "AgentsFlow AI Products and Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "SoftwareApplication",
              "@id": "https://iagentsflow.com/tools/agentsflow#software",
              "name": "AgentsFlow Platform",
              "url": "https://iagentsflow.com/tools/agentsflow",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Web",
              "description": "Enterprise Apps & AI Governance platform for comprehensive visibility, guardrails, approvals, and observability across AI agent ecosystems.",
              "offers": {
                "@type": "Offer",
                "price": "2500",
                "priceCurrency": "USD",
                "priceSpecification": {
                  "@type": "UnitPriceSpecification",
                  "price": "2500",
                  "priceCurrency": "USD",
                  "unitText": "MONTH"
                },
                "description": "Pilot plan from $2,500/month. Enterprise pricing custom."
              }
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "SoftwareApplication",
              "@id": "https://iagentsflow.com/tools/icomply#software",
              "name": "iComply",
              "url": "https://iagentsflow.com/tools/icomply",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Web",
              "description": "Intelligent compliance automation platform for EU AI Act, ISO/IEC 42001, NIST AI RMF, and GDPR. Automates risk assessments, audit readiness, and regulatory compliance.",
              "offers": {
                "@type": "Offer",
                "price": "2500",
                "priceCurrency": "USD",
                "priceSpecification": {
                  "@type": "UnitPriceSpecification",
                  "price": "2500",
                  "priceCurrency": "USD",
                  "unitText": "MONTH"
                }
              }
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "SoftwareApplication",
              "@id": "https://iagentsflow.com/tools/ai-go#software",
              "name": "AI.GO",
              "url": "https://iagentsflow.com/tools/ai-go",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Web",
              "description": "AI Governance Co-Pilot for C-Suite executives."
            }
          }
        ]
      },
      // ── CRITICAL: sameAs connects your social profiles to the brand entity ──
      "sameAs": [
        "https://www.linkedin.com/company/iagentsflow",
        "https://x.com/iAgentsFlow",
        "https://www.facebook.com/profile.php?id=61586195077581",
        "https://www.youtube.com/@AigentsFlow",
        "https://www.instagram.com/iagentsflow/"
      ]
    },
 
    // ── 2. WEBSITE ───────────────────────────────────────────────────────────
    // Links the website entity to the organization.
    // potentialAction enables Sitelinks Searchbox in Google.
    // ─────────────────────────────────────────────────────────────────────────
    {
      "@type": "WebSite",
      "@id": "https://iagentsflow.com/#website",
      "url": "https://iagentsflow.com",
      "name": "AgentsFlow AI",
      "description": "Enterprise AI governance, guardrails, and compliance management platform",
      "publisher": { "@id": "https://iagentsflow.com/#organization" },
      "inLanguage": "en-US",
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://iagentsflow.com/blog?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    },
 
    // ── 3. WEBPAGE (homepage) ────────────────────────────────────────────────
    {
      "@type": "WebPage",
      "@id": "https://iagentsflow.com/#webpage",
      "url": "https://iagentsflow.com",
      "name": "Enterprise AI Governance & Guardrails | AgentsFlow AI",
      "description": "AI governance platform with guardrails that strengthens compliance, reduces risk, protects data, and ensures secure and responsible AI operations.",
      "isPartOf": { "@id": "https://iagentsflow.com/#website" },
      "about": { "@id": "https://iagentsflow.com/#organization" },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://iagentsflow.com"
          }
        ]
      }
    },
 
    // ── 4. FAQ PAGE ──────────────────────────────────────────────────────────
    // THIS is the one that creates a visual rich result in Google SERPs.
    // Expandable FAQ accordion shown under your homepage listing.
    // ─────────────────────────────────────────────────────────────────────────
    {
      "@type": "FAQPage",
      "@id": "https://iagentsflow.com/#faq",
      "url": "https://iagentsflow.com",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How quickly can we get started with AgentsFlow?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most teams are up and running within a week. AgentsFlow provides dedicated onboarding support and can accelerate timelines for urgent governance needs."
          }
        },
        {
          "@type": "Question",
          "name": "Does AgentsFlow work with our existing AI infrastructure?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. AgentsFlow integrates with 200+ tools including all major AI providers (OpenAI, Anthropic, Azure), frameworks (LangChain, LlamaIndex), and enterprise tools (Slack, Jira, ServiceNow)."
          }
        },
        {
          "@type": "Question",
          "name": "How does AgentsFlow handle sensitive data and privacy?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "AgentsFlow processes metadata and logs only — not your actual data. All communications are encrypted, and the platform is SOC 2 compliant with optional on-premises deployment."
          }
        },
        {
          "@type": "Question",
          "name": "What is the difference between AgentsFlow and iComply?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "AgentsFlow focuses on AI governance (models, agents, prompts, guardrails), while iComply handles regulatory compliance automation (EU AI Act, GDPR, CCPA). Many customers use both for complete coverage."
          }
        },
        {
          "@type": "Question",
          "name": "Does AgentsFlow offer professional services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. AgentsFlow provides AI governance assessments, implementation support, and ongoing managed services. The team includes former AI researchers and compliance experts."
          }
        }
      ]
    },
 
    // ── 5–7. SERVICES ────────────────────────────────────────────────────────
    {
      "@type": "Service",
      "@id": "https://iagentsflow.com/services/assessment#service",
      "name": "AI Compliance Assessment",
      "url": "https://iagentsflow.com/services/assessment",
      "description": "Comprehensive AI compliance evaluation and risk assessment to identify gaps, analyse current state, and develop a governance roadmap. Includes current state analysis, risk assessment, gap analysis, and roadmap development.",
      "provider": { "@id": "https://iagentsflow.com/#organization" },
      "serviceType": "AI Governance Consulting",
      "areaServed": "Worldwide",
      "hoursAvailable": "Mo-Fr 09:00-17:00"
    },
    {
      "@type": "Service",
      "@id": "https://iagentsflow.com/services/managed-services#service",
      "name": "AI Governance Managed Services",
      "url": "https://iagentsflow.com/services/managed-services",
      "description": "24/7 monitoring and oversight of AI compliance and governance programs with expert support, human-in-the-loop validation, change management, and continuous audit readiness.",
      "provider": { "@id": "https://iagentsflow.com/#organization" },
      "serviceType": "Managed AI Governance",
      "areaServed": "Worldwide"
    },
    {
      "@type": "Service",
      "@id": "https://iagentsflow.com/services/audit-readiness#service",
      "name": "AI Audit Readiness",
      "url": "https://iagentsflow.com/services/audit-readiness",
      "description": "Complete audit preparation and support to ensure readiness for EU AI Act, HIPAA, SOX and other regulatory reviews. Includes documentation review, mock audits, evidence collection, and audit support.",
      "provider": { "@id": "https://iagentsflow.com/#organization" },
      "serviceType": "AI Compliance Audit Preparation",
      "areaServed": "Worldwide"
    }
 
  ]
}
// const organizationSchema = {
//   '@context': 'https://schema.org',
//   '@graph': [
//     {
//       '@type': 'Organization',
//       '@id': `${siteUrl}/#organization`,
//       name: 'AgentsFlow',
//       "keywords": [
//         "ServiceNow AI Control Tower Implementation"
//       ],
//       alternateName: ['iAgentsFlow', 'AgentsFlow AI', 'AigentsFlow'],
//       url: `${siteUrl}/`,
//       logo: `${siteUrl}/images/logo.webp`,
//       sameAs: [
//         'https://www.youtube.com/@AigentsFlow',
//       ],
//     },
//     {
//       '@type': 'WebSite',
//       '@id': `${siteUrl}/#website`,
//       url: `${siteUrl}/`,
//       name: 'AgentsFlow AI',
//       publisher: { '@id': `${siteUrl}/#organization` },
//     },
//   ],
// }

export const metadata: Metadata = {
  title: {
    default: 'AgentsFlow AI - AI Governance Platform',
    template: '%s | AgentsFlow AI',
  },
  description: 'AI governance platform with Azure guardrails that strengthens compliance, reduces risk, protects data, and ensures secure and responsible AI operations.',
  keywords: ['servicenow-ai-control-tower-implementation'],
  authors: [{ name: 'AgentsFlow AI' }],
  creator: 'AgentsFlow AI',
  publisher: 'AgentsFlow AI',
  metadataBase: new URL(siteUrl),
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.png', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'AgentsFlow AI',
    title: 'AgentsFlow AI - AI Governance Platform',
    description: 'AI governance platform with Azure guardrails that strengthens compliance, reduces risk, protects data, and ensures secure and responsible AI operations.',
    images: [
      {
        url: '/AgentsFlow-logo.png',
        width: 1200,
        height: 630,
        alt: 'AgentsFlow AI',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AgentsFlow AI - AI Governance Platform',
    description: 'AI governance platform with Azure guardrails that strengthens compliance, reduces risk, protects data, and ensures secure and responsible AI operations.',
    images: ['/AgentsFlow-logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes here if needed
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <head>
        <meta name="google-site-verification" content="google92184f902c0fcca1"/>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-M0NYL8WEQN"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-M0NYL8WEQN');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="min-h-screen bg-[#0A0F1A] text-white antialiased">
      
        <Providers>
          <Header />
          <main className="pt-18">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}

