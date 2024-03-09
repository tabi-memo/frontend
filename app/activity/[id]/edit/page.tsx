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
            tripId={activityDataCollection.trip_id}
            activityDetails={{
              id: activityDataCollection.id,
              title: activityDataCollection.title,
              timeFrom: activityDataCollection.time_from,
              timeTo: activityDataCollection?.time_to,
              address: activityDataCollection?.address,
              url: activityDataCollection?.url,
              memo: activityDataCollection?.memo,
              cost: activityDataCollection?.cost,
              costUnit: activityDataCollection?.cost_unit,
              uploadedFileUrls:
                activityDataCollection?.activity_uploaded_filesCollection?.edges.map(
                  (edge) => edge?.node?.file_url
                ),
              refetch: activityDetailsRefetch,
              refetchLoading: activityDetailsRefetchLoading
            }}
          />
        )}
      </Container>
    </Box>
  )
}
