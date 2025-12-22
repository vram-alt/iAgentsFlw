import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: { type: 'author' },
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        },
      ],
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 4,
      description: 'This ends up on summary pages, on Google, when people share your post in social media.',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H1', value: 'h1' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'H4', value: 'h4' },
            { title: 'Quote', value: 'blockquote' },
          ],
        },
        {
          type: 'image',
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative Text',
            },
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const { author } = selection
      return { ...selection, subtitle: author && `by ${author}` }
    },
  },
})


