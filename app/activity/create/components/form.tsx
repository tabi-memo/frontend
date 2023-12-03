import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import {
  Box,
  Container,
  FormControl,
  FormLabel,
  Input,
  Button,
  Textarea,
  Image,
  SimpleGrid,
  Text,
  Flex
} from '@chakra-ui/react'

import { PrimaryButton } from '@/components/button'

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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const title = formData.get('title') as string
    const address = formData.get('address') as string
    const timeFrom = formData.get('timeFrom') as string
    const timeTo = formData.get('timeTo') as string
    const url = formData.get('url') as string
    const memo = formData.get('memo') as string
    const cost = formData.get('cost') as string

    console.log({
      title,
      address,
      timeFrom,
      timeTo,
      url,
      memo,
      cost,
      selectedImages
    })
  }


  return (
    <Container
      pt={{ base: '40px', md: '40px' }}
      pb={{ base: '40px', md: '80px' }}
    >
     <form onSubmit={handleSubmit}>
      <FormControl isRequired>
        <FormLabel>Title</FormLabel>
        <Input name="title" type="text" placeholder="Enter title" />
      </FormControl>

      <FormControl mt={{ base: '30px', md: '40px' }}>
        <FormLabel>Address</FormLabel>
        <Input name="address" type="text" placeholder="Enter address" />
      </FormControl>

      <FormControl mt={{ base: '30px', md: '40px' }}>
        <FormLabel>Time From</FormLabel>
        <Input name="timeFrom" type="time" />
      </FormControl>

      <FormControl mt={{ base: '30px', md: '40px' }}>
        <FormLabel>Time To</FormLabel>
        <Input name="timeTo" type="time" />
      </FormControl>

      <FormControl mt={{ base: '30px', md: '40px' }}>
        <FormLabel>URL</FormLabel>
        <Input name="url" type="url" placeholder="Enter URL" />
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

      <FormControl mt={{ base: '30px', md: '40px' }}>
        <FormLabel>Memo</FormLabel>
        <Textarea name="memo" placeholder="Enter memo" />
      </FormControl>

      <FormControl mt={{ base: '30px', md: '40px' }}>
        <FormLabel>Cost</FormLabel>
        <Input name="cost" type="number" placeholder="Enter cost" />
      </FormControl>
      

      <Flex justifyContent="center">
        <Button
          mt={{ base: '30px', md: '40px' }}
          colorScheme="teal"
          type="submit"
          margin="auto"
        >
          Create Activity
        </Button>
      </Flex>
      </form>
    </Container>
  )
}
