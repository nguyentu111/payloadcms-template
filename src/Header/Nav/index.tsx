'use client'

import React, { useRef } from 'react'

import type { Header as HeaderType } from '@/payload-types'

import { RenderClientOnlyBlocks } from '@/blocks/RenderClientOnlyBlocks'
import { CustomPopover } from '@/components/CustomPopover/component'
import { CMSLink } from '@/components/Link'
import { useDebounce } from '@/utilities/useDebounce'
import { SearchIcon } from 'lucide-react'
import Link from 'next/link'
import { Logo } from '@/components/Logo/Logo'
import { MegaMenu } from '../MegaMenu/Component'

export const HeaderNav: React.FC<{ data: HeaderType; header: React.RefObject<HTMLElement> }> = ({
  data,
  header,
}) => {
  const navItems = data?.navItems?.items || []

  return (
    <ul className="flex items-center  space-x-8 text-sm font-medium">
      <li>
        <Link href="/" className="my-auto">
          <Logo loading="eager" priority="high" className="invert dark:invert-0" />
        </Link>
      </li>
      {navItems?.map((navItem) => (
        <NavItem anchor={header} data={navItem} key={navItem.link.label}>
          {navItem.menu?.addMenu && <MegaMenu menu={navItem.menu} />}
        </NavItem>
      ))}
    </ul>
  )
}

const NavItem: React.FC<{
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
      className="relative py-4"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      ref={ref}
    >
      <CMSLink {...link} className="uppercase text-white"></CMSLink>
      {menu?.addMenu && (
        <CustomPopover
          anchorIsTrigger={!menu.anchoringToHeader}
          // @ts-expect-error
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
