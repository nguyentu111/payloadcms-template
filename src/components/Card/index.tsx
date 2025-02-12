'use client'
import { cn } from '@/utilities/ui'
import useClickableCard from '@/utilities/useClickableCard'
import Link from 'next/link'
import React, { Fragment } from 'react'

import type { Page, Post } from '@/payload-types'

import { Media } from '@/components/Media'
import { formattedDateFromString } from '@/utilities/formatDate'
import { DotIcon } from 'lucide-react'

export type CardPostData = Pick<Post, 'slug' | 'categories' | 'meta' | 'title' | 'publishedAt'>
export type CardPageData = Pick<Page, 'slug' | 'meta' | 'title' | 'publishedAt'>

export const Card: React.FC<
  | {
      alignItems?: 'center'
      className?: string
      doc?: CardPostData
      relationTo?: 'posts'
      showCategories?: boolean
      title?: string
      showDescription?: boolean
    }
  | {
      alignItems?: 'center'
      className?: string
      doc?: CardPageData
      relationTo?: 'pages'
      showCategories?: boolean
      title?: string
      showDescription?: boolean
    }
> = (props) => {
  // const { card, link } = useClickableCard({})
  const {
    className,
    doc,
    relationTo,
    showCategories,
    title: titleFromProps,
    showDescription,
  } = props

  const { slug, meta, title, publishedAt } = doc || {}
  const { description, image: metaImage } = meta || {}

  const hasCategories =
    relationTo === 'posts'
      ? doc?.categories && Array.isArray(doc.categories) && doc?.categories.length > 0
      : false
  const titleToUse = titleFromProps || title
  const sanitizedDescription = description?.replace(/\s/g, ' ') // replace non-breaking space with white space
  const href = `/${slug}`

  return (
    <Link href={href}>
      <article
        className={cn('rounded-lg overflow-hidden hover:cursor-pointer group', className)}
        // ref={card.ref}
      >
        <div className="relative w-full ">
          {!metaImage && <div className="">No image</div>}
          {metaImage && typeof metaImage !== 'string' && (
            <Media
              resource={metaImage}
              size="33vw"
              className="rounded-xl overflow-hidden "
              imgClassName="object-cover group-hover:scale-110 transition-all duration-500"
            />
          )}
        </div>
        <div className="pt-2">
          {showCategories && hasCategories && (
            <div className="text-xs  flex items-center text-accent-foreground">
              {publishedAt && <div>{formattedDateFromString(publishedAt)}</div>}
              <DotIcon className="w-4 h-4" />
              {relationTo === 'posts' && showCategories && hasCategories && (
                <div>
                  {doc?.categories?.map((category, index) => {
                    if (typeof category === 'object') {
                      const { title: titleFromCategory } = category

                      const categoryTitle = titleFromCategory || 'Untitled category'

                      const isLast = index === doc?.categories!.length - 1

                      return (
                        <Fragment key={index}>
                          {categoryTitle}
                          {!isLast && <Fragment>, &nbsp;</Fragment>}
                        </Fragment>
                      )
                    }

                    return null
                  })}
                </div>
              )}
            </div>
          )}
          {titleToUse && (
            <div className="prose text-title group-hover:underline group-hover:text-primary transition-all duration-500">
              <h3>
                {/* <Link
                className="not-prose text-black group-hover:text-secondary transition-all group-hover:underline"
                href={href}
                // ref={link.ref}
              > */}
                {titleToUse}
                {/* </Link> */}
              </h3>
            </div>
          )}
          {description && showDescription && (
            <div className="mt-2 line-clamp-2">{description && <p>{sanitizedDescription}</p>}</div>
          )}
        </div>
      </article>
    </Link>
  )
}
