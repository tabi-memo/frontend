import { useToast } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import { useRefetchTrips } from './useRefetchTrips'
import { useDeleteActivityMutation } from '@generated/api'

export const useActivityDelete = () => {
  const toast = useToast()
  const router = useRouter()
  const [deleteActivityMutation, { loading: isActivityDeleting }] =
    useDeleteActivityMutation()
  const { refetchTrips } = useRefetchTrips()

  const deleteActivity = async (activityId: string) => {
    try {
      const { data, errors } = await deleteActivityMutation({
        variables: {
          id: activityId
        },
        refetchQueries: ['activityCollection']
      })

      if (errors) throw new Error(errors[0].message)
      if (!data) throw new Error('Failed to delete an activity')

      const tripId = data.deleteFromactivityCollection.records[0].trip_id

      refetchTrips(tripId)
      router.push(`/trip/${tripId}`)
      toast({
        title: 'Successfully deleted!',
        status: 'success',
        duration: 2000,
        isClosable: true,
        position: 'top'
      })
    } catch (error) {
      toast({
        title: 'Failed to delete an activity',
        status: 'error',
        duration: 3000,
        isClosable: true
      })
    }
  }

  return { deleteActivity, isActivityDeleting }
}
