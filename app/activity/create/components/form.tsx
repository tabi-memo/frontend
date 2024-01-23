import React, { useCallback, useEffect, useState, useRef, useMemo } from 'react'
import { useDropzone } from 'react-dropzone'
import { useForm } from 'react-hook-form'
import {
  Box,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Button,
  Image,
  SimpleGrid,
  Text,
  Flex
} from '@chakra-ui/react'
import { PrimaryButton } from '@/components/button'
import { CustomDateTimePicker } from '@/components/customDateTimePicker'
import { InputForm, TextareaForm } from '@/components/input'
import { createActivitySchema, createActivityResolver } from '../schema'
import { useCreateActivityMutation } from '@generated/api'
export const FormActivity = ({ tripId }: { tripId: string }) => {
  const [selectedImages, setSelectedImages] = useState<File[]>([])
  const [timeTo, setTimeTo] = useState<Date | null>(null)
  const [timeFrom, setTimeFrom] = useState<Date | null>(null)
  const [isTimeError, setIsTimeError] = useState<boolean>(false)

  useEffect(() => {
    if (timeFrom && timeTo) {
      if (timeFrom > timeTo) {
        setIsTimeError(true)
      } else {
        setIsTimeError(false)
      }
    }
  }, [timeTo])

  const isInitialRender = useRef(true)
  const isTimeFromEmpty = useMemo(() => {
    if (isInitialRender.current === false && !timeFrom) {
      return true
    }
  }, [timeFrom])

  isInitialRender.current = false

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setSelectedImages((prevImages) => [...prevImages, ...acceptedFiles])
  }, [])
  const { getRootProps, getInputProps } = useDropzone({ onDrop })
  function removeImage(index: number) {
    setSelectedImages((prevImages) => {
      const newImages = [...prevImages]
      newImages.splice(index, 1)
      return newImages
    })
  }

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<createActivitySchema>({
    resolver: createActivityResolver
  })

  const [createActivityMutation] = useCreateActivityMutation()

  const createHandler = handleSubmit(async (data: createActivitySchema) => {
    if (!isTimeError && !isTimeFromEmpty) {
      try {
        const result = await createActivityMutation({
          variables: {
            title: data.title,
            address: data.address,
            cost: data.cost,
            memo: data.memo,
            time_from: timeFrom ? timeFrom.toISOString() : null,
            time_to: timeTo ? timeTo.toISOString() : null,
            tripId: tripId,
            url: data.url
          }
        })
        console.log(result)
      } catch (e) {
        console.log(e)
      }
    } else {
      return
    }
  })

  return (
    <Box as="form" onSubmit={createHandler} pt={{ base: '40px', md: '40px' }}>
      <FormControl isRequired isInvalid={!!errors.title}>
        <FormLabel>Title</FormLabel>
        <InputForm
          type="text"
          placeholder="Asakusa Temple"
          {...register('title')}
        />
        {errors.title?.message && (
          <FormErrorMessage>{errors.title.message}</FormErrorMessage>
        )}
      </FormControl>

      <FormControl
        isRequired
        mt={{ base: '30px', md: '40px' }}
        isInvalid={isTimeFromEmpty}
      >
        <FormLabel>Time From</FormLabel>
        <CustomDateTimePicker onChange={setTimeFrom} value={timeFrom} />
        {isTimeFromEmpty && (
          <FormErrorMessage>This field can not be empty</FormErrorMessage>
        )}
      </FormControl>

      <FormControl mt={{ base: '30px', md: '40px' }} isInvalid={isTimeError}>
        <FormLabel>Time To</FormLabel>
        <CustomDateTimePicker onChange={setTimeTo} value={timeTo} />
        {isTimeError && (
          <FormErrorMessage>Time To must be after Time From</FormErrorMessage>
        )}
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
        {errors.url?.message && (
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
        {selectedImages.map((image, index) => (
          <Image
            key={index}
            src={URL.createObjectURL(image)}
            alt={`Selected Image ${image.name}`}
            objectFit="cover"
            width={{ base: '160px', md: '180px' }}
            height={{ base: '106px', md: '120px' }}
            margin="auto"
            onClick={() => removeImage(index)}
          />
        ))}
      </SimpleGrid>

      <Box
        {...getRootProps()}
        textAlign="center"
        mt={{ base: 0, md: selectedImages.length !== 0 ? '40px' : '0' }}
      >
        <PrimaryButton variant="outline">
          <input {...getInputProps()} />
          Add Image
        </PrimaryButton>
      </Box>

      <FormControl isInvalid={!!errors.memo} mt={{ base: '30px', md: '40px' }}>
        <FormLabel>Memo</FormLabel>
        <TextareaForm
          {...register('memo')}
          name="memo"
          placeholder="Type here..."
        />
        {errors.memo?.message && (
          <FormErrorMessage>{errors.memo.message}</FormErrorMessage>
        )}
      </FormControl>

      <FormControl isInvalid={!!errors.cost} mt={{ base: '30px', md: '40px' }}>
        <FormLabel>Cost</FormLabel>
        <InputForm
          optional="true"
          type="number"
          {...register('cost', { valueAsNumber: true })}
          placeholder="200"
        />
        {errors.cost?.message && (
          <FormErrorMessage>Please enter a valid number</FormErrorMessage>
        )}
      </FormControl>

      <Flex justifyContent="center" mt={{ base: '30px', md: '40px' }}>
        <Button colorScheme="teal" type={'submit'} margin="auto">
          Create Activity
        </Button>
      </Flex>
    </Box>
  )
}
