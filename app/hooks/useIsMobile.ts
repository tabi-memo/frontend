import { useBreakpointValue } from '@chakra-ui/react'

type BreakpointType = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export const useIsMobile = (breakpoint: BreakpointType = 'md') => {
  return { isMobile: useBreakpointValue({ base: true, [breakpoint]: false }) }
}
