'use client'

import { PaintBucket } from 'lucide-react'
import React, { useEffect } from 'react'
import type { SVGProps } from 'react'

type Props = SVGProps<SVGSVGElement> & { underscoreColor?: string }

export function FontColorIcon(props?: Props) {
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        border: 'none',
        outline: 'none',
        backgroundColor: 'transparent',
      }}
      id="lexical-font-color-icon"
    >
      <PaintBucket
        style={{
          width: '16px',
          height: '16px',
        }}
      />
    </div>
  )
}
