'use client'
import { useRef } from 'react'
import { useForm } from 'react-hook-form'
import {
  Box,
  Flex,
  FormLabel,
  FormErrorMessage,
  FormControl,
  Input,
  Heading,
  useToast
} from '@chakra-ui/react'
import { PrimaryButton } from '@/components/button'
import { signUp } from './action'
import { useFormResolver, SignUpSchema } from './schema'

export default function SignUp() {
  const toast = useToast()
  const isLoading = useRef(false)
  const toastId = useRef<ReturnType<typeof toast> | undefined>(undefined)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<SignUpSchema>({
    resolver: useFormResolver
  })

  return (
    <>
      <Heading>Welcome!</Heading>
      <Heading>Create an Account</Heading>
      <Box
        as="form"
        onSubmit={handleSubmit((data) => {
          isLoading.current = true
          signUp(data)
            .catch((error) => {
              if (!toastId.current) {
                toastId.current = toast({
                  title: "We're sorry, but you failed to sign up.",
                  description: error.message,
                  status: 'error',
                  duration: 5000,
                  isClosable: true,
                  position: 'top',
                  onCloseComplete() {
                    toastId.current = undefined
                  }
                })
              }
            })
            .finally(() => {
              isLoading.current = false
            })
        })}
      >
        <Flex flexDirection={'column'}>
          <FormControl isInvalid={!!errors.email} isRequired>
            <FormLabel htmlFor="email">Email address</FormLabel>
            <Input type="email" id="email" required {...register('email')} />
            {errors.email && (
              <FormErrorMessage>{errors.email.message}</FormErrorMessage>
            )}
          </FormControl>
          <FormControl isInvalid={!!errors.password} isRequired>
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input
              type="password"
              id="password"
              required
              {...register('password', {
                minLength: {
                  value: 8,
                  message: 'min length is 8'
                }
              })}
            />
            {errors.password && (
              <FormErrorMessage>{errors.password.message}</FormErrorMessage>
            )}
          </FormControl>
          <FormControl isInvalid={!!errors.confirmationPassword} isRequired>
            <FormLabel htmlFor="confirmationPassword">
              Confirmation Password
            </FormLabel>
            <Input
              type="password"
              id="confirmationPassword"
              required
              {...register('confirmationPassword', {
                minLength: {
                  value: 8,
                  message: 'min length is 8'
                }
              })}
            />
            {errors.confirmationPassword && (
              <FormErrorMessage>
                {errors.confirmationPassword.message}
              </FormErrorMessage>
            )}
          </FormControl>
          <PrimaryButton isLoading={isLoading.current} type={'submit'}>
            Sign Up
          </PrimaryButton>
        </Flex>
      </Box>
    </>
  )
}
