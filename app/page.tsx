'use client'

import { useSuspenseQuery, gql, TypedDocumentNode } from '@apollo/client'
import { Heading, Box, Container, useColorModeValue } from '@chakra-ui/react'
import { PrimaryButton } from '@/components/button'
import { Header, Footer } from '@/components/navigation'
import {
  TripsCollectionQuery,
  TripsCollectionQueryVariables
} from '../graphql-codegen/generated/graphql'

export default function Top() {
  const bg = useColorModeValue('white', 'gray.800')
  const color = useColorModeValue('black', 'gray.300')

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
      <Header />
      <Box as="main" minH="100vh" bg={bg} color={color}>
        <Container
          maxW={{ base: '100%', lg: 'container.xl' }}
          pt={{ base: '20px', md: '30px' }}
          pb={{ base: '40px', md: '80px' }}
        >
          <Heading>Top Page</Heading>
          <PrimaryButton>Button</PrimaryButton>
        </Container>
      </Box>
      <Footer />
    </>
  )
}
