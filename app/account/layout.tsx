'use client'

import { Header, Footer } from '@/components/navigation'

export default function AccountLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
