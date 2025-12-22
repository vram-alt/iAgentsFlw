import { client } from '@/lib/sanity'
import { getSiteUrl } from '@/lib/site-url'

const SITE_URL = getSiteUrl()

// Query to fetch all blog posts with slugs
const postsQuery = `
  *[_type == "post" && defined(slug.current)] {
    "slug": slug.current,
    _updatedAt,
    publishedAt
  }
`

export async function GET() {
  try {
    // Fetch all blog posts
    const posts = await client.fetch(postsQuery)

    // Filter out any posts without slugs (safety check)
    const validPosts = posts.filter(post => post.slug && post.slug !== ':slug')

    // Define static pages
    const staticPages = [
      { url: `${SITE_URL}/` },
      { url: `${SITE_URL}/blog` },
      { url: `${SITE_URL}/services` },
      { url: `${SITE_URL}/about` },
      { url: `${SITE_URL}/contact` },
      { url: `${SITE_URL}/partners` },
      { url: `${SITE_URL}/industries` },
      { url: `${SITE_URL}/platforms` },
    ]

    // Generate dynamic URLs for blog posts
    const dynamicPages = validPosts.map((post) => {
      const lastMod = post._updatedAt || post.publishedAt || new Date().toISOString()
      return {
        url: `${SITE_URL}/blog/${post.slug}`,
        lastMod: new Date(lastMod).toISOString(),
      }
    })

    // Generate XML
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${[...staticPages, ...dynamicPages]
        .map(({ url, lastMod }) => `
          <url>
            <loc>${url}</loc>
            ${lastMod ? `<lastmod>${lastMod}</lastmod>` : ""}
          </url>
        `)
        .join("")}
    </urlset>`;

    return new Response(sitemap, {
      headers: {
        "Content-Type": "application/xml",
      },
    });
  } catch (error) {
    console.error("Error generating sitemap:", error);
    return new Response("Failed to generate sitemap", { status: 500 });
  }
}
