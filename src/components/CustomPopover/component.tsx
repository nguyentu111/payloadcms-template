'use client'

import { Theme } from '@/providers/Theme/types'
import type React from 'react'
import { useState, useEffect, useRef, type ReactNode } from 'react'
import { AnimatePresence, motion } from 'motion/react'
interface PopoverProps {
  anchorRef: React.RefObject<HTMLElement>
  children: ReactNode
  isOpen: boolean
  onClose: () => void
  theme?: Theme | null | undefined
}

export const CustomPopover: React.FC<PopoverProps> = ({ anchorRef, children, isOpen, onClose }) => {
  const [position, setPosition] = useState({ top: -9999, left: -9999 })
  const popoverRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const updatePosition = () => {
      if (anchorRef.current && popoverRef.current) {
        const anchorRect = anchorRef.current.getBoundingClientRect()
        const popoverRect = popoverRef.current.getBoundingClientRect()

        setPosition({
          top: anchorRect.bottom,
          left: anchorRect.left + window.scrollX - popoverRect.width / 2 + anchorRect.width / 2,
        })
      }
    }

    if (isOpen) {
      updatePosition()
      window.addEventListener('resize', updatePosition)
      window.addEventListener('scroll', updatePosition)
    }

    return () => {
      window.removeEventListener('resize', updatePosition)
      window.removeEventListener('scroll', updatePosition)
    }
  }, [isOpen, anchorRef])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target as Node) &&
        anchorRef.current &&
        !anchorRef.current.contains(event.target as Node)
      ) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen, onClose, anchorRef])
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.1 }}
          ref={popoverRef}
          className="bg-background"
          style={{
            visibility: isOpen ? 'visible' : 'hidden',
            position: 'fixed',
            top: `${position.top}px`,
            left: `${position.left}px`,
            zIndex: 1000,
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
            borderRadius: '4px',
            padding: '16px',
          }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
