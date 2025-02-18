import type { Metadata } from 'next'

import { PayloadRedirects } from '@/components/PayloadRedirects'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { draftMode } from 'next/headers'
import React, { cache } from 'react'

import type { Page as PageType, SinglePage } from '@/payload-types'

import { RenderBlocks } from '@/blocks/RenderBlocks'
import { RenderHero } from '@/heros/RenderHero'
import { generateMeta } from '@/utilities/generateMeta'
import PageClient from './page.client'
import { LivePreviewListener } from '@/components/LivePreviewListener'
import { DocumentProvider } from '@/providers/CurrentDocument'
import RichText from '@/components/RichText'
import { PostHero } from '@/heros/PostHero'
import { getCachedSinglePage } from '@/utilities/getCachedSinglePage'

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const [pages, posts] = await Promise.all([
    payload.find({
      collection: 'pages',
      draft: false,
      limit: 1000,
      overrideAccess: false,
      pagination: false,
      select: {
        slug: true,
      },
    }),
    payload.find({
      depth: 2,
      collection: 'posts',
    }),
  ])
  const pagesParams = pages.docs
    ?.filter((doc) => {
      return doc.slug !== 'home'
    })
    .map(({ slug }) => {
      return { slug: [slug] }
    })
  const postsParams = posts.docs.map(({ slug }) => {
    return { slug: [slug] }
  })
  return [...pagesParams, ...postsParams]
}

type Args = {
  params: Promise<{
    slug?: string[]
  }>
}

export default async function Page({ params: paramsPromise }: Args) {
  const { isEnabled: draft } = await draftMode()
  const { slug = ['home'] } = await paramsPromise
  const _slug = slug.reduce((acc, cur) => acc + '/' + cur)
  const url = '/' + _slug
  const page: PageType | null = await queryPageByUrl({
    url,
  })
  if (!page) {
    const post = await queryPostBySlug({ slug: _slug })
    if (!post) return <PayloadRedirects url={url} />
    const template = (await getCachedSinglePage(
      {
        postTypes: {
          contains: 'posts',
        },
      },
      'posts',
    )()) as SinglePage
    if (template) {
      return (
        <DocumentProvider document={post}>
          <article className="pb-16">
            <PageClient />
            <PayloadRedirects disableNotFound url={url} />
            {draft && <LivePreviewListener />}

            <RenderBlocks blocks={template.blocks} doc={post} />
          </article>
        </DocumentProvider>
      )
    }

    return (
      <DocumentProvider document={post}>
        <article className="pt-16 pb-16">
          <PageClient />

          {/* Allows redirects for valid pages too */}
          <PayloadRedirects disableNotFound url={url} />

          {draft && <LivePreviewListener />}

          <PostHero post={post} />

          <div className="flex flex-col items-center gap-4 pt-8">
            <div className="container">
              <RichText className="mx-auto" data={post.content} enableGutter={false} />
            </div>
          </div>
        </article>
      </DocumentProvider>
    )
  }

  const { hero, layout } = page

  return (
    <DocumentProvider document={page}>
      <article className="pb-16">
        <PageClient />
        {/* Allows redirects for valid pages too */}
        <PayloadRedirects disableNotFound url={url} />

        {draft && <LivePreviewListener />}

        <RenderHero {...hero} />
        <RenderBlocks blocks={layout} doc={page} />
      </article>
    </DocumentProvider>
  )
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { slug = ['home'] } = await paramsPromise
  const _slug = slug.reduce((acc, cur) => acc + '/' + cur)

  const page = await queryPageBySlug({
    slug: _slug as string,
  })
  if (page) return generateMeta({ doc: page })

  const post = await queryPostBySlug({ slug: _slug })

  return generateMeta({ doc: post })
}

const queryPageBySlug = cache(async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode()

  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'pages',
    depth: 1,
    draft,
    limit: 1,
    pagination: false,
    overrideAccess: draft,
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  return result.docs?.[0] || null
})
const queryPageByUrl = cache(async ({ url }: { url: string }) => {
  const { isEnabled: draft } = await draftMode()

  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'pages',
    depth: 10,
    draft,
    limit: 1,
    pagination: false,
    overrideAccess: draft,
    where: {
      'breadcrumbs.url': {
        equals: url,
      },
      slug: {
        equals: url.split('/').at(-1),
      },
    },
  })

  return result.docs?.[0] || null
})

const queryPostBySlug = cache(async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode()

  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'posts',
    depth: 10,
    draft,
    limit: 1,
    overrideAccess: draft,
    pagination: false,
    where: {
      slug: {
        equals: slug,
      },
    },
  })
  return result.docs?.[0] || null
})
