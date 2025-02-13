import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { BreadCrumbBlock, Page, Post, PostType } from '@/payload-types'
import { cn } from '@/utilities/ui'
import Link from 'next/link'

type Props = BreadCrumbBlock & {
  doc: Post | Page
}
export function BreadcrumbBlock({ haveContainer, doc }: Props) {
  if (!doc) return null
  const { title } = doc

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
            {docIsPost(doc) && (
              <>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link href={(doc.postType as PostType).slug}>
                      {(doc.postType as PostType).title}
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
              </>
            )}
            <BreadcrumbItem>
              <BreadcrumbPage>{title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </div>
  )
}
const docIsPost = (doc: Post | Page): doc is Post =>
  'postType' in doc && typeof doc.postType === 'object'
