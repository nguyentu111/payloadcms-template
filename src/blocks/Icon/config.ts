import { Block } from 'payload'
import { styleTab } from '../shared/style-tab'
import { icons } from 'lucide-react'

// Danh sách các icon từ lucide-react
const iconOptions = Object.keys(icons).map((key) => ({
  label: key,
  value: key,
}))

export const Icon: Block = {
  slug: 'icon',
  interfaceName: 'IconBlock',
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          name: 'content',
          fields: [
            {
              name: 'icon',
              type: 'select',
              required: true,
              options: iconOptions,
            },
            {
              name: 'size',
              type: 'number',
              required: true,
              defaultValue: 24,
              min: 12,
              max: 96,
            },
            {
              name: 'strokeWidth',
              type: 'number',
              required: true,
              defaultValue: 2,
              min: 0.5,
              max: 4,
              admin: {
                step: 0.1,
              },
            },
          ],
        },
        styleTab,
      ],
    },
  ],
}
