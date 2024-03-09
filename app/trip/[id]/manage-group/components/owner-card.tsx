import {
  Box,
  useColorModeValue,
  Heading,
  Avatar,
  Flex,
  Text
} from '@chakra-ui/react'

type OwnerCardProps = {
  image: string | null | undefined
  name: string
  email: string
}

export const OwnerCard = ({ image, name, email }: OwnerCardProps) => {
  const borderColor = useColorModeValue('gray.300', 'gray.600')

  return (
    <Flex
      justifyContent="space-between"
      borderBottom="1px solid"
      borderColor={borderColor}
      pb="8px"
      align="center"
    >
      <Flex gap="10px" align="center">
        <Avatar size={{ base: 'sm', md: 'md' }} name={name} src={image || ''} />
        <Box>
          <Heading as="h3" fontSize={{ base: 'md', md: 'lg' }}>
            {name}
          </Heading>
          <Text fontSize={{ base: 'sm', md: 'md' }}>{email}</Text>
        </Box>
      </Flex>

      <Box
        fontWeight="bold"
        minW={{ base: '82px', md: '174px' }}
        textAlign="center"
      >
        Owner
      </Box>
    </Flex>
  )
}
