'use client'

import { Heading, Box, Text, VStack } from '@chakra-ui/react'

type ActivityData = {
  memo: string
  cost: string
}

type ActivityInfoProps = {
  dummyActivityData: ActivityData
}

export const ActivityInfo = ({ dummyActivityData }: ActivityInfoProps) => {
  return (
    <>
      <VStack spacing="4" align="stretch">
        <Box mt={{ base: '40px', md: '48px' }}>
          <Heading fontSize={{ base: 'lg', md: 'xl' }}>Memo</Heading>
          <Text pt="2" fontSize={{ base: 'md', md: 'lg' }}>
            {dummyActivityData.memo}
          </Text>
        </Box>

        <Box mt={{ base: '40px', md: '48px' }}>
          <Heading fontSize={{ base: 'lg', md: 'xl' }}>Cost</Heading>
          <Text pt="2" fontSize={{ base: 'md', md: 'lg' }}>
            {dummyActivityData.cost}
          </Text>
        </Box>
      </VStack>
    </>
  )
}
