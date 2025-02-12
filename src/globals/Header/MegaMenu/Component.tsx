'use client'

import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import type { Header, Page, Post } from '@/payload-types'
import Link from 'next/link'
import React from 'react'
type Props = {
  menu: NonNullable<NonNullable<NonNullable<Header['navItems']>['items']>[number]['menu']>
}
export const MegaMenu: React.FC<Props> = ({ menu }) => {
  const { addMenu, anchoringToHeader, leftSidebar, main } = menu
  return (
    <div className="container">
      <div className="grid grid-cols-4 gap-8">
        {/* Side Categories */}
        <div className="flex flex-col gap-8">
          {leftSidebar?.groups?.map((group) => (
            <div className="col-span-1" key={group.id}>
              <h2 className="text-lg font-bold text-[#002B3E] mb-4">{group.title}</h2>
              <ul className="space-y-3">
                {group.links?.map((link, i) => (
                  <li key={i}>
                    <CMSLink {...link.link} className="menu-link" />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {/* Main Content */}
        <div className="col-span-3 flex flex-col gap-8">
          {main?.groups?.map((group) => (
            <div key={group.id}>
              <div className="mb-8">
                <h2 className="text-lg font-bold text-[#002B3E] mb-4">{group.title}</h2>
                <ul className="flex flex-wrap gap-4">
                  {group.linkGroup?.links?.map((link) => (
                    <li key={link.id}>
                      <CMSLink {...link.link} className="menu-link" />
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tour Cards */}
              <div className="grid grid-cols-4 gap-6">
                {group.posts?.colections?.map((post, i) => {
                  const relation = post.reference.relationTo
                  const url =
                    post.reference.relationTo === 'pages'
                      ? `/${(post.reference.value as Page).slug}`
                      : `/posts/${(post.reference.value as Post).slug}`
                  const _post = post.reference.value as Page | Post
                  const metaImage = _post.meta?.image
                  return (
                    <Link
                      key={post.id}
                      href={relation === 'posts' ? `/posts/${_post.slug}` : `/${_post.slug}`}
                      className="group block "
                    >
                      <div className="relative aspect-video overflow-hidden rounded-lg mb-3">
                        <div className="relative w-full ">
                          {metaImage && typeof metaImage !== 'string' && (
                            <Media resource={metaImage} size="33vw" />
                          )}
                        </div>
                      </div>
                      <div className="font-medium text-[#002B3E] group-hover:text-[#DC0032] mb-2 line-clamp-2">
                        {_post.title}
                      </div>
                      {/* <p className="text-[#DC0032] font-bold">{formatPrice(tour.price)}đ</p> */}
                    </Link>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
