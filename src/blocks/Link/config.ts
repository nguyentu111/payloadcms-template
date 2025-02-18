import { link } from '@/fields/link'
import { Block, Tab } from 'payload'
import { styleTab } from '../shared/style-tab'

export const Link: Block = {
  slug: 'link',
  interfaceName: 'LinkBlock',
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          name: 'content',
          fields: [link()],
        },
        styleTab,
      ],
    },
  ],
}
