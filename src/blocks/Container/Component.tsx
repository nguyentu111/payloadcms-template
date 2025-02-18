import React from 'react'
import { cn } from '@/utilities/ui'
import type { Page, Post, RowBlockType } from '@/payload-types'
import { RenderBlocks } from '@/blocks/RenderBlocks'
import { WrapperStyles } from '@/components/WrapperStyles'

type Props = RowBlockType & {
  doc?: Page | Post
}
export const ContainerBlock: React.FC<Props> = ({ doc, content: { blocks }, styles }) => {
  return (
    <WrapperStyles styles={styles}>
      <RenderBlocks blocks={blocks} doc={doc} />
    </WrapperStyles>
  )
}
