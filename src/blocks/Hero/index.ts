import { link } from '@/fields/link'
import { Block } from 'payload'
import { styleTab } from '../shared/style-tab'

export const Hero: Block = {
  slug: 'hero',
  interfaceName: 'HeroBlock',
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          name: 'content',
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
        },
        styleTab,
      ],
    },
  ],
}
