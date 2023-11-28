import { Roboto } from 'next/font/google'
import './globals.css'
import { ApolloWrapper } from '@/apollo-provider'
import { Providers } from '@/Providers'
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
  return (
    <html lang="en" className={roboto.className}>
      <body>
        <ApolloWrapper>
          <Providers>{children}</Providers>
        </ApolloWrapper>
      </body>
    </html>
  )
}
