import { useTripDetailsQuery } from '@generated/api'

export const useTripDetailsGet = (id?: string) => {
  const {
    data: tripDetailsData,
    loading: tripDetailsLoading,
    refetch: tripDetailsRefetch,
    client: tripDetailsClient
  } = useTripDetailsQuery({
    variables: {
      id
    }
  })

  return {
    tripDetailsData,
    tripDetailsLoading,
    tripDetailsRefetch,
    tripDetailsClient
  }
}
