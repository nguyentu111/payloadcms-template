import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { draftMode } from 'next/headers'
import { RenderBlocks } from '@/blocks/RenderBlocks'
import { cache } from 'react'
import { CollectionSlug } from 'payload'
import { notFound } from 'next/navigation'
import { Template } from '@/payload-types'
import { PayloadRedirects } from '@/components/PayloadRedirects'
import { LivePreviewListener } from '@/components/LivePreviewListener'
import type { Config, Header as HeaderType } from 'src/payload-types'
import { Header } from '@/globals/Header/Component'
import { HeaderClient } from '@/globals/Header/Component.client'
type Global = keyof Config['globals']

type Args = {
  searchParams: Promise<{
    slug: string
    collection: CollectionSlug
  }>
  params: Promise<{
    collection: string
  }>
}
async function CollectionReview({
  slug,
  collection,
}: {
  slug: string
  collection: CollectionSlug
}) {
  const doc = await queryDocBySlug({ slug, collection })
  const { isEnabled } = await draftMode()
  const url = '/preview'
  const params = {
    slug,
    collection,
  }
  const encodedParams = new URLSearchParams()
  Object.entries(params).forEach(([key, value]) => {
    encodedParams.append(key, value)
  })
  if (!doc) return <PayloadRedirects url={url} />
  switch (collection) {
    case 'templates':
      return (
        <div>
          <PayloadRedirects disableNotFound url={url} />
          {isEnabled && <LivePreviewListener />}
          <RenderBlocks blocks={(doc as Template)?.blocks} />
        </div>
      )
    default:
      return <div>Preview mode doesn&apos;t support for this collection</div>
  }
}
async function GlobalReview({ slug }: { slug: Global }) {
  const doc = await queryGlobalBySlug({ slug })
  const { isEnabled } = await draftMode()
  const url = '/preview'
  const params = {
    slug,
  }
  const encodedParams = new URLSearchParams()
  Object.entries(params).forEach(([key, value]) => {
    encodedParams.append(key, value)
  })
  if (!doc) return <PayloadRedirects url={url} />
  switch (slug) {
    case 'header':
      const headerData = doc as HeaderType
      const renderedMenus = headerData.navItems?.items?.map(
        (item, i) => item.menu?.blocks && <RenderBlocks key={i} blocks={item.menu?.blocks} />,
      )
      const renderedTopbar = (
        <div className="top-bar">
          <RenderBlocks blocks={headerData.topBar?.blocks} />
        </div>
      )
      return (
        <div>
          <PayloadRedirects disableNotFound url={url} />
          {isEnabled && <LivePreviewListener />}
          <HeaderClient
            data={headerData}
            renderedMenus={renderedMenus}
            renderedTopbar={renderedTopbar}
          />
        </div>
      )

    default:
      return <div>Preview mode doesn&apos;t support for this collection</div>
  }
}

export default async function PreviewPage({ searchParams }: Args) {
  const { slug, collection } = await searchParams

  if (collection) return <CollectionReview slug={slug} collection={collection} />
  else return <GlobalReview slug={slug as Global} />
}
const queryDocBySlug = cache(
  async ({ slug, collection }: { slug: string; collection: CollectionSlug }) => {
    const { isEnabled: draft } = await draftMode()

    const payload = await getPayload({ config: configPromise })

    const result = await payload.find({
      collection,
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
  },
)

const queryGlobalBySlug = cache(async ({ slug }: { slug: Global }) => {
  const { isEnabled: draft } = await draftMode()

  const payload = await getPayload({ config: configPromise })

  const docs = await payload.findGlobal({
    slug,
    depth: 1,
    draft: true,
    overrideAccess: draft,
  })

  return docs
})
