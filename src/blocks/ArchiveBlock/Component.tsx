import type { Post, ArchiveBlock as ArchiveBlockProps, Page } from '@/payload-types'

import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'

import { CollectionArchive } from '@/components/CollectionArchive'
import { WrapperStyles } from '@/components/WrapperStyles'
import RichText from '@/components/RichText'

export const ArchiveBlock: React.FC<
  ArchiveBlockProps & {
    id?: string
    doc: Page | Post
  }
> = async (props) => {
  const { content, styles, id, doc } = props
  const { categories, introContent, limit: limitFromProps, populateBy, selectedDocs } = content!
  const limit = limitFromProps || 3

  let posts: Post[] = []

  if (populateBy === 'collection') {
    const payload = await getPayload({ config: configPromise })

    const flattenedCategories = categories?.map((category) => {
      if (typeof category === 'object') return category.id
      else return category
    })

    const fetchedPosts = await payload.find({
      collection: 'posts',
      depth: 1,
      limit,
      ...(flattenedCategories && flattenedCategories.length > 0
        ? {
            where: {
              categories: {
                in: flattenedCategories,
              },
            },
          }
        : {}),
    })

    posts = fetchedPosts.docs
  } else {
    if (selectedDocs?.length) {
      const filteredSelectedPosts = selectedDocs.map((post) => {
        if (typeof post.value === 'object') return post.value
      }) as Post[]

      posts = filteredSelectedPosts
    }
  }

  return (
    <WrapperStyles styles={styles}>
      {introContent && (
        <RichText data={introContent} enableGutter={false} className="mb-8 lg:mb-16" />
      )}
      <CollectionArchive posts={posts} />
    </WrapperStyles>
  )
}
