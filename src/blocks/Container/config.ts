import { Block } from 'payload'

export const Container: Block = {
  slug: 'container',
  interfaceName: 'ContainerBlock',
  fields: [
    {
      name: 'tyle',
      type: 'select',
      defaultValue: 'default',
      options: [
        {
          label: 'Container',
          value: 'container',
        },
        {
          label: 'Full width',
          value: 'fullWidth',
        },
        {
          label: 'Content',
          value: 'content',
        },
      ],
    },
    {
      name: 'blocks',
      type: 'blocks',
      blocks: [],
    },
  ],
}
