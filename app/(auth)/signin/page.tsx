'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import {
  Box,
  Flex,
  FormLabel,
  FormErrorMessage,
  FormControl,
  Input,
  Heading,
  useToast,
  useBoolean
} from '@chakra-ui/react'
import Link from 'next/link'
import { signIn } from '@/(auth)/signin/action'
import { signInResolver, SignInSchema } from '@/(auth)/signin/schema'
import { PrimaryButton } from '@/components/button'

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
    <>
      <Heading>Welcome Back!</Heading>
      <Heading>Sign In</Heading>
      <Box as="form" onSubmit={signInHandler}>
        <Flex flexDirection={'column'}>
          <FormControl isInvalid={!!errors.email}>
            <FormLabel>Email address</FormLabel>
            <Input {...register('email')} />
            {errors.email && (
              <FormErrorMessage>{errors.email.message}</FormErrorMessage>
            )}
          </FormControl>
          <FormControl isInvalid={!!errors.password}>
            <FormLabel>Password</FormLabel>
            <Input type="password" {...register('password')} />
            {errors.password && (
              <FormErrorMessage>{errors.password.message}</FormErrorMessage>
            )}
          </FormControl>
          <PrimaryButton isLoading={isLoading} type={'submit'}>
            Sign In
          </PrimaryButton>
          <Heading>{"Don't"} have an account yet?</Heading>
          <Link href="/signup/email">Sign Up</Link>
        </Flex>
      </Box>
    </>
  )
}
