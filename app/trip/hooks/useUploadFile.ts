import { createClient } from '@supabase/supabase-js'
import { useUpdateTripMutation } from '@generated/api'
// import { updateImageMetadataAction } from '../action/update-image-metadata'

export const useUploadFile = () => {
  const [updateTripMutation, { loading: isTripUpdating }] =
    useUpdateTripMutation()

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

    const {
      data: { publicUrl }
    } = await supabase.storage
      .from(process.env.NEXT_PUBLIC_BUCKET_NAME!)
      .getPublicUrl(uploadData.path)

    // Update image_url by mutation
    await updateTripMutation({
      variables: {
        id: tripId,
        set: {
          image_url: publicUrl
        }
      }
    })
  }

  return { uploadFile, isTripUpdating }
}
