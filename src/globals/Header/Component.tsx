import { HeaderClient } from './Component.client'
import { getCachedGlobal } from '@/utilities/getGlobals'
import React from 'react'
import type { Header } from '@/payload-types'
import { RenderBlocks } from '@/blocks/RenderBlocks'

export async function Header() {
  const headerData: Header = (await getCachedGlobal('header', 100)()) as Header
  const renderedMenus = headerData.navItems?.items?.map(
    (item, i) => item.menu?.blocks && <RenderBlocks key={i} blocks={item.menu?.blocks} />,
  )
  const renderedTopbar = (
    <div className="top-bar">
      <RenderBlocks blocks={headerData.topBar?.blocks} />
    </div>
  )
  return (
    <HeaderClient data={headerData} renderedMenus={renderedMenus} renderedTopbar={renderedTopbar} />
  )
}
