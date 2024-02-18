import { useToast } from '@chakra-ui/react'
import { useGetTripSharedUsers } from '../hooks'
import {
  useUpdateInvitationMutation,
  Permission_Level_Enum
} from '@generated/api'

export const useUpdateInvitation = (tripId: string) => {
  const toast = useToast()

  const [updateInvitationMutation, { loading: isInvitationUpdating }] =
    useUpdateInvitationMutation()

  const { refetch } = useGetTripSharedUsers(tripId)

  const updatePermissionLevel = async (
    id: string,
    permissionLevel: Permission_Level_Enum
  ) => {
    try {
      await updateInvitationMutation({
        variables: {
          id,
          set: {
            permission_level: permissionLevel
          }
        }
      })
      refetch()
    } catch (error) {
      toast({
        title: "We're sorry, but you failed to update the option",
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
    updatePermissionLevel,
    isInvitationUpdating
  }
}
