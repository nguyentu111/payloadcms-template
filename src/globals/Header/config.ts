import type { Field, GlobalConfig, Tab } from 'payload'

import { revalidateHeader } from './hooks/revalidateHeader'
import { Topbar } from './Topbar/config'
import { appearanceOptions } from '@/fields/link'
import deepMerge from '@/utilities/deepMerge'
import { clientBlocks, serverBlocks } from '@/blocks'
import { styleTab } from '@/blocks/shared/style-tab'
import { RecursiveContainer } from '@/blocks/Container/config'
import { generateNonPostTypePreviewPath } from '@/utilities/generatePreviewPath'
export const link = ({ disableLabel = false, overrides = {} } = {}) => {
  const linkResult: Tab = {
    name: 'link',
    fields: [
      {
        type: 'row',
        fields: [
          {
            name: 'type',
            type: 'radio',
            admin: {
              layout: 'horizontal',
              width: '50%',
            },
            defaultValue: 'reference',
            options: [
              {
                label: 'Internal link',
                value: 'reference',
              },
              {
                label: 'Custom URL',
                value: 'custom',
              },
            ],
          },
          {
            name: 'newTab',
            type: 'checkbox',
            admin: {
              style: {
                alignSelf: 'flex-end',
              },
              width: '50%',
            },
            label: 'Open in new tab',
          },
        ],
      },
    ],
  }

  const linkTypes: Field[] = [
    {
      name: 'reference',
      type: 'relationship',
      admin: {
        condition: (_, siblingData) => siblingData?.type === 'reference',
      },
      label: 'Document to link to',
      relationTo: ['pages', 'posts'],
      required: true,
    },
    {
      name: 'url',
      type: 'text',
      admin: {
        condition: (_, siblingData) => siblingData?.type === 'custom',
      },
      label: 'Custom URL',
      required: true,
    },
  ]

  if (!disableLabel) {
    linkTypes.map((linkType) => ({
      ...linkType,
      admin: {
        ...linkType.admin,
        width: '50%',
      },
    }))

    linkResult.fields.push({
      type: 'row',
      fields: [
        ...linkTypes,
        {
          name: 'label',
          type: 'text',
          admin: {
            width: '50%',
          },
          label: 'Label',
          required: true,
        },
      ],
    })
  } else {
    linkResult.fields = [...linkResult.fields, ...linkTypes]
  }

  // let appearanceOptionsToUse = [appearanceOptions.default, appearanceOptions.outline]

  // if (appearances) {
  //   appearanceOptionsToUse = appearances.map((appearance) => appearanceOptions[appearance])
  // }

  linkResult.fields.push({
    name: 'appearance',
    type: 'select',
    admin: {
      description: 'Choose how the link should be rendered.',
    },
    defaultValue: 'default',
    options: Object.values(appearanceOptions),
  })

  return deepMerge(linkResult, overrides)
}
const NavItems: Tab = {
  name: 'navItems',

  fields: [
    {
      name: 'items',
      type: 'array',
      fields: [
        {
          type: 'tabs',
          tabs: [
            link(),
            {
              name: 'menu',
              fields: [
                {
                  name: 'anchoringToHeader',
                  type: 'checkbox',
                  label: 'Anchoring to header',
                },
                {
                  name: 'blocks',
                  type: 'blocks',
                  blocks: [...clientBlocks, RecursiveContainer(10)],
                },
              ],
            },
            styleTab,
          ],
        },
      ],
    },
  ],
}

export const Header: GlobalConfig = {
  slug: 'header',
  access: {
    read: () => true,
  },
  admin: {
    livePreview: {
      url: ({ data, req }) => {
        const path = generateNonPostTypePreviewPath({
          slug: 'header',
          req,
        })

        return path
      },
    },
    preview: (data, { req }) =>
      generateNonPostTypePreviewPath({
        slug: 'header',
        req,
      }),
  },
  fields: [
    {
      type: 'tabs',
      tabs: [Topbar, NavItems, styleTab],
    },
  ],
  hooks: {
    afterChange: [revalidateHeader],
  },
  versions: {
    drafts: {
      autosave: {
        interval: 100, // We set this interval for optimal live preview
      },
      schedulePublish: true,
    },
  },
}
