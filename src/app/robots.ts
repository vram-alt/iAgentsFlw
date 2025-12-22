import { MetadataRoute } from 'next'
import { getSiteUrl } from '@/lib/site-url'

export default function robots(): MetadataRoute.Robots {
  const siteUrl = getSiteUrl()
  
  return {
    rules: [
      {
        userAgent: 'Googlebot',
        allow: '/',
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
      },
      {
        userAgent: 'Twitterbot',
        allow: '/',
      },
      {
        userAgent: 'facebookexternalhit',
        allow: '/',
      },
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  }
}

