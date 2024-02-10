import { createClient } from '@supabase/supabase-js'
import { updateImageMetadataAction } from '../action/update-image-metadata'

export const useUploadFile = () => {
  // Upload image to Supabase Storage & Update image_url by server action
  const uploadFile = async (file: File, tripId: string) => {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_API_KEY!
    )

    // TODO: Authenticated user can upload images with policy
    const { data: uploadData, error: uploadError } = await supabase.storage
      .from('tabi-memo-uploads')
      .upload(`trips/${tripId}/${file.name}`, file, { upsert: true })

    if (uploadError) throw new Error(uploadError.message)

    // NOTE: Server action doen't return result in Client Component. I don't know why.
    await updateImageMetadataAction(tripId, uploadData.path)
  }

  return { uploadFile }
}
