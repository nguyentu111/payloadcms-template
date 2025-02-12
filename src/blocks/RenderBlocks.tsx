import React, { Fragment } from 'react'

import type { Page, Post, SinglePage } from '@/payload-types'

import { ArchiveBlock } from '@/blocks/ArchiveBlock/Component'
import { CallToActionBlock } from '@/blocks/CallToAction/Component'
import { ContentBlock } from '@/blocks/Content/Component'
import { FormBlock } from '@/blocks/Form/Component'
import { MediaBlock } from '@/blocks/MediaBlock/Component'
import { RichTextBlock } from './Richtext/Component'
import { BreadcrumbBlock } from './BreadCrumb/Component'
import { HeroBlock } from './Hero/Component'
import { ArchiveCarouselBlock } from './ArchirveCarousel/Component'
import { BannerBlock } from './Banner/Component'
import { Archive } from './ArchiveBlock/config'
import { Content } from './Content/config'
import { CodeBlock } from './Code/Component'
import { PostTitleBlock } from './PostTitle/Component'
import { PostContentBlock } from './PostContent/Component'
import { LayoutBlock } from './Layout/Component'
// import {ArchiveBlock as AB, ArchiveCarouselBlock as , } fxrom './ArchirveCarousel/Component'
const blockComponents = {
  [Archive.slug]: ArchiveBlock,
  archiveCarousel: ArchiveCarouselBlock,
  banner: BannerBlock,
  breadCrumb: BreadcrumbBlock,
  code: CodeBlock,
  [Content.slug]: ContentBlock,
  cta: CallToActionBlock,
  postTitle: PostTitleBlock,
  postContent: PostContentBlock,
  mediaBlock: MediaBlock,
  formBlock: FormBlock,
  richText: RichTextBlock,
  hero: HeroBlock,
  row: LayoutBlock,
}

export const RenderBlocks: React.FC<{
  blocks: SinglePage['blocks']
  doc?: Page | Post
}> = (props) => {
  const { blocks, doc } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType]

            if (Block) {
              return (
                <div key={index}>
                  {/* ts-expect-error there may be some mismatch between the expected types here */}
                  <Block {...block} disableInnerContainer doc={doc} />
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
