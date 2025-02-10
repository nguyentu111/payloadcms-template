import React from 'react'

import { ArchiveCarouselBlock as ArchiveCarouselBlockProps, Post } from '@/payload-types'
import { getPayload } from 'payload'
import RichText from '@/components/RichText'
import configPromise from '@payload-config'
import { CollectionArchiveCarousel } from '@/components/CollectionArchiveCarousel'

export const ArchiveCarouselBlock = async (props: ArchiveCarouselBlockProps) => {
  const {
    id,
    categories,
    introContent,
    limit: limitFromProps,
    populateBy,
    selectedDocs,
    slidePerViewport,
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
    <div className="relative w-full container my-16">
      {introContent && (
        <div className=" mb-16 w-full">
          <RichText className="max-w-[48rem] prose-xs" data={introContent} enableGutter={false} />
        </div>
      )}
      <CollectionArchiveCarousel posts={posts} slidePerViewport={slidePerViewport} />
    </div>
  )
}
