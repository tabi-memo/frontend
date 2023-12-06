import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { useForm } from 'react-hook-form'
import {
  Box,
  Container,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
  Textarea,
  Image,
  SimpleGrid,
  Text,
  Flex
} from '@chakra-ui/react'

import { PrimaryButton } from '@/components/button'
import { createActivitySchema, createActivityResolver } from './schema'

export const Form = () => {
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
    // TODO append images to formData and send to backend
    console.log('formData', data)
  })

  return (
    <Container
      pt={{ base: '40px', md: '40px' }}
      pb={{ base: '40px', md: '80px' }}
    >
      <Box as="form" onSubmit={createHandler}>
        <FormControl isRequired isInvalid={!!errors.title}>
          <FormLabel>Title</FormLabel>
          <Input
            type="text"
            placeholder="Asakusa Temple"
            {...register('title')}
          />
          {errors.title && (
            <FormErrorMessage>{errors.title.message}</FormErrorMessage>
          )}
        </FormControl>

        <FormControl
          mt={{ base: '30px', md: '40px' }}
          isInvalid={!!errors.timeFrom}
        >
          <FormLabel>Time From</FormLabel>
          <Input {...register('timeFrom')} type="time" />
          {errors.timeFrom && (
            <FormErrorMessage>{errors.timeFrom.message}</FormErrorMessage>
          )}
        </FormControl>

        <FormControl
          mt={{ base: '30px', md: '40px' }}
          isInvalid={!!errors.timeTo}
        >
          <FormLabel>Time To</FormLabel>
          <Input {...register('timeTo')} type="time" />
          {errors.timeTo && (
            <FormErrorMessage>{errors.timeTo.message}</FormErrorMessage>
          )}
        </FormControl>

        <FormControl
          mt={{ base: '30px', md: '40px' }}
          isInvalid={!!errors.address}
        >
          <FormLabel>Address</FormLabel>
          <Input
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
          <Input
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
          mt={{ base: '30px', md: '40px' }}
        >
          <PrimaryButton variant="outline">
            <input {...getInputProps()} />
            Add Image
          </PrimaryButton>
        </Box>

        <FormControl
          isInvalid={!!errors.memo}
          mt={{ base: '30px', md: '40px' }}
        >
          <FormLabel>Memo</FormLabel>
          <Textarea
            {...register('memo')}
            name="memo"
            placeholder="Type test here..."
          />
          {errors.memo && (
            <FormErrorMessage>{errors.memo.message}</FormErrorMessage>
          )}
        </FormControl>

        <FormControl
          isInvalid={!!errors.cost}
          mt={{ base: '30px', md: '40px' }}
        >
          <FormLabel>Cost</FormLabel>
          <Input {...register('cost')} type="text" placeholder="$200" />
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
    </Container>
  )
}
