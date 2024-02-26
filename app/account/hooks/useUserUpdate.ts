import { useToast } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import { useUserId } from '@/providers/session-provider'
import { useUserGet } from '.'
import { useUpdateUserMutation } from '@generated/api'

export const useUserUpdate = () => {
  const userId = useUserId()
  const router = useRouter()
  const toast = useToast()
  const { userRefetch } = useUserGet()

  const [updateUserMutation, { loading: isUserUpdating }] =
    useUpdateUserMutation()

  const updateUser = async (name: string, email: string) => {
    try {
      await updateUserMutation({
        variables: {
          id: userId,
          set: {
            name: name,
            email: email
          }
        }
      })

      userRefetch()
      router.push('/account')

      const response = await fetch('/change-email/action', {
        method: 'POST',
        body: JSON.stringify({ email: email })
      })
      if (response.ok) {
        console.log('email is updated')
      } else {
        const errorText = await response.text()
        console.error('Error:', errorText)
      }

      toast({
        title: 'Successfully updated!',
        status: 'success',
        duration: 2000,
        isClosable: true,
        position: 'top'
      })
    } catch (error) {
      console.error(error)

      toast({
        title: "We're sorry, but you failed to update your profile",
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
    updateUser,
    isUserUpdating
  }
}
