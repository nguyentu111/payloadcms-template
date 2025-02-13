import { CollectionConfig } from 'payload'

export const Repeaters: CollectionConfig = {
  slug: 'repeaters',
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'title',
  },
  defaultPopulate: {
    title: true,
    slug: true,
  },
  hooks: {},
  fields: [
    {
      name: 'title',
      type: 'text',
    },

    {
      name: 'fields',
      type: 'array',
      fields: [
        {
          name: 'type',
          type: 'select',
          options: [
            {
              label: 'Text',
              value: 'text',
            },
            {
              label: 'Image',
              value: 'image',
            },
          ],
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
  ],
}
