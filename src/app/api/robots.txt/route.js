import { NextResponse } from "next/server";

const SITE_URL = `https://iagentsflow.com`;

export function GET() {
  const isDev = SITE_URL.includes("localhost") || SITE_URL.includes("beingbuilt.org");

  const content = isDev
    ? `
User-agent: *
Disallow: /
# Disallow all crawling in development/staging
    `.trim()
    : `
User-agent: *
Allow: /
Disallow: /api/
Disallow: /studio/
Disallow: /admin/studio/
Disallow: /drafts/
Disallow: /preview/
Disallow: /internal/

Sitemap: ${SITE_URL}/sitemap.xml
    `.trim();

  return new NextResponse(content, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
