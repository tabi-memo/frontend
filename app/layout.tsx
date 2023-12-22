import { Roboto } from 'next/font/google'
import './globals.css'
import { cookies } from 'next/headers'
import { cookieName } from '@/(auth)/uuid'
import { ApolloWrapper } from '@/providers/apollo-provider'
import { ChakraProvider } from '@/providers/chakra-provider'
import { SessionProvider } from '@/providers/session-provider'
import type { Metadata } from 'next'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Tabi Memo App',
  description:
    'Planning, managing, and sharing your trip with your friends and family.'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  const uuid = cookies().get(cookieName)?.value ?? undefined
  return (
    <html lang="en" className={roboto.className}>
      <body>
        <ChakraProvider>
          <ApolloWrapper>
            {uuid ? (
              <SessionProvider uuid={uuid}>{children}</SessionProvider>
            ) : (
              children
            )}
          </ApolloWrapper>
        </ChakraProvider>
      </body>
    </html>
  )
}
