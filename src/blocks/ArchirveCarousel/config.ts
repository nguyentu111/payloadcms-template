import type { Block } from 'payload'
import { styleTab } from '../shared/style-tab'
export const ArchiveCarousel: Block = {
  slug: 'archiveCarousel',
  interfaceName: 'ArchiveCarouselBlock',
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          name: 'content',
          fields: [
            {
              name: 'slidePerViewport',

              type: 'group',
              fields: [
                {
                  type: 'row',
                  required: true,
                  fields: [
                    {
                      name: 'mobile',
                      type: 'number',
                      defaultValue: 1,
                      required: true,
                      min: 1,
                      max: 6,
                    },
                    {
                      name: 'tablet',
                      type: 'number',
                      defaultValue: 1,
                      required: true,
                      min: 1,
                      max: 6,
                    },
                    {
                      name: 'pc',
                      type: 'number',
                      defaultValue: 1,
                      required: true,
                      min: 1,
                      max: 6,
                    },
                  ],
                },
              ],
            },
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
    plural: 'Archive Carousels',
    singular: 'Archive Carousel',
  },
}
