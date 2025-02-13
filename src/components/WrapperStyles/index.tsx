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
    'w-fit': mobile?.width === 'fitContent',
    'max-w-content': mobile?.width === 'content',
    'max-w-title': mobile?.width === 'title',
    'w-auto': mobile?.width === 'auto',
    'md:w-full': tablet?.width === 'full',
    'md:container': tablet?.width === 'container',
    'md:w-fit': tablet?.width === 'fitContent',
    'md:max-w-content': tablet?.width === 'content',
    'md:max-w-title': tablet?.width === 'title',
    'md:w-auto': tablet?.width === 'auto',
    'pc:w-full': pc?.width === 'full',
    'pc:container': pc?.width === 'container',
    'lg:w-fit': pc?.width === 'fitContent',
    'pc:max-w-content': pc?.width === 'content',
    'pc:max-w-title': pc?.width === 'title',
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
    block: mobile?.display === 'block',
    inline: mobile?.display === 'inline',
    'inline-block': mobile?.display === 'inline-block',
    none: mobile?.display === 'none',
    'md:block': tablet?.display === 'block',
    'md:inline': tablet?.display === 'inline',
    'md:inline-block': tablet?.display === 'inline-block',
    'md:none': tablet?.display === 'none',
    'lg:block': pc?.display === 'block',
    'lg:inline': pc?.display === 'inline',
    'lg:inline-block': pc?.display === 'inline-block',
    'lg:none': pc?.display === 'none',
    static: mobile?.position === 'static',
    relative: mobile?.position === 'relative',
    absolute: mobile?.position === 'absolute',
    fixed: mobile?.position === 'fixed',
    'md:static': tablet?.position === 'static',
    'md:relative': tablet?.position === 'relative',
    'md:absolute': tablet?.position === 'absolute',
    'md:fixed': tablet?.position === 'fixed',
    'lg:static': pc?.position === 'static',
    'lg:relative': pc?.position === 'relative',
    'lg:absolute': pc?.position === 'absolute',
    'lg:fixed': pc?.position === 'fixed',
  })

  return (
    <div
      className={cn(styles.wrapper, twClass)}
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

          '--padding-top': mobile?.padding?.top,
          '--padding-bottom': mobile?.padding?.bottom,
          '--padding-left': mobile?.padding?.left,
          '--padding-right': mobile?.padding?.right,
          '--padding-top-tablet': tablet?.padding?.top,
          '--padding-bottom-tablet': tablet?.padding?.bottom,
          '--padding-left-tablet': tablet?.padding?.left,
          '--padding-right-tablet': tablet?.padding?.right,
          '--padding-top-pc': pc?.padding?.top,
          '--padding-bottom-pc': pc?.padding?.bottom,
          '--padding-left-pc': pc?.padding?.left,
          '--padding-right-pc': pc?.padding?.right,

          '--font-size': mobile?.fontSize,
          '--font-size-tablet': tablet?.fontSize,
          '--font-size-pc': pc?.fontSize,
          '--color': mobile?.textColor,
          '--color-tablet': tablet?.textColor,
          '--color-pc': pc?.textColor,
          '--font-weight': mobile?.fontWeight,
          '--font-weight-tablet': tablet?.fontWeight,
          '--font-weight-pc': pc?.fontWeight,

          '--z-index': mobile?.zIndex,
          '--z-index-tablet': tablet?.zIndex,
          '--z-index-pc': pc?.zIndex,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  )
}
