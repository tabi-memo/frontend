'use client'

import {
  Heading,
  Box,
  Container,
  Divider,
  VStack,
  HStack,
  Image,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import { PrimaryButton, AlertButton } from '@/components/button'

export default function AccountPage() {
  const bg = useColorModeValue('white', 'gray.800')
  const color = useColorModeValue('black', 'gray.300')

  return (
    <>
      <Box as="main" minH="100vh" bg={bg} color={color}>
        <Container maxW={{ base: '100%', lg: 'container.xl' }}>
          <VStack
            gap={{ base: '40px', lg: '60px' }}
            mt={{ base: '20px', md: '30px' }}
          >
            <Heading
              as="h1"
              fontSize={{ base: 'xl', md: '3xl', lg: '4xl' }}
              fontWeight="bold"
              w={{ base: '100%', lg: 'auto' }}
            >
              Account
            </Heading>
            <Divider />
            <VStack align="start" spacing={4}>
              <HStack spacing="48px">
                <Heading fontSize="bold">Email</Heading>
                <Text>user1@example.com</Text>
              </HStack>
              <HStack spacing="48px">
                <Heading fontSize="bold">Name</Heading>
                <Text>user1</Text>
              </HStack>
              <HStack spacing="48px">
                <Heading fontSize="bold">Image</Heading>
                <Image
                  borderRadius="full"
                  boxSize="150px"
                  src="https://bit.ly/dan-abramov"
                  alt="Dan Abramov"
                />
              </HStack>
              <HStack spacing="24px">
                <Heading fontSize="bold">Password</Heading>
                <PrimaryButton variant="outline">
                  Change your password
                </PrimaryButton>
              </HStack>
            </VStack>
            <VStack justifyContent="center">
              <PrimaryButton variant="solid">Edit Profile</PrimaryButton>
            </VStack>
            <Divider />
            <VStack gap="30px">
              <PrimaryButton variant="outline">Logout</PrimaryButton>
              <AlertButton>Delete your account</AlertButton>
            </VStack>
          </VStack>
        </Container>
      </Box>
    </>
  )
}
