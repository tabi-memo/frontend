'use server'
import { cookies } from 'next/headers'
import type { ChangePasswordSchema } from '@/(auth)/change-password/schema'
import { createClient } from '@/(auth)/supabase/with-cookie'

const assertVerifyOldPassword = async (
  auth: ReturnType<typeof createClient>['auth'],
  data: ChangePasswordSchema
): Promise<
  | { kind: 'verified' }
  | { kind: 'noSession'; message: string }
  | { kind: 'wrongPassword'; message: string }
> => {
  const {
    data: { session },
    error
  } = await auth.getSession()
  if (error || !session?.user.email) {
    return { kind: 'noSession', message: 'user session is not detected' }
  }

  const {
    error: signInError,
    data: { session: signInSession }
  } = await auth.signInWithPassword({
    email: session.user.email,
    password: data.oldPassword
  })
  if (signInError || !signInSession) {
    return { kind: 'wrongPassword', message: 'Old Password is not correct' }
  }
  return { kind: 'verified' }
}

export const changePasswordAction = async (params: ChangePasswordSchema) => {
  const c = cookies()
  const { auth } = createClient(c)
  const res = await assertVerifyOldPassword(auth, params)

  if (res.kind !== 'verified') {
    return { error: new Error(res.message) }
  }

  const { error } = await auth.updateUser({
    password: params.newPassword
  })

  if (error) {
    console.error({ error })
    return { error }
  } else {
    console.log('Server Action: Change password success')
    return { response: { ok: true, body: 'Change password success' } }
  }
}
