'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider as ChakraProviderReact } from '@chakra-ui/react'
import { Roboto } from 'next/font/google'
import { customTheme } from '@/theme'

const roboto = Roboto({
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap'
})

export function ChakraProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --font-rubik: ${roboto.style.fontFamily};
          }
        `}
      </style>
      <CacheProvider>
        <ChakraProviderReact theme={customTheme}>
          {children}
        </ChakraProviderReact>
      </CacheProvider>
    </>
  )
}
