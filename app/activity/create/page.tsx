'use client'

import {
  Box,
  Container,
  Heading,
  useColorModeValue
} from '@chakra-ui/react'
import { Header, Footer } from '@/components/navigation'
import {Form} from "./components"


export default function Create() {

  const bg = useColorModeValue('white', 'gray.800')
  const color = useColorModeValue('black', 'gray.300')

  return (
    <>
      <Box as="main" minH="100vh" bg={bg} color={color}>
        <Header />
        <Container
          maxW={{ base: '100%', md: 'container.md' }}
          pt={{ base: '20px', md: '30px' }}
          pb={{ base: '40px', md: '80px' }}
          margin="auto"
        >
          <Container>
            <Heading as={'h1'} fontSize={{ base: '2xl', md: '4xl' }}>
              Create Activity
            </Heading>
          </Container>
          <Form />
        </Container>
        <Footer />
      </Box>
    </>
  )
}
