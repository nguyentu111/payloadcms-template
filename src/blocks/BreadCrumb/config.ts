import { Block } from 'payload'
import { styleTab } from '../shared/style-tab'

export const BreadCrumb: Block = {
  slug: 'breadCrumb',
  interfaceName: 'BreadCrumbBlock',
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
