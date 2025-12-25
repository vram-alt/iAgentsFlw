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

export const metadata: Metadata = {
  title: {
    default: 'AgentsFlow AI - AI Governance Platform',
    template: '%s | AgentsFlow AI',
  },
  description: 'AI governance platform with Azure guardrails that strengthens compliance, reduces risk, protects data, and ensures secure and responsible AI operations.',
  keywords: ['AI governance', 'compliance', 'Azure guardrails', 'enterprise AI', 'AI compliance'],
  authors: [{ name: 'AgentsFlow AI' }],
  creator: 'AgentsFlow AI',
  publisher: 'AgentsFlow AI',
  metadataBase: new URL(siteUrl),
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
      <body className="min-h-screen bg-[#0A0F1A] text-white antialiased">
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

