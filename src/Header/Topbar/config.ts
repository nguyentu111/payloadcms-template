import { link } from '@/fields/link'
import type { Block, Field, Tab } from 'payload'

export const Topbar: Tab = {
  name: 'topBar',
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'officeLocation',
          type: 'text',
          required: true,
          admin: {
            placeholder: 'Enter office location',
          },
        },
        {
          name: 'phone',
          type: 'text',
          required: true,
          admin: {
            placeholder: 'Enter phone number',
          },
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'hotline',
          type: 'text',
          required: true,
          admin: {
            placeholder: 'Enter hotline number',
          },
        },
        {
          name: 'email',
          type: 'text',
          required: true,
          admin: {
            placeholder: 'Enter email address',
          },
        },
      ],
    },

    link({ overrides: { name: 'suportLink' } }),
  ],

  admin: {
    condition: (_, siblingData) => {
      return siblingData.show
    },
  },
}
