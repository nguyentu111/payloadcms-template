import { cn } from '@/utilities/ui'
import React from 'react'
import RichText from '@/components/RichText'

import type { RichTextBlock as RichTextBlockProps } from '@/payload-types'

import { CMSLink } from '../../components/Link'

export const RichTextBlock: React.FC<RichTextBlockProps> = (props) => {
  const { richText } = props
  return <RichText data={richText} enableGutter={false} />
}
