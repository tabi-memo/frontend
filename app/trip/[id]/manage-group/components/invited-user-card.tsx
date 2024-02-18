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
import {
  INVITATION_PERMISSION_LEVEL,
  InvitationPermissionLevelType
} from '@/const'

type InvitedUserCardProps = {
  image: string | null | undefined
  name: string
  email: string
  permissionLevel: InvitationPermissionLevelType
}

export const InvitedUserCard = ({
  image,
  name,
  email,
  permissionLevel
}: InvitedUserCardProps) => {
  const borderColor = useColorModeValue('gray.300', 'gray.600')

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

      <Flex
        justifyContent="space-between"
        align="center"
        w={{ base: 'auto', md: '174px' }}
        flexShrink={0}
        gap="10px"
      >
        <RadioGroup value={permissionLevel}>
          <VStack align="start" gap="4px">
            {INVITATION_PERMISSION_LEVEL.map((level) => (
              <Radio
                key={level.value}
                value={level.value}
                size={{ base: 'sm', md: 'md' }}
              >
                {level.label}
              </Radio>
            ))}
          </VStack>
        </RadioGroup>

        <IconButton
          aria-label="Delete the user"
          onClick={() => {}}
          variant="unstyled"
          color={'gray.400'}
          _hover={{
            color: 'gray.500'
          }}
          minW={{ base: '18px', md: '24px' }}
          h={{ base: '18px', md: '24px' }}
        >
          <FiTrash2 size="100%" />
        </IconButton>
      </Flex>
    </Flex>
  )
}
