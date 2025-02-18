import React, { Fragment } from 'react'

import type { Page, Post, SinglePage } from '@/payload-types'

import { ArchiveBlock } from '@/blocks/ArchiveBlock/Component'
import { CallToActionBlock } from '@/blocks/CallToAction/Component'
import { FormBlock } from '@/blocks/Form/Component'
import { MediaBlock } from '@/blocks/MediaBlock/Component'
import { RichTextBlock } from './Richtext/Component'
import { BreadcrumbBlock } from './BreadCrumb/Component'
import { HeroBlock } from './Hero/Component'
import { ArchiveCarouselBlock } from './ArchirveCarousel/Component'
import { BannerBlock } from './Banner/Component'

import { CodeBlock } from './Code/Component'
import { ContainerBlock } from './Container/Component'
import { PostAttributesBlock } from './PostAttributes/Component'
import { TemplateBlock } from './Template/Component'
import { LinkBlock } from './Link/Component'
import { TextBlock } from './Text/Component'
import { getCachedGlobal } from '@/utilities/getGlobals'
import { DataFromGlobalSlug } from 'payload'
// import {ArchiveBlock as AB, ArchiveCarouselBlock as , } fxrom './ArchirveCarousel/Component'
const blockComponents = {
  archive: ArchiveBlock,
  archiveCarousel: ArchiveCarouselBlock,
  banner: BannerBlock,
  breadCrumb: BreadcrumbBlock,
  code: CodeBlock,
  cta: CallToActionBlock,
  mediaBlock: MediaBlock,
  formBlock: FormBlock,
  richText: RichTextBlock,
  hero: HeroBlock,
  container: ContainerBlock,
  postAttributes: PostAttributesBlock,
  template: TemplateBlock,
  link: LinkBlock,
  text: TextBlock,
}

export const RenderBlocks: React.FC<{
  blocks?: SinglePage['blocks'] | null
  doc?: Page | Post
}> = async (props) => {
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
                <React.Fragment key={index}>
                  {/* @ts-expect-error there may be some mismatch between the expected types here */}
                  <Block {...block} disableInnerContainer doc={doc} renderer={RenderBlocks} />
                </React.Fragment>
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
