import { NetworkStatus } from '@apollo/client'
import { useUserId } from '@/providers/session-provider'
import { useTripsCollectionQuery, TripsOrderBy } from '@generated/api'

export const useTripsGet = (searchWord?: string) => {
  const userId = useUserId()

  // TODO - need to change as currently just showing all trips user created. We also need to show invited trips
  const { data, loading, error, fetchMore, refetch, networkStatus } =
    useTripsCollectionQuery({
      variables: {
        filter: {
          user_id: { eq: userId },
          ...(searchWord &&
            searchWord.length && { title: { like: `%${searchWord}%` } })
        },
        first: 12,
        after: null
      }
    })

  const refetchLoading = networkStatus === NetworkStatus.refetch

  const tripsRefetch = () => {
    refetch({
      filter: {
        user_id: { eq: userId },
        ...(searchWord &&
          searchWord.length && { title: { like: `%${searchWord}%` } })
      },
      first: 12,
      after: null
    })
  }

  const handleSortBy = (sortObj: TripsOrderBy) => {
    refetch({
      orderBy: sortObj
    })
  }

  const handleLoadMore = (endCursor: string | null | undefined) => {
    fetchMore({
      variables: {
        after: endCursor
      },
      updateQuery: (previousQueryResult, { fetchMoreResult }) => {
        const newEdges = fetchMoreResult?.tripsCollection?.edges
        const pageInfo = fetchMoreResult?.tripsCollection?.pageInfo
        const previousCollection = previousQueryResult?.tripsCollection
        return newEdges && newEdges.length && pageInfo && previousCollection
          ? {
              tripsCollection: {
                __typename: previousCollection.__typename,
                edges: [...previousCollection.edges, ...newEdges],
                pageInfo
              },
              __typename: previousQueryResult.__typename
            }
          : previousQueryResult
      }
    })
  }

  return {
    tripsData: data?.tripsCollection,
    loading,
    error,
    handleSortBy,
    handleLoadMore,
    tripsRefetch,
    refetchLoading
  }
}
