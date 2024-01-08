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

  const dummyUrls: string[] = [
    'https://images.unsplash.com/photo-1612852098516-55d01c75769a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
    'https://images.unsplash.com/photo-1627875764093-315831ac12f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
    'https://images.unsplash.com/photo-1571432248690-7fd6980a1ae2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60'
  ]

  if (!loading && !data) throw new Error('No activity data found')

  const activityData = data?.activityCollection?.edges[0]?.node

  return (
    <>
      {!activityData || loading ? (
        <Flex minH="84vh" align="center" justify="center">
          <Loading />
        </Flex>
      ) : (
        <Box minHeight="100vh" as="main" bg={bg} color={color}>
          <Container
            maxW={{ base: '100%', md: '742px' }}
            pt={{ base: '20px', md: '30px' }}
            pb={{ base: '40px', md: '80px' }}
          >
            <ActivityHeader
              title={activityData.title}
              time_from={activityData.time_from}
              time_to={activityData?.time_to}
              address={activityData?.address}
              url={activityData?.url}
            />
            <Carousel urls={dummyUrls} />
            <ActivityInfo memo={activityData?.memo} cost={activityData?.cost} />
            <Box mt="60px" display="flex" alignItems="center">
              <FiChevronLeft />
              <Link ml="2%" href="/">
                Got back to Trip Details
              </Link>
            </Box>
          </Container>
        </Box>
      )}
    </>
  )
}
