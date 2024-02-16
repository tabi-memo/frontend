import { createClient } from '@supabase/supabase-js'
// import { useCreateActivityUploadedFilesMutation } from '@generated/api'

export const useUploadFiles = () => {
  const uploadFiles = async (
    files: File[],
    activityDetails: { id: string; tripId: string }
  ) => {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_API_KEY!
    )

    const uploadPromises = files.map(async (file) => {
      const { data, error } = await supabase.storage
        .from('tabi-memo-uploads')
        .upload(
          `trips/${activityDetails.tripId}/activity/${activityDetails.id}/${file.name}`,
          file,
          { upsert: true }
        )

      return { data, fileName: file.name, error }
    })

    const uploadResults = await Promise.all(uploadPromises)

    const uploadErrors = uploadResults.filter((result) => result.error)

    if (uploadErrors.length) {
      throw new Error(uploadErrors[0].error!.message)
    }

    // create a record in the uploaded_files table
    // const uploadedFiles = uploadResults.map((result) => ({
    //   file_name: result.fileName,
    //   file_url: result.data?.path
    // }))
  }

  return { uploadFiles }
}
