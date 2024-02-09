import { useState } from 'react'
import { useForm } from 'react-hook-form'
import {
  Box,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Image,
  VStack,
  HStack,
  Flex,
  Heading,
  useToast
} from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import { MdAccountCircle } from 'react-icons/md'
import { AccountSchema, accountResolver } from '@/account/schema'
import { PrimaryButton, SecondaryButton } from '@/components/button'
import { InputForm } from '@/components/input'
import { Loading } from '@/components/loading'
import { useUserId } from '@/providers/session-provider'
import { useUpdateUserMutation } from '@generated/api'

export const AccountEditForm = ({
  name,
  email,
  profile_picture_url
}: AccountSchema) => {
  const toast = useToast()
  const router = useRouter()
  const userId = useUserId()
  const [isLoading, setLoading] = useState(false)
  const [updateUserMutation] = useUpdateUserMutation()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<AccountSchema>({
    defaultValues: {
      name: name,
      email: email,
      profile_picture_url: profile_picture_url
    },
    resolver: accountResolver
  })

  const createHandler = handleSubmit(async (data: AccountSchema) => {
    setLoading(true)
    try {
      await updateUserMutation({
        variables: {
          id: userId,
          set: {
            name: data.name,
            email: data.email,
            profile_picture_url: data.profile_picture_url
          }
        }
      })
      setLoading(false)
      toast({
        title: 'Success!',
        description: 'Your changes have been saved.',
        status: 'success',
        duration: 5000,
        isClosable: true,
        position: 'top'
      })
      router.push('/account')
    } catch (error) {
      console.log(error)
      toast({
        title: "We're sorry, but something went wrong.",
        description:
          error instanceof Error ? error.message : 'Please try again later.',
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'top'
      })
    }
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

              <Heading fontSize="bold">Image</Heading>
              <HStack justify="center" w="100%">
                {profile_picture_url ? (
                  <Image
                    borderRadius="full"
                    boxSize="80px"
                    src={profile_picture_url}
                    alt="Profile Picture"
                  />
                ) : (
                  <Box color="gray.400">
                    <MdAccountCircle size="80px" />
                  </Box>
                )}
                <SecondaryButton variant="outline" ml="50px">
                  Choose Image
                </SecondaryButton>
              </HStack>
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
