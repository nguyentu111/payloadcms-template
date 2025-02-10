import { DecoratorBlockNode } from '@lexical/react/LexicalDecoratorBlockNode'
import { createServerFeature, NodeWithHooks } from '@payloadcms/richtext-lexical'
import { YouTubeNode } from '../nodes/YoutubeNode'
import { VimeoNode } from '../nodes/VimeoNode'
export const createEmbedServerFeature = ({
  key,
  ClientFeature,
  node,
}: {
  key: string
  ClientFeature: string
  node: NodeWithHooks<YouTubeNode | VimeoNode>
}) =>
  createServerFeature({
    feature() {
      return {
        ClientFeature,
        generateSchemaMap: () => {
          const map = new Map()

          map.set(key, {
            fields: [
              {
                name: 'id',
                type: 'text',
                label: 'Embed ID',
                required: true,
              },
            ],
          })

          return map
        },
        nodes: [node],
      }
    },
    key,
  })
