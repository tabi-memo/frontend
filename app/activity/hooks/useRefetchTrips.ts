import { useTripsCollectionQuery } from "@generated/api"

// This hook is used to refetch trips after an activity is created, updated, or deleted.
export const useRefetchTrips = () => {
  const { refetch } = useTripsCollectionQuery({})

  const refetchTrips = (tripId: string) => {
    refetch({
      filter: {
        id: { eq: tripId }
      },
      first: 12,
      after: null
    })
  }

  return { refetchTrips }
}
