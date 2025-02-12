import React from 'react'
import { cn } from '@/utilities/ui'
import type { Page, Post, RowBlockType } from '@/payload-types'
import { RenderBlocks } from '@/blocks/RenderBlocks'
import { WrapperStyles } from '@/components/WrapperStyles'

type Props = RowBlockType & {
  doc?: Page | Post
}
export const LayoutBlock: React.FC<Props> = ({
  doc,
  content: { layoutType, gridOptions, flexOptions, blocks },
  styles,
}) => {
  const gridClasses = gridOptions && {
    'grid gap-x-2 gap-y-2': true,
    [`grid-cols-${gridOptions.columns}`]: true,
    [`gap-x-${gridOptions.gap}`]: true,
    [`gap-y-${gridOptions.rowGap}`]: true,
  }

  const flexClasses = flexOptions && {
    flex: true,
    'flex-row': flexOptions.direction === 'row',
    'flex-col': flexOptions.direction === 'column',
    'justify-start': flexOptions.justifyContent === 'start',
    'justify-center': flexOptions.justifyContent === 'center',
    'justify-end': flexOptions.justifyContent === 'end',
    'justify-between': flexOptions.justifyContent === 'between',
    'justify-around': flexOptions.justifyContent === 'around',
    'items-start': flexOptions.alignItems === 'start',
    'items-center': flexOptions.alignItems === 'center',
    'items-end': flexOptions.alignItems === 'end',
    'items-stretch': flexOptions.alignItems === 'stretch',
    [`gap-${flexOptions.gap}`]: true,
  }

  return (
    <WrapperStyles styles={styles}>
      <div
        className={cn({
          ...(layoutType === 'grid' ? gridClasses : {}),
          ...(layoutType === 'flex' ? flexClasses : {}),
        })}
      >
        <RenderBlocks blocks={blocks} doc={doc} />
      </div>
    </WrapperStyles>
  )
}
