'use client'

import React, { useState } from 'react'
import { ColorPicker } from './ColorPicker'
import { FontColorIcon } from './FontColorIcon'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { $patchStyleText } from '@lexical/selection'
import { $getSelection, $isRangeSelection } from 'lexical'
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
import { translateColor } from '../utils/translateColor'
export const DropdownColorPicker = () => {
  const [fontColor, setFontColor] = useState<string | undefined>('')
  const [editor] = useLexicalComposerContext()
  const [CSSVariable, setCSSVariable] = useState<string | null>(null)
  const selectionColor = '#B2FFD6'

  function getNodeStyles(node: HTMLElement) {
    const computedStyle = getComputedStyle(node)
    return {
      color: computedStyle.color,
      backgroundColor: computedStyle.backgroundColor,
    }
  }

  const setNodesDefaultColor = () => {
    editor.update(() => {
      const selection = $getSelection()

      if (!selection) return

      const nodes = selection.getNodes()

      // Check each node for the default color
      const defaultColor = nodes.reduce<string | undefined>((acc, node) => {
        const domNode = editor.getElementByKey(node.getKey())
        if (domNode) {
          const HEXcolor = translateColor(getNodeStyles(domNode).backgroundColor, 'HEX')
          // If its the first node, set the default color
          if (acc === '') {
            acc = HEXcolor
            return acc
            // If its not the first node, check if the color is the same
          } else if (acc === HEXcolor) {
            return acc
            // The color is not the same as the first node, so return the default color
            // Meaning there are multiple nodes with different colors
          } else {
            return undefined
          }
        }
      }, '')
      setFontColor(defaultColor)
    })
  }

  const applyStyleTextToNodes = (styles: Record<string, string | null>) => {
    editor.update(() => {
      const selection = $getSelection()
      if ($isRangeSelection(selection)) {
        $patchStyleText(selection, styles)
      }
    })
  }

  const onModalClose = () => {
    if (fontColor) {
      applyStyleTextToNodes({
        // color: CSSVariable ?? fontColor,
        'background-color': fontColor,
      })
    }
  }

  const onModalOpen = () => {
    setNodesDefaultColor()
  }

  const handleOpenChange = (open: boolean) => {
    if (open) onModalOpen()
    else onModalClose()
  }

  const handleFontColorChange = (color: string, cssVariableColor?: string) => {
    if (cssVariableColor) setCSSVariable(cssVariableColor)
    else setCSSVariable(null)
    setFontColor(color)
  }

  return (
    <DropdownMenu onOpenChange={handleOpenChange}>
      <DropdownMenuTrigger className="toolbar-popup__button toolbar-popup__button-bold">
        <FontColorIcon underscoreColor={fontColor} />
      </DropdownMenuTrigger>
      <DropdownMenuContent side="bottom">
        <ColorPicker onChange={handleFontColorChange} color={fontColor} />
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
