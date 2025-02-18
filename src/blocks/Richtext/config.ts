import type { Block } from 'payload'
import { styleTab } from '../shared/style-tab'

export const RichText: Block = {
  slug: 'richText',
  interfaceName: 'RichTextBlock',

  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          name: 'content',
          fields: [
            {
              type: 'row',
              fields: [
                {
                  name: 'enableProse',
                  type: 'checkbox',
                },
                {
                  name: 'enableGutter',
                  type: 'checkbox',
                },
              ],
            },
            {
              name: 'richText',
              type: 'richText',
              label: false,
              required: true,
            },
          ],
        },
        styleTab,
      ],
    },
  ],
}
