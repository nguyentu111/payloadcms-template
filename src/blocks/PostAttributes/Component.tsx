import { WrapperStyles } from '@/components/WrapperStyles'
import { Page, Post, PostAttributesBlock as PostAttributesBlockProps } from '@/payload-types'
import { formattedDateFromString } from '@/utilities/formatDate'
import React from 'react'

type Props = PostAttributesBlockProps & {
  doc?: Post | Page
}
export function PostAttributesBlock({ doc, styles, content }: Props) {
  console.log({ content })
  if (!docIsPost(doc)) return null
  const renderAttribute = (attribute: string) => {
    switch (attribute) {
      case 'publishedAt':
        if (!doc.publishedAt) return null
        return <span> {formattedDateFromString(doc.publishedAt)}</span>
      case 'authors':
        return <span> {doc.populatedAuthors?.map((author) => author.name).join(', ')}</span>
      case 'categories':
        return (
          <span>
            {' '}
            {doc.categories
              ?.map((category) => (typeof category !== 'string' ? category.title : ''))
              .join(', ')}
          </span>
        )
      case 'postType':
        if (!doc.postType || typeof doc.postType !== 'object') return null
        return <span> {doc.postType.title}</span>
      default:
        return null
    }
  }
  return (
    <WrapperStyles styles={styles}>
      {content?.attribute?.map((attribute: string) => renderAttribute(attribute))}
    </WrapperStyles>
  )
}
const docIsPost = (doc: Post | Page | undefined): doc is Post => !!doc && 'slug' in doc
