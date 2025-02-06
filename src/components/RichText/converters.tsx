import React from 'react'
import { JSXConverters, SerializedLexicalNodeWithParent } from '@payloadcms/richtext-lexical/react'
import {
  IS_BOLD,
  IS_CODE,
  IS_ITALIC,
  IS_STRIKETHROUGH,
  IS_SUBSCRIPT,
  IS_SUPERSCRIPT,
  IS_UNDERLINE,
  SerializedLexicalNode,
  SerializedParagraphNode,
  SerializedTextNode,
  Spread,
} from '@payloadcms/richtext-lexical/lexical'

export const TextJSXConverter: JSXConverters<SerializedTextNode> = {
  text: ({
    node,
    converters,
    parent,
  }: {
    childIndex: number
    converters: JSXConverters
    node: SerializedTextNode
    nodesToJSX: (args: {
      converters?: JSXConverters
      disableIndent?: boolean | string[]
      disableTextAlign?: boolean | string[]
      nodes: SerializedLexicalNode[]
      parent?: SerializedLexicalNodeWithParent
    }) => React.ReactNode[]
    parent: SerializedLexicalNodeWithParent
  }) => {
    let text: React.ReactNode = node.text

    if (node.format & IS_BOLD) {
      text = <strong>{text}</strong>
    }
    if (node.format & IS_ITALIC) {
      text = <em>{text}</em>
    }
    if (node.format & IS_STRIKETHROUGH) {
      text = <span style={{ textDecoration: 'line-through' }}>{text}</span>
    }
    if (node.format & IS_UNDERLINE) {
      text = <span style={{ textDecoration: 'underline' }}>{text}</span>
    }
    if (node.format & IS_CODE) {
      text = <code>{text}</code>
    }
    if (node.format & IS_SUBSCRIPT) {
      text = <sub>{text}</sub>
    }
    if (node.format & IS_SUPERSCRIPT) {
      text = <sup>{text}</sup>
    }
    if (node.style) {
      const style: React.CSSProperties = {}

      let match = node.style.match(/(?:^|;)\s?background-color: ([^;]+)/)
      match && (style.backgroundColor = match[1])

      match = node.style.match(/(?:^|;)\s?color: ([^;]+)/)
      match && (style.color = match[1])

      text = <span style={style}>{text}</span>
    }

    return text
  },
}
type SerializedCustomParagraphNode = Spread<
  {
    type: 'custom-paragraph'
    style: string
    textStyle: string
    tag: 'p'
  },
  SerializedParagraphNode
>

export const ParagraphJSXConverter: JSXConverters<SerializedCustomParagraphNode> = {
  'custom-paragraph': ({ node, nodesToJSX }) => {
    const children = nodesToJSX({
      nodes: node.children,
    })

    if (!children?.length) {
      return (
        <p>
          <br />
        </p>
      )
    }

    const style: React.CSSProperties = { paddingTop: '.5rem', paddingBottom: '.5rem' }
    const match = node.style.match(/background-color: ([^;]+)/)

    match && (style.backgroundColor = match[1])

    return <p style={style}>{children}</p>
  },
}
export const HeadingJSXConverter: JSXConverters = {
  'custom-heading': ({ node, nodesToJSX }) => {
    const children = nodesToJSX({
      nodes: node.children,
    })

    const style: React.CSSProperties = { paddingTop: '.5rem', paddingBottom: '.5rem' }
    const match = node.style.match(/background-color: ([^;]+)/)

    match && (style.backgroundColor = match[1])
    if (node.tag === 'h1') {
      if (!children?.length) {
        return (
          <h1>
            <br />
          </h1>
        )
      }
      return <h1 style={style}>{children}</h1>
    }
    if (node.tag === 'h2') {
      if (!children?.length) {
        return (
          <h2>
            <br />
          </h2>
        )
      }
      return <h2 style={style}>{children}</h2>
    }
    if (node.tag === 'h3') {
      if (!children?.length) {
        return (
          <h3>
            <br />
          </h3>
        )
      }
      return <h3 style={style}>{children}</h3>
    }
    if (node.tag === 'h4') {
      if (!children?.length) {
        return (
          <h4>
            <br />
          </h4>
        )
      }
      return <h4 style={style}>{children}</h4>
    }
    if (node.tag === 'h5') {
      if (!children?.length) {
        return (
          <h5>
            <br />
          </h5>
        )
      }
      return <h5 style={style}>{children}</h5>
    }
    if (node.tag === 'h6') {
      if (!children?.length) {
        return (
          <h6>
            <br />
          </h6>
        )
      }
      return <h6 style={style}>{children}</h6>
    }
  },
}
