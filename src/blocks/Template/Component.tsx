import { WrapperStyles } from '@/components/WrapperStyles'
import { Page, Post, Template, TemplateBlock as TemplateBlockProps } from '@/payload-types'
type Props = TemplateBlockProps & {
  renderer: React.FC<{ blocks?: any[] | null; doc?: Page | Post }>
  doc: Page | Post
}
export const TemplateBlock = ({ content, styles, renderer: Renderer, doc }: Props) => {
  if (!content?.template || typeof content.template === 'string') return null
  return (
    <WrapperStyles styles={styles}>
      <Renderer blocks={content.template.blocks} doc={doc} />
    </WrapperStyles>
  )
}
