'use server'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import type { ChangePasswordSchema } from '@/(auth)/change-password/schema'
import { createClient } from '@/(auth)/supabase/server'

const assertVerifyOldPassword = async (
  supabase: ReturnType<typeof createClient>,
  data: ChangePasswordSchema
): Promise<void> => {
  const {
    data: { session },
    error
  } = await supabase.auth.getSession()
  if (error || !session?.user.email) {
    throw new Error('user session is not detected')
  }

  const {
    error: signInError,
    data: { session: signInSession }
  } = await supabase.auth.signInWithPassword({
    email: session.user.email,
    password: data.oldPassword
  })
  if (signInError || !signInSession) {
    throw new Error('Old Password is not correct')
  }
}

export const changePassword = async (
  data: ChangePasswordSchema
): Promise<void> => {
  const supabase = createClient(cookies())

  assertVerifyOldPassword(supabase, data)

  const { error } = await supabase.auth.updateUser({
    password: data.newPassword
  })
  if (error) {
    throw error
  } else {
    return redirect('/')
  }
}
