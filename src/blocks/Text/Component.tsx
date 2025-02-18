import { WrapperStyles } from '@/components/WrapperStyles'
import { TextBlock as TextBlockProps } from '@/payload-types'
export const TextBlock = ({ content, styles }: TextBlockProps) => {
  return <WrapperStyles styles={styles}>{content?.text}</WrapperStyles>
}
