'use client'
import {
  Heading,
  Box,
  Container,
  Grid,
  GridItem,
  Flex,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import { PrimaryButton } from '@/components/button'
import { Loading } from '@/components/loading'
import { useUserUuid } from '@/providers/session-provider'
import { TripSearch, TripSort, TripCard } from '@/trip/components'
import { useTripsCollectionQuery, TripsOrderBy } from '@generated/api'

export default function Top({ searchParams }: { searchParams: { q: string } }) {
  const router = useRouter()
  const bg = useColorModeValue('white', 'gray.800')
  const color = useColorModeValue('black', 'gray.300')

  const searchWord = searchParams.q
  const uuid = useUserUuid()

  const { data, loading, fetchMore, refetch } = useTripsCollectionQuery({
    variables: {
      filter: {
        uuid: { eq: uuid },
        ...(searchWord &&
          searchWord.length && { title: { like: `%${searchWord}%` } })
      },
      first: 6,
      after: null
    }
  })

  const handleSortBy = (sortObj: TripsOrderBy) => {
    refetch({
      orderBy: sortObj
    })
  }

  const handleLoadMore = () => {
    fetchMore({
      variables: {
        after: data?.tripsCollection?.pageInfo.endCursor
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

  return (
    <>
      <Box as="main" minH="100vh" bg={bg} color={color}>
        <Container
          maxW={{ base: '100%', lg: 'container.xl' }}
          pt={{ base: '20px', md: '30px' }}
          pb={{ base: '40px', md: '80px' }}
        >
          <Grid
            templateRows={'repeat(2, 1fr)'}
            gridTemplateColumns={{ base: '1fr', lg: '342px 1fr' }}
            alignItems="center"
            gap={{ base: '12px', lg: '40px' }}
          >
            <GridItem
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              colSpan={{ base: 2, lg: 1 }}
            >
              <Heading as={'h1'} fontSize={{ base: '2xl', md: '4xl' }}>
                My Trips
              </Heading>
              <PrimaryButton
                w="9.5rem"
                onClick={() => router.push('/trip/create')}
              >
                Add New Trip
              </PrimaryButton>
            </GridItem>
            <GridItem ml={{ base: '', lg: 'auto' }}>
              <TripSearch />
            </GridItem>
            <GridItem>
              <TripSort sortBy={handleSortBy} />
            </GridItem>
          </Grid>
          {loading || !data?.tripsCollection ? (
            <Loading />
          ) : (
            <>
              <Flex
                gap={{ base: '20px', lg: '60px' }}
                mt={{ base: '38px', md: '40px' }}
                flexWrap={'wrap'}
              >
                {data.tripsCollection.edges.length === 0 && (
                  <Text>We couldn&apos;t find any results</Text>
                )}
                {data.tripsCollection.edges.map((trip) => (
                  <TripCard key={trip.node.id} data={trip} />
                ))}
              </Flex>
              {data.tripsCollection.pageInfo.hasNextPage && (
                <Box textAlign="center" mt={{ base: '40px', md: '60px' }}>
                  <PrimaryButton variant="outline" onClick={handleLoadMore}>
                    Load More
                  </PrimaryButton>
                </Box>
              )}
            </>
          )}
        </Container>
      </Box>
    </>
  )
}
