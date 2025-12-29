import { defineField, defineType, defineArrayMember } from 'sanity'
import { EditIcon } from '@sanity/icons'

export default defineType({
  name: 'page',
  title: 'Pages',
  type: 'document',
  icon: EditIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'parent',
      title: 'Parent Page',
      type: 'reference',
      to: [{ type: 'page' }],
      description: 'Select a parent page to create a hierarchy. Leave empty for top-level pages.',
      options: {
        filter: ({ document }) => {
          // Exclude the current document from the parent options
          // This prevents a page from being its own parent
          if (!document?._id) {
            return { filter: '_type == "page"' }
          }
          return {
            filter: '_type == "page" && _id != $currentId',
            params: { currentId: document._id },
          }
        },
      },
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Enter the full slug path. If parent exists, format as "parentSlug/yourSlug". If no parent, use just "yourSlug".',
      options: {
        source: 'title',
        maxLength: 200, // Increased to accommodate hierarchical paths
        slugify: (input) => {
          // Clean up the slug and preserve slashes for hierarchical structure
          return input
            .toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[&\\#,+()$~%.'":*?<>{}]/g, '')
            .replace(/\/+/g, '/') // Replace multiple slashes with single slash
            .replace(/^\/|\/$/g, '') // Remove leading/trailing slashes
        },
      },
      validation: (Rule) => 
        Rule.required()
          .custom((slug, context) => {
            const parentRef = context.document?.parent
            const slugValue = slug?.current || ''
            
            if (parentRef?._ref) {
              // If parent exists, slug should contain a slash
              if (!slugValue.includes('/')) {
                return 'Slug should include parent slug in format "parentSlug/slug" since a parent page is selected. Example: if parent slug is "about" and this page slug is "team", enter "about/team"'
              }
            } else {
              // If no parent, slug should not contain slashes
              if (slugValue.includes('/')) {
                return 'Slug should not contain slashes since no parent page is selected. Use just the page slug (e.g., "about").'
              }
            }
            
            return true
          }),
    }),
    defineField({
      name: 'seo',
      title: 'SEO Meta Data',
      type: 'seo', // This calls your SEO object defined elsewhere
    }),
    
  ],

  preview: {
    select: {
      title: 'title',
      parentTitle: 'parent.title',
      slug: 'slug.current',
    },
    prepare(selection) {
      const { title, parentTitle, slug } = selection
      const subtitle = parentTitle ? `Parent: ${parentTitle}` : 'Top-level page'
      return {
        title: title || 'Untitled',
        subtitle: subtitle,
        media: EditIcon,
      }
    },
  },
})