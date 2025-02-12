'use client'
import { ChevronUpIcon } from 'lucide-react'
import React, { useState, useEffect } from 'react'
import { Button } from '../ui/button'

export const ScrollToTop = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true)
      } else {
        setVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <Button
      aria-label="Scroll to top"
      onClick={scrollToTop}
      variant={'outline'}
      className={`fixed bottom-5 right-5 p-3 rounded-full transition-all duration-500 w-10 h-10 ${
        visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-5'
      }`}
    >
      <ChevronUpIcon className="w-5 h-5 " />
    </Button>
  )
}
