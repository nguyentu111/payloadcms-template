import { clientBlocks, serverBlocks } from '@/blocks'
import { RecursiveContainer } from '@/blocks/Container/config'
import { CollectionConfig } from 'payload'
import { revalidateDelete, revalidateSinglePage } from './hook/revalidateSinglePage'
export const SinglePage: CollectionConfig = {
  slug: 'single-pages',
  access: {
    read: () => true,
  },
  defaultPopulate: {
    blocks: true,
  },
  hooks: {
    afterChange: [revalidateSinglePage],
    afterDelete: [revalidateDelete],
  },
  fields: [
    {
      name: 'postTypes',
      type: 'select',
      hasMany: true,
      options: [
        {
          label: 'Posts',
          value: 'posts',
        },
      ],
    },
    {
      name: 'blocks',
      type: 'blocks',
      required: true,
      blocks: [...clientBlocks, ...serverBlocks, RecursiveContainer(10, 0)],
    },
  ],
}
