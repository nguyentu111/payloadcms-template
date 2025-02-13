import type { FieldHook } from 'payload'

export const formatSlug = (val: string): string =>
  val
    .normalize('NFD') // Normalize Unicode characters
    .replace(/[\u0300-\u036f]/g, '') // Remove diacritics
    .replace(/đ/g, 'd') // Convert 'đ' to 'd'
    .replace(/Đ/g, 'D') // Convert 'Đ' to 'D'
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/[^a-zA-Z0-9-]/g, '') // Remove special characters except hyphens
    .replace(/-+/g, '-') // Remove multiple hyphens
    .toLowerCase()

export const formatSlugHook =
  (fallback: string): FieldHook =>
  ({ data, operation, value }) => {
    if (typeof value === 'string' && data?.slugLock === true) {
      return formatSlug(value)
    }

    if (operation === 'create' || !data?.slug) {
      const fallbackData = data?.[fallback] || data?.[fallback]

      if (fallbackData && typeof fallbackData === 'string' && data?.slugLock === true) {
        return formatSlug(fallbackData)
      }
    }

    return value
  }
