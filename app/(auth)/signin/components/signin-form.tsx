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
import { signIn } from '@/(auth)/signin/action'
import { signInResolver, SignInSchema } from '@/(auth)/signin/schema'
import { PrimaryButton } from '@/components/button'
import { InputForm } from '@/components/input'

export const SignInForm = () => {
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

  const signInInputStyle = {
    'input:-webkit-autofill, input:-webkit-autofill:focus': {
      boxShadow: '0 0 0 1000px #f8f8f8 inset',
      textFillColor: 'black'
    }
  }

  return (
    <CardBody
      sx={signInInputStyle}
      as="form"
      onSubmit={signInHandler}
      mt={{ base: '38px', md: '42px' }}
      gap={{ base: '30px', md: '40px' }}
      p="0%"
      maxW="500px"
      w={{ base: '90vw', md: 'unset' }}
    >
      <VStack gap="24px">
        <FormControl isInvalid={!!errors.email}>
          <FormLabel>Email</FormLabel>
          <InputForm
            type="email"
            {...register('email')}
            minW={{ base: '300px', md: '380px' }}
          />
          {errors.email && (
            <FormErrorMessage>{errors.email.message}</FormErrorMessage>
          )}
        </FormControl>
        <FormControl isInvalid={!!errors.password}>
          <FormLabel>Password</FormLabel>
          <InputForm
            type="password"
            hasEyeIcon={true}
            {...register('password')}
            minW={{ base: '300px', md: '380px' }}
          />
          {errors.password && (
            <FormErrorMessage>{errors.password.message}</FormErrorMessage>
          )}
        </FormControl>
      </VStack>
      <PrimaryButton isLoading={isLoading} type={'submit'} w="100%" mt="30px">
        Sign In
      </PrimaryButton>
    </CardBody>
  )
}
