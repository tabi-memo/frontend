'use client'

import { useEffect } from 'react'
import { Flex, Heading, useColorModeValue, useToast } from '@chakra-ui/react'
import { PrimaryButton } from '@/components/button'

export default function Error({
  error,
  reset
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const toast = useToast()
  const bg = useColorModeValue('white', 'gray.800')
  const color = useColorModeValue('black', 'gray.300')

  useEffect(() => {
    toast({
      title: 'An error occurred.',
      description: error.message,
      status: 'error',
      duration: 9000,
      position: 'top',
      isClosable: true
    })
  }, [error, toast])

  return (
    <Flex
      direction="column"
      align="center"
      gap="30px"
      bg={bg}
      color={color}
      minH="100vh"
      mt="60px"
    >
      <Heading as="h1">Something went wrong!</Heading>
      <PrimaryButton
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </PrimaryButton>
    </Flex>
  )
}
