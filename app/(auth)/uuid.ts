import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import type { Session } from '@supabase/supabase-js'

const cookieName = 'user_uuid'

export const getUuid = () => cookies().get(cookieName)?.value ?? undefined

export const setUuidWithHeaders = (
  headers: Headers,
  session: Session
): Headers => {
  headers.append(
    'set-cookie',
    NextResponse.next()
      .cookies.set(cookieName, session.user.id, {
        httpOnly: true,
        sameSite: 'lax',
        maxAge: 60 * 60 * 24, // 24 hours
        path: '/'
      })
      .toString()
  )
  return headers
}
