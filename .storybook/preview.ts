import type { Preview } from '@storybook/react'
import { customTheme } from '../app/theme'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    chakra: {
      customTheme
    }
  }
}

export default preview
