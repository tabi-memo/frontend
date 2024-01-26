import { useForm } from 'react-hook-form'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Image,
  VStack,
  HStack,
  useColorModeValue,
  CheckboxGroup,
  Flex,
  Checkbox,
  Box,
  useDisclosure
} from '@chakra-ui/react'
import { PrimaryButton, SecondaryButton } from '@/components/button'
import { CustomDateTimePicker } from '@/components/customDateTimePicker'
import { InputForm } from '@/components/input'
import { Loading } from '@/components/loading'
import { TagFormModal } from '../components'
import { tripSchemaResolver, TripSchema } from '../schema'

type TripFormProps = {
  id: string
  image: string | null | undefined
  title: string
  dateFrom: string
  dateTo: string | null | undefined
  tags: { id: string; name: string }[]
  cost: number | null | undefined
  costUnit: string | null | undefined
  tagsCollectionRefetch: () => void
  tagsRefetchLoading: boolean
}

export const TripForm = ({
  // id,
  image,
  title,
  dateFrom,
  dateTo,
  tags,
  cost,
  costUnit,
  tagsCollectionRefetch,
  tagsRefetchLoading
}: TripFormProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const {
    register,
    // handleSubmit,
    formState: { errors }
  } = useForm<TripSchema>({
    defaultValues: {
      title: title,
      image_storage_object_id: image,
      date_from: dateFrom,
      date_to: dateTo,
      cost: cost,
      cost_unit: costUnit
    },
    resolver: tripSchemaResolver
  })

  const imageSrc = useColorModeValue(
    '/images/no_image_light.jpg',
    '/images/no_image_dark.jpg'
  )

  return (
    <>
      <VStack as="form" gap={{ base: '30px', md: '40px' }}>
        <FormControl isInvalid={!!errors.title}>
          <FormLabel>Title</FormLabel>
          <InputForm
            type="text"
            placeholder="Asakusa Temple"
            {...register('title')}
          />
          <FormErrorMessage>{errors?.title?.message}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.date_from}>
          <FormLabel>Date From</FormLabel>
          <CustomDateTimePicker
            onChange={() => console.log('onChange')}
            value={null}
          />
          <FormErrorMessage>{errors?.date_from?.message}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.date_to}>
          <FormLabel>Date To</FormLabel>
          <CustomDateTimePicker
            onChange={() => console.log('onChange')}
            value={null}
          />
          <FormErrorMessage>{errors?.date_to?.message}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.image_storage_object_id}>
          <FormLabel>Image</FormLabel>
          <HStack gap={{ base: '20px', md: '34px' }}>
            <Image alt="" src={imageSrc} width="50%" />
            <PrimaryButton variant="outline">Select Image </PrimaryButton>
          </HStack>
          <FormErrorMessage>
            {errors?.image_storage_object_id?.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={false}>
          <FormLabel>Tag</FormLabel>
          <CheckboxGroup defaultValue={[]}>
            <Flex columnGap={'20px'} rowGap={'10px'} flexWrap={'wrap'}>
              {tagsRefetchLoading ? (
                <Loading p="4px" size="md" />
              ) : (
                <>
                  {tags.map((tag) => (
                    <Checkbox key={tag.id} value={tag.id}>
                      {tag.name}
                    </Checkbox>
                  ))}
                </>
              )}
            </Flex>
          </CheckboxGroup>

          <Box mt="20px">
            <SecondaryButton variant={'outline'} size="sm" onClick={onOpen}>
              Manage Tags
            </SecondaryButton>
          </Box>

          {/* <FormErrorMessage>{errors?.tags?.message}</FormErrorMessage> */}
        </FormControl>

        <Flex gap="20px" justify={'start'} width="100%">
          <FormControl w={'180px'} isInvalid={!!errors.cost}>
            <FormLabel>Cost</FormLabel>
            <InputForm
              type="text"
              placeholder="10"
              minW={'auto'}
              {...register('cost')}
            />
            <FormErrorMessage>{errors?.cost?.message}</FormErrorMessage>
          </FormControl>

          <FormControl w={'90px'} isInvalid={!!errors.cost_unit}>
            <FormLabel>Unit</FormLabel>
            <InputForm
              type="text"
              placeholder="$"
              minW={'10px'}
              {...register('cost_unit')}
            />
            <FormErrorMessage>{errors?.cost_unit?.message}</FormErrorMessage>
          </FormControl>
        </Flex>

        <PrimaryButton size="lg">Save Trip</PrimaryButton>
      </VStack>

      <TagFormModal
        isOpen={isOpen}
        onClose={onClose}
        tags={tags}
        tagsCollectionRefetch={tagsCollectionRefetch}
      />
    </>
  )
}
