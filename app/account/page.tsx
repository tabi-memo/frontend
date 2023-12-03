'use client'

import { Suspense } from 'react'
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
import Loading from './loading'
import { useGetUserSuspenseQuery } from '@generated/api'

export default function AccountPage({ uuid }: { uuid: string }) {
  const bg = useColorModeValue('white', 'gray.800')
  const color = useColorModeValue('black', 'gray.300')
  // TODO: Remove this line after implementing login
  const tmpUuid = '21bfb273-f6ee-4205-b70d-5ff42b66731f'
  const { data } = useGetUserSuspenseQuery({
    variables: { uuid: uuid || tmpUuid }
  })
  const user = data.usersCollection?.edges[0].node

  return (
    <>
      <Box as="main" minH="100vh" bg={bg} color={color}>
        <Container maxW={{ base: '100%', lg: 'container.xl' }}>
          <VStack
            gap={{ base: '40px', lg: '60px' }}
            mt={{ base: '20px', md: '30px' }}
          >
            <Suspense fallback={<Loading />}>
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
                  <Text>{user?.email}</Text>
                </HStack>
                <HStack spacing="48px">
                  <Heading fontSize="bold">Name</Heading>
                  <Text>{user?.name}</Text>
                </HStack>
                <HStack spacing="48px">
                  <Heading fontSize="bold">Image</Heading>
                  <Image
                    borderRadius="full"
                    boxSize="150px"
                    src={
                      user?.profile_picture_url || 'https://bit.ly/dan-abramov'
                    }
                    alt="Profile Picture"
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
            </Suspense>
          </VStack>
        </Container>
      </Box>
    </>
  )
}
