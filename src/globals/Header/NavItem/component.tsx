import { CustomPopover } from '@/components/CustomPopover/component'
import { CMSLink } from '@/components/Link'
import { useDebounce } from '@/utilities/useDebounce'
import type { Header as HeaderType } from '@/payload-types'
import React, { useRef } from 'react'

export const NavItem: React.FC<{
  children: React.ReactNode
  anchor: React.RefObject<HTMLElement>
  data: NonNullable<NonNullable<HeaderType['navItems']>['items']>[number]
}> = ({ children, anchor, data }) => {
  const { link, menu } = data
  const [open, setOpen] = React.useState(false)
  const openDebouced = useDebounce(open, 100)
  const ref = useRef<HTMLLIElement>(null)
  return (
    <li
      className="relative nav-item"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      ref={ref}
    >
      <CMSLink {...link} className="uppercase text-white  py-4"></CMSLink>
      {menu?.blocks?.length && menu?.blocks?.length > 0 && (
        <CustomPopover
          anchorIsTrigger={!menu.anchoringToHeader}
          //@ts-expect-error
          anchorRef={menu.anchoringToHeader ? anchor : ref}
          isOpen={openDebouced}
          onClose={() => setOpen(false)}
        >
          {children}
        </CustomPopover>
      )}
    </li>
  )
}
