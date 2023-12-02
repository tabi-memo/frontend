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

  // TODO change to 6
  const offset = searchParams.offset ? Number(searchParams.offset) : 2

  const { data, loading } = useTripsCollectionQuery({
    variables: {
      user_id: 1,
      orderBy: [{ date_from: OrderByDirection.DescNullsFirst }],
      first: offset,
      after: null
    }
  })

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
              <Box textAlign="center" mt={{ base: '40px', md: '60px' }}>
                <PrimaryButton
                  variant="outline"
                  onClick={() => router.push(`/?offset=${offset + 2}`)}
                >
                  Load More
                </PrimaryButton>
              </Box>
            </>
          )}
        </Container>
      </Box>
      <Footer />
    </>
  )
}
