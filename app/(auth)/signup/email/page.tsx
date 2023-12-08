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
import { signUp } from '@/(auth)/signup/email/action'
import { signUpResolver, SignUpSchema } from '@/(auth)/signup/email/schema'
import { PrimaryButton } from '@/components/button'

export default function SignUp() {
  const toast = useToast()
  const [isLoading, setIsLoading] = useBoolean()
  const [toastId, setToastId] = useState<ReturnType<typeof toast> | undefined>(
    undefined
  )

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<SignUpSchema>({
    resolver: signUpResolver
  })

  const signUpHandler = handleSubmit(async (data: SignUpSchema) => {
    try {
      setIsLoading.on()
      await signUp(data)
    } catch (error) {
      if (!toastId) {
        const res = toast({
          title: "We're sorry, but you failed to sign up.",
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
      <Heading>Welcome!</Heading>
      <Heading>Create an Account</Heading>
      <Box as="form" onSubmit={signUpHandler}>
        <Flex flexDirection={'column'}>
          <FormControl isInvalid={!!errors.userName}>
            <FormLabel>Username</FormLabel>
            <Input {...register('userName')} />
            {errors.userName && (
              <FormErrorMessage>{errors.userName.message}</FormErrorMessage>
            )}
          </FormControl>
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
          <FormControl isInvalid={!!errors.confirmationPassword}>
            <FormLabel>Confirmation Password</FormLabel>
            <Input type="password" {...register('confirmationPassword')} />
            {errors.confirmationPassword && (
              <FormErrorMessage>
                {errors.confirmationPassword.message}
              </FormErrorMessage>
            )}
          </FormControl>
          <PrimaryButton isLoading={isLoading} type={'submit'}>
            Sign Up
          </PrimaryButton>
        </Flex>
      </Box>
    </>
  )
}
