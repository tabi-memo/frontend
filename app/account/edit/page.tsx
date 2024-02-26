'use client'

import {
  Heading,
  Flex,
  Box,
  Container,
  VStack,
  useColorModeValue
} from '@chakra-ui/react'
import { useSearchParams } from 'next/navigation'
import { AccountEditForm } from './components'

export default function AccountEditPage() {
  const searchParams = useSearchParams()
  const userInfoString = searchParams.get('userInfo')
  const userInfo = userInfoString ? JSON.parse(userInfoString) : null
  const bg = useColorModeValue('white', 'gray.800')
  const color = useColorModeValue('black', 'gray.300')

  return (
    <Box as="main" minH="100svh" bg={bg} color={color}>
      <Container
        minW={{ base: '100%', lg: 'container.sm' }}
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
            w="100%"
            maxW="480px"
            flexDir="column"
            alignItems={{ base: 'flex-start', md: 'center' }}
          >
            <Heading
              as="h1"
              fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
              fontWeight="bold"
            >
              Account Edit
            </Heading>
            <Flex
              gap={{ base: '20px', md: '30px' }}
              w="100%"
              direction="column"
              align="space-between"
            >
              <Flex direction="column" gap="20px" mb="30px">
                <AccountEditForm {...userInfo} />
              </Flex>
            </Flex>
          </Flex>
        </VStack>
      </Container>
    </Box>
  )
}
