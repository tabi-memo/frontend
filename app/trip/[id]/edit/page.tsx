'use client'

import { NetworkStatus } from '@apollo/client'
import { Box, Container, Heading, useColorModeValue } from '@chakra-ui/react'
import { Loading } from '@/components/loading'
import { Header, Footer } from '@/components/navigation'
import { useUserId } from '@/providers/session-provider'
import { TripForm } from '../../components'
import { useTagsCollectionQuery, useTripDetailsQuery } from '@generated/api'

export default function TripEditPage({ params }: { params: { id: string } }) {
  const bg = useColorModeValue('white', 'gray.800')
  const color = useColorModeValue('black', 'gray.300')

  const userId = useUserId()

  const { data: tripData, loading: tripLoading } = useTripDetailsQuery({
    variables: {
      id: params.id
    }
  })

  const {
    data: tagsData,
    loading: tagsLoading,
    refetch: tagsRefetch,
    networkStatus: tagsNetWorkStatus
  } = useTagsCollectionQuery({
    variables: { userId },
    notifyOnNetworkStatusChange: true
  })

  if ((!tripData && !tripLoading) || (!tagsData && !tagsLoading))
    throw new Error('No trip data found')

  const tripDataCollection = tripData?.tripsCollection?.edges[0]?.node

  const tagsCollectionRefetch = () => {
    tagsRefetch()
  }

  const tagsRefetchLoading = tagsNetWorkStatus === NetworkStatus.refetch

  console.log('tripDataCollection', tripDataCollection)
  console.log('tagsData', tagsData)

  return (
    <>
      <Header />
      <Box as="main" minH="100svh" bg={bg} color={color}>
        <Container
          maxW={{ base: '100%', lg: 'container.sm' }}
          pt={{ base: '20px', md: '30px' }}
          pb={{ base: '40px', md: '80px' }}
        >
          <Heading as="h1" fontSize={{ base: '2xl', md: '4xl' }}>
            Edit Trip
          </Heading>
          <Box mt="40px">
            {!tripDataCollection || tripLoading ? (
              <Loading />
            ) : (
              <TripForm
                id={tripDataCollection.id}
                image={tripDataCollection.image_storage_object_id}
                title={tripDataCollection.title}
                dateFrom={tripDataCollection.date_from}
                dateTo={tripDataCollection.date_to}
                tags={
                  tagsData?.tagsCollection?.edges.map((tag) => ({
                    id: tag.node.id,
                    name: tag.node.name
                  })) || []
                }
                cost={tripDataCollection.cost}
                costUnit={tripDataCollection.cost_unit}
                tagsCollectionRefetch={tagsCollectionRefetch}
                tagsRefetchLoading={tagsRefetchLoading}
              />
            )}
          </Box>
        </Container>
      </Box>
      <Footer />
    </>
  )
}
