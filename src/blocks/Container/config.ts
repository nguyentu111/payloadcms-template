import type { Block } from 'payload'
import { Banner } from '../Banner/config'
import { BreadCrumb } from '../BreadCrumb/config'
import { CallToAction } from '../CallToAction/config'
import { Code } from '../Code/config'
import { FormBlock } from '../Form/config'
import { Hero } from '../Hero'
import { MediaBlock } from '../MediaBlock/config'
import { RichText } from '../Richtext/config'
import { styleTab } from '../shared/style-tab'
import { PostAttributes } from '../PostAttributes/config'
import { Text } from '../Text/config'
import { Link } from '../Link/config'
import { ArchiveCarousel } from '@/blocks/ArchirveCarousel/config'
import { Archive } from '@/blocks/ArchiveBlock/config'
const defaultBlocks = [
  Banner,
  BreadCrumb,
  CallToAction,
  Code,
  FormBlock,
  Hero,
  MediaBlock,
  RichText,
  PostAttributes,
  Text,
  Link,
  ArchiveCarousel,
  Archive,
]
export const RecursiveContainer = (maxDepth = 3, current = 0): Block => {
  if (current >= maxDepth) {
    return {
      slug: 'container',
      interfaceName: 'rowBlockType',
      fields: [
        {
          type: 'tabs',
          tabs: [
            {
              name: 'content',
              fields: [
                {
                  name: 'blocks',
                  type: 'blocks',
                  required: true,
                  blocks: [...defaultBlocks],
                },
              ],
            },
            styleTab,
          ],
        },
      ],
    }
  }

  return {
    slug: 'container',
    interfaceName: 'rowBlockType',
    fields: [
      {
        type: 'tabs',
        tabs: [
          {
            name: 'content',
            fields: [
              {
                name: 'blocks',
                type: 'blocks',
                required: true,
                blocks: [...defaultBlocks, RecursiveContainer(maxDepth, current + 1)],
              },
            ],
          },
          styleTab,
        ],
      },
    ],
  }
}
