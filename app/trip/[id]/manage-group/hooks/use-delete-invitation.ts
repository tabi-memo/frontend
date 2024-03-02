import { useToast } from '@chakra-ui/react'
import { useGetTripSharedUsers } from '../hooks'
import { useDeleteInvitationMutation } from '@generated/api'

export const useDeleteInvitation = (tripId: string) => {
  const toast = useToast()

  const [deleteInvitationMutation, { loading: isInvitationDeleting }] =
    useDeleteInvitationMutation()

  const { refetch } = useGetTripSharedUsers(tripId)

  const deleteInvitation = async (id: string) => {
    try {
      await deleteInvitationMutation({
        variables: {
          id
        }
      })
      refetch()
    } catch (error) {
      toast({
        title: "We're sorry, but you failed to delete the shared user",
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
    deleteInvitation,
    isInvitationDeleting
  }
}
