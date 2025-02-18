import type { StaticImageData } from 'next/image'

import { cn } from '@/utilities/ui'
import React from 'react'
import RichText from '@/components/RichText'
import { WrapperStyles } from '@/components/WrapperStyles'

import type { MediaBlock as MediaBlockProps } from '@/payload-types'

import { Media } from '../../components/Media'

type Props = MediaBlockProps & {
  breakout?: boolean
  captionClassName?: string
  className?: string
  enableGutter?: boolean
  imgClassName?: string
  staticImage?: StaticImageData
  disableInnerContainer?: boolean
}

export const MediaBlock: React.FC<Props> = (props) => {
  const {
    content: { media },
    captionClassName,
    className,
    enableGutter = true,
    imgClassName,
    staticImage,
    disableInnerContainer,
    styles,
  } = props
  let caption
  if (media && typeof media === 'object') caption = media.caption

  return (
    <WrapperStyles styles={styles}>
      <div
        className={cn(
          '',
          {
            container: enableGutter,
          },
          className,
        )}
      >
        {(media || staticImage) && (
          <Media imgClassName={cn('', imgClassName)} resource={media} src={staticImage} />
        )}
        {caption && (
          <div
            className={cn(
              'mt-6',
              {
                container: !disableInnerContainer,
              },
              captionClassName,
            )}
          >
            <RichText data={caption} enableGutter={false} />
          </div>
        )}
      </div>
    </WrapperStyles>
  )
}
