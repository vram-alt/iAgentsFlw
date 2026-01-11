import { groq } from "next-sanity";
import { client } from '@/sanity/lib/client'

const SITE_URL = `https://iagentsflow.com`; // Change this to your actual domain

const query = groq`
  *[_type in ["page", "post", "blogCategory"]] {
    "slug": slug.current,
    _type,
    _updatedAt
  }
`;
export async function GET() {
  try {
    const items = await client.fetch(query);

    const sortedItems = items.sort((a, b) => a._type.localeCompare(b._type));


    // Define static pages
    const staticPages = [
      { url: `${SITE_URL}/` },
      { url: `${SITE_URL}/blog` },
    ];

    // Generate dynamic URLs
    const dynamicPages = sortedItems
    .map((item) => {
      let path = item.slug;
      if (item._type === "page") path = `${item.slug}`;
      if (item._type === "post") path = `blog/${item.slug}`;
      
      return {
        url: `${SITE_URL}/${path}`,
        lastMod: new Date(item._updatedAt).toISOString(),
      };
    });

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
