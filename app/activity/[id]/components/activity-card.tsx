'use client'

import { Heading, Box, Flex, Spacer, Text, IconButton } from '@chakra-ui/react'
import { FiClock, FiMapPin, FiLink2, FiEdit3, FiTrash2 } from 'react-icons/fi'
import { Link } from '@/components/link'
import { customColors } from '@/theme/color'
import { ActivityCollectionQuery } from '@generated/api'

type ActivityInfoProps = {
  activityData: ActivityCollectionQuery | undefined
}

export const ActivityCard: React.FC<ActivityInfoProps> = ({ activityData }) => {
  if (!activityData || !activityData.activityCollection) {
    return null
  }

  const data = activityData?.activityCollection?.edges[0]?.node
  const timeFrom = data.time_from?.split('T')[0]
  const timeTo = data.time_to?.split('T')[0]

  return (
    <>
      <Flex pb={{ base: '30px', md: '40px' }}>
        <Heading fontSize={{ base: 'xl', md: '2xl' }}>{data.title}</Heading>
        <Spacer />

        <Flex gap={{ base: '10px', md: '16px' }}>
          <IconButton
            aria-label="Edit this trip"
            variant="roundIcon"
            onClick={() => {}}
            p={{ base: '6px', md: '10px' }}
          >
            <FiEdit3 size="100%" />
          </IconButton>
          <IconButton
            aria-label="Delete this trip"
            variant="roundIcon"
            p={{ base: '6px', md: '10px' }}
          >
            <FiTrash2 size="100%" />
          </IconButton>
        </Flex>
      </Flex>
      <Flex flexDirection="column" pb={{ base: '40px', md: '48px' }}>
        <Box display="flex" alignItems="center" my={1}>
          <FiClock style={{ color: customColors.gray[400] }} />
          <Text
            fontSize={{ base: 'md', md: 'lg' }}
            fontWeight="semibold"
            mx={2}
          >
            {timeFrom} - {timeTo}
          </Text>
        </Box>
        <Box display="flex" alignItems="center" my={1}>
          <FiMapPin style={{ color: customColors.gray[400] }} />
          <Text
            fontSize={{ base: 'md', md: 'lg' }}
            fontWeight="semibold"
            mx={2}
          >
            {data.address}
          </Text>
        </Box>
        <Box display="flex" alignItems="center" my={1}>
          <FiLink2 style={{ color: customColors.gray[400] }} />
          <Link
            mx={2}
            href="/"
            hasUnderLine
            color="primary.700"
            fontSize={{ base: 'md', md: 'lg' }}
          >
            {data.url}
          </Link>
        </Box>
      </Flex>
    </>
  )
}
