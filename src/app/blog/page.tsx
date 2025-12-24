import { Suspense } from 'react'
import Link from 'next/link'
import { loadLatestPosts } from '@/sanity/loader/loadQuery'
import { Card, CardHeader } from '@/components/ui/card'
import BlogPagination from './BlogPagination'
import BlogHero from './BlogHero'
import type { Image } from 'sanity'

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
      <div className="text-center py-20">
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
      <div className="bg-[#0F172A]/30 border-b border-white/5 pt-20">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-400">
            <Link href="/" className="hover:text-white transition-colors">
              AgentsFlow.ai
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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[...Array(6)].map((_, i) => (
                  <Card key={i} className="bg-[#0F172A]/50 border-white/10 animate-pulse">
                    <CardHeader>
                      <div className="h-48 bg-gray-700 rounded-lg mb-4" />
                      <div className="h-6 bg-gray-700 rounded w-3/4 mb-2" />
                      <div className="h-4 bg-gray-700 rounded w-1/2" />
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

