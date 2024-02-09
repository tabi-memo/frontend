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
  Heading
} from '@chakra-ui/react'

import { MdAccountCircle } from 'react-icons/md'
import { AccountSchema, accountResolver } from '@/account/schema'
import { PrimaryButton, SecondaryButton } from '@/components/button'
import { InputForm } from '@/components/input'

type AccountFormProps = {
  name: string
  email: string
  profile_picture_url: string | null
}

export const AccountEditForm = ({
  name,
  email,
  profile_picture_url
}: AccountFormProps) => {
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
    console.log(data)
  })

  return (
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
              placeholder="John Doe"
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
  )
}
