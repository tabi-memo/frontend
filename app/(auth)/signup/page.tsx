'use client'

import { Box, Card, LightMode } from '@chakra-ui/react'
import {
  SignUpHeader,
  SignUpForm,
  SignUpFooter
} from '@/(auth)/signup/components'

export default function SignUp() {
  return (
    <LightMode>
      <Box
        as="main"
        minH="100vh"
        height="100%"
        display="flex"
        overflowX="hidden"
        p={{ base: '0', md: '40px' }}
        justifyContent="center"
        alignItems="center"
        bg={{
          base: 'white',
          md: 'linear-gradient(242.77deg, #C4E6E6 1.15%, #085783 100%)'
        }}
      >
        <Card
          bg="white"
          boxShadow={{ base: '0', md: '0 4px 16px rgba(0, 0, 0, 0.1)' }}
          maxW={{ base: '100%', md: '542px' }}
          py="30px"
          px={{ base: '16px', md: '80px' }}
        >
          <SignUpHeader />
          <SignUpForm />
          <SignUpFooter />
        </Card>
      </Box>
    </LightMode>
  )
}
