'use client'

import { Box, Container, useColorModeValue } from '@chakra-ui/react'
import { Loading } from '@/components/loading'
import { Header, Footer } from '@/components/navigation'
import { TripDetailsHeader } from './components'
import { useTripDetailsQuery, useTripTagsCollectionQuery } from '@generated/api'

export default function TripDetailsPage({
  params
}: {
  params: { id: string }
}) {
  const { data: tripData, loading: tripLoading } = useTripDetailsQuery({
    variables: {
      id: Number(params.id)
    }
  })

  const { data: tagsData, loading: tagsLoading } = useTripTagsCollectionQuery({
    variables: {
      trip_id: Number(params.id)
    }
  })

  const tripDataCollection = tripData?.tripsCollection
  const tagDataCollection = tagsData?.trip_tagsCollection

  const isLoading =
    !tripDataCollection || tripLoading || !tagDataCollection || tagsLoading

  const bg = useColorModeValue('white', 'gray.800')
  const color = useColorModeValue('black', 'gray.300')

  console.log({ tripData })

  return (
    <>
      <Header />
      <Box as="main" minH="100vh" bg={bg} color={color}>
        <Container
          maxW={{ base: '100%', lg: 'container.xl' }}
          pt={{ base: '0px', md: '30px' }}
          pb={{ base: '40px', md: '80px' }}
        >
          {isLoading ? (
            <Loading />
          ) : (
            <>
              <TripDetailsHeader
                id={tripDataCollection.edges[0].node.id}
                image={tripDataCollection.edges[0].node.image_storage_object_id}
                title={tripDataCollection.edges[0].node.title}
                date_from={tripDataCollection.edges[0].node.date_from}
                date_to={tripDataCollection.edges[0].node.date_to}
                users={
                  tripDataCollection.edges[0].node.invitationsCollection?.edges.map(
                    (invitation) => ({
                      id: invitation.node.users?.id,
                      image: invitation.node.users?.profile_picture_url
                    })
                  ) || []
                }
                tags={tagDataCollection.edges.map(
                  (tag) =>
                    ({
                      id: tag.node.tags?.id,
                      name: tag.node.tags?.name
                    }) || []
                )}
              />

              <Box>下の部分</Box>
            </>
          )}
        </Container>
      </Box>
      <Footer />
    </>
  )
}
