import { CardFooter, VStack, Text } from '@chakra-ui/react'
import { Link } from '@/components/link'

export const SignInFooter = () => {
  return (
    <CardFooter
      mt={{ base: '38px', md: '42px' }}
      p="0"
      gap={{ base: '30px', md: '40px' }}
    >
      <VStack w="100%">
        <Text fontSize="sm" color="gray.600">
          {"Don't"} have an account yet?
        </Text>
        <Link
          hasUnderLine={true}
          fontSize="sm"
          color="primary.800"
          fontWeight="semibold"
          href="/signup/email"
        >
          Sign Up
        </Link>
      </VStack>
    </CardFooter>
  )
}
