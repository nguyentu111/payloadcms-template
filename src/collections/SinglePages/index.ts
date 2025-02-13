import { clientBlocks, serverBlocks } from '@/blocks'
import { CollectionConfig } from 'payload'
import { revalidateDelete, revalidateSinglePage } from './hook/revalidateSinglePage'

export const SinglePage: CollectionConfig = {
  slug: 'single-pages',
  access: {
    read: () => true,
  },
  defaultPopulate: {
    postTypes: true,
    blocks: true,
  },
  hooks: {
    afterChange: [revalidateSinglePage],
    afterDelete: [revalidateDelete],
  },
  fields: [
    {
      name: 'postTypes',
      type: 'relationship',
      relationTo: 'post-types',
      hasMany: true,
      required: true,
    },
    {
      name: 'blocks',
      type: 'blocks',
      required: true,
      blocks: [...clientBlocks, ...serverBlocks],
    },
  ],
}
