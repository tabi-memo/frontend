import React, { useCallback, useState } from 'react'
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
import { InputForm, TextareaForm } from '@/components/input'
import { createActivitySchema, createActivityResolver } from '../schema'

export const FormActivity = () => {
  const [selectedImages, setSelectedImages] = useState<File[]>([])
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

  const createHandler = handleSubmit(async (data: createActivitySchema) => {
    console.log(data)
    // TODO append images to formData and send to backend
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
        {errors.title && (
          <FormErrorMessage>{errors.title.message}</FormErrorMessage>
        )}
      </FormControl>

      <FormControl mt={{ base: '30px', md: '40px' }}>
        <FormLabel>Time From</FormLabel>
        <InputForm {...register('timeFrom')} type="datetime-local" />
        {errors.timeFrom && (
          <FormErrorMessage>{errors.timeFrom.message}</FormErrorMessage>
        )}
      </FormControl>

      <FormControl mt={{ base: '30px', md: '40px' }}>
        <FormLabel>Time To</FormLabel>
        <InputForm {...register('timeTo')} type="datetime-local" />
        {errors.timeTo && (
          <FormErrorMessage>{errors.timeTo.message}</FormErrorMessage>
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
        {errors.url && (
          <FormErrorMessage>{errors.url.message}</FormErrorMessage>
        )}
      </FormControl>

      <Text mt={{ base: '30px', md: '40px' }} fontWeight="medium">
        Image
      </Text>
      <SimpleGrid
        mt={{ base: '30px', md: '40px' }}
        columns={{ base: 2, md: 3 }}
        spacing={4}
      >
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
        mt={selectedImages.length !== 0 && { base: '30px', md: '40px' }}
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
          placeholder="Type test here..."
        />
        {errors.memo && (
          <FormErrorMessage>{errors.memo.message}</FormErrorMessage>
        )}
      </FormControl>

      <FormControl isInvalid={!!errors.cost} mt={{ base: '30px', md: '40px' }}>
        <FormLabel>Cost</FormLabel>
        <InputForm {...register('cost')} type="text" placeholder="$200" />
        {errors.cost && (
          <FormErrorMessage>{errors.cost.message}</FormErrorMessage>
        )}
      </FormControl>

      <Flex justifyContent="center" mt={{ base: '30px', md: '40px' }}>
        <Button colorScheme="teal" type="submit" margin="auto">
          Create Activity
        </Button>
      </Flex>
    </Box>
  )
}
