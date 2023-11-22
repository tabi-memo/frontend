'use client'
import { Link } from '@chakra-ui/next-js'
import { Heading, VStack, Box, useColorMode } from '@chakra-ui/react'
import { PrimaryButton } from '@/components/button'

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <>
      <Heading>Home</Heading>
      <Link
        href="/auth/login"
        color="primary.700"
        _hover={{ color: 'primary.900' }}
      >
        Login
      </Link>
      <br />
      <Link
        href="/auth/signup"
        color="primary.700"
        _hover={{ color: 'primary.900' }}
      >
        SignUp
      </Link>

      <Box>
        <PrimaryButton onClick={toggleColorMode} variant="outline">
          {colorMode === 'light' ? 'To Dark' : 'To Light'}
        </PrimaryButton>
      </Box>

      <VStack>
        <Box>Button List (only primary)</Box>
        <PrimaryButton>Button</PrimaryButton>
        <PrimaryButton isActive>Button</PrimaryButton>
        <PrimaryButton isDisabled>Button</PrimaryButton>
        <PrimaryButton variant={'outline'}>Button</PrimaryButton>
        <PrimaryButton isActive variant={'outline'}>
          Button
        </PrimaryButton>
        <PrimaryButton isDisabled variant={'outline'}>
          Button
        </PrimaryButton>
      </VStack>
    </>
  )
}
