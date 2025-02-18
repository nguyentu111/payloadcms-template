'use client'
import Link from 'next/link'
import React, { useRef } from 'react'

import type { Header } from '@/payload-types'

import { WrapperStyles } from '@/components/WrapperStyles'
import { useWindowScroll } from '@/hooks/useWindowScroll'
import { SearchIcon } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { HeaderNav } from './Nav'
interface HeaderClientProps {
  data: Header
  renderedMenus: (React.JSX.Element | null | undefined)[] | undefined
  renderedTopbar: React.JSX.Element
}

export const HeaderClient: React.FC<HeaderClientProps> = ({
  data,
  renderedMenus,
  renderedTopbar,
}) => {
  const { scrollY } = useWindowScroll()
  const showStickyNav = scrollY > 250
  return (
    <WrapperStyles as="header" styles={data.styles}>
      {renderedTopbar}
      {/* main nav */}
      <MainNav data={data} renderedMenus={renderedMenus} />
      <AnimatePresence>
        {showStickyNav && (
          <motion.div
            className="fixed left-0 right-0"
            initial={{ top: -50 }}
            animate={{ top: 0 }}
            exit={{ top: -50 }}
          >
            <MainNav data={data} renderedMenus={renderedMenus} />
          </motion.div>
        )}
      </AnimatePresence>
    </WrapperStyles>
  )
}
type MainNavProps = {
  data: Header
  renderedMenus: (React.JSX.Element | null | undefined)[] | undefined
}
const MainNav: React.FC<MainNavProps> = ({ data, renderedMenus }) => {
  const refAnchor = useRef<HTMLDivElement>(null)
  return (
    <div className="main-nav">
      <div
        className="container flex items-center justify-between "
        // {...(theme ? { 'data-theme': theme } : {})}
      >
        <div ref={refAnchor} className="flex justify-between flex-1">
          <div className="flex justify-between">
            <nav className="">
              {/* @ts-expect-error */}
              <HeaderNav data={data} header={refAnchor} renderedMenus={renderedMenus} />
            </nav>
          </div>
          <Link href="/search" className="flex items-center">
            <span className="sr-only">Search</span>
            <SearchIcon className="w-5 text-white" />
          </Link>
        </div>
      </div>
    </div>
  )
}
