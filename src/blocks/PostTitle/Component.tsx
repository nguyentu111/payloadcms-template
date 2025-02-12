import { WrapperStyles } from '@/components/WrapperStyles'
import { Page, Post, PostTitleBlock as PostTitleBlockProps } from '@/payload-types'
import React from 'react'

type Props = PostTitleBlockProps & {
  doc?: Post | Page
}
export function PostTitleBlock({ doc, styles }: Props) {
  const title = doc?.title
  if (!title) return null
  return (
    <WrapperStyles styles={styles}>
      <h1> {title}</h1>
    </WrapperStyles>
  )
}
