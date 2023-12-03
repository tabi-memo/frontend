'use client'
import { useForm } from 'react-hook-form'
import {
  Box,
  Container,
  Flex,
  FormLabel,
  FormErrorMessage,
  FormControl,
  Input,
  Heading,
  useToast,
  useBoolean,
  useColorModeValue
} from '@chakra-ui/react'
import { z } from 'zod'
import {Form} from "./components"
import { Header, Footer } from '@/components/navigation'

// const dummy = [
//   {
//     id: 1,
//     title: 'Tokyo',
//     date_from: 'Oct 10, 2023',
//     date_to: 'Nov 10, 2023',
//     image_storage_object_id:
//       'https://placehold.jp/6381f8/ffffff/366x277.png?text=Picture',
//     share: [
//       { id: '', image: '' },
//       { id: '', image: '' }
//     ]
//   },
//   {
//     id: 2,
//     title: 'Kyoto',
//     date_from: 'Oct 10, 2023',
//     date_to: 'Nov 10, 2023',
//     image_storage_object_id:
//       'https://placehold.jp/6381f8/ffffff/366x277.png?text=Picture',
//     share: [
//       { id: '', image: '' },
//       { id: '', image: '' }
//     ]
//   }
// ]

export default function Create() {

    //define how z schema look like 

    const schema = z.object({
        firstName: z.string().min(2).max(20),
        lastName: z.string().min(2).max(20),
    })
  const bg = useColorModeValue('white', 'gray.800')
  const color = useColorModeValue('black', 'gray.300')

  return (
    <>
      <Box as="main" minH="100vh" bg={bg} color={color}>
        <Header />
        <Container
          maxW={{ base: '100%', md: 'container.md' }}
          pt={{ base: '20px', md: '30px' }}
          pb={{ base: '40px', md: '80px' }}
          margin="auto"
        >
          <Container>
            <Heading as={'h1'} fontSize={{ base: '2xl', md: '4xl' }}>
              Create Activity
            </Heading>
          </Container>
          <Form />
        </Container>
        <Footer />
      </Box>
    </>
  )
}
