'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import {
  AbsoluteCenter,
  Box,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Center,
  VStack,
  FormLabel,
  FormErrorMessage,
  FormControl,
  Heading,
  useToast,
  useBoolean,
  Text
} from '@chakra-ui/react'

import Image from 'next/image'
import { signIn } from '@/(auth)/signin/action'
import { signInResolver, SignInSchema } from '@/(auth)/signin/schema'
import { PrimaryButton } from '@/components/button'
import { InputForm } from '@/components/input'
import { Link } from '@/components/link'
import logo from 'public/logo/logo.png'
export default function SignIn() {
  const toast = useToast()
  const [isLoading, setIsLoading] = useBoolean()
  const [toastId, setToastId] = useState<ReturnType<typeof toast> | undefined>(
    undefined
  )

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<SignInSchema>({
    resolver: signInResolver
  })

  const signInHandler = handleSubmit(async (data: SignInSchema) => {
    try {
      setIsLoading.on()
      await signIn(data)
    } catch (error) {
      if (!toastId) {
        const res = toast({
          title: "We're sorry, but you failed to sign in.",
          description: error instanceof Error ? error.message : 'unknown error',
          status: 'error',
          duration: 5000,
          isClosable: true,
          position: 'top',
          onCloseComplete() {
            setToastId(undefined)
          }
        })
        setToastId(res)
      }
    } finally {
      setIsLoading.off()
    }
  })

  return (
    <Box
      as="main"
      h="100vh"
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
                Welcome Back!
              </Heading>
              <Heading
                as="h2"
                fontSize="sm"
                color="gray.700"
                fontWeight="regular"
              >
                Sign in to your account
              </Heading>
            </VStack>
          </CardHeader>
          <CardBody
            as="form"
            onSubmit={signInHandler}
            mt={{ base: '38px', md: '42px' }}
            gap={{ base: '30px', md: '40px' }}
            p="0%"
            w={{ base: '80vw', md: 'unset' }}
            maxW="500px"
          >
            <VStack gap="24px">
              <FormControl isInvalid={!!errors.email}>
                <FormLabel>Email</FormLabel>
                <InputForm
                  {...register('email')}
                  minW={{ base: '300px', md: '380px' }}
                />
                {errors.email && (
                  <FormErrorMessage>{errors.email.message}</FormErrorMessage>
                )}
              </FormControl>
              <FormControl isInvalid={!!errors.password}>
                <FormLabel>Password</FormLabel>
                <InputForm type="password" {...register('password')} />
                {errors.password && (
                  <FormErrorMessage>{errors.password.message}</FormErrorMessage>
                )}
              </FormControl>
            </VStack>
            <PrimaryButton
              isLoading={isLoading}
              type={'submit'}
              w="100%"
              mt="30px"
            >
              Sign In
            </PrimaryButton>
          </CardBody>
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
        </Card>
      </AbsoluteCenter>
    </Box>
  )
}
