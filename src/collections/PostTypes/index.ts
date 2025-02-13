import { slugField } from '@/fields/slug'
import { CollectionConfig } from 'payload'

export const PostTypes: CollectionConfig<'post-types'> = {
  slug: 'post-types',
  admin: {
    useAsTitle: 'title',
  },
  defaultPopulate: {
    title: true,
    slug: true,
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    ...slugField('title', {
      slugOverrides: {
        required: true,
      },
    }),
  ],
}
