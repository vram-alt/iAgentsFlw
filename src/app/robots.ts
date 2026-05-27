import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/studio/', '/admin/studio/', '/drafts/', '/preview/', '/internal/'],
      },
    ],
    sitemap: `https://iagentsflow.com/sitemap.xml`,
  }
}

