'use client'

import { Box, Container, useColorModeValue } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import { PrimaryButton } from '@/components/button'
import { Loading } from '@/components/loading'
import { useTripDetailsGet } from '../hooks'
import { TripDetailsHeader, TripDetailsTabs } from './components'

export default function TripDetailsPage({
  params
}: {
  params: { id: string }
}) {
  const bg = useColorModeValue('white', 'gray.800')
  const color = useColorModeValue('black', 'gray.300')

  const router = useRouter()
  const { tripDetailsData, tripDetailsLoading } = useTripDetailsGet(params.id)

  if (!tripDetailsData && !tripDetailsLoading)
    throw new Error('No trip data found')

  const tripData = tripDetailsData?.tripsCollection

  const owner = {
    id: tripData?.edges[0].node.users.id,
    image: tripData?.edges[0].node.users.profile_picture_url
  }

  const sharedUsers =
    tripData?.edges[0].node.invitationsCollection?.edges.map((invitation) => ({
      id: invitation.node.users?.id,
      image: invitation.node.users?.profile_picture_url
    })) || []

  return (
    <Box as="main" minH="100svh" bg={bg} color={color}>
      <Container
        maxW={{ base: '100%', lg: 'container.xl' }}
        pt={{ base: '0px', md: '30px' }}
        pb={{ base: '40px', md: '80px' }}
      >
        {!tripData || tripDetailsLoading ? (
          <Loading />
        ) : (
          <>
            <TripDetailsHeader
              id={tripData.edges[0].node.id}
              image={tripData.edges[0].node.image_url}
              title={tripData.edges[0].node.title}
              dateFrom={tripData.edges[0].node.date_from}
              dateTo={tripData.edges[0].node.date_to}
              cost={tripData.edges[0].node.cost}
              costUnit={tripData.edges[0].node.cost_unit}
              users={[owner, ...sharedUsers]}
              tags={
                tripData.edges[0].node.trip_tagsCollection?.edges.map(
                  (tag) => ({
                    id: tag.node.tags?.id,
                    name: tag.node.tags?.name
                  })
                ) || []
              }
            />

            <TripDetailsTabs
              activities={
                tripData.edges[0].node.activityCollection?.edges.map(
                  (activity) => ({
                    id: activity.node.id,
                    timeFrom: activity.node.time_from,
                    timeTo: activity.node.time_to,
                    title: activity.node.title,
                    address: activity.node.address
                  })
                ) || []
              }
            />
            <Box textAlign="center" mt="60px">
              <PrimaryButton
                size="lg"
                onClick={() =>
                  router.push(`/activity/create?tripId=${params.id}`)
                }
              >
                Add Activity
              </PrimaryButton>
            </Box>
          </>
        )}
      </Container>
    </Box>
  )
}
