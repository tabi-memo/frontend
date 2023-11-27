'use client'
import {
  Heading,
  Box,
  Container,
  Grid,
  GridItem,
  useColorModeValue
} from '@chakra-ui/react'
import { PrimaryButton } from '@/components/button'
import { Header, Footer } from '@/components/navigation'
import { TripSearch, TripSort } from '@/trip/components'

export default function Top() {
  const bg = useColorModeValue('white', 'gray.800')
  const color = useColorModeValue('black', 'gray.300')

  return (
    <>
      <Header />
      <Box as="main" minH="100vh" bg={bg} color={color}>
        <Container
          maxW={{ base: '100%', lg: 'container.xl' }}
          pt={{ base: '20px', md: '30px' }}
          pb={{ base: '40px', md: '80px' }}
        >
          <Grid
            templateRows={'repeat(2, 1fr)'}
            gridTemplateColumns={{ base: '1fr', lg: '342px 1fr' }}
            alignItems="center"
            gap={{ base: '12px', lg: '40px' }}
          >
            <GridItem
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              colSpan={{ base: 2, lg: 1 }}
            >
              <Heading fontSize={{ base: '2xl', md: '4xl' }}>My Trips</Heading>
              <PrimaryButton w="9.5rem">Add New Trip</PrimaryButton>
            </GridItem>
            <GridItem ml={{ base: '', lg: 'auto' }}>
              <TripSearch />
            </GridItem>
            <GridItem>
              <TripSort />
            </GridItem>
          </Grid>
        </Container>
      </Box>
      <Footer />
    </>
  )
}
