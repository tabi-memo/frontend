import React, { useEffect } from 'react'
import { ChakraProvider, useColorMode } from '@chakra-ui/react'
import { StoryFn } from '@storybook/react'
import { customTheme } from '../app/theme'
import { MockedProvider } from '@apollo/client/testing'

type ColorModeProps = {
  colorMode: 'light' | 'dark'
  children: JSX.Element
}

function ColorMode(props: ColorModeProps) {
  const { setColorMode } = useColorMode()

  useEffect(() => {
    setColorMode(props.colorMode)
  }, [props.colorMode])

  return props.children
}

const withChakra = (StoryFn: StoryFn, context) => (
  <ChakraProvider theme={customTheme}>
    <ColorMode colorMode={context.globals.colorMode}>
      <StoryFn />
    </ColorMode>
  </ChakraProvider>
)

export const decorators = [withChakra]

export const globalTypes = {
  colorMode: {
    name: 'Color Mode',
    defaultValue: 'light',
    toolbar: {
      items: [
        { title: 'Light', value: 'light' },
        { title: 'Dark', value: 'dark' }
      ],
      dynamicTitle: true
    }
  }
}

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/i
    }
  },
  chakra: {
    theme: customTheme
  },
  apolloClient: {
    MockedProvider
  }
}
