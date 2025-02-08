import { useMediaQuery } from 'usehooks-ts'

export function useWindowSize() {
  // Using the breakpoints from your tailwind config
  const isSm = useMediaQuery('(min-width: 40rem)') // 640px
  const isMd = useMediaQuery('(min-width: 48rem)') // 768px
  const isLg = useMediaQuery('(min-width: 60rem)') // 960px
  const isXl = useMediaQuery('(min-width: 76rem)') // 1216px

  return {
    isSm,
    isMd,
    isLg,
    isXl,
  } as const
}
