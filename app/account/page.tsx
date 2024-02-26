'use client'

import {
  Heading,
  Flex,
  Box,
  Container,
  VStack,
  Image,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import { CiEdit } from 'react-icons/ci'
import { FaRegTrashAlt } from 'react-icons/fa'
import { MdAccountCircle } from 'react-icons/md'
import { PrimaryButton, AlertButton } from '@/components/button'
import { Link } from '@/components/link'
import { Loading } from '@/components/loading'
import { useUserId } from '@/providers/session-provider'
import { useGetUserQuery } from '@generated/api'

export default function AccountPage() {
  const bg = useColorModeValue('white', 'gray.800')
  const color = useColorModeValue('black', 'gray.300')
  const userId = useUserId()
  const { data, loading, error } = useGetUserQuery({
    variables: { id: userId }
  })
  const user = data?.usersCollection?.edges[0].node

  // TODO: Refactoring error handling using Apollo ErrorLink
  //       https://www.apollographql.com/docs/react/api/link/apollo-link-error/
  if (error) {
    // NOTE: If error is thrown, Next.js will render automatically account/error.tsx
    throw new Error(error.message)
  }

  const userInfoQuery = JSON.stringify({
    name: user?.name,
    email: user?.email,
    profile_picture_url: user?.profile_picture_url ?? null
  })

  // Generate the URL with the query parameter
  const href = `/account/edit?userInfo=${encodeURIComponent(userInfoQuery)}`

  return (
    <>
      {loading || !data?.usersCollection ? (
        <Flex minH="100vh" align="center" justify="center">
          <Loading />
        </Flex>
      ) : (
        <Box as="main" minH="100svh" bg={bg} color={color}>
          <Container
            minW={{ base: '100%', lg: 'container.sm' }}
            maxW="480px"
            display="flex"
            flexDirection="column"
            alignItems={{ base: 'space-around', lg: 'flex-start' }}
            gap={{ base: '40px', lg: '60px' }}
            pt={{ base: '20px', md: '40px' }}
            pb={{ base: '60px', md: '70px' }}
          >
            <VStack
              gap={{ base: '40px', lg: '60px' }}
              mx={{ base: '0', lg: 'auto' }}
            >
              <Flex
                gap="40px"
                w={{ base: '100%', lg: 'auto' }}
                flexDir="column"
                alignItems={{ base: 'flex-start', md: 'center' }}
              >
                <Heading
                  as="h1"
                  fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                  fontWeight="bold"
                >
                  Account
                </Heading>
                <Flex
                  w={{ base: '100%', md: '480px' }}
                  gap={{ base: '20px', lg: '30px' }}
                  padding="18px"
                  borderWidth="1px"
                  direction="column"
                  align="space-between"
                >
                  <Flex direction="column" gap="20px" mb="30px">
                    <VStack align="start">
                      <Heading fontSize="bold">Email</Heading>
                      <Text>{user?.email}</Text>
                    </VStack>
                    <VStack align="start">
                      <Heading fontSize="bold">Name</Heading>
                      <Text>{user?.name}</Text>
                    </VStack>
                    <VStack align="start">
                      <Heading fontSize="bold">Image</Heading>
                      {user?.profile_picture_url ? (
                        <Image
                          borderRadius="full"
                          boxSize="30px"
                          src={user.profile_picture_url}
                          alt="Profile Picture"
                        />
                      ) : (
                        <Box color="gray.400">
                          <MdAccountCircle size="30px" />
                        </Box>
                      )}
                    </VStack>
                    <VStack align="start">
                      <Heading fontSize="bold">Password</Heading>
                      <Link
                        href="/change-password"
                        hasUnderLine
                        color="primary.700"
                        fontSize={{ base: 'md', md: 'lg' }}
                      >
                        Change your password
                      </Link>
                    </VStack>
                  </Flex>
                  <Flex direction="column" align="center">
                    <VStack justifyContent="center">
                      <Link href={href}>
                        <PrimaryButton
                          variant="solid"
                          leftIcon={<CiEdit size="16px" />}
                        >
                          Edit Profile
                        </PrimaryButton>
                      </Link>
                    </VStack>
                  </Flex>
                </Flex>
              </Flex>

              <Box ml="0px" w={{ base: '100%', md: '480px' }}>
                <AlertButton
                  variant="outline"
                  leftIcon={<FaRegTrashAlt size="14px" />}
                >
                  Delete your account
                </AlertButton>
              </Box>
            </VStack>
          </Container>
        </Box>
      )}
    </>
  )
}
