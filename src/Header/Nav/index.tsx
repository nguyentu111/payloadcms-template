'use client'

import React, { useRef } from 'react'

import type { Header as HeaderType } from '@/payload-types'

import { RenderClientOnlyBlocks } from '@/blocks/RenderClientOnlyBlocks'
import { CustomPopover } from '@/components/CustomPopover/component'
import { CMSLink } from '@/components/Link'
import { useDebounce } from '@/utilities/useDebounce'
import { SearchIcon } from 'lucide-react'
import Link from 'next/link'

export const HeaderNav: React.FC<{ data: HeaderType; header: React.RefObject<HTMLElement> }> = ({
  data,
  header,
}) => {
  const navItems = data?.navItems || []

  return (
    <nav className="flex gap-3 items-center">
      {navItems?.map((navItem) => (
        <NavItem anchor={header} data={navItem} key={navItem.link.label}>
          {navItem.menu && <RenderClientOnlyBlocks blocks={navItem.menu} />}
        </NavItem>
      ))}
      <Link href="/search">
        <span className="sr-only">Search</span>
        <SearchIcon className="w-5 text-primary" />
      </Link>
    </nav>
  )
}

const NavItem: React.FC<{
  children: React.ReactNode
  anchor: React.RefObject<HTMLElement>
  data: NonNullable<HeaderType['navItems']>[number]
}> = ({ children, anchor, data }) => {
  const { link, menu, addMenu } = data
  const [open, setOpen] = React.useState(false)
  const openDebouced = useDebounce(open, 100)
  const ref = useRef<HTMLLIElement>(null)
  return (
    <li
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      ref={ref}
    >
      <CMSLink {...link}></CMSLink>
      {addMenu && menu && menu.length > 0 && (
        <CustomPopover
          // @ts-expect-error
          anchorRef={data.anchoringToHeader ? anchor : ref}
          isOpen={openDebouced}
          onClose={() => setOpen(false)}
        >
          {children}
        </CustomPopover>
      )}
    </li>
  )
}
