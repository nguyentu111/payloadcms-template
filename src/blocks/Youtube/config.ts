import type { Block } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

export const Row: Block = {
  slug: 'youtube',
  interfaceName: 'youtubeType',
  fields: [
    {
      name: 'videoLink',
      type: 'text',
      required: true,
    },
  ],
}
