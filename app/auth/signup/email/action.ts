'use server'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { createClient } from '../../supabase'
import type { SignUpSchema } from './page'

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
    console.error(error)
  } else {
    return redirect('/')
  }
}
