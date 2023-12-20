'use server'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { createClient } from '@/(auth)/supabase/server'

export const signOut = async (): Promise<void> => {
  const supabase = createClient(cookies())

  const { error } = await supabase.auth.signOut({ scope: 'global' })
  if (error) {
    throw error
  } else {
    redirect('/signin')
  }
}
