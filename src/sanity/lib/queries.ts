import { groq } from 'next-sanity'

export const latestPostQuery = groq`
  *[_type == "post"] | order(publishedAt desc){
    _id,
    title,
    publishedAt,
    excerpt,
    "slug": slug.current,
    "image": mainImage,
    "mainImage": mainImage.asset->url,
    mainImage,
    "author": author->{
      _id,
      name,
      image
    },
    "categories":categories[]->{
      _id,
      title,
      "slug": slug.current
    }
  }
`

export const allCategoriesQuery = groq`
  *[_type == "blogCategory"] | order(publishedAt desc){
    _id,
    title,
    "slug": slug.current,
  }
`

// Category page queries
export const postsByCategorySlugQuery = groq`
{
  "category": *[_type == "blogCategory" && slug.current == $slug][0]{
    _id,
    title,
    "slug": slug.current
  },
  "posts": *[_type == "post" && $slug in categories[]->slug.current && !(_id in path("drafts.**"))] | order(_createdAt desc){
    title,
    "slug": slug.current,
    expert,
    mainImage,
    publishedAt,
    "authorData": author->{
      _id,
      name,
      jotTitle,
      "slug": slug.current, 
      image,
      "imageUrl": image.asset -> url,
      "imageWidth": image.asset -> metadata.dimensions.width,
      "imageHeight": image.asset -> metadata.dimensions.height,
    }, 
    "categories":categories[]->{
      _id,
      title,            
      "slug": slug.current
    }
  }
}
`

export const postBySlugQuery = groq`
  *[_type == "post" && !(_id in path("drafts.**")) && slug.current == $slug][0] {
  title,
  expert,
  publishedAt,
  leftBannerSection,
  "slug": slug.current,
  blogCta{
    ctaHeading,
    button{
      text,
      "link":link->{
        _id,
        _type,
        title,
        "slug": slug.current
      }
    }
  },
  body,
  seo{
      "metaImage": shareImage.asset->url + "?w=1200&h=650&fm=png&fit=crop",
      metaTitle,
      metaDescription,
      _type
    },
   mainImage,
   "categories":categories[]->{
      _id,
      title,
      "slug": slug.current
    },  
  "tagsData":tags[]->{
      _id,
      tag
    },  
  "authorData": author->{
      _id,
      name,
      jotTitle,
      "slug": slug.current, 
      image,
      bio,
      "imageUrl": image.asset -> url,
      "imageWidth": image.asset -> metadata.dimensions.width,
      "imageHeight": image.asset -> metadata.dimensions.height,
    },
  "previousPost": *[_type == "post" && !(_id in path("drafts.**")) && publishedAt < ^.publishedAt] | order(publishedAt desc)[0]{
    title,
    "slug": slug.current,
    mainImage
  },
  "nextPost": *[_type == "post" && !(_id in path("drafts.**")) && publishedAt > ^.publishedAt] | order(publishedAt asc)[0]{
    title,
    "slug": slug.current,
    mainImage
  },
  "allCategories": *[_type == "blogCategory"] | order(title asc){
    _id,
    title,
    "slug": slug.current,
    "postCount": count(*[_type == "post" && !(_id in path("drafts.**")) && references(^._id)])
  },
  "latestPosts": *[_type == "post" && !(_id in path("drafts.**"))] | order(publishedAt desc)[0...3]{
    title,
    "slug": slug.current,
    publishedAt,
    "categories": categories[]->{
      _id,
      title,
      "slug": slug.current
    }
  }
  }
`
