import type { Config } from '@/payload-types'

import configPromise from '@payload-config'
import { getPayload, Where } from 'payload'
import { unstable_cache } from 'next/cache'
type Collection = keyof Config['collections']

async function getDocument(collection: Collection, where: Where, depth = 1) {
  const payload = await getPayload({ config: configPromise })

  const page = await payload.find({
    collection,
    depth,
    where,
    limit: 1,
  })

  return page.docs[0]
}

/**
 * Returns a unstable_cache function mapped with the cache tag for the slug
 */
export const getCachedSinglePage = (where: Where, slug: string) =>
  unstable_cache(
    async () => {
      const payload = await getPayload({ config: configPromise })
      payload.logger.info(`Get cached single page failed with tag: ${`${'single-pages'}_${slug}`}`)
      return getDocument('single-pages', where)
    },
    ['single-pages', slug],
    {
      tags: [`${'single-pages'}_${slug}`],
    },
  )
