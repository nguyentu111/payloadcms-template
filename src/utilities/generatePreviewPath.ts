import { PayloadRequest, CollectionSlug, Config } from 'payload'

const collectionPrefixMap: Partial<Record<CollectionSlug, string>> = {
  posts: '/posts',
  pages: '',
}

type Props = {
  slug: string
  req: PayloadRequest
  breadcrumbs?:
    | {
        url?: string | null
      }[]
    | null
}

export const generatePreviewPath = ({
  collection,
  slug,
  req,
  breadcrumbs,
}: Props & { collection: CollectionSlug }) => {
  let path: string
  if (breadcrumbs && breadcrumbs.length > 0 && breadcrumbs.at(-1)!.url)
    path = breadcrumbs.at(-1)!.url!
  else path = `${collectionPrefixMap[collection]}/${slug}`

  const params = {
    slug,
    collection,
    path,
  }

  const encodedParams = new URLSearchParams()

  Object.entries(params).forEach(([key, value]) => {
    encodedParams.append(key, value)
  })

  const isProduction =
    process.env.NODE_ENV === 'production' || Boolean(process.env.VERCEL_PROJECT_PRODUCTION_URL)
  const protocol = isProduction ? 'https:' : req.protocol

  const url = `${req.protocol}//${req.host}/next/preview?${encodedParams.toString()}`

  return url
}
export const generateNonPostTypePreviewPath = ({
  collection,
  slug,
  req,
}: Props & { collection?: CollectionSlug }) => {
  const encodedParams = new URLSearchParams()

  let path: string = `/preview?`

  const params = {
    slug,
    collection,
  }
  Object.entries(params).forEach(([key, value]) => {
    value && encodedParams.append(key, value)
  })
  path = path + encodedParams.toString()
  encodedParams.append('path', path)

  const isProduction =
    process.env.NODE_ENV === 'production' || Boolean(process.env.VERCEL_PROJECT_PRODUCTION_URL)
  const protocol = isProduction ? 'https:' : req.protocol

  const url = `${req.protocol}//${req.host}/next/preview?${encodedParams.toString()}`

  return url
}
