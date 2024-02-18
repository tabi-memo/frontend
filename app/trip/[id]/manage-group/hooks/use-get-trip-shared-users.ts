import { useTripSharedUsersQuery } from '@generated/api'

export const useGetTripSharedUsers = (tripId: string) => {
  const { data, loading, refetch } = useTripSharedUsersQuery({
    variables: {
      tripId
    }
  })

  return {
    tripSharedUsers: data?.tripsCollection?.edges[0].node,
    loading,
    refetch
  }
}
