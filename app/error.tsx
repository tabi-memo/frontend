'use client'

import { useEffect } from 'react'
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  useColorModeValue
} from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import { PrimaryButton } from '@/components/button'
import { Header, Footer } from '@/components/navigation'

export default function Error({
  error
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const bg = useColorModeValue('white', 'gray.800')
  const color = useColorModeValue('black', 'gray.300')
  const router = useRouter()

  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <>
      <Header />
      <Box as="main" minH="100vh" bg={bg} color={color}>
        <Container
          maxW={{ base: '100%', lg: 'container.xl' }}
          pt={{ base: '40px', md: '80px' }}
          pb={{ base: '40px', md: '80px' }}
        >
          <VStack align="center" justify="center">
            <VStack gap="20px">
              {/* TODO Show error code dynamically 404 or 500.. */}
              <Heading as="h1" fontSize={{ base: '2xl', md: '4xl' }}>
                404 Error
              </Heading>
              <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }}>
                Oops! Something went wrong..
                <Text as="span" role="img" aria-label="sad" pl="4px">
                  😔
                </Text>
              </Heading>
              <Text>{error.message}</Text>
            </VStack>
            <Box textAlign="center" mt="50px">
              <PrimaryButton
                variant="outline"
                size={{ base: 'md', md: 'lg' }}
                onClick={() => router.push('/')}
              >
                Back To Home
              </PrimaryButton>
            </Box>
          </VStack>
        </Container>
      </Box>
      <Footer />
    </>
  )
}
