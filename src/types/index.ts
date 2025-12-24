import type { PortableTextBlock } from 'next-sanity'
import type { Image } from 'sanity'

export interface MenuItem {
  _type: string
  slug?: string
  title?: string
}

export interface MilestoneItem {
  description?: string
  duration?: {
    start?: string
    end?: string
  }
  image?: Image
  tags?: string[]
  title?: string
}

export interface ShowcaseProject {
  _type: string
  coverImage?: Image
  overview?: PortableTextBlock[]
  slug?: string
  tags?: string[]
  title?: string
}

export interface LatestPostsPayload {
  _type: string
  coverImage?: Image
  slug?: string
  title?: string
}

export interface TestimonialsPayload {
  _type: string
  title?: string
  clientname?: string
  testimonial?: string
}
export interface FaqPayload {
  _type: string
  question?: string
  category?: string
  answer?: PortableTextBlock[]
  icon?: Image
}

// Page payloads

export interface SEOData {
  metaTitle?: string
  metaDescription?: string
  metaImage?: string
  shareImage?: Image
  [key: string]: unknown
}

export interface HomePagePayload {
  footer?: PortableTextBlock[]
  overview?: PortableTextBlock[]
  showcaseProjects?: ShowcaseProject[]
  title?: string
  seo?: SEOData
}

export interface AuthorData {
  _id?: string
  name?: string
  jotTitle?: string
  slug?: string
  image?: Image
  bio?: PortableTextBlock[]
  imageUrl?: string
  imageWidth?: number
  imageHeight?: number
  [key: string]: unknown
}

export interface PagePayload {
  body?: PortableTextBlock[]
  name?: string
  overview?: PortableTextBlock[]
  title?: string
  slug?: string
  parent?: string
  seo?: SEOData
  expert?: string
  mainImage?: Image
  imageWidth?: number
  imageHeight?: number
  publishedAt?: string
  authorData?: AuthorData
  image1?: Image
  image2?: Image
  image3?: Image
  image1Width?: number
  image1Height?: number
  image2Width?: number
  image2Height?: number
  image3Width?: number
  image3Height?: number
}
export interface ServicePayload {
  title?: string
  slug?: string
  seo?: SEOData
}

export interface ProductPayload {
  title?: string
  slug?: string
  image?: Image
  imageWidth?: number
  imageHeight?: number
  seo?: SEOData
  howitworks?: PortableTextBlock[]
}
export interface ProductCategoriesPayload {
  title?: string
  slug?: string
  description?: string
  image?: Image
  imageWidth?: number
  imageHeight?: number
  seo?: SEOData
  banner?: Image
}

export interface ProjectPayload {
  client?: string
  coverImage?: Image
  description?: PortableTextBlock[]
  duration?: {
    start?: string
    end?: string
  }
  overview?: PortableTextBlock[]
  site?: string
  slug: string
  tags?: string[]
  title?: string
}

export interface SettingsPayload {
  footer?: PortableTextBlock[]
  menuItems?: MenuItem[]
  ogImage?: Image
}
