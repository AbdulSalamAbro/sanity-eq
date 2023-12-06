import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import { myStructure } from './deskStructure'

export default defineConfig({
  name: 'default',
  title: 'sanity-eq',

  projectId: 'dn5f7kgx',
  dataset: 'production',

  plugins: [ deskTool({
    structure: myStructure,
  }),, visionTool()],


  schema: {
    types: schemaTypes,
  },
})
