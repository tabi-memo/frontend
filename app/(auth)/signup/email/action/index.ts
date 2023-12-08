'use server'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import type { SignUpSchema } from '@/(auth)/signup/email/schema'
import { createClient } from '@/(auth)/supabase/server'

export const signUp = async ({
  email,
  password,
  userName
}: SignUpSchema): Promise<void> => {
  const supabase = createClient(cookies())

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        name: userName
      }
    }
  })
  if (error) {
    throw error
  } else {
    return redirect('/')
  }
}
