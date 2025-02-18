import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { WrapperStyles } from '@/components/WrapperStyles'
import { BreadCrumbBlock, Page, Post } from '@/payload-types'
import { cn } from '@/utilities/ui'
import Link from 'next/link'

type Props = BreadCrumbBlock & {
  doc: Post | Page
}
export function BreadcrumbBlock({ doc, content, styles }: Props) {
  if (!doc) return null
  const { title, breadcrumbs } = doc as Page
  return (
    <WrapperStyles styles={styles}>
      <Breadcrumb className="bread-crumb-inner">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">Trang chủ</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          {breadcrumbs &&
            breadcrumbs.length > 0 &&
            breadcrumbs.slice(0, -1).map((b) => (
              <>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link href={b.url!}>{b.label}</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
              </>
            ))}
          <BreadcrumbItem>
            <BreadcrumbPage>{title}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </WrapperStyles>
  )
}
