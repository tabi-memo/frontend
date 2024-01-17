'use client'
import { Heading, Box, Container, useColorModeValue } from '@chakra-ui/react'
import { Header, Footer } from '@/components/navigation'
import { TripForm } from '../components'

export default function CreateTripPage() {
  const bg = useColorModeValue('white', 'gray.800')
  const color = useColorModeValue('black', 'gray.300')

  return (
    <>
      <Header />
      <Box as="main" minH="100vh" bg={bg} color={color}>
        <Container
          maxW={{ base: '100%', lg: 'container.sm' }}
          pt={{ base: '20px', md: '30px' }}
          pb={{ base: '40px', md: '80px' }}
        >
          <Heading as="h1" fontSize={{ base: '2xl', md: '4xl' }}>
            Create Trip
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
