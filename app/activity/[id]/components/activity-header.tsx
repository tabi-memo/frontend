'use client'

import { Heading, Box, Flex, Spacer, Text, IconButton } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import { FiClock, FiMapPin, FiLink2, FiEdit3, FiTrash2 } from 'react-icons/fi'
import { Link } from '@/components/link'
import { formatToDateTime } from '@/libs/utils'
import { customColors } from '@/theme/color'

type ActivityHeaderProps = {
  id: string
  title: string
  time_from: string | null
  time_to?: string | null
  address?: string | null
  url?: string | null
}

export const ActivityHeader = ({
  id,
  title,
  time_from,
  time_to,
  address,
  url
}: ActivityHeaderProps) => {
  const router = useRouter()

  return (
    <>
      <Flex pb={{ base: '30px', md: '40px' }} align="center">
        <Heading fontSize={{ base: 'xl', md: '2xl' }}>{title}</Heading>
        <Spacer />

        <Flex gap={{ base: '10px', md: '16px' }}>
          <IconButton
            aria-label="Edit this trip"
            variant="roundIcon"
            onClick={() => router.push(`/activity/${id}/edit`)}
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
            {formatToDateTime(time_from)} - {formatToDateTime(time_to)}
          </Text>
        </Box>
        <Box display="flex" alignItems="center" my={1}>
          <FiMapPin style={{ color: customColors.gray[400] }} />
          <Text
            fontSize={{ base: 'md', md: 'lg' }}
            fontWeight="semibold"
            mx={2}
          >
            {address}
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
            {url}
          </Link>
        </Box>
      </Flex>
    </>
  )
}
