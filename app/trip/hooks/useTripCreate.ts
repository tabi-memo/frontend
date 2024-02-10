import { useToast } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import { formatToISODate } from '@/libs/utils'
import { useUserId } from '@/providers/session-provider'
import { TripSchema } from '../schema'
import { useUploadFile } from './useUploadFile'
import { useTripsGet } from '.'
import { useCreateTripMutation, useCreateTripTagMutation } from '@generated/api'

export const useTripCreate = () => {
  const toast = useToast()
  const router = useRouter()
  const userId = useUserId()
  const [createTripMutation, { loading: isTripCreating }] =
    useCreateTripMutation()

  const [createTripTagMutation, { loading: isTripTagCreating }] =
    useCreateTripTagMutation()

  const { tripsRefetch } = useTripsGet()
  const { uploadFile } = useUploadFile()

  const createTrip = async (data: TripSchema) => {
    try {
      const res = await createTripMutation({
        variables: {
          object: {
            title: data.title,
            date_from: formatToISODate(data.date_from),
            date_to: data.date_to ? formatToISODate(data.date_to) : null,
            image_url: data.image_url,
            cost: data.cost,
            cost_unit: data.cost_unit,
            user_id: userId
          }
        }
      })

      const createdTripId = res.data?.insertIntotripsCollection?.records[0]?.id

      if (!createdTripId) throw new Error('Failed to create a trip')

      const selectedTags = data.selectedTags
      const createPromises = selectedTags.map((tag) =>
        createTripTagMutation({
          variables: {
            tripId: createdTripId,
            tagId: tag
          }
        })
      )

      await Promise.all([...createPromises])

      if (data.uploaded_image_file && createdTripId) {
        uploadFile(data.uploaded_image_file, createdTripId)
      }

      tripsRefetch()
      router.push('/')

      toast({
        title: 'Successfully created!',
        status: 'success',
        duration: 2000,
        isClosable: true,
        position: 'top'
      })
    } catch (error) {
      console.error(error)
      window.scroll({ top: 0 })

      toast({
        title: "We're sorry, but you failed to create a trip",
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
    createTrip,
    isTripCreating,
    isTripTagsUpdating: isTripTagCreating
  }
}
