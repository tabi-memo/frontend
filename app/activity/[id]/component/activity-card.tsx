'use client'

import { Heading, Box, Flex, Spacer, Text, IconButton } from '@chakra-ui/react'
import { FiClock, FiMapPin, FiLink2, FiEdit3, FiTrash2 } from 'react-icons/fi'
import { Link } from '@/components/link'
import { customColors } from '@/theme/color'

type ActivityData = {
  title: string
  time_from: string
  address: string
  url: string
}

type ActivityCardProps = {
  dummyActivityData: ActivityData
}

export const ActivityCard = ({ dummyActivityData }: ActivityCardProps) => {
  return (
    <>
      <Flex pb={{ base: '30px', md: '40px' }}>
        <Heading fontSize={{ base: 'xl', md: '2xl' }}>
          {dummyActivityData.title}
        </Heading>
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
            {dummyActivityData.time_from}
          </Text>
        </Box>
        <Box display="flex" alignItems="center" my={1}>
          <FiMapPin style={{ color: customColors.gray[400] }} />
          <Text
            fontSize={{ base: 'md', md: 'lg' }}
            fontWeight="semibold"
            mx={2}
          >
            {dummyActivityData.address}
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
            {dummyActivityData.url}
          </Link>
        </Box>
      </Flex>
    </>
  )
}
