import { NextResponse, type NextRequest } from 'next/server'
import { createClient } from '@/(auth)/supabase/middleware'

export async function middleware(request: NextRequest) {
  const { supabase, response } = createClient(request)

  // Refresh session if expired - required for Server Components
  // https://supabase.com/docs/guides/auth/auth-helpers/nextjs#managing-session-with-middleware
  const {
    error,
    data: { session }
  } = await supabase.auth.getSession()

  const signinUri = '/signin'

  if (request.nextUrl.pathname.startsWith(signinUri)) {
    return response
  }
  if (error || !session) {
    return NextResponse.redirect(new URL(signinUri, request.url))
  }

  return response
}
