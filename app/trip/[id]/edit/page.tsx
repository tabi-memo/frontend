'use client'

import { NetworkStatus } from '@apollo/client'
import { Box, Container, Heading, useColorModeValue } from '@chakra-ui/react'
import { Loading } from '@/components/loading'
import { Header, Footer } from '@/components/navigation'
import { useUserId } from '@/providers/session-provider'
import { TripForm } from '../../components'
import {
  useTagsCollectionQuery,
  useTripDetailsQuery,
  useTripTagsCollectionQuery
} from '@generated/api'

export default function TripEditPage({ params }: { params: { id: string } }) {
  const bg = useColorModeValue('white', 'gray.800')
  const color = useColorModeValue('black', 'gray.300')

  const userId = useUserId()

  const {
    data: tripData,
    loading: tripLoading,
    refetch: tripRefetch,
    networkStatus: tripNetWorkStatus
  } = useTripDetailsQuery({
    variables: {
      id: params.id
    },
    notifyOnNetworkStatusChange: true
  })

  const tripDataCollection = tripData?.tripsCollection?.edges[0]?.node
  const tripDetailsRefetch = () => {
    tripRefetch()
  }
  const tripDetailsRefetchLoading = tripNetWorkStatus === NetworkStatus.refetch

  const {
    data: tagsData,
    loading: tagsLoading,
    refetch: tagsRefetch,
    networkStatus: tagsNetWorkStatus
  } = useTagsCollectionQuery({
    variables: { userId },
    notifyOnNetworkStatusChange: true
  })

  const tagsCollectionRefetch = () => {
    tagsRefetch()
  }
  const tagsRefetchLoading = tagsNetWorkStatus === NetworkStatus.refetch

  const {
    data: tripTagsData,
    refetch: tripTagsRefetch,
    networkStatus: tripTagsNetWorkStatus
  } = useTripTagsCollectionQuery({
    variables: {
      filter: {
        trip_id: { eq: params.id }
      }
    },
    notifyOnNetworkStatusChange: true
  })

  const tripsTagsDataArray = tripTagsData?.trip_tagsCollection?.edges.map(
    (tag) => ({
      id: tag.node.id,
      tag_id: tag.node.tag_id || '',
      trip_id: tag.node.trip_id || ''
    })
  )
  const tripTagsCollectionRefetch = () => {
    tripTagsRefetch()
  }
  const tripTagsRefetchLoading = tripTagsNetWorkStatus === NetworkStatus.refetch

  if ((!tripData && !tripLoading) || (!tagsData && !tagsLoading))
    throw new Error('No trip data found')

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
            {!tripDataCollection || tripLoading || !tripsTagsDataArray ? (
              <Loading />
            ) : (
              <TripForm
                tripDetails={{
                  id: tripDataCollection.id,
                  image: tripDataCollection.image_storage_object_id,
                  title: tripDataCollection.title,
                  dateFrom: tripDataCollection.date_from,
                  dateTo: tripDataCollection.date_to,
                  cost: tripDataCollection.cost,
                  costUnit: tripDataCollection.cost_unit,
                  refetch: tripDetailsRefetch,
                  refetchLoading: tripDetailsRefetchLoading
                }}
                tags={{
                  data:
                    tagsData?.tagsCollection?.edges.map((tag) => ({
                      id: tag.node.id,
                      name: tag.node.name
                    })) || [],
                  refetch: tagsCollectionRefetch,
                  refetchLoading: tagsRefetchLoading
                }}
                tripTags={{
                  data:
                    tripTagsData?.trip_tagsCollection?.edges.map((tripTag) => ({
                      id: tripTag.node.id,
                      tag_id: tripTag.node.tag_id || '',
                      trip_id: tripTag.node.trip_id || ''
                    })) || [],
                  refetch: tripTagsCollectionRefetch,
                  refetchLoading: tripTagsRefetchLoading
                }}
              />
            )}
          </Box>
        </Container>
      </Box>
      <Footer />
    </>
  )
}
