import { useForm, Controller } from 'react-hook-form'
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
  allTags: { id: string; name: string }[]
  checkedTags: { id: string; name: string }[]
  cost: number | null | undefined
  costUnit: string | null | undefined
  tagsCollectionRefetch: () => void
  tagsRefetchLoading: boolean
}

export const TripForm = ({
  id,
  image,
  title,
  dateFrom,
  dateTo,
  allTags,
  checkedTags,
  cost,
  costUnit,
  tagsCollectionRefetch,
  tagsRefetchLoading
}: TripFormProps) => {
  const imageSrc = useColorModeValue(
    '/images/no_image_light.jpg',
    '/images/no_image_dark.jpg'
  )
  const { isOpen, onOpen, onClose } = useDisclosure()

  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm<TripSchema>({
    defaultValues: {
      title: title,
      date_from: dateFrom,
      date_to: dateTo,
      image_storage_object_id: image,
      checkedTags: checkedTags.map((tag) => tag.id),
      cost: cost ? cost.toString() : '',
      cost_unit: costUnit
    },
    resolver: tripSchemaResolver
  })

  console.log('errors', errors)

  const updateTrip = async (data: TripSchema) => {
    console.log('submit!', {
      id,
      data
    })
  }

  return (
    <>
      <VStack
        as="form"
        gap={{ base: '30px', md: '40px' }}
        onSubmit={handleSubmit(updateTrip)}
      >
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
            <Image alt="" src={image || imageSrc} width="50%" />
            <PrimaryButton variant="outline">Select Image </PrimaryButton>
          </HStack>
          <FormErrorMessage>
            {errors?.image_storage_object_id?.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.checkedTags}>
          <FormLabel>Tag</FormLabel>
          <Controller
            name="checkedTags"
            control={control}
            render={({ field: { onChange, value } }) => (
              <CheckboxGroup value={value} onChange={onChange}>
                <Flex columnGap={'20px'} rowGap={'10px'} flexWrap={'wrap'}>
                  {tagsRefetchLoading ? (
                    <Loading p="4px" size="md" />
                  ) : (
                    <>
                      {allTags.map((tag) => (
                        <Checkbox key={tag.id} value={tag.id}>
                          {tag.name}
                        </Checkbox>
                      ))}
                    </>
                  )}
                </Flex>
              </CheckboxGroup>
            )}
          />
          <FormErrorMessage>{errors?.checkedTags?.message}</FormErrorMessage>

          <Box mt="20px">
            <SecondaryButton variant={'outline'} size="sm" onClick={onOpen}>
              Manage Tags
            </SecondaryButton>
          </Box>
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

        <PrimaryButton size="lg" type="submit">
          Save Trip
        </PrimaryButton>
      </VStack>

      <TagFormModal
        isOpen={isOpen}
        onClose={onClose}
        allTags={allTags}
        tagsCollectionRefetch={tagsCollectionRefetch}
      />
    </>
  )
}
