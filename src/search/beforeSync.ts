import { BeforeSync, DocToSync } from '@payloadcms/plugin-search/types'

export const beforeSyncWithSearch: BeforeSync = async ({
  originalDoc,
  searchDoc,
  payload,
  req,
}) => {
  const {
    doc: { relationTo: collection },
  } = searchDoc

  const { slug, id, categories, title, meta } = originalDoc

  const modifiedDoc: DocToSync = {
    ...searchDoc,
    slug,
    meta: {
      ...meta,
      title: meta?.title || title,
      image: meta?.image?.id || meta?.image,
      description: meta?.description,
    },
    categories: [],
  }

  if (categories && Array.isArray(categories) && categories.length > 0) {
    // get full categories and keep a flattened copy of their most important properties

    try {
      if (
        typeof categories[0] === 'object' &&
        !Array.isArray(categories[0]) &&
        categories[0] !== null
      ) {
        const mappedCategories = categories.map((category) => {
          const { id, title } = category

          return {
            relationTo: 'categories',
            id,
            title,
          }
        })

        modifiedDoc.categories = mappedCategories
      } else if (typeof categories[0] === 'string') {
        const savedCategories = await payload.find({
          collection: 'categories',
          context: req,
          pagination: false,
          where: {
            id: {
              in: categories,
            },
          },
        })
        modifiedDoc.categories = savedCategories.docs.map((c) => ({
          relationTo: 'categories',
          id: c.id,
          title: c.title,
        }))
      }
    } catch (_err) {
      console.error(
        `Failed. Category not found when syncing collection '${collection}' with id: '${id}' to search.`,
      )
    }
  }

  return modifiedDoc
}
