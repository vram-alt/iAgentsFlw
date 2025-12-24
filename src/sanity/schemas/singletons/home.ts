import { HomeIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'



export default defineType({
  name: 'home',
  title: 'Home',
  type: 'document',
  icon: HomeIcon,
  // Uncomment below to have edits publish automatically as you type
  // liveEdit: true,
  fields: [
    defineField({
      name: 'title',
      description: 'This field is the title of your personal website.',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'seo',
      title: 'SEO Meta Data',
      type: 'seo', // This calls your SEO object defined elsewhere
    }),  
    {
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [
        {
          type: 'homeHeroSection',
        },
         {
          type: 'homeServiceSection',
        },
        {
          type: 'homeAboutSection',
        },        
        {
          type: 'homeStats',
        },
        {
          type: 'homeAcademicProgramsSection',
        },
        {
          type: 'homeTestimonialsSection',
        },
        {
          type: 'homeBlogSection',
        },
        {
          type: 'homeGallerySection',
        },
        {
          type: 'homeCTASection',
        },               
      ],
    },  
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        subtitle: 'Home',
        title,
      }
    },
  },
})
