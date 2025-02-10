import { Block } from 'payload'

export const BreadCrumb: Block = {
  slug: 'breadCrumb',
  interfaceName: 'BreadCrumbBlock',
  fields: [
    {
      name: 'haveContainer',
      type: 'checkbox',
    },
  ],
}
