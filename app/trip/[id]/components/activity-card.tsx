import {
  Box,
  IconButton,
  Text,
  VStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  useColorModeValue
} from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import { FiTrash2, FiMapPin, FiMoreHorizontal, FiEdit3 } from 'react-icons/fi'
import { Link } from '@/components/link'
import { ConfirmModal } from '@/components/modal'
import {
  formatDbTimeToDate,
  formatDateToSlash,
  extractTimeFromDate
} from '@/libs/utils'
import { ActivityType } from '../components'

type ActivityCardProps = {
  activity: ActivityType
  selectedDate: string
}

export const ActivityCard = ({ activity, selectedDate }: ActivityCardProps) => {
  const bgColor = useColorModeValue('white', 'gray.700')
  const borderColor = useColorModeValue('gray.300', 'gray.700')
  const iconButtonColor = useColorModeValue('gray.400', 'gray.500')

  const router = useRouter()
  const {
    isOpen: isDeleteModalOpen,
    onOpen: onDeleteModalOpen,
    onClose: onDeleteModalClose
  } = useDisclosure()

  const differentDate = (displayPlace: 'timeFrom' | 'timeTo') => {
    if (!activity.timeTo) return null

    const timeFromDate = formatDbTimeToDate(activity.timeFrom)
    const timeToDate = formatDbTimeToDate(activity.timeTo)

    if (timeFromDate === timeToDate) return null

    const [yearSelected, monthSelected, daySelected] = selectedDate
      .split('-')
      .map(Number)

    const [yearTimeFrom, monthTimeFrom, dayTimeFrom] = timeFromDate
      .split('-')
      .map(Number)

    const [yearTimeTo, monthTimeTo, dayTimeTo] = timeToDate
      .split('-')
      .map(Number)

    const selectedDateObj = new Date(
      yearSelected,
      monthSelected - 1,
      daySelected
    )

    const timeFromDateObj = new Date(
      yearTimeFrom,
      monthTimeFrom - 1,
      dayTimeFrom
    )

    const timeToDateObj = new Date(yearTimeTo, monthTimeTo - 1, dayTimeTo)

    // To display below TimeFrom if the selected date is before than the timeFrom date
    if (displayPlace === 'timeFrom' && timeFromDateObj < selectedDateObj) {
      return formatDateToSlash(timeFromDate, 'dayMonth')
    }

    // To display below TimeTo if the selected date is later than the timeTo date
    if (displayPlace === 'timeTo' && timeToDateObj > selectedDateObj) {
      return formatDateToSlash(timeToDate, 'dayMonth')
    }
  }

  return (
    <>
      <Box position="relative" w="100%">
        <Link
          href={`/activity/${activity.id}`}
          hasHoverUnderLine={false}
          display="flex"
          gap={{ base: '16px', md: '40px' }}
        >
          <VStack fontSize={{ base: 'xs', md: 'sm' }} w="42px" flexShrink={0}>
            <VStack spacing="0">
              {differentDate('timeFrom') && (
                <Text as="span" fontSize="xs" data-testid="timeFromDate">
                  ({differentDate('timeFrom')})
                </Text>
              )}
              <Text as="span">{extractTimeFromDate(activity.timeFrom)}</Text>
            </VStack>

            <Box color="gray.600" w={{ base: '20px', md: '28px' }}>
              <FiMapPin size="100%" />
            </Box>
            <VStack spacing="0">
              <Text as="span">{extractTimeFromDate(activity.timeTo)}</Text>

              {differentDate('timeTo') && (
                <Text as="span" fontSize="xs" data-testid="timeToDate">
                  ({differentDate('timeTo')})
                </Text>
              )}
            </VStack>
          </VStack>
          <Box
            borderWidth="1px"
            borderColor={borderColor}
            py="14px"
            pl={{ base: '10px', md: '20px' }}
            pr="68px"
            w={{ base: '100%', md: '460px' }}
            bgColor={bgColor}
          >
            <Box>
              <Text
                fontWeight="semibold"
                fontSize={{ base: 'md', md: 'lg' }}
                display={'-webkit-box'}
                overflow={'hidden'}
                sx={{
                  WebkitBoxOrient: 'vertical',
                  WebkitLineClamp: '2'
                }}
              >
                {activity.title}
              </Text>
              <Text
                mt="4px"
                fontSize={{ base: 'sm', md: 'md' }}
                display={'-webkit-box'}
                overflow={'hidden'}
                sx={{
                  WebkitBoxOrient: 'vertical',
                  WebkitLineClamp: '2'
                }}
              >
                {activity.address}
              </Text>
            </Box>
          </Box>
        </Link>

        <Menu>
          <MenuButton
            as={IconButton}
            aria-label={'button for edit and delete'}
            variant="unstyled"
            color={iconButtonColor}
            position="absolute"
            top="4px"
            right="10px"
            h={{ base: '28px', md: '36px' }}
            _hover={{
              color: 'gray.600'
            }}
          >
            <FiMoreHorizontal size="100%" />
          </MenuButton>
          <MenuList minW="140px">
            {/* TODO Check the URL */}
            <MenuItem
              display="flex"
              gap="10px"
              onClick={() => router.push(`/activity/${activity.id}/edit`)}
            >
              <FiEdit3 />
              Edit
            </MenuItem>

            {/* TODO */}
            <MenuItem display="flex" gap="10px" onClick={onDeleteModalOpen}>
              <FiTrash2 />
              Delete
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>

      {/* TODO Delete activity */}
      <ConfirmModal
        isOpen={isDeleteModalOpen}
        onClose={onDeleteModalClose}
        confirmText="delete this activity"
        onClick={() => {}}
        submitLabel="Delete"
      />
    </>
  )
}
