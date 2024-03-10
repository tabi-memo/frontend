'use server'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import type { SignUpSchema } from '@/(auth)/signup/schema'
import { createClient } from '@/(auth)/supabase/with-cookie'

export const signUp = async ({
  email,
  password,
  name
}: SignUpSchema): Promise<void> => {
  const supabase = createClient(cookies())

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        name
      }
    }
  })
  if (error) {
    throw error
  } else {
    return redirect('/')
  }
}
