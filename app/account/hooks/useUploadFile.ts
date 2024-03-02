import { useState } from 'react'
import { useToast } from '@chakra-ui/react'
import { createClient } from '@supabase/supabase-js'
import { updateImageMetadataAction } from '../action/update-image-metadata'

export const useUploadFile = () => {
  const [isLoading, setIsLoading] = useState(false)
  const toast = useToast()
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
        upsert: true
      })

    if (uploadError) {
      toast({
        title: "We're sorry, but you failed to upload your profile image",
        description:
          uploadError instanceof Error
            ? uploadError.message
            : 'Please try again later.',
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'top'
      })
      throw new Error(uploadError.message)
    }

    await updateImageMetadataAction(userId, uploadData.path)

    // Return any additional data if needed
    return uploadData
  }

  return { uploadFile, isLoading }
}
