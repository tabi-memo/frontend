import { useToast } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import { formatToISODate } from '@/libs/utils'
import { TripDetailsArgs, TripTagsArgs } from '../components/trip-form'
import { TripSchema } from '../schema'
import { useUploadFile } from './useUploadFile'
import { useTripsGet } from '.'
import {
  useUpdateTripMutation,
  useCreateTripTagMutation,
  useDeleteTripTagMutation
} from '@generated/api'

export const useTripUpdate = (
  tripTags?: TripTagsArgs,
  tripDetails?: TripDetailsArgs
) => {
  const toast = useToast()
  const router = useRouter()
  const [updateTripMutation, { loading: isTripUpdating }] =
    useUpdateTripMutation()

  const [createTripTagMutation, { loading: isTripTagCreating }] =
    useCreateTripTagMutation()
  const [deleteTripTagMutation, { loading: isTripTagDeleting }] =
    useDeleteTripTagMutation()

  const { tripsRefetch } = useTripsGet()
  const { uploadFile } = useUploadFile()

  const updateTrip = async (data: TripSchema) => {
    if (!tripDetails) throw new Error('Trip details is not found')

    try {
      // Trip Update
      const res = await updateTripMutation({
        variables: {
          id: tripDetails.id,
          set: {
            title: data.title,
            date_from: formatToISODate(data.date_from),
            date_to: data.date_to ? formatToISODate(data.date_to) : null,
            image_url: data.image_url,
            cost: data.cost,
            cost_unit: data.cost_unit
          }
        }
      })

      const updatedTripId = res.data?.updatetripsCollection?.records[0]?.id

      if (!updatedTripId) throw new Error('Failed to update a trip')

      // TripTags Update
      const selectedTags = data.selectedTags
      const tripTagsArray = tripTags?.data || []

      const deletePromises = tripTagsArray
        .filter((tag) => !selectedTags.includes(tag.tag_id))
        .map((tag) =>
          deleteTripTagMutation({
            variables: {
              id: tag.id
            }
          })
        )
      const createPromises = selectedTags
        .filter((tag) => !tripTagsArray.find((t) => t.tag_id === tag))
        .map((tag) =>
          createTripTagMutation({
            variables: {
              tripId: tripDetails.id,
              tagId: tag
            }
          })
        )

      await Promise.all([...deletePromises, ...createPromises])

      if (data.uploaded_image_file && updatedTripId) {
        await uploadFile(data.uploaded_image_file, updatedTripId)
      }

      tripDetails.refetch()
      tripTags?.refetch()
      tripsRefetch()
      router.push(`/trip/${updatedTripId}`)

      toast({
        title: 'Successfully updated!',
        status: 'success',
        duration: 2000,
        isClosable: true,
        position: 'top'
      })
    } catch (error) {
      console.error(error)
      // NOTE: For case tripTags (one or all) updating failed, refetch tripTags to show the latest data
      tripTags?.refetch()
      window.scroll({ top: 0 })

      toast({
        title: "We're sorry, but you failed to update a trip",
        description:
          error instanceof Error ? error.message : 'Please try again later.',
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'top'
      })
    }
  }

  return {
    updateTrip,
    isTripUpdating,
    isTripTagsUpdating: isTripTagCreating || isTripTagDeleting
  }
}
