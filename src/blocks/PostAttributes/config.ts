import { Block } from 'payload'
import { styleTab } from '../shared/style-tab'

export const PostAttributes: Block = {
  slug: 'postAttributes',
  interfaceName: 'PostAttributesBlock',
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          name: 'content',
          fields: [
            {
              name: 'attribute',
              type: 'select',
              hasMany: true,
              options: [
                { label: 'Published At', value: 'publishedAt' },
                { label: 'Author', value: 'author' },
                { label: 'Categories', value: 'categories' },
                { label: 'Status', value: '_status' },
                { label: 'Post type', value: 'postType' },
              ],
            },
            {
              name: 'repeater',
              type: 'relationship',
              relationTo: 'repeaters',
              admin: {
                components: {
                  afterInput: ['@/fields/repeater/RepeaterComponent.tsx'],
                },
              },
            },
          ],
        },
        styleTab,
      ],
    },
  ],
}
