import React from 'react'

import type { CallToActionBlock as CTABlockProps } from '@/payload-types'

import RichText from '@/components/RichText'
import { CMSLink } from '@/components/Link'
import { WrapperStyles } from '@/components/WrapperStyles'

export const CallToActionBlock: React.FC<CTABlockProps> = ({ styles, content }) => {
  return (
    <WrapperStyles styles={styles}>
      <div className="bg-card rounded border-border border p-4 flex flex-col gap-8 md:flex-row md:justify-between md:items-center">
        <div className="max-w-[48rem] flex items-center">
          {content?.richText && (
            <RichText className="mb-0" data={content.richText} enableGutter={false} />
          )}
        </div>
        <div className="flex flex-col gap-8">
          {(content?.links || []).map(({ link }, i) => {
            return <CMSLink key={i} size="lg" {...link} />
          })}
        </div>
      </div>
    </WrapperStyles>
  )
}
