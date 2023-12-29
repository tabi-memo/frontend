'use server'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { createClient } from '@/(auth)/supabase/server'
import { USER_UUID_COOKIE_NAME } from '../uuid'

export const signOut = async (): Promise<void> => {
  const c = cookies()
  const supabase = createClient(c)

  const { error } = await supabase.auth.signOut({ scope: 'global' })

  if (error) {
    throw error
  }

  c.delete(USER_UUID_COOKIE_NAME)
  redirect('/signin')
}
