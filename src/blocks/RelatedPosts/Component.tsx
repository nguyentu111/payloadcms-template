import clsx from 'clsx'
import React from 'react'
import RichText from '@/components/RichText'

import type { Post } from '@/payload-types'

import { Card } from '../../components/Card'
import { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'
import { WrapperStyles } from '@/components/WrapperStyles'

export type RelatedPostsProps = {
  className?: string
  docs?: Post[]
  introContent?: SerializedEditorState
  styles?: any
}

export const RelatedPosts: React.FC<RelatedPostsProps> = (props) => {
  const { className, docs, introContent, styles } = props

  return (
    <WrapperStyles styles={styles}>
      <div className={clsx('lg:container', className)}>
        {introContent && <RichText data={introContent} enableGutter={false} />}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-stretch">
          {docs?.map((doc, index) => {
            if (typeof doc === 'string') return null

            return <Card key={index} doc={doc} relationTo="posts" showCategories />
          })}
        </div>
      </div>
    </WrapperStyles>
  )
}
