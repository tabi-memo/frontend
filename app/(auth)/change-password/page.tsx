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
import { useRouter } from 'next/navigation'
import {
  changePasswordResolver,
  ChangePasswordSchema
} from '@/(auth)/change-password/schema'
import { PrimaryButton } from '@/components/button'

export default function ChangePassword() {
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
    <>
      <Heading>Change Password</Heading>
      <Box as="form" onSubmit={changePasswordHandler}>
        <Flex flexDirection={'column'}>
          <FormControl isInvalid={!!errors.oldPassword}>
            <FormLabel>Old Password</FormLabel>
            <Input type="password" {...register('oldPassword')} />
            {errors.oldPassword && (
              <FormErrorMessage>{errors.oldPassword.message}</FormErrorMessage>
            )}
          </FormControl>
          <FormControl isInvalid={!!errors.newPassword}>
            <FormLabel>New Password</FormLabel>
            <Input type="password" {...register('newPassword')} />
            {errors.newPassword && (
              <FormErrorMessage>{errors.newPassword.message}</FormErrorMessage>
            )}
          </FormControl>
          <FormControl isInvalid={!!errors.confirmNewPassword}>
            <FormLabel>Confirm New Password</FormLabel>
            <Input type="password" {...register('confirmNewPassword')} />
            {errors.confirmNewPassword && (
              <FormErrorMessage>
                {errors.confirmNewPassword.message}
              </FormErrorMessage>
            )}
          </FormControl>
          <PrimaryButton isLoading={isLoading} type={'submit'}>
            Change Password
          </PrimaryButton>
        </Flex>
      </Box>
    </>
  )
}
