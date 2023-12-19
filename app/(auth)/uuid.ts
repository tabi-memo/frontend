import { cookies } from 'next/headers'
import type { Session } from '@supabase/supabase-js'
import type { NextResponse } from 'next/server'

const cookieName = 'user_uuid'

export const getUuid = () => cookies().get(cookieName)?.value ?? undefined

export const setUuid = (res: NextResponse, session: Session): NextResponse => {
  res.cookies.set(cookieName, session.user.id)
  return res
}
