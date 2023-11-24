'use client'

import { useSuspenseQuery, gql, TypedDocumentNode } from '@apollo/client'
import { Link } from '@chakra-ui/next-js'
import { Heading, VStack, Box, useColorMode } from '@chakra-ui/react'
import { PrimaryButton } from '@/components/button'
import {
  TripsCollectionQuery,
  TripsCollectionQueryVariables
} from '../graphql-codegen/generated/graphql'

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode()

  // DEBUG: test graphql query
  const tripsCollectionQuery: TypedDocumentNode<
    TripsCollectionQuery,
    TripsCollectionQueryVariables
  > = gql`
    query tripsCollection($user_id: BigInt!) {
      tripsCollection(filter: { user_id: { eq: $user_id } }) {
        edges {
          node {
            id
            uuid
            title
            date_from
            date_to
            invitationsCollection {
              edges {
                node {
                  users {
                    id
                    name
                  }
                }
              }
            }
            activityCollection {
              edges {
                node {
                  id
                  title
                }
              }
            }
          }
        }
      }
    }
  `
  const { data } = useSuspenseQuery(tripsCollectionQuery, {
    variables: { user_id: 1 }
  })
  console.log({ tripData: data.tripsCollection?.edges[0].node })

  return (
    <>
      <Heading>Home</Heading>
      <Link
        href="/auth/login"
        color="primary.700"
        _hover={{ color: 'primary.900' }}
      >
        Login
      </Link>
      <br />
      <Link
        href="/auth/signup"
        color="primary.700"
        _hover={{ color: 'primary.900' }}
      >
        SignUp
      </Link>

      <Box>
        <PrimaryButton onClick={toggleColorMode} variant="outline">
          {colorMode === 'light' ? 'To Dark' : 'To Light'}
        </PrimaryButton>
      </Box>

      <VStack>
        <Box>Button List (only primary)</Box>
        <PrimaryButton>Button</PrimaryButton>
        <PrimaryButton isActive>Button</PrimaryButton>
        <PrimaryButton isDisabled>Button</PrimaryButton>
        <PrimaryButton variant={'outline'}>Button</PrimaryButton>
        <PrimaryButton isActive variant={'outline'}>
          Button
        </PrimaryButton>
        <PrimaryButton isDisabled variant={'outline'}>
          Button
        </PrimaryButton>
      </VStack>
    </>
  )
}
