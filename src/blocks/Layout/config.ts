import type { Block } from 'payload'
import { Banner } from '../Banner/config'
import { BreadCrumb } from '../BreadCrumb/config'
import { CallToAction } from '../CallToAction/config'
import { Code } from '../Code/config'
import { Content } from '../Content/config'
import { FormBlock } from '../Form/config'
import { Hero } from '../Hero'
import { MediaBlock } from '../MediaBlock/config'
import { PostContent } from '../PostContent/config'
import { PostTitle } from '../PostTitle/config'
import { Richtext } from '../Richtext/config'
import { styleTab } from '../shared/style-tab'
export const Layout: Block = {
  slug: 'row',
  interfaceName: 'rowBlockType',
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          name: 'content',
          fields: [
            {
              name: 'layoutType',
              type: 'radio',
              required: true,
              defaultValue: 'grid',
              options: [
                {
                  label: 'Grid Layout',
                  value: 'grid',
                },
                {
                  label: 'Flex Layout',
                  value: 'flex',
                },
              ],
            },
            // Grid specific options
            {
              name: 'gridOptions',
              type: 'group',
              admin: {
                condition: (_, { layoutType }) => layoutType === 'grid',
              },
              fields: [
                {
                  type: 'row',
                  fields: [
                    {
                      name: 'columns',
                      type: 'select',
                      defaultValue: '3',
                      options: [
                        { label: '2 Columns', value: '2' },
                        { label: '3 Columns', value: '3' },
                        { label: '4 Columns', value: '4' },
                        { label: '6 Columns', value: '6' },
                      ],
                    },
                    {
                      name: 'gap',
                      type: 'select',
                      defaultValue: '4',
                      options: [
                        { label: 'Small (8px)', value: '2' },
                        { label: 'Medium (16px)', value: '4' },
                        { label: 'Large (24px)', value: '6' },
                        { label: 'Extra Large (32px)', value: '8' },
                      ],
                    },
                    {
                      name: 'rowGap',
                      type: 'select',
                      defaultValue: '4',
                      options: [
                        { label: 'Small (8px)', value: '2' },
                        { label: 'Medium (16px)', value: '4' },
                        { label: 'Large (24px)', value: '6' },
                        { label: 'Extra Large (32px)', value: '8' },
                      ],
                    },
                  ],
                },
              ],
            },
            // Flex specific options
            {
              name: 'flexOptions',
              type: 'group',
              admin: {
                condition: (_, { layoutType }) => layoutType === 'flex',
              },
              fields: [
                {
                  type: 'row',
                  fields: [
                    {
                      name: 'direction',
                      type: 'select',
                      defaultValue: 'row',
                      options: [
                        { label: 'Row', value: 'row' },
                        { label: 'Column', value: 'column' },
                      ],
                    },
                    {
                      name: 'justifyContent',
                      type: 'select',
                      defaultValue: 'start',
                      options: [
                        { label: 'Start', value: 'start' },
                        { label: 'Center', value: 'center' },
                        { label: 'End', value: 'end' },
                        { label: 'Space Between', value: 'between' },
                        { label: 'Space Around', value: 'around' },
                      ],
                    },
                    {
                      name: 'alignItems',
                      type: 'select',
                      defaultValue: 'start',
                      options: [
                        { label: 'Start', value: 'start' },
                        { label: 'Center', value: 'center' },
                        { label: 'End', value: 'end' },
                        { label: 'Stretch', value: 'stretch' },
                      ],
                    },
                    {
                      name: 'gap',
                      type: 'select',
                      defaultValue: '4',
                      options: [
                        { label: 'Small (8px)', value: '2' },
                        { label: 'Medium (16px)', value: '4' },
                        { label: 'Large (24px)', value: '6' },
                        { label: 'Extra Large (32px)', value: '8' },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              name: 'blocks',
              type: 'blocks',
              required: true,
              blocks: [
                Banner,
                BreadCrumb,
                CallToAction,
                Code,
                Content,
                FormBlock,
                Hero,
                MediaBlock,
                Richtext,
                PostTitle,
                PostContent,
              ],
            },
          ],
        },
        styleTab,
      ],
    },
  ],
}
