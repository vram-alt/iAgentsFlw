'use client'
/**
 * This config is used to set up Sanity Studio that's mounted on the `app/studio/[[...index]]/page.tsx` route
 */

import { visionTool } from '@sanity/vision'

import { defineConfig } from 'sanity'
import { presentationTool } from 'sanity/presentation'
import { structureTool } from 'sanity/structure'

import { apiVersion, dataset, projectId, studioUrl } from '@/sanity/lib/api'
import * as resolve from '@/sanity/plugins/resolve'
import { pageStructure, singletonPlugin } from '@/sanity/plugins/settings'
import post from '@/sanity/schemas/documents/post'
import blogCategory from '@/sanity/schemas/documents/blogCategory'
import author from '@/sanity/schemas/documents/author'
import youtubeVideo, { youtubeVideoCategory } from '@/sanity/schemas/documents/youtubeVideo'
import job from '@/sanity/schemas/documents/job'

import seo from '@/sanity/schemas/objects/seo'
import blockContent from '@/sanity/schemas/objects/blockContent'
import page from '@/sanity/schemas/documents/page'



const title =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_TITLE ||
  'Next.js Personal Website with Sanity.io'

export default defineConfig({
  basePath: studioUrl,
  projectId: projectId || '',
  dataset: dataset || '',
  title,
  schema: {
    
    // If you want more content types, you can add them to this array
    types: [
      // Singletons
     
      post,
      blogCategory,
      author,
      page,
      youtubeVideo,
      youtubeVideoCategory,
      job,
      //
      // Objects
      
      seo,
      blockContent,
    ]
  },
  plugins: [
    structureTool({
      structure: pageStructure(),
    }),
    presentationTool({
      resolve,
      previewUrl: {
        previewMode: {
          enable: '/api/draft-mode/enable',
        },
      },
    }),
    // Configures the global "new document" button, and document actions, to suit the Settings document singleton
    //singletonPlugin([home.name]),
    // Add an image asset source for Unsplash

    // Vision lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
    
  ],
})
