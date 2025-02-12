import { Block } from 'payload'
import { styleTab } from '../shared/style-tab'

export const PostContent: Block = {
  slug: 'postContent',
  interfaceName: 'PostContentBlock',
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
