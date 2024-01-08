'use client'

import { ReactNode, createContext, useContext } from 'react'
import { redirect } from 'next/navigation'

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
  return (
    <SessionContext.Provider value={userId}>{children}</SessionContext.Provider>
  )
}
