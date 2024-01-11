'use client'
import { Heading, Box, Container, useColorModeValue } from '@chakra-ui/react'

export default function CreateTripPage() {
  const bg = useColorModeValue('white', 'gray.800')
  const color = useColorModeValue('black', 'gray.300')
  return (
    <>
      <Box as="main" minH="100vh" bg={bg} color={color}>
        <Container
          maxW={{ base: '100%', lg: 'container.xl' }}
          pt={{ base: '20px', md: '30px' }}
          pb={{ base: '40px', md: '80px' }}
        >
          <Heading>Create Trip</Heading>
        </Container>
      </Box>
    </>
  )
}
