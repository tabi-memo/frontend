import { useToast } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import { useUserId } from '@/providers/session-provider'
import { useTripsGet } from '.'
import { useDeleteTripMutation } from '@generated/api'

export const useTripDelete = (id: string) => {
  const toast = useToast()
  const router = useRouter()
  const userId = useUserId()
  const [deleteTripMutation, { loading: isTripDeleting }] =
    useDeleteTripMutation()

  const { tripsRefetch } = useTripsGet()

  const deleteTrip = async () => {
    try {
      await deleteTripMutation({
        variables: {
          id,
          userId
        }
      })

      tripsRefetch()
      router.push('/')

      toast({
        title: 'Successfully deleted!',
        status: 'success',
        duration: 2000,
        isClosable: true,
        position: 'top'
      })
    } catch (error) {
      console.error(error)
      toast({
        title: "We're sorry, but you failed to delete a trip",
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
    deleteTrip,
    isTripDeleting
  }
}
