import React from 'react'

import { Code } from './Component.client'
import { WrapperStyles } from '@/components/WrapperStyles'
import { CodeBlock as CodeBlockProps } from '@/payload-types'

type Props = CodeBlockProps & {
  className?: string
}

export const CodeBlock: React.FC<Props> = ({ className, content: { code, language }, styles }) => {
  return (
    <WrapperStyles styles={styles}>
      <div className={[className, 'not-prose'].filter(Boolean).join(' ')}>
        <Code code={code} language={language ?? undefined} />
      </div>
    </WrapperStyles>
  )
}
