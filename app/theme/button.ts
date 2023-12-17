export const Button = {
  // Override the default dark mode theme
  variants: {
    solid: ({ colorMode }: { colorMode: 'dark' | 'light' }) => ({
      bg: colorMode === 'dark' ? 'primary.500' : 'primary.500'
    }),
    outline: ({ colorMode }: { colorMode: 'dark' | 'light' }) => ({
      color: colorMode === 'dark' ? 'primary.700' : 'primary.700'
    }),
    roundIcon: ({ colorMode }: { colorMode: 'dark' | 'light' }) => ({
      color: colorMode === 'dark' ? ' primary.700' : 'primary.600',
      bgColor: colorMode === 'dark' ? 'gray.400' : 'gray.100',
      borderRadius: 'full',
      minW: 'auto',
      w: { base: '34px', md: '48px' },
      h: { base: '34px', md: '48px' },
      _hover: {
        opacity: '.8'
      }
    })
  }
}
