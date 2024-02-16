import { useState } from 'react'
import { createClient } from '@supabase/supabase-js'
import { updateImageMetadataAction } from '../action/update-image-metadata'

export const useUploadFile = () => {
  const [isLoading, setIsLoading] = useState(false)

  const uploadFile = async (
    profile_picture_url: string | null,
    selectedImage: File,
    userId: string
  ) => {
    setIsLoading(true)

    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_API_KEY!
    )

    if (profile_picture_url) {
      const parts = profile_picture_url.split('/')
      const fileName = parts.pop()

      await supabase.storage
        .from('tabi-memo-uploads')
        .remove([`account/edit/${fileName}`])
    }

    const { data: uploadData, error: uploadError } = await supabase.storage
      .from('tabi-memo-uploads')
      .upload(`account/edit/${selectedImage.name}`, selectedImage, {
        contentType: selectedImage.type
      })

    if (uploadError) throw new Error(uploadError.message)

    await updateImageMetadataAction(userId, uploadData.path)

    // Return any additional data if needed
    return uploadData
  }

  return { uploadFile, isLoading }
}
