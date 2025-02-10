'use client'
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { BreadCrumbBlock } from '@/payload-types'
import { useCurrentDocument } from '@/providers/CurrentDocument'
import { cn } from '@/utilities/ui'
import Link from 'next/link'

export function BreadcrumbBlock({ haveContainer }: BreadCrumbBlock) {
  const currentDocument = useCurrentDocument()
  if (!currentDocument) return null
  const { title, slug } = currentDocument
  console.log(currentDocument)

  return (
    <div className={cn({ ' bg-[#f5f5f5] py-3': haveContainer })}>
      <div className={cn({ container: haveContainer })}>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/">Trang chủ</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </div>
  )
}
