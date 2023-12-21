'use client'

import { ReactNode, createContext, useContext } from 'react'
import { redirect } from 'next/navigation'

const SessionContext = createContext<string | undefined>(undefined)

export const useUserUuid = (): string => {
  const uuid = useContext(SessionContext)
  if (typeof uuid !== 'string') {
    redirect('/')
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
  return (
    <SessionContext.Provider value={uuid}>{children}</SessionContext.Provider>
  )
}
