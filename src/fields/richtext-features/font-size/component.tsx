import { $getSelectionStyleValueForProperty } from '@lexical/selection'
import { $isTableSelection } from '@lexical/table'
import { mergeRegister } from '@lexical/utils'
import {
  $getSelection,
  $isRangeSelection,
  COMMAND_PRIORITY_CRITICAL,
  LexicalEditor,
  SELECTION_CHANGE_COMMAND,
} from 'lexical'
import { JSX, useCallback, useEffect, useState } from 'react'

import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
import FontSize from './fontSize'

export function FontSizePlugin({}: {}): JSX.Element {
  const [editor] = useLexicalComposerContext()
  const [activeEditor, setActiveEditor] = useState<LexicalEditor>(editor)
  const [fontSize, setFontSize] = useState('15px')

  const $updateToolbar = useCallback(() => {
    const selection = $getSelection()
    if ($isRangeSelection(selection) || $isTableSelection(selection)) {
      setFontSize($getSelectionStyleValueForProperty(selection, 'font-size', '15px'))
    }
  }, [activeEditor, editor])

  useEffect(() => {
    return editor.registerCommand(
      SELECTION_CHANGE_COMMAND,
      (_payload, newEditor) => {
        setActiveEditor(newEditor)
        $updateToolbar()
        return false
      },
      COMMAND_PRIORITY_CRITICAL,
    )
  }, [editor, $updateToolbar, setActiveEditor])

  useEffect(() => {
    activeEditor.getEditorState().read(() => {
      $updateToolbar()
    })
  }, [activeEditor, $updateToolbar])

  useEffect(() => {
    return mergeRegister(
      activeEditor.registerUpdateListener(({ editorState }) => {
        editorState.read(() => {
          $updateToolbar()
        })
      }),
    )
  }, [$updateToolbar, activeEditor, editor])

  return <FontSize selectionFontSize={fontSize.slice(0, -2)} editor={activeEditor} />
}
