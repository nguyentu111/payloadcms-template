import { Block } from 'payload'
import { styleTab } from '../shared/style-tab'

export const Template: Block = {
  slug: 'template',
  interfaceName: 'TemplateBlock',
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          name: 'content',
          fields: [
            {
              name: 'template',
              type: 'relationship',
              relationTo: 'templates',
            },
          ],
        },
        styleTab,
      ],
    },
  ],
}
