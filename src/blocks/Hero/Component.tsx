import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import { WrapperStyles } from '@/components/WrapperStyles'
import { HeroBlock as HeroBlockProps } from '@/payload-types'

export const HeroBlock: React.FC<HeroBlockProps> = (props) => {
  const { content, styles } = props
  const { link, content: blockContent, image } = content!
  return (
    <WrapperStyles styles={styles}>
      <div className="relative pb-[30%] min-h-[271px] rounded-[20px] overflow-hidden">
        <Media resource={image} fill className="object-cover" imgClassName="object-cover" />
        <div className="absolute top-1/2 -translate-y-1/2 max-w-[20rem] text-left md:left-[6.25rem] left-10 text-white">
          {blockContent && (
            <RichText data={blockContent} enableGutter={false} className="prose-xs" />
          )}
          <CMSLink {...link} className="mt-2" />
        </div>
      </div>
    </WrapperStyles>
  )
}
