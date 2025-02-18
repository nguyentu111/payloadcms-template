import { cn } from '@/utilities/ui'
import React from 'react'
import RichText from '@/components/RichText'
import { WrapperStyles } from '@/components/WrapperStyles'

import type { RichTextBlock as RichTextBlockProps } from '@/payload-types'

export const RichTextBlock: React.FC<RichTextBlockProps> = (props) => {
  const {
    styles,
    content: { richText, enableProse, enableGutter },
  } = props
  return (
    <WrapperStyles styles={styles}>
      <RichText data={richText} enableGutter={!!enableGutter} enableProse={!!enableProse} />
    </WrapperStyles>
  )
}
