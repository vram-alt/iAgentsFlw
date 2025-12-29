import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { Suspense } from 'react'
import { loadPost } from '@/sanity/loader/loadQuery'
import { getSiteUrl } from '@/lib/site-url'
import { seoGenerateMetadata } from '@/components/Seo'
import BlogPostContent from './BlogPostContent'

const siteUrl = getSiteUrl()

interface PortableTextBlock {
  _type: string
  _key: string
  [key: string]: unknown
}

interface PostData {
  _id?: string
  title?: string
  slug?: string
  publishedAt?: string
  body?: unknown[]
  expert?: string
  mainImage?: unknown
  authorData?: {
    name?: string
    image?: unknown
    bio?: unknown[]
  }
  categories?: Array<{
    _id?: string
    title?: string
    slug?: string
  }>
  seo?: {
    metaTitle?: string
    metaDescription?: string
    metaImage?: string
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const pageUrl = `${siteUrl}/blog/${slug}`

  const { data: post } = await loadPost(slug)
  if (!post) {
    return {}
  }

  const postData = post as PostData
  const title = postData.seo?.metaTitle || postData.title || ''
  const description = postData.seo?.metaDescription || postData.expert || ''
  const imageUrl = postData.seo?.metaImage || undefined
  
  return seoGenerateMetadata({
    title,
    description,
    url: pageUrl,
    imageUrl,
    imageAlt: title,
  })
}

async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  if (!slug) return notFound()

  const { data: post } = await loadPost(slug)

  if (!post) {
    return notFound()
  }

  // Transform post data to match BlogPostContent interface
  const postData = post as PostData
  const transformedPost = {
    _id: postData._id || '',
    title: postData.title || '',
    slug: postData.slug || slug,
    publishedAt: postData.publishedAt || '',
    body: (postData.body || []) as PortableTextBlock[],
    excerpt: postData.expert || '',
    mainImage: postData.mainImage,
    author: postData.authorData
      ? {
          name: postData.authorData.name || '',
          image: postData.authorData.image || null,
          bio: (postData.authorData.bio || []) as PortableTextBlock[],
        }
      : undefined,
    categories: postData.categories?.map((cat: { _id?: string; title?: string; slug?: string }) => ({
      _id: cat._id || '',
      title: cat.title || '',
      slug: cat.slug || '',
    })),
  }

  return (
    <div className="min-h-screen bg-[#0A0F1A] text-white">
      <Suspense
        fallback={
          <div className="min-h-screen bg-[#0A0F1A] text-white">
            <div className="container mx-auto px-4 sm:px-6 py-20">
              <div className="max-w-4xl mx-auto">
                <div className="animate-pulse space-y-8">
                  <div className="h-12 bg-gray-700 rounded w-3/4" />
                  <div className="h-64 bg-gray-700 rounded" />
                  <div className="space-y-4">
                    <div className="h-4 bg-gray-700 rounded" />
                    <div className="h-4 bg-gray-700 rounded w-5/6" />
                    <div className="h-4 bg-gray-700 rounded w-4/6" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
      >
        <BlogPostContent post={transformedPost} />
      </Suspense>
    </div>
  )
}

export default BlogPostPage
