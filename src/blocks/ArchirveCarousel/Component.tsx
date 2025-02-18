import React from 'react'

import { ArchiveCarouselBlock as ArchiveCarouselBlockProps, Page, Post } from '@/payload-types'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { CollectionArchiveCarousel } from '@/components/CollectionArchiveCarousel'
import { WrapperStyles } from '@/components/WrapperStyles'
import RichText from '@/components/RichText'

export const ArchiveCarouselBlock = async (
  props: ArchiveCarouselBlockProps & { doc: Page | Post },
) => {
  const {
    id,
    content: {
      categories,
      introContent,
      limit: limitFromProps,
      populateBy,
      selectedDocs,
      slidePerViewport,
    },
    styles,
    doc,
  } = props

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

      <CollectionArchiveCarousel posts={posts} slidePerViewport={slidePerViewport} />
    </WrapperStyles>
  )
}
