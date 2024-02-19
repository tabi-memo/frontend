import {
  Box,
  useColorModeValue,
  Heading,
  VStack,
  Avatar,
  Flex,
  Radio,
  RadioGroup,
  IconButton,
  Text
} from '@chakra-ui/react'
import { FiTrash2 } from 'react-icons/fi'
import { useUserId } from '@/providers/session-provider'
import { useUpdateInvitation, useDeleteInvitation } from '../hooks'
import { Permission_Level_Enum } from '@generated/api'

type InvitedUserCardProps = {
  id: string
  tripId: string
  image: string | null | undefined
  name: string
  email: string
  permissionLevel: Permission_Level_Enum
  ownerId: string
}

export const InvitedUserCard = ({
  id,
  tripId,
  image,
  name,
  email,
  permissionLevel,
  ownerId
}: InvitedUserCardProps) => {
  const borderColor = useColorModeValue('gray.300', 'gray.600')

  const labelMap = {
    [Permission_Level_Enum.Editable]: 'Can Edit',
    [Permission_Level_Enum.ViewOnly]: 'View Only'
  }

  const userId = useUserId()

  const { updatePermissionLevel, isInvitationUpdating } =
    useUpdateInvitation(tripId)

  const { deleteInvitation, isInvitationDeleting } = useDeleteInvitation(tripId)

  const currentUserIsOwner = userId === ownerId

  return (
    <Flex
      justifyContent="space-between"
      borderBottom="1px solid"
      borderColor={borderColor}
      pb="8px"
      align="center"
    >
      <Flex gap="10px" align="center" maxW="68%">
        <Avatar size={{ base: 'sm', md: 'md' }} name={name} src={image || ''} />
        <Box maxW={{ base: '80%', md: 'auto' }}>
          <Heading as="h3" fontSize={{ base: 'md', md: 'lg' }}>
            {name}
          </Heading>
          <Text fontSize={{ base: 'sm', md: 'md' }}>{email}</Text>
        </Box>
      </Flex>

      {/* TODO If not owner, readme only */}
      <Flex
        justifyContent={currentUserIsOwner ? 'space-between' : 'center'}
        align="center"
        w={{ base: 'auto', md: '174px' }}
        flexShrink={0}
        gap="10px"
      >
        <RadioGroup
          defaultValue={permissionLevel}
          isDisabled={isInvitationUpdating}
        >
          <VStack align="start" gap="4px">
            {Object.entries(Permission_Level_Enum).map(([key, value]) => (
              <Radio
                key={key}
                value={value}
                isReadOnly={!currentUserIsOwner}
                size={{ base: 'sm', md: 'md' }}
                onChange={() => updatePermissionLevel(id, value)}
              >
                {labelMap[value]}
              </Radio>
            ))}
          </VStack>
        </RadioGroup>

        {currentUserIsOwner && (
          <IconButton
            aria-label="Delete the user"
            variant="unstyled"
            color={'gray.400'}
            _hover={{
              color: 'gray.500'
            }}
            minW={{ base: '18px', md: '24px' }}
            h={{ base: '18px', md: '24px' }}
            isLoading={isInvitationDeleting}
            onClick={() => deleteInvitation(id)}
          >
            <FiTrash2 size="100%" />
          </IconButton>
        )}
      </Flex>
    </Flex>
  )
}
