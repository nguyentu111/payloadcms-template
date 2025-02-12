import RichText from '@/components/RichText'
import { WrapperStyles } from '@/components/WrapperStyles'

import { Post, Page, PostContentBlock as PostContentBlockProps } from '@/payload-types'

type Props = PostContentBlockProps & {
  doc?: Post
}
export function PostContentBlock({ doc, styles }: Props) {
  if (!doc?.content) return null
  return (
    <WrapperStyles styles={styles}>
      <RichText data={doc.content} enableGutter={false} />
    </WrapperStyles>
  )
}
