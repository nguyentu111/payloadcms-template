import type { Block } from 'payload'

import { styleTab } from '../shared/style-tab'
export const Archive: Block = {
  slug: 'archive',
  interfaceName: 'ArchiveBlock',
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          name: 'content',
          fields: [
            {
              name: 'introContent',
              type: 'richText',
              label: 'Intro Content',
            },
            {
              name: 'populateBy',
              type: 'select',
              defaultValue: 'collection',
              options: [
                {
                  label: 'Collection',
                  value: 'collection',
                },
                {
                  label: 'Individual Selection',
                  value: 'selection',
                },
              ],
            },
            {
              name: 'relationTo',
              type: 'select',
              admin: {
                condition: (_, siblingData) => siblingData.populateBy === 'collection',
              },
              defaultValue: 'posts',
              label: 'Collections To Show',
              options: [
                {
                  label: 'Posts',
                  value: 'posts',
                },
              ],
            },
            {
              name: 'categories',
              type: 'relationship',
              admin: {
                condition: (_, siblingData) => siblingData.populateBy === 'collection',
              },
              hasMany: true,
              label: 'Categories To Show',
              relationTo: 'categories',
            },
            {
              name: 'limit',
              type: 'number',
              admin: {
                condition: (_, siblingData) => siblingData.populateBy === 'collection',
                step: 1,
              },
              defaultValue: 10,
              label: 'Limit',
            },
            {
              name: 'selectedDocs',
              type: 'relationship',
              admin: {
                condition: (_, siblingData) => siblingData.populateBy === 'selection',
              },
              hasMany: true,
              label: 'Selection',
              relationTo: ['posts'],
            },
          ],
        },
        styleTab,
      ],
    },
  ],
  labels: {
    plural: 'Archives',
    singular: 'Archive',
  },
}
