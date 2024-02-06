'use client'

import { useState } from 'react'
import { Box, Container, useColorModeValue, Input } from '@chakra-ui/react'
import { createClient } from '@supabase/supabase-js'
import { useRouter } from 'next/navigation'
import { PrimaryButton } from '@/components/button'
import { Loading } from '@/components/loading'
import { useTripDetailsGet } from '../hooks'
import { updateImageMetadataAction } from './action/update-image-metadata'
import { TripDetailsHeader, TripDetailsTabs } from './components'

export default function TripDetailsPage({
  params
}: {
  params: { id: string }
}) {
  const bg = useColorModeValue('white', 'gray.800')
  const color = useColorModeValue('black', 'gray.300')

  const router = useRouter()
  const { tripDetailsData, tripDetailsLoading, tripDetailsRefetch } =
    useTripDetailsGet(params.id)

  if (!tripDetailsData && !tripDetailsLoading)
    throw new Error('No trip data found')

  const tripData = tripDetailsData?.tripsCollection
  const [selectedImage, setSelectedImage] = useState<File | null>(null)

  const uploadImage = async (id: string, file: File) => {
    try {
      const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_API_KEY!
      )

      // TODO: Authenticated user can upload images with policy
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('tabi-memo-uploads')
        .upload(`trips/${id}/${file.name}`, file, { upsert: true })

      if (uploadError) throw new Error(uploadError.message)

      // NOTE: Server action doen't return result in Client Component. I don't know why.
      await updateImageMetadataAction(id, uploadData.path)

      setSelectedImage(file)
      await tripDetailsRefetch()
    } catch (error) {
      console.error({ error })
      throw error
    }
  }

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
              image={
                selectedImage
                  ? URL.createObjectURL(selectedImage)
                  : tripData.edges[0].node.image_url
              }
              title={tripData.edges[0].node.title}
              dateFrom={tripData.edges[0].node.date_from}
              dateTo={tripData.edges[0].node.date_to}
              cost={tripData.edges[0].node.cost}
              costUnit={tripData.edges[0].node.cost_unit}
              users={
                tripData.edges[0].node.invitationsCollection?.edges.map(
                  (invitation) => ({
                    id: invitation.node.users?.id,
                    image: invitation.node.users?.profile_picture_url
                  })
                ) || []
              }
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
                onClick={() => router.push('/activity/create')}
              >
                Add Activity
              </PrimaryButton>
              <Input
                type="file"
                id="imageUpload"
                accept="image/*"
                onChange={(e) => uploadImage(params.id, e.target.files![0])}
              />
            </Box>
          </>
        )}
      </Container>
    </Box>
  )
}
