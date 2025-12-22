import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: 'et4gt387',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-01-01',
})

// Helper for Next.js Server Components with fetch caching
export async function fetchSanityData<T>(
  query: string,
  params: Record<string, unknown> = {},
  options: { next?: { revalidate?: number } } = {}
): Promise<T> {
  // For queries with params, use the client.fetch method which handles GROQ params correctly
  if (Object.keys(params).length > 0) {
    return client.fetch<T>(query, params) as Promise<T>
  }

  // For queries without params, use direct fetch for better caching
  const url = new URL(`https://et4gt387.api.sanity.io/v2024-01-01/data/query/production`)
  url.searchParams.set('query', query)

  const response = await fetch(url.toString(), {
    ...options,
    headers: {
      'Content-Type': 'application/json',
    },
  })

  if (!response.ok) {
    throw new Error(`Sanity fetch failed: ${response.statusText}`)
  }

  const data = await response.json()
  return data.result as T
}

interface SanityImageAsset {
  _ref?: string;
  url?: string;
}

interface SanityImage {
  asset?: SanityImageAsset;
}

// Helper function to get image URL from Sanity image reference
export function urlFor(image: SanityImage | null | undefined) {
  if (!image?.asset) return ''
  
  // Handle both _ref and direct URL formats
  if (image.asset._ref) {
    const ref = image.asset._ref
    const parts = ref.split('-')
    if (parts.length >= 3) {
      const id = parts.slice(1, -1).join('-')
      const extension = parts[parts.length - 1]
      return `https://cdn.sanity.io/images/et4gt387/production/${id}.${extension}`
    }
  }
  
  // If asset has a URL directly
  if (image.asset.url) {
    return image.asset.url
  }
  
  return ''
}

// GROQ queries
export const postsQuery = `
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    mainImage,
    author->{
      name,
      image
    },
    categories[]->{
      title,
      slug
    }
  }
`

export const postBySlugQuery = `
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    body,
    mainImage,
    author->{
      name,
      image,
      bio
    },
    categories[]->{
      title,
      slug
    }
  }
`

export const postsCountQuery = `
  count(*[_type == "post"])
`

