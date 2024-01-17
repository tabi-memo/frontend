'use client'

import { Box, Container, Heading, useColorModeValue } from '@chakra-ui/react'
// import { Loading } from '@/components/loading'
import { Header, Footer } from '@/components/navigation'
import { TripForm } from '../../components'

export default function TripEditPage({ params }: { params: { id: string } }) {
  const bg = useColorModeValue('white', 'gray.800')
  const color = useColorModeValue('black', 'gray.300')

  console.log(params)

  return (
    <>
      <Header />
      <Box as="main" minH="100svh" bg={bg} color={color}>
        <Container
          maxW={{ base: '100%', lg: 'container.sm' }}
          pt={{ base: '20px', md: '30px' }}
          pb={{ base: '40px', md: '80px' }}
        >
          <Heading as="h1" fontSize={{ base: '2xl', md: '4xl' }}>
            Edit Trip
          </Heading>
          <Box mt="40px">
            <TripForm />
          </Box>
        </Container>
      </Box>
      <Footer />
    </>
  )
}
