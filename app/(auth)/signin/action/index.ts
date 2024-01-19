'use server'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import type { SignInSchema } from '@/(auth)/signin/schema'
import { createClient } from '@/(auth)/supabase/with-cookie'

export const signIn = async ({
  email,
  password
}: SignInSchema): Promise<void> => {
  const supabase = createClient(cookies())

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password
  })
  if (error) {
    throw error
  } else {
    return redirect('/')
  }
}
