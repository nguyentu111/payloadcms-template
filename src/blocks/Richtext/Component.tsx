import { cn } from '@/utilities/ui'
import React from 'react'
import RichText from '@/components/RichText'

import type { RichText as RichTextBlockProps } from '@/payload-types'

export const RichTextBlock: React.FC<RichTextBlockProps> = (props) => {
  const { richText } = props
  return <RichText data={richText} enableGutter={false} />
}
