import { link } from '@/fields/link'
import { Block } from 'payload'

export const Hero: Block = {
  slug: 'hero',
  interfaceName: 'HeroBlock',
  fields: [
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },

    {
      name: 'content',
      type: 'richText',
    },
    link({}),
  ],
}
