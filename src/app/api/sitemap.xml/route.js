import { groq } from "next-sanity";
import { client } from '@/sanity/lib/client'

const SITE_URL = `https://iagentsflow.com`; // Change this to your actual domain

function normalizeSitemapUrl(url) {
  if (!url) return null;

  const normalized = url.replace(/\/+$/, "");
  return normalized === SITE_URL ? `${SITE_URL}/` : normalized;
}

function dedupeSitemapEntries(entries) {
  const seen = new Set();

  return entries.reduce((uniqueEntries, entry) => {
    const url = normalizeSitemapUrl(entry.url);
    if (!url || seen.has(url)) return uniqueEntries;

    seen.add(url);
    uniqueEntries.push({
      ...entry,
      url,
    });

    return uniqueEntries;
  }, []);
}

const query = groq`
  *[_type in ["page", "post", "job"] && (!defined(isActive) || isActive == true)] {
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
      { url: `${SITE_URL}/about` },
      { url: `${SITE_URL}/contact` },
      { url: `${SITE_URL}/blog` },
      { url: `${SITE_URL}/videos` },
      { url: `${SITE_URL}/careers` },
      { url: `${SITE_URL}/partners` },
      { url: `${SITE_URL}/founders-note` },
      // Services
      { url: `${SITE_URL}/services` },
      { url: `${SITE_URL}/services/advisory-architecture` },
      { url: `${SITE_URL}/services/assessment` },
      { url: `${SITE_URL}/services/audit-readiness` },
      { url: `${SITE_URL}/services/managed-services` },
      // Managed Services
      { url: `${SITE_URL}/managed-services/audit-readiness` },
      { url: `${SITE_URL}/managed-services/change-management` },
      { url: `${SITE_URL}/managed-services/continuous-monitoring` },
      { url: `${SITE_URL}/managed-services/data-governance` },
      { url: `${SITE_URL}/managed-services/guardrail-monitoring` },
      { url: `${SITE_URL}/managed-services/operational-checklist` },
      { url: `${SITE_URL}/managed-services/spend-management` },
      // Platforms
      { url: `${SITE_URL}/platforms` },
      { url: `${SITE_URL}/platforms/salesforce` },
      { url: `${SITE_URL}/platforms/servicenow` },
      { url: `${SITE_URL}/platforms/workday` },
      // Industries
      { url: `${SITE_URL}/industries` },
      { url: `${SITE_URL}/industries/finance` },
      { url: `${SITE_URL}/industries/healthcare` },
      { url: `${SITE_URL}/industries/insurance` },
      // Tools
      { url: `${SITE_URL}/tools/agentsflow` },
      { url: `${SITE_URL}/tools/icomply` },
      { url: `${SITE_URL}/tools/iprivacyhub` },
      { url: `${SITE_URL}/tools/ai-go` },
      { url: `${SITE_URL}/tools/docx` },
      // Resources
      { url: `${SITE_URL}/resources/state-of-enterprise` },
      // Legal
      { url: `${SITE_URL}/privacy-policy` },
      { url: `${SITE_URL}/terms-of-use` },
    ];

    // Generate dynamic URLs
    const dynamicPages = sortedItems
    .map((item) => {
      if (!item.slug) return null;
      if (item._type === "page" && ["home", "tools"].includes(item.slug)) return null;

      let path = null;
      //if (item._type === "page") path = item.slug;
      if (item._type === "post") path = `blog/${item.slug}`;
      if (item._type === "job") path = `careers/${item.slug}`;
      if (!path) return null;

      return {
        url: `${SITE_URL}/${path}`,
        lastMod: new Date(item._updatedAt).toISOString(),
      };
    })
    .filter(Boolean);

    const sitemapEntries = dedupeSitemapEntries([...staticPages, ...dynamicPages]);

    // Generate XML
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${sitemapEntries
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
