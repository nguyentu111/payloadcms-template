import { Field } from 'payload'
import { link } from '../link'
import { Content } from '@/blocks/Content/config'
import { MediaBlock } from '@/blocks/MediaBlock/config'
import { Banner } from '@/blocks/Banner/config'
import { Richtext } from '@/blocks/Richtext/config'

export const navItems = (): Field => {
  return {
    name: 'navItems',
    type: 'array',
    fields: [
      link({}),
      {
        name: 'addMenu',
        type: 'checkbox',
        label: 'Add menu',
      },
      {
        name: 'anchoringToHeader',
        type: 'checkbox',
        label: 'Anchoring to header',
        admin: {
          condition: (_, siblingData) => {
            return siblingData.addMenu
          },
        },
      },
      {
        name: 'menu',
        type: 'blocks',
        blocks: [Content, MediaBlock, Banner, Richtext],
        admin: {
          condition: (_, siblingData) => {
            return siblingData.addMenu
          },
        },
      },
    ],
    admin: {
      components: {
        RowLabel: '@/Header/RowLabel#RowLabel',
      },
    },
  }
}
