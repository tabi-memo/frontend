'use client'

import { NetworkStatus } from '@apollo/client'
import { Heading, Box, Container, useColorModeValue } from '@chakra-ui/react'
import { useUserId } from '@/providers/session-provider'
import { TripForm } from '../components'
import { useTagsCollectionQuery } from '@generated/api'

export default function CreateTripPage() {
  const bg = useColorModeValue('white', 'gray.800')
  const color = useColorModeValue('black', 'gray.300')

  const userId = useUserId()

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

  if (!tagsData && !tagsLoading) throw new Error('No tags data found')

  return (
    <Box as="main" minH="100svh" bg={bg} color={color}>
      <Container
        maxW={{ base: '100%', lg: 'container.sm' }}
        pt={{ base: '20px', md: '30px' }}
        pb={{ base: '40px', md: '80px' }}
      >
        <Heading as="h1" fontSize={{ base: '2xl', md: '4xl' }}>
          Create Trip
        </Heading>
        <Box mt="40px">
          <TripForm
            tags={{
              data:
                tagsData?.tagsCollection?.edges.map((tag) => ({
                  id: tag.node.id,
                  name: tag.node.name
                })) || [],
              refetch: tagsCollectionRefetch,
              refetchLoading: tagsRefetchLoading
            }}
          />
        </Box>
      </Container>
    </Box>
  )
}
