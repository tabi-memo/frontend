'use client'

import { useState } from 'react'
import { Box, Container, useColorModeValue, Input } from '@chakra-ui/react'
import { createClient } from '@supabase/supabase-js'
import { useRouter } from 'next/navigation'
import { PrimaryButton } from '@/components/button'
import { Loading } from '@/components/loading'
import { Header, Footer } from '@/components/navigation'
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

  const {
    data: tripData,
    loading: tripLoading,
    refetch: refetchTrip
  } = useTripDetailsQuery({
    variables: {
      id: params.id
    }
  })

  if (!tripData && !tripLoading) throw new Error('No trip data found')

  const tripDataCollection = tripData?.tripsCollection

  const [imageUrl, setImageUrl] = useState<string | null>(null)
  const uploadImage = async (id: string, file: File) => {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_API_KEY!
    )
    const { data, error } = await supabase.storage
      .from('tabi-memo-uploads')
      .upload(`trips/${id}/${file.name}`, file)

    if (error) {
      throw error
    } else {
      console.log({ uploadFile: data })

      // this approach needs two requests upload request -> get public url
      const {
        data: { publicUrl }
      } = supabase.storage
        .from(process.env.NEXT_PUBLIC_BUCKET_NAME!)
        .getPublicUrl(data.path)
      // const fileUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/${process.env.NEXT_PUBLIC_BUCKET_NAME}/${data.path}`

      // update trip image url if authorized by calling postgres function
      // await supabase.rpc('update_trip_image', { trip_id: id, image_url: publicUrl })

      setImageUrl(publicUrl)
      refetchTrip() // Refetch trip after image upload
    }
  }

  return (
    <>
      <Header />
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
                id={tripDataCollection.edges[0].node.id}
                image={imageUrl || tripDataCollection.edges[0].node.image_url}
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
                  onChange={(e) => {
                    if (e.target.files?.length) {
                      uploadImage(params.id, e.target.files[0])
                    }
                  }}
                />
              </Box>
            </>
          )}
        </Container>
      </Box>
      <Footer />
    </>
  )
}
