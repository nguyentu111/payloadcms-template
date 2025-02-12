import { RowBlockType } from '@/payload-types'
import { cn } from '@/utilities/ui'
import styles from './styles.module.scss'
export const WrapperStyles = ({
  styles: stylesFromProps,
  children,
}: {
  styles: RowBlockType['styles']
  children: React.ReactNode
}) => {
  const { mobile, pc, tablet } = stylesFromProps || {}
  const twClass = cn({
    'w-full': mobile?.width === 'full',
    container: mobile?.width === 'container',
    'max-w-content': mobile?.width === 'content',
    'w-auto': mobile?.width === 'auto',
    'md:w-full': tablet?.width === 'full',
    'md:container': tablet?.width === 'container',
    'md:max-w-content': tablet?.width === 'content',
    'md:w-auto': tablet?.width === 'auto',
    'pc:w-full': pc?.width === 'full',
    'pc:container': pc?.width === 'container',
    'pc:max-w-content': pc?.width === 'content',
    'pc:w-auto': pc?.width === 'auto',
    'self-start': mobile?.alignSelf === 'start',
    'self-end': mobile?.alignSelf === 'end',
    'self-baseline': mobile?.alignSelf === 'baseline',
    'self-stretch': mobile?.alignSelf === 'stretch',
    'self-center': mobile?.alignSelf === 'center',
    'md:self-start': tablet?.alignSelf === 'start',
    'md:self-end': tablet?.alignSelf === 'end',
    'md:self-baseline': tablet?.alignSelf === 'baseline',
    'md:self-stretch': tablet?.alignSelf === 'stretch',
    'md:self-center': tablet?.alignSelf === 'center',
    'lg:self-start': pc?.alignSelf === 'start',
    'lg:self-end': pc?.alignSelf === 'end',
    'lg:self-baseline': pc?.alignSelf === 'baseline',
    'lg:self-stretch': pc?.alignSelf === 'stretch',
    'lg:self-center': pc?.alignSelf === 'center',
    'text-center': mobile?.textAlign === 'center',
    'text-justify': mobile?.textAlign === 'justify',
    'text-left': mobile?.textAlign === 'left',
    'text-right': mobile?.textAlign === 'right',
    'md:text-center': tablet?.textAlign === 'center',
    'md:text-justify': tablet?.textAlign === 'justify',
    'md:text-left': tablet?.textAlign === 'left',
    'md:text-right': tablet?.textAlign === 'right',
    'lg:text-center': pc?.textAlign === 'center',
    'lg:text-justify': pc?.textAlign === 'justify',
    'lg:text-left': pc?.textAlign === 'left',
    'lg:text-right': pc?.textAlign === 'right',
  })

  return (
    <div
      className={cn(styles.wrapper, twClass, 'text-')}
      style={
        {
          '--margin-top': mobile?.margin?.top,
          '--margin-bottom': mobile?.margin?.bottom,
          '--margin-left': mobile?.margin?.left,
          '--margin-right': mobile?.margin?.right,
          '--margin-top-tablet': tablet?.margin?.top,
          '--margin-bottom-tablet': tablet?.margin?.bottom,
          '--margin-left-tablet': tablet?.margin?.left,
          '--margin-right-tablet': tablet?.margin?.right,
          '--margin-top-pc': pc?.margin?.top,
          '--margin-bottom-pc': pc?.margin?.bottom,
          '--margin-left-pc': pc?.margin?.left,
          '--margin-right-pc': pc?.margin?.right,
          '--font-size': mobile?.fontSize,
          '--font-size-tablet': tablet?.fontSize,
          '--font-size-pc': pc?.fontSize,
          '--color': mobile?.textColor,
          '--color-tablet': tablet?.textColor,
          '--color-pc': pc?.textColor,
          '--font-weight': mobile?.fontWeight,
          '--font-weight-tablet': tablet?.fontWeight,
          '--font-weight-pc': pc?.fontWeight,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  )
}
