import { Post } from '@/payload-types'
import { CollectionBeforeChangeHook } from 'payload'

export const appendPostTypeToSlug: CollectionBeforeChangeHook<Post> = async ({
  data,
  originalDoc,
  req: { payload },
}) => {
  const { slug, postType, slugLock } = data as Post
  console.log({ postTypeasd: postType })
  if (!postType) return data
  const populatedPostType = await payload.findByID({
    collection: 'post-types',
    id: postType as string,
  })
  const appendedSlug = slug?.startsWith(populatedPostType.slug + '/')
    ? slug
    : populatedPostType.slug + '/' + slug

  return {
    ...data,
    slug: slugLock ? appendedSlug : slug,
  }
}
