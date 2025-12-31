import { defineField, defineType } from 'sanity'
import { VideoIcon, TagIcon } from '@sanity/icons'

// YouTube Video Category Schema
export const youtubeVideoCategory = defineType({
  name: 'youtubeVideoCategory',
  title: 'YouTube Video Category',
  type: 'document',
  icon: TagIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Category Name',
      type: 'string',
      description: 'Display name for the category (e.g., "Tutorials", "Reviews", "Interviews")',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Unique identifier for the category (e.g., "tutorials", "reviews", "interviews")',
      options: {
        source: 'title',
        maxLength: 96,
        slugify: (input) => {
          return input
            .toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[&\\#,+()$~%.'":*?<>{}]/g, '')
        },
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Optional description for this category',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      slug: 'slug.current',
    },
    prepare({ title, slug }) {
      return {
        title: title || 'Untitled Category',
        subtitle: slug ? `Slug: ${slug}` : 'No slug',
      }
    },
  },
})

// YouTube Video Schema
export default defineType({
  name: 'youtubeVideo',
  title: 'YouTube Video',
  type: 'document',
  icon: VideoIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Video Title',
      type: 'string',
      description: 'Title of the YouTube video',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'youtubeId',
      title: 'YouTube Video ID',
      type: 'string',
      description: 'The YouTube video ID (e.g., for https://www.youtube.com/watch?v=dQw4w9WgXcQ, the ID is "dQw4w9WgXcQ")',
      validation: (Rule) => 
        Rule.required()
          .min(11)
          .max(11)
          .error('YouTube video ID must be exactly 11 characters'),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Brief description of the video content',
      validation: (Rule) => Rule.max(500).warning('Keep descriptions concise'),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'youtubeVideoCategory' }],
      description: 'Select the category for this video',
      validation: (Rule) => Rule.required(),
    }),
    
  ],
  preview: {
    select: {
      title: 'title',
      category: 'category.title',
      youtubeId: 'youtubeId',
      featured: 'featured',
    },
    prepare({ title, category, youtubeId, featured }) {
      const subtitle = [
        category && `Category: ${category}`,
        youtubeId && `ID: ${youtubeId}`,
        featured && '⭐ Featured',
      ]
        .filter(Boolean)
        .join(' • ')
      
      return {
        title: title || 'Untitled Video',
        subtitle: subtitle || 'No category',
        media: VideoIcon,
      }
    },
  },
  orderings: [
    {
      title: 'Published Date, Newest',
      name: 'publishedAtDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
    {
      title: 'Published Date, Oldest',
      name: 'publishedAtAsc',
      by: [{ field: 'publishedAt', direction: 'asc' }],
    },
    {
      title: 'Title, A-Z',
      name: 'titleAsc',
      by: [{ field: 'title', direction: 'asc' }],
    },
  ],
})
