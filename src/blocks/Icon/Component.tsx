import React from 'react'
import { WrapperStyles } from '@/components/WrapperStyles'
import { IconBlock as IconBlockProps } from '@/payload-types'
import { DynamicIcon } from './DynamicIcon'
// import { DynamicIcon } from 'lucide-react/dynamic';
export const IconBlock: React.FC<IconBlockProps> = (props) => {
  const {
    content: { icon, size, strokeWidth },
    styles,
  } = props

  return (
    <WrapperStyles styles={styles}>
      {/* <DynamicIcon name="camera" color="red" size={size} /> */}
      <DynamicIcon size={size} strokeWidth={strokeWidth} name={icon} />
    </WrapperStyles>
  )
}
