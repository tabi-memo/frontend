'use client'

import {
  Heading,
  Flex,
  Box,
  Container,
  VStack,
  Image,
  Text,
  useColorModeValue,
  Spacer
} from '@chakra-ui/react'
import { CiEdit } from 'react-icons/ci'
import { FaRegTrashAlt } from 'react-icons/fa'
import { MdAccountCircle } from 'react-icons/md'
import { PrimaryButton, AlertButton } from '@/components/button'
import { Link } from '@/components/link'
import { Loading } from '@/components/loading'
import { useGetUserQuery } from '@generated/api'

export default function AccountPage() {
  const bg = useColorModeValue('white', 'gray.800')
  const color = useColorModeValue('black', 'gray.300')
  // TODO: Remove this line after implementing login
  const tmpUuid = 'a1f4509d-39f6-4de7-921d-201ec3d4578f'
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
        <Box
          as="main"
          minH={{ base: '86vh', lg: '78vh' }}
          bg={bg}
          color={color}
        >
          <Container
            minW={{ base: '100%', lg: 'container.sm' }}
            display="flex"
            flexDirection="column"
            alignItems={{ base: 'space-around', lg: 'flex-start' }}
            gap={{ base: '40px', lg: '60px' }}
            mt={{ base: '20px', md: '40px' }}
          >
            <Flex
              direction="column"
              align="center"
              gap={{ base: '40px', lg: '60px' }}
            >
              <Heading
                as="h1"
                fontSize={{ base: 'xl', md: '3xl', lg: '4xl' }}
                fontWeight="bold"
                w={{ base: '100%', lg: 'auto' }}
              >
                Account
              </Heading>
              <Flex
                minW={{ base: '100%', lg: '480px' }}
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
                      <MdAccountCircle size="30px" />
                    )}
                  </VStack>
                  <VStack align="start">
                    <Heading fontSize="bold">Password</Heading>
                    <Link
                      href="/"
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
                    <Link href="/account/edit">
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
            <Flex direction="row" justify="center">
              <AlertButton
                variant="outline"
                color="red"
                _hover={{ bg: 'red.500', color: 'white' }}
                leftIcon={<FaRegTrashAlt size="14px" />}
              >
                Delete your account
              </AlertButton>
              <Spacer />
            </Flex>
          </Container>
        </Box>
      )}
    </>
  )
}
