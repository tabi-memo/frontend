'use client'

import { ReactNode, createContext, useContext } from 'react'
import { redirect, usePathname } from 'next/navigation'
import { Footer, Header } from '@/components/navigation'

const SessionContext = createContext<string | undefined>(undefined)

export const useUserUuid = (): string => {
  const uuid = useContext(SessionContext)
  if (typeof uuid !== 'string') {
    redirect('/signin')
  }
  return uuid
}
export function SessionProvider({
  children,
  uuid
}: {
  children: ReactNode
  uuid: string
}) {
  const pathname = usePathname()
  return pathname === '/signin' || pathname === '/signup' ? (
    <SessionContext.Provider value={uuid}>{children}</SessionContext.Provider>
  ) : (
    <SessionContext.Provider value={uuid}>
      <Header />
      {children}
      <Footer />
    </SessionContext.Provider>
  )
}
