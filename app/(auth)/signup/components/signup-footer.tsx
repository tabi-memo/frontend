import { CardFooter, VStack, Text } from '@chakra-ui/react'
import { Link } from '@/components/link'

export const SignUpFooter = () => {
  return (
    <CardFooter
      mt={{ base: '38px', md: '32px' }}
      display="flex"
      flexDirection="column"
      p="0"
    >
      <VStack w="100%">
        <Text fontSize="sm" color="gray.600">
          Already have an account?
        </Text>
        <Link
          hasUnderLine={true}
          fontSize="sm"
          color="primary.800"
          fontWeight="semibold"
          href="/signIn/email"
        >
          Sign In
        </Link>
      </VStack>
      <Text
        align="center"
        fontSize="xs"
        color="gray.600"
        mt={{ base: '38px', md: '32px' }}
      >
        By signing up, you agree to
        {/* TODO Add terms of policy page */}
        <Link href="/signUp" color="primary.800" hasUnderLine={true}>
          Terms of Service
        </Link>{' '}
        and {/* TODO Add terms of privacy policy page */}
        <Link href="/signUp" color="primary.800" hasUnderLine={true}>
          Privacy Policy
        </Link>{' '}
        .
      </Text>
    </CardFooter>
  )
}
