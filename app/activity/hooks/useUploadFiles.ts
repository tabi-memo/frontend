import { createClient } from '@supabase/supabase-js'
import { useCreateActivityUploadedFilesMutation } from '@generated/api'

export const useUploadFiles = () => {
  const [createActivityUploadedFilesMutation] =
    useCreateActivityUploadedFilesMutation()

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
        .from(process.env.NEXT_PUBLIC_BUCKET_NAME!)
        .upload(
          `trips/${activityDetails.tripId}/activity/${activityDetails.id}/${file.name}`,
          file,
          { upsert: true }
        )

      return { data, fileName: file.name, error }
    })

    const uploadResults = await Promise.all(uploadPromises)
    const uploadErrors = uploadResults.filter((result) => result.error)

    if (uploadErrors.length > 0) {
      throw new Error(uploadErrors[0].error!.message)
    }

    // get the public URL of the uploaded files
    const results = uploadResults.map((result) => result)
    const dataWithPublicUrls = await Promise.all(
      results.map((result) => {
        const {
          data: { publicUrl }
        } = supabase.storage
          .from(process.env.NEXT_PUBLIC_BUCKET_NAME!)
          .getPublicUrl(result.data!.path!)

        return { publicUrl, fileName: result.fileName }
      })
    )

    // create a record in the uploaded_files table
    await createActivityUploadedFilesMutation({
      variables: {
        objects: dataWithPublicUrls.map((data) => ({
          activity_id: activityDetails.id,
          file_name: data.fileName,
          file_url: data.publicUrl
        }))
      },
      refetchQueries: ['activityCollection']
    })
  }

  return { uploadFiles }
}
