'use client'

import { Heading, Box, Container, useColorModeValue } from '@chakra-ui/react'
import { PrimaryButton } from '@/components/button'
import { Header, Footer } from '@/components/navigation'
import { useTripsCollectionSuspenseQuery } from '@generated/api'

export default function Top() {
  const bg = useColorModeValue('white', 'gray.800')
  const color = useColorModeValue('black', 'gray.300')
  const { data } = useTripsCollectionSuspenseQuery({
    variables: { user_id: 1 }
  })
  console.log({ data: data.tripsCollection?.edges[0].node })

  return (
    <>
      <Header />
      <Box as="main" minH="100vh" bg={bg} color={color}>
        <Container
          maxW={{ base: '100%', lg: 'container.xl' }}
          pt={{ base: '20px', md: '30px' }}
          pb={{ base: '40px', md: '80px' }}
        >
          <Heading>Top Page</Heading>
          <PrimaryButton>Button</PrimaryButton>
        </Container>
      </Box>
      <Footer />
    </>
  )
}
