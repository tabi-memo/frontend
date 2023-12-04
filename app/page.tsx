'use client'
import {
  Heading,
  Box,
  Container,
  Grid,
  GridItem,
  Flex,
  useColorModeValue
} from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import { PrimaryButton } from '@/components/button'
import { Loading } from '@/components/loading'
import { Header, Footer } from '@/components/navigation'
import { TripSearch, TripSort, TripCard } from '@/trip/components'
import { OrderByDirection, useTripsCollectionQuery } from '@generated/api'

export default function Top({
  searchParams
}: {
  searchParams: { offset: string }
}) {
  const router = useRouter()
  const bg = useColorModeValue('white', 'gray.800')
  const color = useColorModeValue('black', 'gray.300')

  const { data, loading, fetchMore } = useTripsCollectionQuery({
    variables: {
      user_id: 1,
      orderBy: [{ date_from: OrderByDirection.DescNullsFirst }],
      first: 6,
      after: null
    }
  })

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

  console.log('data', data)

  return (
    <>
      <Header />
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
              <TripSort />
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
      <Footer />
    </>
  )
}
