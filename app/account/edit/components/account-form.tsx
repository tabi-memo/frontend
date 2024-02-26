import { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import {
  Box,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Image,
  VStack,
  HStack,
  Flex,
  Input
} from '@chakra-ui/react'

import { MdAccountCircle } from 'react-icons/md'
import { AccountSchema, accountResolver } from '@/account/schema'
import { PrimaryButton, SecondaryButton } from '@/components/button'
import { InputForm } from '@/components/input'
import { Loading } from '@/components/loading'
import { useUserId } from '@/providers/session-provider'
import { useUploadFile, useUserUpdate } from '../../hooks'

export const AccountEditForm = ({
  name,
  email,
  profile_picture_url
}: AccountSchema) => {
  const userId = useUserId()
  const { uploadFile } = useUploadFile()
  const { updateUser, isLoading } = useUserUpdate()

  const [selectedImage, setSelectedImage] = useState<File | null>(null)

  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm<AccountSchema>({
    defaultValues: {
      name: name,
      email: email,
      profile_picture_url: profile_picture_url,
      uploaded_image_file: null
    },
    resolver: accountResolver
  })

  const createHandler = handleSubmit(async (data: AccountSchema) => {
    if (selectedImage) {
      await uploadFile(profile_picture_url, selectedImage, userId)
    }

    updateUser(data.name, data.email)
  })

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Box as="form" onSubmit={createHandler}>
          <Flex direction="column" mb="30px">
            <VStack align="start" gap="20px">
              <FormControl isRequired isInvalid={!!errors.email}>
                <FormLabel>Email</FormLabel>
                <InputForm
                  type="text"
                  placeholder="John Doe"
                  {...register('email')}
                />
                {errors.email && (
                  <FormErrorMessage>{errors.email.message}</FormErrorMessage>
                )}
              </FormControl>

              <FormControl isRequired isInvalid={!!errors.name}>
                <FormLabel>Name</FormLabel>
                <InputForm
                  type="text"
                  placeholder="John Smith"
                  {...register('name')}
                />
                {errors.name && (
                  <FormErrorMessage>{errors.name.message}</FormErrorMessage>
                )}
              </FormControl>

              <FormControl isInvalid={!!errors.profile_picture_url}>
                <FormLabel>Image</FormLabel>
                <HStack gap={{ base: '20px', md: '34px' }}>
                  {profile_picture_url && !selectedImage ? (
                    <Image
                      alt="Selected Image"
                      src={profile_picture_url}
                      width="80px"
                      height="80px"
                      objectFit="cover"
                      borderRadius="50%"
                    />
                  ) : selectedImage ? (
                    <Image
                      alt="Selected Image"
                      src={URL.createObjectURL(selectedImage)}
                      width="80px"
                      height="80px"
                      objectFit="cover"
                      borderRadius="50%"
                    />
                  ) : (
                    <Box color="gray.400">
                      <MdAccountCircle size="80px" />
                    </Box>
                  )}
                  <Controller
                    name="uploaded_image_file"
                    control={control}
                    render={({ field: { onChange } }) => (
                      <SecondaryButton variant="outline" as="label">
                        Select Image
                        <Input
                          type="file"
                          accept="image/*"
                          id="imageUpload"
                          onChange={(event) => {
                            const file = event.target.files?.[0]
                            if (file) {
                              setSelectedImage(file)
                              onChange(file)
                            }
                          }}
                          hidden
                        />
                      </SecondaryButton>
                    )}
                  />
                </HStack>
                <FormErrorMessage>
                  {errors?.profile_picture_url?.message}
                </FormErrorMessage>
              </FormControl>
            </VStack>
            <Flex
              justify="center"
              w={{ base: '100%', md: '480px' }}
              mt={{ base: '30px', md: '40px' }}
            >
              <PrimaryButton type={'submit'}>Save Changes</PrimaryButton>
            </Flex>
          </Flex>
        </Box>
      )}
    </>
  )
}
