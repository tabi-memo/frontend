'use client'

import { Box, Flex, Spinner, useColorModeValue } from '@chakra-ui/react'

export default function Loading() {
  const bg = useColorModeValue('white', 'gray.800')
  const color = useColorModeValue('black', 'gray.300')

  return (
    <Box as="main" minH="100vh" bg={bg} color={color}>
      <Flex direction="column" justify="center" align="center">
        <Spinner size="xl" />
      </Flex>
    </Box>
  )
}
