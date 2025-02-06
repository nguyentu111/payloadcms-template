import { useDebounce } from '@/utilities/useDebounce'
import { useState } from 'react'
import { Popover, PopoverContent, PopoverTrigger, PopoverAnchor } from '../ui/popover'

export const HoverPopover = ({
  trigger,
  content,
  anchorRef,
}: {
  trigger: React.ReactNode
  content: React.ReactNode
  anchorRef?: React.RefObject<HTMLElement>
}) => {
  const [open, setOpen] = useState(false)
  const debouncedOpen = useDebounce(open, 100)
  const handleMouseEnter = () => {
    setOpen(true)
  }

  const handleMouseLeave = () => {
    setOpen(false)
  }
  return (
    <Popover open={debouncedOpen} onOpenChange={setOpen}>
      <PopoverTrigger onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {trigger}
      </PopoverTrigger>
      {anchorRef && <PopoverAnchor virtualRef={anchorRef} />}
      <PopoverContent onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {content}
      </PopoverContent>
    </Popover>
  )
}
