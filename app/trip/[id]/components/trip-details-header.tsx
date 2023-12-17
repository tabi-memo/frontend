'use client'

import {
  Heading,
  Tag,
  Box,
  Flex,
  useColorModeValue,
  Image as ChakraImage,
  Link
} from '@chakra-ui/react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { FiEdit3, FiShare2, FiTrash2 } from 'react-icons/fi'
import { MdManageAccounts, MdAccountCircle } from 'react-icons/md'
import { IconButton } from '@/components/button'

type TripDetailsHeaderProps = {
  id: number
  image: string | null | undefined
  title: string
  date_from: string | null | undefined
  date_to: string | null | undefined
  users: {
    id: number | undefined
    image: string | null | undefined
  }[]

  tags: { id: number | undefined; name: string | undefined }[]
}

export const TripDetailsHeader = ({
  id,
  image,
  title,
  date_from,
  date_to,
  tags,
  users
}: TripDetailsHeaderProps) => {
  const router = useRouter()

  const imageSrc = useColorModeValue(
    '/images/no_image_light.jpg',
    '/images/no_image_dark.jpg'
  )

  const color = useColorModeValue('black', 'gray.300')
  const tagBgColor = useColorModeValue('primary.700', 'primary.800')

  return (
    <Box>
      <Box
        w={{ base: 'auto', md: '100%' }}
        h={{ base: '164px', md: '288px' }}
        position="relative"
        ml={{ base: 'calc(50% - 50vw)', md: '0px' }}
        mr={{ base: 'calc(50% - 50vw)', md: '0px' }}
      >
        <Image
          src={image || imageSrc}
          // src={image || '/images/test.jpg'}
          alt={`image of ${title}`}
          objectFit="cover"
          layout="fill"
        />
        <Box
          position={{ base: 'absolute', md: 'relative' }}
          backgroundColor={'rgba(0, 0, 0, 0.5)'}
          top={0}
          left={0}
          right={0}
          bottom={0}
        />
      </Box>
      <Box mt={{ base: '-68px', md: '30px' }}>
        <Flex
          justifyContent="space-between"
          alignItems={{ base: 'center', md: 'start' }}
          position="relative"
        >
          <Box>
            <Heading
              as="h1"
              fontSize={{ base: '2xl', md: '4xl' }}
              color={{ base: 'gray.100', md: color }}
            >
              {title}
            </Heading>
            <Box
              mt={{ base: '4px', md: '8px' }}
              fontSize={{ base: 'sm', md: 'md' }}
              color={{ base: 'gray.100', md: color }}
            >
              {date_from} - {date_to}
            </Box>
          </Box>

          <Flex gap={{ base: '10px', md: '28px' }}>
            {/* TODO Change URL or modal */}
            <IconButton
              aria-label="Share this trip"
              icon={FiShare2}
              onClick={() => {}}
              w={{ base: '24px', md: '38px' }}
              h={{ base: '24px', md: '38px' }}
              color={{ base: 'gray.100', md: 'primary.700' }}
            />
            <IconButton
              aria-label="Edit this trip"
              icon={FiEdit3}
              onClick={() => router.push(`/trip/${id}/edit`)}
              w={{ base: '24px', md: '38px' }}
              h={{ base: '24px', md: '38px' }}
              color={{ base: 'gray.100', md: 'primary.700' }}
            />
            <IconButton
              aria-label="Delete this trip"
              icon={FiTrash2}
              onClick={() => {}}
              w={{ base: '24px', md: '38px' }}
              h={{ base: '24px', md: '38px' }}
              color={{ base: 'gray.100', md: 'primary.700' }}
            />
          </Flex>
        </Flex>

        <Flex
          flexDir={{ base: 'column', md: 'row' }}
          mt={{ base: '24px', md: '28px' }}
          justifyContent="space-between"
          gap={'16px'}
        >
          <Flex align="center" gap="18px">
            {!!users.length && (
              <Flex gap="12px">
                {users?.map((user) => (
                  <Box
                    key={user.id}
                    w={{ base: '28px', md: '38px' }}
                    h={{ base: '28px', md: '38px' }}
                    position="relative"
                  >
                    {user.image ? (
                      <ChakraImage
                        src={user.image}
                        alt=""
                        borderRadius="full"
                        objectFit="cover"
                      />
                    ) : (
                      <MdAccountCircle size="100%" />
                    )}
                  </Box>
                ))}
              </Flex>
            )}
            {/* TODO Change URL */}
            <Link
              href="/"
              display="flex"
              alignItems="center"
              borderBottom="1px"
              h="1.5rem"
              textColor="primary.700"
              _hover={{
                textDecoration: 'none',
                opacity: '.7'
              }}
            >
              <MdManageAccounts size="24px" />
              Manage
            </Link>
          </Flex>
          <Flex gap="12px" maxW={{ base: '100%', md: '50%' }} flexWrap="wrap">
            {tags.map((tag) => (
              <Tag
                key={tag.id}
                variant="solid"
                // bgColor="primary.700"
                bgColor={tagBgColor}
                borderRadius="full"
                px={'20px'}
                h={{ base: '1.5rem', md: '2.125rem' }}
                fontSize={{ base: 'sm', md: 'sm' }}
              >
                {tag.name}
              </Tag>
            ))}
          </Flex>
        </Flex>
      </Box>
    </Box>
  )
}
