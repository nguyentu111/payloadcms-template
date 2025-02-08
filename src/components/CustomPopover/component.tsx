'use client'

import { Theme } from '@/providers/Theme/types'
import type React from 'react'
import { useState, useEffect, useRef, type ReactNode } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { cn } from '@/utilities/ui'
interface PopoverProps {
  anchorRef: React.RefObject<HTMLElement>
  children: ReactNode
  isOpen: boolean
  onClose: () => void
  theme?: Theme | null | undefined
  anchorIsTrigger: boolean
}

export const CustomPopover: React.FC<PopoverProps> = ({
  anchorRef,
  children,
  isOpen,
  onClose,
  anchorIsTrigger,
}) => {
  const [style, setStyle] = useState({ top: -99999, left: -99999, width: 0 })
  const popoverRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const updateStyle = () => {
      if (anchorRef.current && popoverRef.current) {
        const anchorRect = anchorRef.current.getBoundingClientRect()
        const popoverRect = popoverRef.current.getBoundingClientRect()
        const width = anchorIsTrigger ? popoverRect.width : anchorRect.width
        setStyle({
          top: anchorRect.bottom,
          left: anchorRect.left + window.scrollX - width / 2 + anchorRect.width / 2,
          width,
        })
      }
    }

    updateStyle()
    if (isOpen) {
      window.addEventListener('resize', updateStyle)
      window.addEventListener('scroll', updateStyle)
    }

    return () => {
      window.removeEventListener('resize', updateStyle)
      window.removeEventListener('scroll', updateStyle)
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
          className={cn('bg-white !text-black', {
            // 'w-screen max-w-container translate-x-[2rem]': isMd && !anchorIsTrigger,
            // 'w-screen max-w-container translate-x-[1rem]': !isMd && !anchorIsTrigger,
          })}
          style={{
            position: 'fixed',
            top: `${style.top}px`,
            left: `${style.left}px`,
            width: style.width == 0 ? 'unset' : `${style.width}px`,
            zIndex: 1000,
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
            borderRadius: '0 0 4px 4px',
            padding: '16px',
          }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
