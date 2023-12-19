'use client'

import { ReactNode, createContext } from 'react'

export const SessionContext = createContext<string | undefined>(undefined)

export function SessionProvider({
  children,
  uuid
}: {
  children: ReactNode
  uuid?: string
}) {
  return (
    <SessionContext.Provider value={uuid}>{children}</SessionContext.Provider>
  )
}
