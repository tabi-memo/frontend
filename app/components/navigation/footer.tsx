import {
  Container,
  Flex,
  Box,
  VStack,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import { Link } from '@/components/link'

export const Footer = () => {
  const bg = useColorModeValue('primary.800', 'primary.910')
  const color = useColorModeValue('white', 'gray.300')

  return (
    <Box as="footer" bg={bg} color={color}>
      <Container
        maxW={{ base: '100%', lg: 'container.xl' }}
        py={{ base: '12px', md: '24px' }}
      >
        <VStack gap={{ base: '10px', md: '18px' }}>
          <Flex
            fontSize={{ base: 'xs', md: 'sm' }}
            gap={{ base: '14px', md: '60px' }}
          >
            {/* TODO Change Link URL */}
            <Link href="/" hasUnderLine>
              Home
            </Link>
            <Link href="/" hasUnderLine>
              Terms of Service
            </Link>
            <Link href="/" hasUnderLine>
              Privacy Policy
            </Link>
          </Flex>
          <Text as="span" fontSize={{ base: '2xs', md: 'xs' }}>
            Copyright © 2023 Tabi Memo
          </Text>
        </VStack>
      </Container>
    </Box>
  )
}
