import { NextResponse, NextRequest } from 'next/server'
import { USER_UUID_COOKIE_NAME } from '@/(auth)/constants'
import { createClient } from '@/(auth)/supabase/with-request'

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
      return NextResponse.redirect(new URL('/', request.url))
    }
    return response
  }
  if (error || !session) {
    return NextResponse.redirect(new URL(signinUri, request.url))
  }

  const headers = new Headers(request.headers)
  if (!request.cookies.has(USER_UUID_COOKIE_NAME)) {
    headers.append(
      'set-cookie',
      NextResponse.next()
        .cookies.set(USER_UUID_COOKIE_NAME, session.user.id, {
          httpOnly: true,
          sameSite: 'lax',
          maxAge: 60 * 60 * 24, // 24 hours
          path: '/'
        })
        .toString()
    )
  }

  return NextResponse.next({
    headers
  })
}
