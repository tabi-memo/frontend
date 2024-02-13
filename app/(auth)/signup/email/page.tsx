'use client'

import {
  AbsoluteCenter,
  Box,
  Card,
  CardHeader,
  CardFooter,
  Center,
  VStack,
  Heading,
  Text,
  LightMode
} from '@chakra-ui/react'
import Image from 'next/image'
import { SignUpForm } from '@/(auth)/signup/email/components'
import { Link } from '@/components/link'
import logo from 'public/logo/logo.png'

export default function SignUp() {
  return (
    <LightMode>
      <Box
        as="main"
        minH={{ base: '100vh', md: '1024px' }}
        w="100vw"
        bg={{
          base: 'white',
          md: 'linear-gradient(242.77deg, #C4E6E6 1.15%, #085783 100%)'
        }}
        color="black"
      >
        <AbsoluteCenter>
          <Card
            bg="#F8F8F8"
            boxShadow={{ base: '0', md: '0 4px 16px rgba(0, 0, 0, 0.1)' }}
            maxW={{ base: '100%', lg: 'container.sm' }}
            py={{ base: '40px', md: '40px' }}
            px={{ base: '16px', md: '80px' }}
          >
            <CardHeader w="100%" p="0">
              <Center w="100%">
                <Image src={logo} width={144} height={40} alt="Tabi Memo" />
              </Center>
              <VStack
                w="100%"
                mt={{ base: '28px', md: '40px' }}
                align={{ base: 'center', md: 'start' }}
              >
                <Heading
                  as="h1"
                  fontSize={{ base: '2xl', md: '4xl' }}
                  color="gray.700"
                >
                  Create your account
                </Heading>
                <Heading
                  as="h2"
                  fontSize="sm"
                  color="gray.700"
                  fontWeight="regular"
                >
                  It{"'s"} quick and easy
                </Heading>
              </VStack>
            </CardHeader>
            <SignUpForm />
            <CardFooter
              mt={{ base: '38px', md: '42px' }}
              p="0"
              gap={{ base: '30px', md: '40px' }}
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
            </CardFooter>
          </Card>
        </AbsoluteCenter>
      </Box>
    </LightMode>
  )
}
