'use client'

import {
  Box,
  Container,
  useColorModeValue,
  Heading,
  VStack
} from '@chakra-ui/react'
import { Loading } from '@/components/loading'
import { OwnerCard, InvitedUserCard } from './components'
import { useGetTripSharedUsers } from './hooks'

export default function ManageGroup({ params }: { params: { id: string } }) {
  const bg = useColorModeValue('white', 'gray.800')
  const color = useColorModeValue('black', 'gray.300')

  const { tripSharedUsers, loading } = useGetTripSharedUsers(params.id)

  return (
    <Box
      as="main"
      minH={{ base: 'calc(100svh - 124px)', md: 'calc(100svh - 170px)' }}
      bg={bg}
      color={color}
    >
      <Container
        maxW={{ base: '100%', lg: 'container.md' }}
        pt={{ base: '20px', md: '40px' }}
        pb={{ base: '40px', md: '80px' }}
      >
        <Heading
          as="h1"
          fontSize={{ base: '2xl', md: '4xl' }}
          textAlign={{ base: 'left', md: 'center' }}
        >
          Manage Group
        </Heading>
        <Box mt="40px">
          {!tripSharedUsers || loading ? (
            <Loading />
          ) : (
            <VStack align="stretch" gap="30px">
              <OwnerCard
                image={tripSharedUsers.users?.profile_picture_url}
                name={tripSharedUsers.users?.name || ''}
                email={tripSharedUsers.users?.email || ''}
              />

              {tripSharedUsers.invitationsCollection?.edges.map(
                (invitedUser) => {
                  return (
                    <InvitedUserCard
                      key={invitedUser.node.id}
                      id={invitedUser.node.id}
                      tripId={params.id}
                      image={invitedUser.node.users?.profile_picture_url}
                      name={invitedUser.node.users?.name || ''}
                      email={invitedUser.node.users?.email || ''}
                      permissionLevel={invitedUser.node.permission_level}
                    />
                  )
                }
              )}
            </VStack>
          )}
        </Box>
      </Container>
    </Box>
  )
}
