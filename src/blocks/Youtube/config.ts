import type { Block } from 'payload'
import { styleTab } from '../shared/style-tab'

export const Row: Block = {
  slug: 'youtube',
  interfaceName: 'youtubeBlock',
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          name: 'content',
          fields: [
            {
              name: 'videoLink',
              type: 'text',
              required: true,
            },
          ],
        },
        styleTab,
      ],
    },
  ],
}
