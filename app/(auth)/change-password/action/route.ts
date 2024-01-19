import { NextRequest, NextResponse } from 'next/server'
import type { ChangePasswordSchema } from '@/(auth)/change-password/schema'
import { createClient } from '@/(auth)/supabase/with-request'

const assertVerifyOldPassword = async (
  supabase: ReturnType<typeof createClient>['supabase'],
  data: ChangePasswordSchema
): Promise<
  | { kind: 'verified' }
  | { kind: 'noSession'; message: string }
  | { kind: 'wrongPassword'; message: string }
> => {
  const {
    data: { session },
    error
  } = await supabase.auth.getSession()
  if (error || !session?.user.email) {
    return { kind: 'noSession', message: 'user session is not detected' }
  }

  const {
    error: signInError,
    data: { session: signInSession }
  } = await supabase.auth.signInWithPassword({
    email: session.user.email,
    password: data.oldPassword
  })
  if (signInError || !signInSession) {
    return { kind: 'wrongPassword', message: 'Old Password is not correct' }
  }
  return { kind: 'verified' }
}

export const POST = async (req: NextRequest): Promise<NextResponse> => {
  const { supabase } = createClient(req)

  const data = (await req.json()) as ChangePasswordSchema
  const res = await assertVerifyOldPassword(supabase, data)
  if (res.kind !== 'verified') {
    return NextResponse.json(res.message, { status: 401 })
  }

  const { error } = await supabase.auth.updateUser({
    password: data.newPassword
  })
  if (error) {
    return NextResponse.json(error.message, { status: 500 })
  } else {
    return NextResponse.json('ok', { status: 200 })
  }
}
