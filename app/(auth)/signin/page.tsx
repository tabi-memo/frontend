'use client'

import { Box, Card, LightMode } from '@chakra-ui/react'

import {
  SignInForm,
  SignInHeader,
  SignInFooter
} from '@/(auth)/signin/components'

export default function SignIn() {
  return (
    <LightMode>
      <Box
        as="main"
        h="100vh"
        w="100vw"
        bg={{
          base: 'white',
          md: 'linear-gradient(242.77deg, #C4E6E6 1.15%, #085783 100%)'
        }}
      >
        <Card
          position="absolute"
          top={{ base: '0%', md: '50%' }}
          left="50%"
          transform={{
            base: 'translate(-50%, 0%)',
            md: 'translate(-50%, -50%)'
          }}
          bg="white"
          boxShadow={{ base: '0', md: '0 4px 16px rgba(0, 0, 0, 0.1)' }}
          maxW={{ base: '100%', md: '542px' }}
          py="40px"
          px={{ base: '16px', md: '80px' }}
        >
          <SignInHeader />
          <SignInForm />
          <SignInFooter />
        </Card>
      </Box>
    </LightMode>
  )
}
