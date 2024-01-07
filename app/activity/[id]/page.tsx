'use client'
import { Box, Container, useColorModeValue } from '@chakra-ui/react'
import { FiChevronLeft } from 'react-icons/fi'
import { Carousel } from '@/components/carousel'
import { Link } from '@/components/link'
import { ActivityCard, ActivityInfo } from './component'

type DummyActivityCardData = {
  title: string
  time_from: string
  address: string
  url: string
}

type DummyActivityInfoData = {
  memo: string
  cost: string
}

export default function ActivityDetails() {
  const bg = useColorModeValue('white', 'gray.800')
  const color = useColorModeValue('black', 'gray.300')

  const dummyUrls: string[] = [
    'https://images.unsplash.com/photo-1612852098516-55d01c75769a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
    'https://images.unsplash.com/photo-1627875764093-315831ac12f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
    'https://images.unsplash.com/photo-1571432248690-7fd6980a1ae2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60'
  ]

  const dummyActivityCardData: DummyActivityCardData = {
    title: 'Asakusa Temple',
    time_from: 'Oct.1, 2023 16:00',
    address: '10-20 Shibury, Tokyo, Japan',
    url: 'https://www.google.com'
  }

  // Dummy data for activity info
  const dummyActivityInfoData: DummyActivityInfoData = {
    memo: 'Memo',
    cost: '20,000'
  }

  return (
    <>
      <Box as="main" minH="100vh" bg={bg} color={color}>
        <Container
          maxW={{ base: '100%', md: '742px' }}
          pt={{ base: '20px', md: '30px' }}
          pb={{ base: '40px', md: '80px' }}
        >
          <ActivityCard dummyActivityData={dummyActivityCardData} />
          <Carousel urls={dummyUrls} />
          <ActivityInfo dummyActivityData={dummyActivityInfoData} />
          <Box mt="60px" display="flex" alignItems="center">
            <FiChevronLeft />
            <Link ml="2%" href="/">
              Got back to Trip Details
            </Link>
          </Box>
        </Container>
      </Box>
    </>
  )
}
