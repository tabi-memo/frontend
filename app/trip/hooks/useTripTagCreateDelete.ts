import { useToast } from '@chakra-ui/react'
import { TripTagsArgs } from '../components/trip-form'
import {
  useCreateTripTagMutation,
  useDeleteTripTagMutation
} from '@generated/api'

export const useTripTagCreateDelete = (
  tripId: string,
  tripTags?: TripTagsArgs
) => {
  const toast = useToast()
  const [createTripTagMutation, { loading: isTripTagCreating }] =
    useCreateTripTagMutation()
  const [deleteTripTagMutation, { loading: isTripTagDeleting }] =
    useDeleteTripTagMutation()

  const tagClickHandler = async (selectedTagId: string) => {
    try {
      const isTagIdAlreadyExists = tripTags?.data.find(
        (tripTag) => tripTag.tag_id === selectedTagId
      )

      if (isTagIdAlreadyExists) {
        await deleteTripTagMutation({
          variables: {
            id: isTagIdAlreadyExists.id
          }
        })
        tripTags?.refetch()
        return
      }

      if (!isTagIdAlreadyExists) {
        await createTripTagMutation({
          variables: {
            tripId: tripId,
            tagId: selectedTagId
          }
        })
        tripTags?.refetch()
      }
    } catch (error) {
      console.error(error)
      window.scroll({ top: 0 })

      toast({
        title: "We're sorry, but you failed to update a tag",
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
    tagClickHandler,
    isTripTagCreating,
    isTripTagDeleting
  }
}
