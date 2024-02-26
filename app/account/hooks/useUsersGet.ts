import { useUserId } from '@/providers/session-provider'
import { useGetUserQuery } from '@generated/api'

export const useUserGet = () => {
  const userId = useUserId()

  const { data, loading, refetch } = useGetUserQuery({
    variables: { id: userId }
  })

  const userRefetch = () => {
    refetch({
      id: userId
    })
  }

  return {
    userData: data?.usersCollection,
    userRefetch,
    loading
  }
}
