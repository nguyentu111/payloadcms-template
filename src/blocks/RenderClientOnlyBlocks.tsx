import React, { Fragment } from 'react'

import type {
  BannerBlock as BannerBlockType,
  CallToActionBlock as CallToActionBlockType,
  ContentBlock as ContentBlockType,
  FormBlock as FormBlockType,
  MediaBlock as MediaBlockType,
  Page,
  RichTextBlock as RichTextBlockType,
} from '@/payload-types'

import { CallToActionBlock } from '@/blocks/CallToAction/Component'
import { ContentBlock } from '@/blocks/Content/Component'
import { FormBlock } from '@/blocks/Form/Component'
import { MediaBlock } from '@/blocks/MediaBlock/Component'
import { BannerBlock } from './Banner/Component'
import { RichTextBlock } from './Richtext/Component'

const clientOnlyBlocks = {
  content: ContentBlock,
  cta: CallToActionBlock,
  formBlock: FormBlock,
  mediaBlock: MediaBlock,
  banner: BannerBlock,
  richText: RichTextBlock,
}
export type ClientOnlyBlock =
  | ContentBlockType
  | CallToActionBlockType
  | FormBlockType
  | MediaBlockType
  | BannerBlockType
  | RichTextBlockType
export const RenderClientOnlyBlocks: React.FC<{
  blocks: ClientOnlyBlock[]
}> = (props) => {
  const { blocks } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType } = block

          if (blockType && blockType in clientOnlyBlocks) {
            const Block = clientOnlyBlocks[blockType]

            if (Block) {
              return (
                <div className="" key={index}>
                  {/* @ts-expect-error there may be some mismatch between the expected types here */}
                  <Block {...block} disableInnerContainer />
                </div>
              )
            }
          }
          return null
        })}
      </Fragment>
    )
  }

  return null
}
