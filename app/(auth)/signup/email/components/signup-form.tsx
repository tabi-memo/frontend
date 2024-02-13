import { useState } from 'react'
import { useForm } from 'react-hook-form'
import {
  CardBody,
  VStack,
  FormControl,
  FormLabel,
  FormErrorMessage,
  useToast,
  useBoolean
} from '@chakra-ui/react'
import { signUp } from '@/(auth)/signup/email/action'
import { signUpResolver, SignUpSchema } from '@/(auth)/signup/email/schema'
import { PrimaryButton } from '@/components/button'
import { InputForm } from '@/components/input'

export const SignUpForm = () => {
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
    <CardBody
      as="form"
      onSubmit={signUpHandler}
      mt={{ base: '38px', md: '42px' }}
      gap={{ base: '30px', md: '40px' }}
      p="0%"
      w={{ base: '80vw', md: 'unset' }}
      maxW="500px"
    >
      <VStack gap="24px">
        <FormControl isInvalid={!!errors.name}>
          <FormLabel color="black">Name</FormLabel>
          <InputForm {...register('name')} placeholder="John Smith" />
          {errors.name && (
            <FormErrorMessage>{errors.name.message}</FormErrorMessage>
          )}
        </FormControl>
        <FormControl isInvalid={!!errors.email}>
          <FormLabel color="black">Email</FormLabel>
          <InputForm
            {...register('email')}
            placeholder="tabimemo@example.com"
            minW={{ base: '300px', md: '380px' }}
          />
          {errors.email && (
            <FormErrorMessage>{errors.email.message}</FormErrorMessage>
          )}
        </FormControl>
        <FormControl isInvalid={!!errors.password}>
          <FormLabel color="black">Password</FormLabel>
          <InputForm
            type="password"
            {...register('password')}
            placeholder="password"
          />
          {errors.password && (
            <FormErrorMessage>{errors.password.message}</FormErrorMessage>
          )}
        </FormControl>
        <FormControl isInvalid={!!errors.confirmationPassword}>
          <FormLabel color="black">Confirm Password</FormLabel>
          <InputForm
            type="password"
            {...register('confirmationPassword')}
            placeholder="password"
          />
          {errors.confirmationPassword && (
            <FormErrorMessage>
              {errors.confirmationPassword.message}
            </FormErrorMessage>
          )}
        </FormControl>
      </VStack>
      <PrimaryButton isLoading={isLoading} type={'submit'} w="100%" mt="30px">
        Sign Up
      </PrimaryButton>
    </CardBody>
  )
}
