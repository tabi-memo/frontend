'use client'
import {
  Heading,
  Box,
  Container,
  Grid,
  GridItem,
  Flex,
  useColorModeValue
} from '@chakra-ui/react'
import { PrimaryButton } from '@/components/button'
import { Header, Footer } from '@/components/navigation'
import { TripSearch, TripSort, TripCard } from '@/trip/components'

const dummy = [
  {
    id: 1,
    title: 'Tokyo',
    date_from: 'Oct 10, 2023',
    date_to: 'Nov 10, 2023',
    image_storage_object_id:
      'https://placehold.jp/6381f8/ffffff/366x277.png?text=Picture',
    share: [
      { id: '', image: '' },
      { id: '', image: '' }
    ]
  },
  {
    id: 2,
    title: 'Kyoto',
    date_from: 'Oct 10, 2023',
    date_to: 'Nov 10, 2023',
    image_storage_object_id:
      'https://placehold.jp/6381f8/ffffff/366x277.png?text=Picture',
    share: [
      { id: '', image: '' },
      { id: '', image: '' }
    ]
  }
]

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
              <Heading as={'h1'} fontSize={{ base: '2xl', md: '4xl' }}>
                My Trips
              </Heading>
              <PrimaryButton w="9.5rem">Add New Trip</PrimaryButton>
            </GridItem>
            <GridItem ml={{ base: '', lg: 'auto' }}>
              <TripSearch />
            </GridItem>
            <GridItem>
              <TripSort />
            </GridItem>
          </Grid>
          <Flex
            gap={{ base: '20px', lg: '60px' }}
            mt={{ base: '38px', md: '40px' }}
            flexWrap={'wrap'}
          >
            {dummy.map((trip) => (
              <TripCard key={trip.id} data={trip} />
            ))}
          </Flex>
          <Box textAlign="center" mt={{ base: '40px', md: '60px' }}>
            <PrimaryButton variant="outline">Load More</PrimaryButton>
          </Box>
        </Container>
      </Box>
      <Footer />
    </>
  )
}
