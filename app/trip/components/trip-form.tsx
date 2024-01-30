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
  useDisclosure,
  useToast
} from '@chakra-ui/react'
import { PrimaryButton, SecondaryButton } from '@/components/button'
import { CustomDatePicker } from '@/components/date'
import { InputForm } from '@/components/input'
import { Loading } from '@/components/loading'
import { getDateObj, formatToISODate } from '@/libs/utils'
import { TagFormModal } from '../components'
import { tripSchemaResolver, TripSchema } from '../schema'
import {
  useCreateTripTagMutation,
  useDeleteTripTagMutation
} from '@generated/api'

type TripFormProps = {
  tripDetails: {
    id: string
    image: string | null | undefined
    title: string
    dateFrom: string
    dateTo: string | null | undefined
    cost: number | null | undefined
    costUnit: string | null | undefined
    refetch: () => void
    refetchLoading: boolean
  }
  tags: {
    data: { id: string; name: string }[]
    refetch: () => void
    refetchLoading: boolean
  }
  tripTags: {
    data: { id: string; tag_id: string; trip_id: string }[]
    refetch: () => void
    refetchLoading: boolean
  }
}

export const TripForm = ({ tripDetails, tags, tripTags }: TripFormProps) => {
  const imageSrc = useColorModeValue(
    '/images/no_image_light.jpg',
    '/images/no_image_dark.jpg'
  )
  const { isOpen, onOpen, onClose } = useDisclosure()
  const toast = useToast()

  console.log('tripTagsData', tripTags.data)

  const [createTripTagMutation, { loading: isTripTagCreating }] =
    useCreateTripTagMutation()
  const [deleteTripTagMutation, { loading: isTripTagDeleting }] =
    useDeleteTripTagMutation()

  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm<TripSchema>({
    defaultValues: {
      title: tripDetails.title,
      date_from: getDateObj(tripDetails.dateFrom),
      date_to: tripDetails.dateTo ? getDateObj(tripDetails.dateTo) : null,
      image_storage_object_id: tripDetails.image,
      cost: tripDetails.cost ? tripDetails.cost.toString() : '',
      cost_unit: tripDetails.costUnit
    },
    resolver: tripSchemaResolver
  })

  console.log('errors', errors)

  const tagClickHandler = async (selectedTagId: string) => {
    try {
      const isTagIdAlreadyExists = tripTags.data.find(
        (tripTag) => tripTag.tag_id === selectedTagId
      )

      if (isTagIdAlreadyExists) {
        await deleteTripTagMutation({
          variables: {
            id: isTagIdAlreadyExists.id
          }
        })
        tripTags.refetch()
        return
      }

      if (!isTagIdAlreadyExists) {
        await createTripTagMutation({
          variables: {
            tripId: tripDetails.id,
            tagId: selectedTagId
          }
        })
        tripTags.refetch()
      }
    } catch (error) {
      console.error(error)
      toast({
        title: "We're sorry, but you failed to update a tag",
        description:
          error instanceof Error ? error.message : 'Please try again later.',
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'top'
      })
    }
  }

  const updateTrip = async (data: TripSchema) => {
    console.log('submit!', {
      tripId: tripDetails.id,
      data
    })

    if (data.date_to) {
      const dateTo = formatToISODate(data.date_to)
      console.log('dateTo', dateTo)
    }
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
          <Controller
            name="date_from"
            control={control}
            render={({ field: { onChange, value } }) => (
              <CustomDatePicker
                onChange={onChange}
                selectedDate={value}
                placeholderText={'2024/01/01'}
                dateFormat="yyyy/MM/dd"
              />
            )}
          />
          <FormErrorMessage>{errors?.date_from?.message}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.date_to}>
          <FormLabel>Date To</FormLabel>

          <Controller
            name="date_to"
            control={control}
            render={({ field: { onChange, value } }) => (
              <CustomDatePicker
                onChange={onChange}
                selectedDate={value}
                placeholderText={'2024/01/01'}
                dateFormat="yyyy/MM/dd"
              />
            )}
          />
          <FormErrorMessage>{errors?.date_to?.message}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.image_storage_object_id}>
          <FormLabel>Image</FormLabel>
          <HStack gap={{ base: '20px', md: '34px' }}>
            <Image alt="" src={tripDetails.image || imageSrc} width="50%" />
            <PrimaryButton variant="outline">Select Image </PrimaryButton>
          </HStack>
          <FormErrorMessage>
            {errors?.image_storage_object_id?.message}
          </FormErrorMessage>
        </FormControl>

        <Flex justify="start" flexDir="column" width="100%">
          <FormLabel>Tag</FormLabel>

          <CheckboxGroup defaultValue={tripTags.data.map((tag) => tag.tag_id)}>
            <Flex columnGap={'20px'} rowGap={'10px'} flexWrap={'wrap'}>
              {tags.refetchLoading ? (
                <Loading p="4px" size="md" />
              ) : (
                <>
                  {tags.data.map((tag) => (
                    <Checkbox
                      key={tag.id}
                      value={tag.id}
                      isDisabled={isTripTagCreating || isTripTagDeleting}
                      onChange={() => tagClickHandler(tag.id)}
                    >
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
        </Flex>

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
        allTags={tags.data}
        tagsCollectionRefetch={tags.refetch}
      />
    </>
  )
}
