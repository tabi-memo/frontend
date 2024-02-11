'use client'

import { NetworkStatus } from '@apollo/client'
import { Box, Container, Heading, useColorModeValue } from '@chakra-ui/react'
import { ActivityForm } from '@/activity/components/activity-form'
import { Loading } from '@/components/loading'
import { useActivityCollectionQuery } from '@generated/api'

export default function ActivityEditPage({
  params
}: {
  params: { id: string }
}) {
  const bg = useColorModeValue('white', 'gray.800')
  const color = useColorModeValue('black', 'gray.300')

  // Activity Details
  const {
    data: activityData,
    loading: activityLoading,
    refetch: activityRefetch,
    networkStatus: activityNetWorkStatus
  } = useActivityCollectionQuery({
    variables: {
      id: params.id
    },
    notifyOnNetworkStatusChange: true
  })

  const dummyUrls: string[] = [
    'https://images.unsplash.com/photo-1612852098516-55d01c75769a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
    'https://images.unsplash.com/photo-1627875764093-315831ac12f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
    'https://images.unsplash.com/photo-1571432248690-7fd6980a1ae2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60'
  ]

  const activityDataCollection =
    activityData?.activityCollection?.edges[0]?.node
  const activityDetailsRefetch = () => {
    activityRefetch()
  }
  const activityDetailsRefetchLoading =
    activityNetWorkStatus === NetworkStatus.refetch

  if (!activityData && !activityLoading)
    throw new Error('No activity data found')

  return (
    <Box as="main" minH="100vh" bg={bg} color={color}>
      <Container
        pt={{ base: '20px', md: '40px' }}
        pb={{ base: '40px', md: '70px' }}
      >
        <Heading as={'h1'} fontSize={{ base: '2xl', md: '4xl' }}>
          Edit Activity
        </Heading>
        {!activityDataCollection || activityLoading ? (
          <Loading />
        ) : (
          <ActivityForm
            activityDetails={{
              id: activityDataCollection.id,
              title: activityDataCollection.title,
              time_from: activityDataCollection.time_from,
              time_to: activityDataCollection?.time_to,
              address: activityDataCollection?.address,
              url: activityDataCollection?.url,
              memo: activityDataCollection?.memo,
              cost: activityDataCollection?.cost,
              cost_unit: activityDataCollection?.cost_unit,
              image_urls: dummyUrls,
              refetch: activityDetailsRefetch,
              refetchLoading: activityDetailsRefetchLoading
            }}
          />
        )}
      </Container>
    </Box>
  )
}
