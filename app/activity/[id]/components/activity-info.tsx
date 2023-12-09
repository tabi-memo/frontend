'use client'

import { Heading, Box, Text, VStack } from '@chakra-ui/react'
import { ActivityCollectionQuery } from '@generated/api'

type ActivityInfoProps = {
  activityData: ActivityCollectionQuery | undefined
}

export const ActivityInfo: React.FC<ActivityInfoProps> = ({ activityData }) => {
  if (!activityData || !activityData.activityCollection) {
    return null
  }

  const data = activityData.activityCollection.edges[0].node
  return (
    <>
      <VStack spacing="4" align="stretch">
        <Box mt={{ base: '40px', md: '48px' }}>
          <Heading fontSize={{ base: 'lg', md: 'xl' }}>Memo</Heading>
          <Text pt="2" fontSize={{ base: 'md', md: 'lg' }}>
            {data.memo}
          </Text>
        </Box>

        <Box mt={{ base: '40px', md: '48px' }}>
          <Heading fontSize={{ base: 'lg', md: 'xl' }}>Cost</Heading>
          <Text pt="2" fontSize={{ base: 'md', md: 'lg' }}>
            ${data.cost}
          </Text>
        </Box>
      </VStack>
    </>
  )
}
