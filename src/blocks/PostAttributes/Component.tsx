import RichText from '@/components/RichText'
import { WrapperStyles } from '@/components/WrapperStyles'
import { Page, Post, PostAttributesBlock as PostAttributesBlockProps } from '@/payload-types'
import { formattedDateFromString } from '@/utilities/formatDate'
import React from 'react'

type Props = PostAttributesBlockProps & {
  doc?: Post | Page
}
export function PostAttributesBlock({ doc, styles, content }: Props) {
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
      case 'title':
        return <h1>{doc.title}</h1>
      case 'content':
        return <RichText enableGutter={false} data={doc.content} />
      default:
        return null
    }
  }
  return <WrapperStyles styles={styles}>{renderAttribute(content.attribute)}</WrapperStyles>
}
const docIsPost = (doc: Post | Page | undefined): doc is Post => !!doc && 'slug' in doc
