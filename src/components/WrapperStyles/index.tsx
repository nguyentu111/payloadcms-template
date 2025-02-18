'use client'
import { RowBlockType } from '@/payload-types'
import React from 'react'
import styled, { css } from 'styled-components'
import { cssVariables } from '@/cssVariables'
type HTMLTagName = keyof React.JSX.IntrinsicElements

const breakPointsVariables = Object.keys(cssVariables.breakpoints).reduce((acc, curr) => {
  acc += `--${curr} : ${cssVariables.breakpoints[curr as keyof typeof cssVariables.breakpoints]}px;\n`
  return acc
}, '')
const Wrapper = styled.div<{ $customcss?: string | null }>`
  ${breakPointsVariables}
  ${(props) =>
    props.$customcss &&
    css`
      ${props.$customcss}
    `}
`
export const WrapperStyles = ({
  styles,
  children,
  as,
}: {
  styles: RowBlockType['styles']
  children: React.ReactNode
  as?: HTMLTagName
}) => {
  const regex = /selector\s*\{([\s\S]*)\}/
  const match = styles?.customCss?.match(regex)
  let looseCss = match ? match[1] : null

  return (
    <Wrapper as={as} $customcss={looseCss}>
      {children}
    </Wrapper>
  )
}
