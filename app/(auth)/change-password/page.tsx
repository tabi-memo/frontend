'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import {
  Box,
  FormLabel,
  FormErrorMessage,
  FormControl,
  Heading,
  useToast,
  useBoolean,
  useColorModeValue,
  VStack
} from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import {
  changePasswordResolver,
  ChangePasswordSchema
} from '@/(auth)/change-password/schema'
import { PrimaryButton } from '@/components/button'
import { InputForm } from '@/components/input'

export default function ChangePassword() {
  const color = useColorModeValue('black', 'gray.300')
  const toast = useToast()
  const [isLoading, setIsLoading] = useBoolean()
  const [toastId, setToastId] = useState<ReturnType<typeof toast> | undefined>(
    undefined
  )
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ChangePasswordSchema>({
    resolver: changePasswordResolver
  })

  const changePasswordHandler = handleSubmit(
    async (data: ChangePasswordSchema) => {
      setIsLoading.on()
      const response = await fetch('/change-password/action', {
        method: 'POST',
        body: JSON.stringify(data)
      })
      setIsLoading.off()
      if (response.ok) {
        router.push('/')
      } else if (!toastId) {
        const res = toast({
          title: "We're sorry, but you failed to change your password.",
          description: await response.json(),
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
    }
  )

  return (
    <Box
      as="main"
      w="100vw"
      minH={{ base: 'calc(100vh - 145px)', md: 'calc(100vh - 210px)' }}
      color={color}
    >
      <VStack
        mt={{ base: '20px', md: '40px' }}
        mx="auto"
        w={{ base: '380px', md: '480px' }}
        px={{ base: '16px', md: '80px' }}
      >
        <Heading
          as="h1"
          fontSize={{ base: '2xl', md: '4xl' }}
          mb="40px"
          w="100%"
          textAlign={{ base: 'left', md: 'center' }}
        >
          Change Password
        </Heading>
        <VStack
          spacing={{ base: '30px', md: '40px' }}
          as="form"
          onSubmit={changePasswordHandler}
        >
          <FormControl isInvalid={!!errors.oldPassword}>
            <FormLabel>Old Password</FormLabel>
            <InputForm
              {...register('oldPassword')}
              w={{ base: '358px', md: '480px' }}
              showInput={true}
            />
            {errors.oldPassword && (
              <FormErrorMessage>{errors.oldPassword.message}</FormErrorMessage>
            )}
          </FormControl>
          <FormControl isInvalid={!!errors.newPassword}>
            <FormLabel>New Password</FormLabel>
            <InputForm {...register('newPassword')} showInput={true} />
            {errors.newPassword && (
              <FormErrorMessage>{errors.newPassword.message}</FormErrorMessage>
            )}
          </FormControl>
          <FormControl isInvalid={!!errors.confirmNewPassword}>
            <FormLabel>Confirm New Password</FormLabel>
            <InputForm showInput={true} {...register('confirmNewPassword')} />
            {errors.confirmNewPassword && (
              <FormErrorMessage>
                {errors.confirmNewPassword.message}
              </FormErrorMessage>
            )}
          </FormControl>
          <PrimaryButton isLoading={isLoading} type={'submit'}>
            Change Password
          </PrimaryButton>
        </VStack>
      </VStack>
    </Box>
  )
}
