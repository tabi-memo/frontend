'use client'

import { Box, Container, useColorModeValue } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import { PrimaryButton } from '@/components/button'
import { Loading } from '@/components/loading'
import { TripDetailsHeader, TripDetailsTabs } from './components'
import { useTripDetailsQuery } from '@generated/api'

export default function TripDetailsPage({
  params
}: {
  params: { id: string }
}) {
  const bg = useColorModeValue('white', 'gray.800')
  const color = useColorModeValue('black', 'gray.300')

  const router = useRouter()

  const { data: tripData, loading: tripLoading } = useTripDetailsQuery({
    variables: {
      uuid: params.id
    }
  })

  if (!tripData && !tripLoading) throw new Error('No trip data found')

  const tripDataCollection = tripData?.tripsCollection

  return (
    <>
      <Box as="main" minH="100vh" bg={bg} color={color}>
        <Container
          maxW={{ base: '100%', lg: 'container.xl' }}
          pt={{ base: '0px', md: '30px' }}
          pb={{ base: '40px', md: '80px' }}
        >
          {!tripDataCollection || tripLoading ? (
            <Loading />
          ) : (
            <>
              <TripDetailsHeader
                id={tripDataCollection.edges[0].node.uuid}
                image={tripDataCollection.edges[0].node.image_storage_object_id}
                title={tripDataCollection.edges[0].node.title}
                dateFrom={tripDataCollection.edges[0].node.date_from}
                dateTo={tripDataCollection.edges[0].node.date_to}
                users={
                  tripDataCollection.edges[0].node.invitationsCollection?.edges.map(
                    (invitation) => ({
                      id: invitation.node.users?.id,
                      image: invitation.node.users?.profile_picture_url
                    })
                  ) || []
                }
                tags={
                  tripDataCollection.edges[0].node.trip_tagsCollection?.edges.map(
                    (tag) => ({
                      id: tag.node.tags?.id,
                      name: tag.node.tags?.name
                    })
                  ) || []
                }
              />

              <TripDetailsTabs
                activities={
                  tripDataCollection.edges[0].node.activityCollection?.edges.map(
                    (activity) => ({
                      id: activity.node.uuid,
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
                  onClick={() => router.push('/activity/create')}
                >
                  Add Activity
                </PrimaryButton>
              </Box>
            </>
          )}
        </Container>
      </Box>
    </>
  )
}
