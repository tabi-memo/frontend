import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react'
import { customColors } from '@/theme/color'
export const customTheme = extendTheme(
  {
    fonts: {
      heading: 'var(--font-rubik)',
      body: 'var(--font-rubik)'
    },
    colors: customColors,
    sizes: {
      // Use with padding (ex: Container component)
      container: {
        sm: '648px',
        md: '710px',
        lg: '1024px',
        xl: '1232px'
      }
    }
  },
  withDefaultColorScheme({ colorScheme: 'primary' })
)
