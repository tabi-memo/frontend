'use server'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { createClient } from '@/auth/supabase'
import type { SignUpSchema } from './schema'

export const signUp = async ({
  email,
  password
}: SignUpSchema): Promise<void> => {
  const supabase = createClient(cookies())

  const { error } = await supabase.auth.signUp({
    email,
    password
  })
  if (error) {
    throw error
  } else {
    return redirect('/')
  }
}
