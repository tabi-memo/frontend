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
import { MdAccountCircle } from 'react-icons/md'
import { PrimaryButton, AlertButton } from '@/components/button'
import { Loading } from '@/components/loading'
import { useGetUserQuery } from '@generated/api'

export default function AccountPage() {
  const bg = useColorModeValue('white', 'gray.800')
  const color = useColorModeValue('black', 'gray.300')
  // TODO: Remove this line after implementing login
  const tmpUuid = 'b24ac573-e895-47b5-866e-0cf904e5eec5'
  const { data, loading, error } = useGetUserQuery({
    variables: { uuid: tmpUuid }
  })
  const user = data?.usersCollection?.edges[0].node

  // TODO: Refactoring error handling using Apollo ErrorLink
  //       https://www.apollographql.com/docs/react/api/link/apollo-link-error/
  if (error) {
    // NOTE: If error is thrown, Next.js will render automatically account/error.tsx
    throw new Error(error.message)
  }

  return (
    <>
      {loading || !data?.usersCollection ? (
        <Loading />
      ) : (
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
                  <Text>{user?.email}</Text>
                </HStack>
                <HStack spacing="48px">
                  <Heading fontSize="bold">Name</Heading>
                  <Text>{user?.name}</Text>
                </HStack>
                <HStack spacing="48px">
                  <Heading fontSize="bold">Image</Heading>
                  {user?.profile_picture_url ? (
                    <Image
                      borderRadius="full"
                      boxSize="150px"
                      src={user.profile_picture_url}
                      alt="Profile Picture"
                    />
                  ) : (
                    <MdAccountCircle size="50%" />
                  )}
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
      )}
    </>
  )
}
