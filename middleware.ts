import { NextResponse, type NextRequest } from 'next/server'
import { createClient } from '@/(auth)/supabase/middleware'
import { setUuid } from '@/(auth)/uuid'

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)'
  ]
}

export async function middleware(request: NextRequest) {
  const { supabase, response } = createClient(request)

  // Refresh session if expired - required for Server Components
  // https://supabase.com/docs/guides/auth/auth-helpers/nextjs#managing-session-with-middleware
  const {
    error,
    data: { session }
  } = await supabase.auth.getSession()

  const signinUri = '/signin'

  if (
    request.nextUrl.pathname.startsWith(signinUri) ||
    request.nextUrl.pathname.startsWith('/signup')
  ) {
    if (session) {
      return setUuid(NextResponse.redirect(new URL('/', request.url)), session)
    }
    return response
  }
  if (error || !session) {
    return NextResponse.redirect(new URL(signinUri, request.url))
  }
  return setUuid(response, session)
}
