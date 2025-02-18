import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'

import { revalidatePath, revalidateTag } from 'next/cache'

import type { Post, SinglePage } from '../../../payload-types'
import lodash from 'lodash'
export const revalidateSinglePage: CollectionAfterChangeHook<SinglePage> = ({
  doc,
  previousDoc,

  req: { payload, context },
}) => {
  if (!context.disableRevalidate) {
    const unionedPostTypes = lodash.union(doc.postTypes, previousDoc.postTypes)

    unionedPostTypes.forEach((postType) => {
      payload.logger.info(`Revalidating single page with tag: ${`single-pages_${postType}`}`)

      revalidateTag(`single-pages_${postType}`)
    })
  }
  return doc
}

export const revalidateDelete: CollectionAfterDeleteHook<SinglePage> = ({
  doc,
  req: { context, payload },
}) => {
  if (!context.disableRevalidate) {
    doc.postTypes &&
      doc.postTypes.forEach((postType) => {
        payload.logger.info(`Revalidating single page with tag: ${`single-pages_${postType}`}`)
        revalidateTag(`single-pages_${postType}`)
      })
  }

  return doc
}
