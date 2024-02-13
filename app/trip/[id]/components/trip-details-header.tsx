import {
  Heading,
  Tag,
  Box,
  Flex,
  useColorModeValue,
  Image as ChakraImage,
  Link,
  IconButton,
  useDisclosure,
  Text
} from '@chakra-ui/react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { FiEdit3, FiShare2, FiTrash2 } from 'react-icons/fi'
import { MdManageAccounts, MdAccountCircle } from 'react-icons/md'
import { ConfirmModal } from '@/components/modal'
import { formatDateToSlash } from '@/libs/utils'
import { useTripDelete } from '../../hooks'

type TripDetailsHeaderProps = {
  id: string
  image: string | null | undefined
  title: string
  dateFrom: string | null | undefined
  dateTo: string | null | undefined
  cost: string | null | undefined
  costUnit: string | null | undefined
  users: {
    id: string | undefined
    image: string | null | undefined
  }[]
  tags: { id: string | undefined; name: string | undefined }[]
}

export const TripDetailsHeader = ({
  id,
  image,
  title,
  dateFrom,
  dateTo,
  cost,
  costUnit,
  tags,
  users
}: TripDetailsHeaderProps) => {
  const router = useRouter()

  const imageSrc = useColorModeValue(
    '/images/small_no_image_light.jpg',
    '/images/small_no_image_dark.jpg'
  )

  const color = useColorModeValue('black', 'gray.300')
  const tagBgColor = useColorModeValue('primary.700', 'primary.800')

  const {
    isOpen: isDeleteModalOpen,
    onOpen: onDeleteModalOpen,
    onClose: onDeleteModalClose
  } = useDisclosure()

  const { deleteTrip, isTripDeleting } = useTripDelete(id)

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
          alt={`image of ${title}`}
          fill
          style={{ objectFit: 'cover' }}
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
              fontWeight="bold"
            >
              {formatDateToSlash(dateFrom, 'dayMonthYear')} -{' '}
              {formatDateToSlash(dateTo, 'dayMonthYear')}
            </Box>
            {cost && (
              <Box mt="4px" display={{ base: 'none', md: 'block' }}>
                Total Cost: {cost} {costUnit}
              </Box>
            )}
          </Box>

          <Flex gap={{ base: '10px', md: '28px' }}>
            {/* TODO Change to modal */}
            <IconButton
              aria-label="Share this trip"
              onClick={() => {}}
              variant="roundIcon"
              p={{ base: '6px', md: '10px' }}
            >
              <FiShare2 size="100%" />
            </IconButton>
            <IconButton
              aria-label="Edit this trip"
              onClick={() => router.push(`/trip/${id}/edit`)}
              variant="roundIcon"
              p={{ base: '6px', md: '10px' }}
            >
              <FiEdit3 size="100%" />
            </IconButton>
            <IconButton
              aria-label="Delete this trip"
              onClick={onDeleteModalOpen}
              variant="roundIcon"
              p={{ base: '6px', md: '10px' }}
            >
              <FiTrash2 size="100%" />
            </IconButton>
          </Flex>
        </Flex>

        <Flex
          flexDir={{ base: 'column', md: 'row' }}
          mt={{ base: '24px', md: '20px' }}
          justifyContent="space-between"
          gap={'14px'}
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

          {cost && (
            <Box display={{ base: 'block', md: 'none' }} fontWeight="bold">
              Total Cost: {cost} {costUnit}
            </Box>
          )}
        </Flex>
      </Box>

      {/* Delete Trip Modal */}
      <ConfirmModal
        isOpen={isDeleteModalOpen}
        onClose={onDeleteModalClose}
        confirmBody={
          <Text fontSize="lg" fontWeight="semibold">
            Are you sure you want to delete this trip?
          </Text>
        }
        onClick={deleteTrip}
        isMutating={isTripDeleting}
        submitLabel="Delete"
      />
    </Box>
  )
}
