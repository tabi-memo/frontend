import { useState } from 'react'
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
  Input
} from '@chakra-ui/react'
import { PrimaryButton, SecondaryButton } from '@/components/button'
import { CustomDatePicker } from '@/components/date'
import { InputForm } from '@/components/input'
import { Loading } from '@/components/loading'
import { getDateObj } from '@/libs/utils'
import { TagFormModal } from '../components'
import { useTripCreate, useTripUpdate, useTripTagCreateDelete } from '../hooks'
import { TripSchema, tripSchemaResolver } from '../schema'

export type TripDetailsArgs = {
  id: string
  image: string | null | undefined
  title: string
  dateFrom: string
  dateTo: string | null | undefined
  cost: string | null | undefined
  costUnit: string | null | undefined
  refetch: () => void
  refetchLoading: boolean
}

export type TripTagsArgs = {
  data: { id: string; tag_id: string; trip_id: string }[]
  refetch: () => void
  refetchLoading: boolean
}

export type TagsArgs = {
  data: { id: string; name: string }[]
  refetch: () => void
  refetchLoading: boolean
}

type TripFormProps = {
  tripDetails?: TripDetailsArgs
  tripTags?: TripTagsArgs
  tags: TagsArgs
}

export const TripForm = ({ tripDetails, tags, tripTags }: TripFormProps) => {
  const imageSrc = useColorModeValue(
    '/images/no_image_light.jpg',
    '/images/no_image_dark.jpg'
  )
  const [selectedImage, setSelectedImage] = useState<File | null>(null)
  const { isOpen, onOpen, onClose } = useDisclosure()

  const { createTrip, isTripCreating } = useTripCreate()

  const { updateTrip, isTripUpdating } = useTripUpdate(tripTags, tripDetails)

  const { isTripTagCreating, isTripTagDeleting } = useTripTagCreateDelete(
    String(tripDetails?.id),
    tripTags
  )

  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm<TripSchema>({
    defaultValues: {
      title: tripDetails?.title,
      date_from: tripDetails?.dateFrom
        ? getDateObj(tripDetails.dateFrom)
        : undefined,
      date_to: tripDetails?.dateTo ? getDateObj(tripDetails.dateTo) : null,
      image_url: tripDetails?.image || null,
      uploaded_image_file: null,
      selectedTags: tripTags ? tripTags.data.map((tag) => tag.tag_id) : [],
      cost: tripDetails?.cost ? tripDetails.cost.toString() : null,
      cost_unit: tripDetails?.costUnit
    },
    resolver: tripSchemaResolver
  })

  const mutateFun = tripDetails ? updateTrip : createTrip
  const isMutating = isTripCreating || isTripUpdating

  return (
    <>
      <VStack
        as="form"
        gap={{ base: '30px', md: '40px' }}
        onSubmit={handleSubmit(mutateFun)}
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

        {/* TODO Image Upload to storage & Send the URL string to DB */}
        <FormControl isInvalid={!!errors.uploaded_image_file}>
          <FormLabel>Image</FormLabel>
          <HStack gap={{ base: '20px', md: '34px' }}>
            {selectedImage ? (
              <Image
                alt="Selected Image"
                src={URL.createObjectURL(selectedImage)}
                width="50%"
                objectFit="cover"
              />
            ) : (
              <Image
                alt="Default Image"
                src={tripDetails?.image || imageSrc}
                width="50%"
                objectFit="cover"
              />
            )}
            <Controller
              name="uploaded_image_file"
              control={control}
              render={({ field: { onChange } }) => (
                <PrimaryButton variant="outline" as="label" cursor="pointer">
                  Select Image
                  <Input
                    type="file"
                    accept="image/*"
                    onChange={(event) => {
                      const file = event.target.files?.[0]
                      if (file) {
                        setSelectedImage(file)
                        onChange(file)
                      }
                    }}
                    hidden
                  />
                </PrimaryButton>
              )}
            />
          </HStack>
          <FormErrorMessage>
            {errors?.uploaded_image_file?.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors?.selectedTags}>
          <FormLabel>Tag</FormLabel>

          <Controller
            name="selectedTags"
            control={control}
            render={({ field: { onChange } }) => (
              <CheckboxGroup
                defaultValue={tripTags?.data.map((tag) => tag.tag_id)}
                onChange={onChange}
              >
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
                        >
                          {tag.name}
                        </Checkbox>
                      ))}
                    </>
                  )}
                </Flex>
              </CheckboxGroup>
            )}
          />

          <FormErrorMessage>{errors?.selectedTags?.message}</FormErrorMessage>

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

        <PrimaryButton size="lg" type="submit" isDisabled={isMutating}>
          Save Trip
        </PrimaryButton>
      </VStack>

      <TagFormModal
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        allTags={tags.data}
        tagsCollectionRefetch={tags.refetch}
      />
    </>
  )
}
