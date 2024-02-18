import React, { useState } from 'react'
import { Controller, useForm, useWatch } from 'react-hook-form'
import {
  Box,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Button,
  Image,
  SimpleGrid,
  Text,
  Flex,
  VStack,
  Input
} from '@chakra-ui/react'
import { PrimaryButton } from '@/components/button'
import { CustomDateTimePicker } from '@/components/customDateTimePicker'
import { InputForm, TextareaForm } from '@/components/input'
import { getDateObj } from '@/libs/utils'
import { useActivityCreate, useActivityUpdate } from '../hooks'
import { ActivitySchema, activityResolver } from '../schema'

export type ActivityDetails = {
  id: string
  title: string
  timeFrom?: string | null
  timeTo?: string | null
  address?: string | null
  url?: string | null
  memo?: string | null
  cost?: string | null
  costUnit?: string | null
  uploadedFileUrls?: string[] | null
  refetch: () => void
  refetchLoading: boolean
}

type ActivityFormProps = {
  tripId: string
  activityDetails?: ActivityDetails
}

export const ActivityForm = ({
  tripId,
  activityDetails
}: ActivityFormProps) => {
  const [selectedImages, setSelectedImages] = useState<File[]>([])
  const removeImage = (index: number) => {
    setSelectedImages((prevImages) => {
      const newImages = [...prevImages]
      newImages.splice(index, 1)
      return newImages
    })
  }

  const {
    register,
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<ActivitySchema>({
    defaultValues: {
      title: activityDetails?.title,
      timeFrom: activityDetails?.timeFrom
        ? getDateObj(activityDetails?.timeFrom)
        : undefined,
      timeTo: activityDetails?.timeTo
        ? getDateObj(activityDetails?.timeTo)
        : undefined,
      address: activityDetails?.address || undefined,
      url: activityDetails?.url || undefined,
      memo: activityDetails?.memo || undefined,
      cost: activityDetails?.cost || undefined,
      costUnit: activityDetails?.costUnit || undefined,
      uploadedFileUrls: activityDetails?.uploadedFileUrls || undefined,
      newFiles: []
    },
    resolver: activityResolver
  })
  const newFiles = useWatch({ control, name: 'newFiles' })

  const { createActivity, isActivityCreating } = useActivityCreate(tripId)
  const { updateActivity, isActivityUpdating } = useActivityUpdate(tripId)
  const mutateFun = activityDetails
    ? (data: ActivitySchema) => updateActivity(activityDetails.id, data)
    : createActivity
  const isMutating = isActivityCreating || isActivityUpdating

  return (
    <VStack
      as="form"
      onSubmit={handleSubmit(mutateFun)}
      pt={{ base: '40px', md: '40px' }}
    >
      <FormControl isRequired isInvalid={!!errors.title}>
        <FormLabel>Title</FormLabel>
        <InputForm
          type="text"
          placeholder="Asakusa Temple"
          {...register('title')}
        />
        {errors.title && (
          <FormErrorMessage>{errors.title.message}</FormErrorMessage>
        )}
      </FormControl>

      <FormControl
        isRequired
        isInvalid={!!errors.timeFrom}
        mt={{ base: '30px', md: '40px' }}
      >
        <FormLabel>Time From</FormLabel>
        <Controller
          name="timeFrom"
          control={control}
          render={({ field: { onChange, value } }) => (
            <CustomDateTimePicker onChange={onChange} value={value} />
          )}
        />
        {errors.timeFrom && (
          <FormErrorMessage>{errors.timeFrom.message}</FormErrorMessage>
        )}
      </FormControl>

      <FormControl mt={{ base: '30px', md: '40px' }}>
        <FormLabel>Time To</FormLabel>
        <Controller
          name="timeTo"
          control={control}
          render={({ field: { onChange, value } }) => (
            <CustomDateTimePicker onChange={onChange} value={value} />
          )}
        />
      </FormControl>

      <FormControl
        mt={{ base: '30px', md: '40px' }}
        isInvalid={!!errors.address}
      >
        <FormLabel>Address</FormLabel>
        <InputForm
          {...register('address')}
          type="text"
          placeholder="10-10 Shibuya, Tokyo, Japan"
        />
        {errors.address && (
          <FormErrorMessage>{errors.address.message}</FormErrorMessage>
        )}
      </FormControl>

      <FormControl isInvalid={!!errors.url} mt={{ base: '30px', md: '40px' }}>
        <FormLabel>URL</FormLabel>
        <InputForm
          {...register('url')}
          type="url"
          placeholder="https://www.google.com"
        />
        {errors.url && (
          <FormErrorMessage>{errors.url.message}</FormErrorMessage>
        )}
      </FormControl>

      <Text
        mt={{ base: '30px', md: '40px' }}
        mb={selectedImages.length !== 0 ? { base: '30px', md: '40px' } : '8px'}
        fontWeight="medium"
      >
        Image
      </Text>
      <SimpleGrid columns={{ base: 2, md: 3 }} spacing={4}>
        {activityDetails?.uploadedFileUrls?.map((url, index) => (
          <Image
            key={index}
            src={url}
            alt={`Uploaded Image ${index}`}
            objectFit="cover"
            width={{ base: '160px', md: '180px' }}
            height={{ base: '106px', md: '120px' }}
            margin="auto"
            _hover={{ cursor: 'pointer' }}
          />
        ))}
        {selectedImages.map((image, index) => (
          <Image
            key={index}
            src={URL.createObjectURL(image)}
            alt={`Selected Image ${image.name}`}
            objectFit="cover"
            width={{ base: '160px', md: '180px' }}
            height={{ base: '106px', md: '120px' }}
            margin="auto"
            _hover={{ cursor: 'pointer' }}
            onClick={() => removeImage(index)}
          />
        ))}
      </SimpleGrid>

      <Box
        textAlign="center"
        mt={{
          base: 0,
          md:
            (activityDetails?.uploadedFileUrls?.length ?? 0) > 0 ||
            selectedImages.length !== 0
              ? '40px'
              : '0'
        }}
      >
        <Controller
          name="newFiles"
          control={control}
          render={({ field: { onChange } }) => (
            <PrimaryButton variant="outline" as="label">
              Add Image
              <Input
                type="file"
                accept="image/*"
                multiple
                hidden
                onChange={(event) => {
                  const files = event.target.files
                  if (files && newFiles) {
                    const newFileList = Array.from(files)
                    setSelectedImages((prevImages) => [
                      ...prevImages,
                      ...newFileList
                    ])
                    newFiles.push(...newFileList)
                    onChange(newFiles)
                  }
                }}
              />
            </PrimaryButton>
          )}
        />
      </Box>

      <FormControl isInvalid={!!errors.memo} mt={{ base: '30px', md: '40px' }}>
        <FormLabel>Memo</FormLabel>
        <TextareaForm
          {...register('memo')}
          name="memo"
          placeholder="Type here..."
        />
        {errors.memo && (
          <FormErrorMessage>{errors.memo.message}</FormErrorMessage>
        )}
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

        <FormControl w={'90px'} isInvalid={!!errors.costUnit}>
          <FormLabel>Unit</FormLabel>
          <InputForm
            type="text"
            placeholder="$"
            minW={'10px'}
            {...register('costUnit')}
          />
          <FormErrorMessage>{errors?.costUnit?.message}</FormErrorMessage>
        </FormControl>
      </Flex>

      <Flex justifyContent="center" mt={{ base: '30px', md: '40px' }}>
        <Button
          colorScheme="teal"
          type="submit"
          margin="auto"
          disabled={isMutating}
        >
          Save Activity
        </Button>
      </Flex>
    </VStack>
  )
}
