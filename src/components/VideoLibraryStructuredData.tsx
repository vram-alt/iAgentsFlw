import { getSiteUrl } from '@/lib/site-url'

interface YouTubeVideoStructuredData {
  _id?: string
  youtubeId: string
  title: string
  description?: string
  publishedAt?: string
  duration?: string
  category?: {
    title: string
  }
  thumbnailUrl?: string
}

interface VideoLibraryStructuredDataProps {
  videos: YouTubeVideoStructuredData[]
}

const getIsoDate = (value?: string) => {
  if (!value) return undefined
  try {
    return new Date(value).toISOString().split('T')[0]
  } catch {
    return undefined
  }
}

const VideoLibraryStructuredData = ({ videos }: VideoLibraryStructuredDataProps) => {
  const siteUrl = getSiteUrl()
  const pageUrl = `${siteUrl}/videos`

  const itemListElement = videos
    .filter((video) => video.youtubeId && video.title)
    .map((video, index) => {
      const videoUrl = `https://www.youtube.com/watch?v=${video.youtubeId}`
      const thumbnailUrl =
        video.thumbnailUrl || `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`

      return {
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'VideoObject',
          '@id': `${pageUrl}#video-${video.youtubeId}`,
          name: video.title,
          alternateName: video.title,
          description: video.description || 'AgentsFlow AI video',
          thumbnailUrl,
          uploadDate: getIsoDate(video.publishedAt),
          duration: video.duration,
          contentUrl: videoUrl,
          embedUrl: `https://www.youtube.com/embed/${video.youtubeId}`,
          genre: video.category?.title,
          publisher: {
            '@type': 'Organization',
            name: 'AgentsFlow AI',
            url: siteUrl,
          },
        },
      }
    })

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    url: pageUrl,
    name: 'AI Governance Videos & Demos | AgentsFlow AI',
    description: 'Watch AgentsFlow AI demos, webinars, and governance tutorials.',
    mainEntity: {
      '@type': 'ItemList',
      name: 'AgentsFlow AI Video Library',
      itemListOrder: 'https://schema.org/ItemListOrderAscending',
      itemListElement,
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

export default VideoLibraryStructuredData
