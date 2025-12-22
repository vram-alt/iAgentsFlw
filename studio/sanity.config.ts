import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'
import './studio.css'

export default defineConfig({
  name: 'default',
  title: 'iComply CMS',
  
  projectId: 'et4gt387',
  dataset: 'production',
  
  basePath: '/studio',
  
  plugins: [deskTool(), visionTool()],
  
  schema: {
    types: schemaTypes,
  },
})


