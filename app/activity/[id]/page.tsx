'use client'
import { Box, Flex, Container, useColorModeValue } from '@chakra-ui/react'
import { FiChevronLeft } from 'react-icons/fi'
import { Carousel } from '@/components/carousel'
import { Link } from '@/components/link'
import { Loading } from '@/components/loading'
import { ActivityHeader, ActivityInfo } from './components'
import { useActivityCollectionQuery } from '@generated/api'

export default function ActivityDetails({
  params
}: {
  params: { id: string }
}) {
  const bg = useColorModeValue('white', 'gray.800')
  const color = useColorModeValue('black', 'gray.300')

  const { data, loading } = useActivityCollectionQuery({
    variables: {
      id: params.id
    }
  })

  if (!loading && !data) throw new Error('No activity data found')

  const activityData = data?.activityCollection?.edges[0]?.node
  const uploadedImageUrls = activityData?.activity_uploaded_filesCollection
    ? activityData?.activity_uploaded_filesCollection?.edges.map(
        (edge) => edge?.node?.file_url
      )
    : []

  return (
    <Box as="main" minH="100vh" bg={bg} color={color}>
      {!activityData || loading ? (
        <Flex minH="100vh" align="center" justify="center">
          <Loading />
        </Flex>
      ) : (
        <Container
          maxW={{ base: '100%', md: '742px' }}
          pt={{ base: '20px', md: '30px' }}
          pb={{ base: '40px', md: '80px' }}
        >
          <ActivityHeader
            id={activityData.id}
            title={activityData.title}
            time_from={activityData.time_from}
            time_to={activityData?.time_to}
            address={activityData?.address}
            url={activityData?.url}
          />
          {uploadedImageUrls.length > 0 && (
            <Carousel urls={uploadedImageUrls} />
          )}
          <ActivityInfo memo={activityData?.memo} cost={activityData?.cost} />
          <Box mt="60px" display="flex" alignItems="center">
            <FiChevronLeft />
            <Link ml="2%" href={`/trip/${activityData.trip_id}`}>
              Got back to Trip Details
            </Link>
          </Box>
        </Container>
      )}
    </Box>
  )
}
