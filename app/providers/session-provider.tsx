'use client'

import { ReactNode, createContext, useContext } from 'react'
import { redirect, usePathname } from 'next/navigation'
import { Footer, Header } from '@/components/navigation'

const SessionContext = createContext<string | undefined>(undefined)

export const useUserId = (): string => {
  const userId = useContext(SessionContext)
  if (typeof userId !== 'string') {
    redirect('/signin')
  }
  return userId
}
export function SessionProvider({
  children,
  userId
}: {
  children: ReactNode
  userId: string
}) {
  const pathname = usePathname()
  console.log(pathname)
  const AUTH_PATH_NAMES = ['/signin', '/signup']
  return AUTH_PATH_NAMES.includes(pathname) ? (
    <SessionContext.Provider value={userId}>{children}</SessionContext.Provider>
  ) : (
    <SessionContext.Provider value={userId}>
      <Header />
      {children}
      <Footer />
    </SessionContext.Provider>
  )
}
