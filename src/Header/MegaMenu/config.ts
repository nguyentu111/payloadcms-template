import { link } from '@/fields/link'
import { linkGroup } from '@/fields/linkGroup'
import { relationshipFieldGroup } from '@/fields/relationshipFieldGroup'
import type { Field, Tab } from 'payload'

const LeftSideTab: Tab = {
  name: 'leftSidebar',
  fields: [
    {
      name: 'groups',
      type: 'array',
      fields: [
        {
          name: 'title',
          type: 'text',
        },
        linkGroup({}),
      ],
    },
  ],
}
export const MegaMenu: Field = {
  type: 'tabs',
  admin: {
    condition: (_, sibling) => sibling.addMenu,
  },
  tabs: [
    LeftSideTab,
    {
      name: 'main',
      fields: [
        {
          name: 'groups',
          type: 'array',
          fields: [
            {
              name: 'title',
              type: 'text',
            },
            {
              type: 'tabs',
              tabs: [
                { name: 'linkGroup', fields: [linkGroup()] },
                { name: 'posts', fields: [relationshipFieldGroup()] },
              ],
            },
          ],
        },
      ],
    },
  ],
}
