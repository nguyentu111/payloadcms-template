'use client'

import React from 'react'
import { cn } from '@/utilities/ui'
import type { LayoutBlock as LayoutBlockType } from '@/payload-types'
import { RenderBlocks } from '@/blocks/RenderBlocks'

export const LayoutBlock: React.FC<LayoutBlock> = ({
  layoutType,
  gridOptions,
  flexOptions,
  blocks,
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
    <div className="container my-8">
      <div
        className={cn({
          ...(layoutType === 'grid' ? gridClasses : {}),
          ...(layoutType === 'flex' ? flexClasses : {}),
        })}
      >
        {blocks?.map((block, i) => (
          <div key={i} className="w-full">
            <RenderBlocks blocks={[block]} />
          </div>
        ))}
      </div>
    </div>
  )
}
