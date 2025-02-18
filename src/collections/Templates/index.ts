import { clientBlocks, serverBlocks } from '@/blocks'
import { RecursiveContainer } from '@/blocks/Container/config'
import { slugField } from '@/fields/slug'
import { generateNonPostTypePreviewPath } from '@/utilities/generatePreviewPath'
import type { CollectionConfig } from 'payload'
export const Templates: CollectionConfig = {
  slug: 'templates',
  admin: {
    useAsTitle: 'name',
    livePreview: {
      url: ({ data, req }) => {
        const path = generateNonPostTypePreviewPath({
          slug: typeof data?.slug === 'string' ? data.slug : '',
          collection: 'templates',
          req,
        })

        return path
      },
    },
    preview: (data, { req }) =>
      generateNonPostTypePreviewPath({
        slug: typeof data?.slug === 'string' ? data.slug : '',
        collection: 'templates',
        req,
      }),
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'blocks',
      type: 'blocks',
      blocks: [...clientBlocks, ...serverBlocks, RecursiveContainer(10, 0)],
    },
    ...slugField('name'),
  ],
  versions: {
    drafts: {
      autosave: {
        interval: 100, // We set this interval for optimal live preview
      },
      schedulePublish: true,
    },
    maxPerDoc: 50,
  },
}
