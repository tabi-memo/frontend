'use client'

import { Box, Container, Heading, useColorModeValue } from '@chakra-ui/react'
import { FormActivity } from './components'

export default function CreateActivityPage() {
  const bg = useColorModeValue('white', 'gray.800')
  const color = useColorModeValue('black', 'gray.300')

  return (
    <Box as="main" minH="100vh" bg={bg} color={color}>
      <Container
        pt={{ base: '20px', md: '40px' }}
        pb={{ base: '40px', md: '70px' }}
      >
        <Heading as={'h1'} fontSize={{ base: '2xl', md: '4xl' }}>
          Create Activity
        </Heading>
        <FormActivity />
      </Container>
    </Box>
  )
}
