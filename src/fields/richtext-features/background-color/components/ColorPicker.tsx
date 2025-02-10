'use client'
import { useState } from 'react'
import styles from './color-picker.module.scss'

const DEFAULT_COLORS = [
  '#FF0000',
  '#FF6347',
  '#FF1493',
  '#DC143C',
  '#B22222',
  '#800000',
  '#FF4500',
  '#FFD700',
  '#FFFF00',
  '#ADFF2F',
  '#32CD32',
  '#008000',
  '#228B22',
  '#7FFF00',
  '#9ACD32',
  '#00FF00',
  '#00FFFF',
  '#1E90FF',
  '#4682B4',
  '#0000FF',
  '#000080',
  '#4169E1',
  '#8A2BE2',
  '#8B0000',
  '#800080',
  '#C71585',
  '#D2691E',
  '#A52A2A',
  '#C0C0C0',
  '#808080',
  '#A9A9A9',
  '#FFFFFF',
  '#000000',
]

export function ColorPicker({
  onChange,
  color,
}: {
  onChange: (color: string) => void
  color?: string
}) {
  const [selectedColor, setSelectedColor] = useState(color ?? '')
  const [customColor, setCustomColor] = useState('')

  const handleColorClick = (color: string) => {
    setSelectedColor(color)
    onChange(color)
  }

  const handleCustomColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomColor(e.target.value)
    setSelectedColor(e.target.value)
    onChange(customColor)
  }

  return (
    <div className={styles.colorPicker}>
      <div className={styles.grid}>
        {DEFAULT_COLORS.map((color, index) => (
          <button
            key={index}
            className={styles.colorSquare}
            style={{ backgroundColor: color }}
            onClick={() => handleColorClick(color)}
            aria-label={`Select color ${color}`}
          >
            {selectedColor === color && <span className={styles.selectedIndicator}>✓</span>}
          </button>
        ))}
      </div>
      <div className={styles.customColor}>
        <input
          type="color"
          value={customColor}
          onChange={handleCustomColorChange}
          className={styles.colorInput}
          aria-label="Choose custom color"
        />
        <span className={styles.customLabel}>Custom color</span>
      </div>
    </div>
  )
}
