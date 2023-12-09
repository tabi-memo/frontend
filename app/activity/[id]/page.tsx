'use client'
import { Box, Container, useColorModeValue } from '@chakra-ui/react'
import { FiChevronLeft } from 'react-icons/fi'
import { Carousel } from '@/components/carousel'
import { Link } from '@/components/link'
import { Header, Footer } from '@/components/navigation'
import { ActivityCard, ActivityInfo } from './components'
import {
  useActivityCollectionQuery
} from '@generated/api'


export default function ActivityDetails({ params }: { params: { id: number } }) {
  const bg = useColorModeValue('white', 'gray.800')
  const color = useColorModeValue('black', 'gray.300')


  const { data } = useActivityCollectionQuery({
    variables: {
      id: params.id
    }
  })


  const dummyUrls: string[] = [
    'https://images.unsplash.com/photo-1612852098516-55d01c75769a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
    'https://images.unsplash.com/photo-1627875764093-315831ac12f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
    'https://images.unsplash.com/photo-1571432248690-7fd6980a1ae2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60'
  ]


  return (
    <>
      <Header />
      <Box as="main" minH="100vh" bg={bg} color={color}>
        <Container
          maxW={{ base: '100%', md: '742px' }}
          pt={{ base: '20px', md: '30px' }}
          pb={{ base: '40px', md: '80px' }}
        >
          <ActivityCard activityData={data} />
          <Carousel urls={dummyUrls} />
          <ActivityInfo activityData={data} />
          <Box mt="60px" display="flex" alignItems="center">
            <FiChevronLeft />
            <Link ml="2%" href="/">
              Got back to Trip Details
            </Link>
          </Box>
        </Container>
      </Box>
      <Footer />
    </>
  )
}
