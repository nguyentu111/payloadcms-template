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
              required: true,
              options: [
                { label: 'Title', value: 'title' },
                { label: 'Published At', value: 'publishedAt' },
                { label: 'Author', value: 'populatedAuthors' },
                { label: 'Content', value: 'content' },
              ],
            },
          ],
        },
        styleTab,
      ],
    },
  ],
}
