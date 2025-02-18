import type { Block } from 'payload'
import { styleTab } from '../shared/style-tab'

export const MediaBlock: Block = {
  slug: 'mediaBlock',
  interfaceName: 'MediaBlock',
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          name: 'content',
          fields: [
            {
              name: 'media',
              type: 'upload',
              relationTo: 'media',
              required: true,
            },
          ],
        },
        styleTab,
      ],
    },
  ],
}
