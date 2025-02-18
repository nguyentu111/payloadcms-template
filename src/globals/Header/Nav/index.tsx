import React from 'react'

import type { Header as HeaderType } from '@/payload-types'

import { Logo } from '@/components/Logo/Logo'
import Link from 'next/link'
import { NavItem } from '../NavItem/component'

export const HeaderNav: React.FC<{
  data: HeaderType
  header: React.RefObject<HTMLElement>
  renderedMenus: (React.JSX.Element | null | undefined)[] | undefined
}> = ({ data, header, renderedMenus }) => {
  const navItems = data?.navItems?.items || []

  return (
    <ul className="flex items-center  space-x-8 text-sm font-medium nav-items">
      <li className="nav-item">
        <Link href="/" className="my-auto">
          <Logo loading="eager" priority="high" className="invert dark:invert-0" />
        </Link>
      </li>
      {renderedMenus &&
        navItems?.map((navItem, i: number) => (
          <NavItem anchor={header} data={navItem} key={navItem.link.label}>
            {navItem.menu?.blocks && renderedMenus[i]}
          </NavItem>
        ))}
    </ul>
  )
}
