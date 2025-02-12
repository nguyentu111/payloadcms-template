import { Block } from 'payload'
import { styleTab } from '../shared/style-tab'

export const PostTitle: Block = {
  slug: 'postTitle',
  interfaceName: 'PostTitleBlock',
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          name: 'content',
          fields: [],
        },
        styleTab,
      ],
    },
  ],
}
