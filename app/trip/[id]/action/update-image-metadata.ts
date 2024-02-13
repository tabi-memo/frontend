'use server'
import { createServerActionClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

export const updateImageMetadataAction = async (
  id: string,
  filePath: string
): Promise<
  | { status: 'success'; data: { publicUrl: string } }
  | { status: 'error'; data: { publicUrl: string }; error: { message: string } }
> => {
  try {
    const cookieStore = cookies()
    // NOTE: Use createServerActionClient instead of createClient in with-cookie.ts
    //       https://supabase.com/docs/guides/auth/auth-helpers/nextjs?language=ts#server-actions
    const supabase = createServerActionClient({ cookies: () => cookieStore })

    // Supabase Storage API is not available in the server action.
    // const { data: uploadData, error: uploadError } = await supabase.storage
    //   .from('tabi-memo-uploads')
    //   .upload(`trips/${id}/${file.name}`, file, { upsert: true })

    // if (uploadError) throw uploadError

    const {
      data: { publicUrl }
    } = await supabase.storage
      .from(process.env.NEXT_PUBLIC_BUCKET_NAME!)
      .getPublicUrl(filePath)

    const updateResponse = await supabase
      .from('trips')
      .update({ image_url: publicUrl })
      .match({ id })

    if (updateResponse.error) {
      return {
        status: 'error',
        data: { publicUrl },
        error: { message: updateResponse.error.message }
      }
    }

    return { status: 'success', data: { publicUrl } }
  } catch (error) {
    console.error({ error })
    return {
      status: 'error',
      data: { publicUrl: '' },
      error: { message: 'Failed to upload image' }
    }
  }
}
