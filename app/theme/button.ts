export const Button = {
  // Override the default dark mode theme
  variants: {
    solid: ({ colorMode }: { colorMode: 'dark' | 'light' }) => ({
      bg: colorMode === 'dark' ? 'primary.500' : 'primary.500'
    }),
    outline: ({ colorMode }: { colorMode: 'dark' | 'light' }) => ({
      color: colorMode === 'dark' ? 'primary.700' : 'primary.700'
    })
  }
}
