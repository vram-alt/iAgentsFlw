import {
  defineArrayMember,
  defineField,
  defineType,
} from 'sanity'

import { DocumentIcon } from '@sanity/icons'

export default defineType({
  name: 'job',
  title: 'Job',
  type: 'document',
  icon: DocumentIcon,

  fields: [
    defineField({
      name: 'title',
      title: 'Job Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'excerpt',
      title: 'Short Description',
      type: 'text',
      rows: 3,
      validation: (rule) =>
        rule.required().max(180),
    }),
    defineField({
      name: 'team',
      title: 'Department / Team',
      type: 'string',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'employmentType',
      title: 'Employment Type',
      type: 'string',
      options: {
        list: [
          { title: 'Full Time', value: 'FULL_TIME' },
          { title: 'Part Time', value: 'PART_TIME' },
          { title: 'Contract', value: 'CONTRACTOR' },
          { title: 'Temporary', value: 'TEMPORARY' },
          { title: 'Internship', value: 'INTERN' },
        ],
      },
      initialValue: 'FULL_TIME',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'workMode',
      title: 'Work Mode',
      type: 'string',
      options: {
        list: [
          { title: 'On Site', value: 'onsite' },
          { title: 'Remote', value: 'remote' },
          { title: 'Hybrid', value: 'hybrid' },
        ],
      },
      initialValue: 'onsite',
    }),

    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      description:
        'Example: Hyderabad, Telangana, India',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'salaryMin',
      title: 'Minimum Salary',
      type: 'number',
    }),

    defineField({
      name: 'salaryMax',
      title: 'Maximum Salary',
      type: 'number',
    }),

    defineField({
      name: 'salaryCurrency',
      title: 'Salary Currency',
      type: 'string',
      initialValue: 'INR',
    }),

    defineField({
      name: 'experience',
      title: 'Experience',
      type: 'string',
      placeholder: '2-4 years',
    }),

    defineField({
      name: 'skills',
      title: 'Skills',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'string',
        }),
      ],
    }),

    defineField({
      name: 'description',
      title: 'Job Description',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'block',
          styles: [
            {
              title: 'Paragraph',
              value: 'normal',
            },
            {
              title: 'H2',
              value: 'h2',
            },
            {
              title: 'H3',
              value: 'h3',
            },
          ],
          lists: [
            {
              title: 'Bullet',
              value: 'bullet',
            },
            {
              title: 'Numbered',
              value: 'number',
            },
          ],
          marks: {
            decorators: [
              {
                title: 'Bold',
                value: 'strong',
              },
              {
                title: 'Italic',
                value: 'em',
              },
            ],
          },
        }),
      ],
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'applyUrl',
      title: 'Apply URL',
      type: 'url',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'datePosted',
      title: 'Date Posted',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'validThrough',
      title: 'Valid Through',
      type: 'datetime',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'featured',
      title: 'Featured Job',
      type: 'boolean',
      initialValue: false,
    }),

    defineField({
      name: 'isActive',
      title: 'Active Job',
      type: 'boolean',
      initialValue: true,
    }),

    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        defineField({
          name: 'metaTitle',
          title: 'Meta Title',
          type: 'string',
        }),

        defineField({
          name: 'metaDescription',
          title: 'Meta Description',
          type: 'text',
          rows: 3,
        }),
      ],
    }),
  ],

  preview: {
    select: {
      title: 'title',
      team: 'team',
      location: 'location',
      active: 'isActive',
    },

    prepare({ title, team, location, active }) {
      return {
        title,
        subtitle: `${team} • ${location} ${
          active ? '' : '• Inactive'
        }`,
      }
    },
  },
})