import 'server-only'

import * as queryStore from '@sanity/react-loader'
import { draftMode } from 'next/headers'

import { client } from '@/sanity/lib/client'
import {
  latestPostQuery,
  allCategoriesQuery,
  postsByCategorySlugQuery,
  postBySlugQuery,
  pagesBySlugQuery,
  allYouTubeVideosQuery,
  allYouTubeVideoCategoriesQuery,
  youtubeVideosByCategorySlugQuery,
} from '@/sanity/lib/queries'

import { token } from '@/sanity/lib/token'
import {
  PagePayload,
} from '@/types'

const serverClient = client.withConfig({
  token,
  // Enable stega if it's a Vercel preview deployment, as the Vercel Toolbar has controls that shows overlays
  stega: process.env.VERCEL_ENV === 'preview',
})


queryStore.setServerClient(serverClient)

const usingCdn = serverClient.config().useCdn
// Automatically handle draft mode
export const loadQuery = (async (query, params = {}, options = {}) => {
  const {
    perspective = (await draftMode()).isEnabled ? 'previewDrafts' : 'published',
  } = options
  // Don't cache by default
  let revalidate: NextFetchRequestConfig['revalidate'] = 0
  // If `next.tags` is set, and we're not using the CDN, then it's safe to cache
  if (!usingCdn && Array.isArray(options.next?.tags)) {
    revalidate = false
  } else if (usingCdn) {
    revalidate = 60
  }
  return queryStore.loadQuery(query, params, {
    ...options,
    next: {
      revalidate,
      ...(options.next || {}),
    },
    perspective,
    // Enable stega if in Draft Mode, to enable overlays when outside Sanity Studio
    stega: (await draftMode()).isEnabled,
  })
}) satisfies typeof queryStore.loadQuery

export function loadLatestPosts() {
  return loadQuery(
    latestPostQuery,
    {},
    { next: { tags: ['post'] } },
  )
}

export function loadPostsByCategorySlug(slug: string) {
  return loadQuery(
    postsByCategorySlugQuery,
    { slug },
    { next: { tags: ['post', `category:${slug}`] } },
  )
}

export function loadAllBlogCategories() {
  return loadQuery(
    allCategoriesQuery,
    {},
    { next: { tags: ['category'] } },
  )
}

export function loadPost(slug:string) {
  return loadQuery<PagePayload | null>(
    postBySlugQuery,
    { slug },
    { next: { tags: [`post:${slug}`] } },
  )
}

export function loadPage(slug: string) {
  return loadQuery<PagePayload | null>(
    pagesBySlugQuery,
    { slug },
    { next: { tags: [`page:${slug}`] } },
  )
}

export function loadAllYouTubeVideos() {
  return loadQuery(
    allYouTubeVideosQuery,
    {},
    { next: { tags: ['youtubeVideo'] } },
  )
}

export function loadAllYouTubeVideoCategories() {
  return loadQuery(
    allYouTubeVideoCategoriesQuery,
    {},
    { next: { tags: ['youtubeVideoCategory'] } },
  )
}

export function loadYouTubeVideosByCategorySlug(slug: string) {
  return loadQuery(
    youtubeVideosByCategorySlugQuery,
    { slug },
    { next: { tags: ['youtubeVideo', `youtubeVideoCategory:${slug}`] } },
  )
}