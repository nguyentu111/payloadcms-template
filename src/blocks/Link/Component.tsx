import { CMSLink } from '@/components/Link'
import { WrapperStyles } from '@/components/WrapperStyles'
import type { LinkBlock as LinkBlockProps } from '@/payload-types'
import React from 'react'

type Props = LinkBlockProps
export const LinkBlock: React.FC<Props> = ({ content, styles }) => {
  return (
    <WrapperStyles styles={styles}>
      <CMSLink {...content.link} />
    </WrapperStyles>
  )
}
