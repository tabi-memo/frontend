'use client'

import { Heading, Box, Text, VStack } from '@chakra-ui/react'

type ActivityInfoProps = {
  memo: string | null | undefined
  cost: number | null | undefined
}

export const ActivityInfo = ({ memo, cost }: ActivityInfoProps) => {
  return (
    <VStack spacing="4" align="stretch">
      <Box mt={{ base: '40px', md: '48px' }}>
        <Heading fontSize={{ base: 'lg', md: 'xl' }}>Memo</Heading>
        <Text pt="2" fontSize={{ base: 'md', md: 'lg' }}>
          {memo}
        </Text>
      </Box>

      <Box mt={{ base: '40px', md: '48px' }}>
        <Heading fontSize={{ base: 'lg', md: 'xl' }}>Cost</Heading>
        <Text pt="2" fontSize={{ base: 'md', md: 'lg' }}>
          ${cost}
        </Text>
      </Box>
    </VStack>
  )
}
