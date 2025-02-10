import styles from './styles.module.scss'

import { LexicalEditor } from 'lexical'
import * as React from 'react'

import { updateFontSize, updateFontSizeInSelection, UpdateFontSizeType } from './utils'
import { MinusIcon, PlusIcon } from 'lucide-react'

const MAX_ALLOWED_FONT_SIZE = 100
const MIN_ALLOWED_FONT_SIZE = 8
export function parseAllowedFontSize(input: string): string {
  const match = input.match(/^(\d+(?:\.\d+)?)px$/)
  if (match) {
    const n = Number(match[1])
    if (n >= MIN_ALLOWED_FONT_SIZE && n <= MAX_ALLOWED_FONT_SIZE) {
      return input
    }
  }
  return ''
}

export default function FontSize({
  selectionFontSize,
  editor,
}: {
  selectionFontSize: string
  editor: LexicalEditor
}) {
  const [inputValue, setInputValue] = React.useState<string>(selectionFontSize)
  const [inputChangeFlag, setInputChangeFlag] = React.useState<boolean>(false)

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const inputValueNumber = Number(inputValue)

    if (e.key === 'Tab') {
      return
    }
    if (['e', 'E', '+', '-'].includes(e.key) || isNaN(inputValueNumber)) {
      e.preventDefault()
      setInputValue('')
      return
    }
    setInputChangeFlag(true)
    if (e.key === 'Enter' || e.key === 'Escape') {
      e.preventDefault()

      updateFontSizeByInputValue(inputValueNumber)
    }
  }

  const handleInputBlur = () => {
    if (inputValue !== '' && inputChangeFlag) {
      const inputValueNumber = Number(inputValue)
      updateFontSizeByInputValue(inputValueNumber)
    }
  }

  const updateFontSizeByInputValue = (inputValueNumber: number) => {
    let updatedFontSize = inputValueNumber
    if (inputValueNumber > MAX_ALLOWED_FONT_SIZE) {
      updatedFontSize = MAX_ALLOWED_FONT_SIZE
    } else if (inputValueNumber < MIN_ALLOWED_FONT_SIZE) {
      updatedFontSize = MIN_ALLOWED_FONT_SIZE
    }

    setInputValue(String(updatedFontSize))
    updateFontSizeInSelection(editor, String(updatedFontSize) + 'px', null)
    setInputChangeFlag(false)
  }

  React.useEffect(() => {
    setInputValue(selectionFontSize)
  }, [selectionFontSize])

  return (
    <>
      <button
        type="button"
        disabled={selectionFontSize !== '' && Number(inputValue) <= MIN_ALLOWED_FONT_SIZE}
        onClick={() => updateFontSize(editor, UpdateFontSizeType.decrement, inputValue)}
        className={'toolbar-popup__button'}
        aria-label="Decrease font size"
        title={`Decrease font size `}
      >
        <MinusIcon style={{ width: '16px', height: '16px' }} />
      </button>

      <input
        type="number"
        title="Font size"
        value={inputValue}
        className={styles.fontSizeInput}
        min={MIN_ALLOWED_FONT_SIZE}
        max={MAX_ALLOWED_FONT_SIZE}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyPress}
        onBlur={handleInputBlur}
      />

      <button
        type="button"
        disabled={selectionFontSize !== '' && Number(inputValue) >= MAX_ALLOWED_FONT_SIZE}
        onClick={() => updateFontSize(editor, UpdateFontSizeType.increment, inputValue)}
        className={'toolbar-popup__button'}
        aria-label="Increase font size"
        title={`Increase font size `}
      >
        <PlusIcon style={{ width: '16px', height: '16px' }} />
      </button>
    </>
  )
}
