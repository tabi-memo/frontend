import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react'
import { Button } from '@/theme/button'
import { customColors } from '@/theme/color'

export const customTheme = extendTheme(
  {
    fonts: {
      heading: 'var(--font-rubik)',
      body: 'var(--font-rubik)'
    },
    styles: {
      global: {
        a: {
          _hover: {
            textDecoration: 'none'
          }
        }
      }
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
    },
    components: {
      Button
    }
  },
  withDefaultColorScheme({ colorScheme: 'primary' })
)
