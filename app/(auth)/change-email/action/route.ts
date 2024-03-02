import { NextRequest, NextResponse } from 'next/server'

import { createClient } from '@/(auth)/supabase/with-request'

export const POST = async (req: NextRequest): Promise<NextResponse> => {
  const { supabase } = createClient(req)

  const data = await req.json()

  const { error } = await supabase.auth.updateUser({
    email: data.email
  })
  if (error) {
    console.log(error)
    return NextResponse.json(error.message, { status: 500 })
  } else {
    console.log('ok')
    return NextResponse.json('ok', { status: 200 })
  }
}
