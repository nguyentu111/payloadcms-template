import { Block } from 'payload'
import { styleTab } from '../shared/style-tab'

export const Text: Block = {
  slug: 'text',
  interfaceName: 'TextBlock',
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          name: 'content',
          fields: [
            {
              name: 'text',
              type: 'text',
            },
          ],
        },
        styleTab,
      ],
    },
  ],
}
