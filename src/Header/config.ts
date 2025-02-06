import type { GlobalConfig } from 'payload'

import { link } from '@/fields/link'
import { revalidateHeader } from './hooks/revalidateHeader'
import { navItems } from '@/fields/nav-items'

export const Header: GlobalConfig = {
  slug: 'header',
  access: {
    read: () => true,
  },
  fields: [navItems()],
  hooks: {
    afterChange: [revalidateHeader],
  },
}
