import { Suspense } from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { loadLatestPosts } from '@/sanity/loader/loadQuery'
import { Card, CardHeader } from '@/components/ui/card'
import BlogPagination from './BlogPagination'
import BlogHero from './BlogHero'
import type { Image } from 'sanity'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Insights, guides, and updates from AgentsFlow AI on AI governance, compliance, and secure enterprise AI operations.',
  alternates: {
    canonical: 'https://iagentsflow.com/blog',
  },
  openGraph: {
    title: 'Blog | AgentsFlow AI',
    description: 'Insights, guides, and updates from AgentsFlow AI on AI governance, compliance, and secure enterprise AI operations.',
    url: 'https://iagentsflow.com/blog',
    siteName: 'AgentsFlow AI',
    type: 'website',
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
    title: 'Blog | AgentsFlow AI',
    description: 'Insights, guides, and updates from AgentsFlow AI on AI governance, compliance, and secure enterprise AI operations.',
    images: ['/AgentsFlow-logo.png'],
  },
}

const POSTS_PER_PAGE = 9

interface Post {
  _id: string
  title: string
  slug: string
  publishedAt: string
  excerpt?: string
  mainImage?: Image | { asset?: { _ref?: string; url?: string }; url?: string }
  image?: Image | { asset?: { _ref?: string; url?: string }; url?: string }
  author?: {
    name: string
    image?: Image | { asset?: { _ref?: string; url?: string }; url?: string }
  }
  categories?: Array<{
    _id: string
    title: string
    slug: string
  }>
}

async function BlogPostsGrid() {
  const { data: posts } = await loadLatestPosts()
  
  if (!posts || !Array.isArray(posts) || posts.length === 0) {
    return (
      <div className="py-20 text-center">
        <p className="text-xl text-gray-400">No blog posts found. Check back soon!</p>
      </div>
    )
  }

  return (
    <BlogPagination posts={posts as Post[]} postsPerPage={POSTS_PER_PAGE} />
  )
}

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#0A0F1A] text-white">
      {/* Breadcrumb */}
      <div className="border-b border-white/5 bg-[#0F172A]/30 pt-20">
        <div className="container mx-auto px-4 py-4 sm:px-6">
          <div className="flex items-center space-x-2 text-sm text-gray-400">
            <Link href="/" className="transition-colors hover:text-white">
              AgentsFlow
            </Link>
            <span>/</span>
            <span className="text-[#F47F21]">Blog</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <BlogHero />

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <Suspense
            fallback={
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {[...Array(6)].map((_, i) => (
                  <Card key={i} className="animate-pulse border-white/10 bg-[#0F172A]/50">
                    <CardHeader>
                      <div className="mb-4 h-48 rounded-lg bg-gray-700" />
                      <div className="mb-2 h-6 w-3/4 rounded bg-gray-700" />
                      <div className="h-4 w-1/2 rounded bg-gray-700" />
                    </CardHeader>
                  </Card>
                ))}
              </div>
            }
          >
            <BlogPostsGrid />
          </Suspense>
        </div>
      </section>
    </div>
  )
}

