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
import { changePassword } from '@/(auth)/change-password/action'
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

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ChangePasswordSchema>({
    resolver: changePasswordResolver
  })

  const changePasswordHandler = handleSubmit(
    async (data: ChangePasswordSchema) => {
      try {
        setIsLoading.on()
        await changePassword(data)
      } catch (error) {
        if (!toastId) {
          const res = toast({
            title: "We're sorry, but you failed to sign in.",
            description:
              error instanceof Error ? error.message : 'unknown error',
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
