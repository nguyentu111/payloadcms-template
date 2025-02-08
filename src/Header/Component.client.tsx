'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useRef, useState } from 'react'

import type { Header } from '@/payload-types'

import { useWindowScroll } from '@/hooks/useWindowScroll'
import { SearchIcon } from 'lucide-react'
import { HeaderNav } from './Nav'
import { Topbar } from './Topbar/component'
import gsap from 'gsap'
import { AnimatePresence, motion } from 'motion/react'
interface HeaderClientProps {
  data: Header
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data }) => {
  /* Storing the value in a useState to avoid hydration errors */
  // const [theme, setTheme] = useState<string | null>(null)
  // const { headerTheme, setHeaderTheme } = useHeaderTheme()
  // const pathname = usePathname()
  const { scrollY } = useWindowScroll()
  // useEffect(() => {
  //   setHeaderTheme(null)
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [pathname])

  // useEffect(() => {
  //   if (headerTheme && headerTheme !== theme) setTheme(headerTheme)
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [headerTheme])
  const showStickyNav = scrollY > 250
  return (
    <header className="z-50">
      <Topbar data={data.topBar} />
      {/* main nav */}
      <MainNav data={data} />
      <AnimatePresence>
        {showStickyNav && (
          <motion.div
            className="fixed left-0 right-0"
            initial={{ top: -50 }}
            animate={{ top: 0 }}
            exit={{ top: -50 }}
          >
            <MainNav data={data} />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
const MainNav: React.FC<HeaderClientProps> = ({ data }) => {
  const refAnchor = useRef<HTMLDivElement>(null)
  return (
    <div className={`bg-secondary`}>
      <div
        className="container flex items-center justify-between "
        // {...(theme ? { 'data-theme': theme } : {})}
      >
        <div ref={refAnchor} className="flex justify-between flex-1">
          <div className="flex justify-between">
            <nav className="">
              {/* @ts-expect-error */}
              <HeaderNav data={data} header={refAnchor} />
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
