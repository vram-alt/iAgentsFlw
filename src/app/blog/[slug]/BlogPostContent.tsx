'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Calendar, User, ArrowLeft, Share2, Copy, Check } from 'lucide-react'
import { format } from 'date-fns'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import PortableText from '@/components/PortableText'
import { urlFor } from '@/lib/sanity'
import type { Image } from 'sanity'

interface PortableTextBlock {
  _type: string
  _key: string
  [key: string]: unknown
}

interface BlogPost {
  _id: string
  title: string
  slug: string
  publishedAt: string
  body: PortableTextBlock[]
  excerpt?: string
  mainImage?: Image | { asset?: { _ref?: string; url?: string }; url?: string }
  author?: {
    name: string
    image?: Image | { asset?: { _ref?: string; url?: string }; url?: string }
    bio?: PortableTextBlock[]
  }
  categories?: Array<{
    _id: string
    title: string
    slug: string
  }>
}

interface BlogPostContentProps {
  post: BlogPost
}

export default function BlogPostContent({ post }: BlogPostContentProps) {
  const router = useRouter()
  const [copied, setCopied] = useState(false)

  const currentUrl = typeof window !== 'undefined' ? window.location.href : ''
  const shareTitle = post?.title || ''
  const shareText = post?.excerpt || post?.title || ''

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: shareTitle,
        text: shareText,
        url: currentUrl,
      })
    } else {
      handleCopyLink()
    }
  }

  const handleCopyLink = () => {
    navigator.clipboard.writeText(currentUrl)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleTwitterShare = () => {
    const url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(shareTitle)}`
    window.open(url, '_blank', 'width=550,height=420')
  }

  const handleLinkedInShare = () => {
    const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`
    window.open(url, '_blank', 'width=550,height=420')
  }

  const handleFacebookShare = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`
    window.open(url, '_blank', 'width=550,height=420')
  }

  const mainImageUrl = post.mainImage && 'asset' in post.mainImage && post.mainImage.asset 
    ? urlFor({ asset: post.mainImage.asset }) 
    : (post.mainImage && 'url' in post.mainImage ? String(post.mainImage.url) : '')
  const authorImageUrl = post.author?.image && 'asset' in post.author.image && post.author.image.asset
    ? urlFor({ asset: post.author.image.asset })
    : (post.author?.image && 'url' in post.author.image ? String(post.author.image.url) : '')

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-[#0F172A]/30 border-b border-white/5 pt-20">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-400">
            <Link href="/" className="hover:text-white transition-colors">
              AgentsFlow.ai
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-white transition-colors">
              Blog
            </Link>
            <span>/</span>
            <span className="text-[#F47F21] line-clamp-1">{post.title}</span>
          </div>
        </div>
      </div>

      <article className="pt-8 pb-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <Button
              variant="ghost"
              onClick={() => router.push('/blog')}
              className="mb-8 text-gray-400 hover:text-white"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Button>

            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              {/* Categories */}
              {post.categories && post.categories.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.categories.map((category) => (
                    <Badge
                      key={category._id}
                      variant="secondary"
                      className="bg-[#F47F21]/10 text-[#F47F21] border-[#F47F21]/20"
                    >
                      {category.title}
                    </Badge>
                  ))}
                </div>
              )}

              {/* Title */}
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">{post.title}</h1>

              {/* Meta Information */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400 mb-8">
                {post.publishedAt && (
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{format(new Date(post.publishedAt), 'MMMM d, yyyy')}</span>
                  </div>
                )}
                {post.author && (
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>{post.author.name}</span>
                  </div>
                )}
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleShare}
                    className="text-gray-400 hover:text-white"
                  >
                    <Share2 className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                  {/* Social Share Icons */}
                  <div className="flex items-center gap-1 border-l border-white/10 pl-3">
                    {/* Twitter */}
                    <button
                      onClick={handleTwitterShare}
                      className="p-2 rounded-lg text-gray-400 hover:text-[#1DA1F2] hover:bg-[#1DA1F2]/10 transition-colors"
                      aria-label="Share on Twitter"
                      title="Share on Twitter"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </button>
                    {/* LinkedIn */}
                    <button
                      onClick={handleLinkedInShare}
                      className="p-2 rounded-lg text-gray-400 hover:text-[#0077B5] hover:bg-[#0077B5]/10 transition-colors"
                      aria-label="Share on LinkedIn"
                      title="Share on LinkedIn"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </button>
                    {/* Facebook */}
                    <button
                      onClick={handleFacebookShare}
                      className="p-2 rounded-lg text-gray-400 hover:text-[#1877F2] hover:bg-[#1877F2]/10 transition-colors"
                      aria-label="Share on Facebook"
                      title="Share on Facebook"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </button>
                    {/* Copy Link */}
                    <button
                      onClick={handleCopyLink}
                      className="p-2 rounded-lg text-gray-400 hover:text-[#F47F21] hover:bg-[#F47F21]/10 transition-colors"
                      aria-label="Copy link"
                      title="Copy link"
                    >
                      {copied ? (
                        <Check className="w-4 h-4" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Featured Image */}
            {/* {mainImageUrl && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-12"
              >
                <img
                  src={mainImageUrl}
                  alt={post.title}
                  className="w-full h-auto rounded-lg shadow-2xl"
                />
              </motion.div>
            )} */}

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="prose prose-invert prose-lg max-w-none"
            >
              <PortableText
                blocks={post.body || []}
                className="text-gray-300 leading-relaxed [&>h1]:text-4xl [&>h1]:font-bold [&>h1]:mt-12 [&>h1]:mb-6 [&>h1]:text-white [&>h2]:text-3xl [&>h2]:font-bold [&>h2]:mt-10 [&>h2]:mb-4 [&>h2]:text-white [&>h3]:text-2xl [&>h3]:font-semibold [&>h3]:mt-8 [&>h3]:mb-3 [&>h3]:text-white [&>p]:mb-6 [&>p]:text-gray-300 [&>p]:leading-relaxed [&>blockquote]:border-l-4 [&>blockquote]:border-[#F47F21] [&>blockquote]:pl-6 [&>blockquote]:italic [&>blockquote]:text-gray-300 [&>blockquote]:my-8 [&>figure]:my-8 [&>img]:rounded-lg [&>code]:bg-[#0F172A] [&>code]:px-2 [&>code]:py-1 [&>code]:rounded [&>code]:text-sm [&>ul]:list-disc [&>ul]:list-outside [&>ol]:list-decimal [&>ol]:list-outside [&>li]:text-gray-300"
              />
            </motion.div>

            {/* Author Bio */}
            {post.author && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-16 pt-8 border-t border-white/10"
              >
                <div className="flex gap-6">
                  {authorImageUrl && (
                    <img
                      src={authorImageUrl}
                      alt={post.author.name}
                      className="w-20 h-20 rounded-full object-cover"
                    />
                  )}
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{post.author.name}</h3>
                    {post.author.bio && <PortableText blocks={post.author.bio} className="text-gray-400" />}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Back to Blog */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-16 pt-8 border-t border-white/10"
            >
              <Button
                variant="outline"
                onClick={() => router.push('/blog')}
                className="w-full sm:w-auto"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to All Posts
              </Button>
            </motion.div>
          </div>
        </div>
      </article>
    </>
  )
}

