'use client'
import {
  Heading,
  Box,
  Container,
  useColorModeValue,
  Flex,
  Spacer,
  Text,
  Textarea,
  Input,
  FormControl,
  FormLabel
} from '@chakra-ui/react'

import { FiChevronLeft, FiClock, FiMapPin, FiLink2 } from 'react-icons/fi'
import { Link } from '@/components/link'
import { Header, Footer } from '@/components/navigation'
import { TrashIcon, EditIcon } from '@/icons'
import { Carousel } from '../../components/carousel'
import { customColors } from '@/theme/color'

export default function ActivityDetails() {
  const bg = useColorModeValue('white', 'gray.800')
  const color = useColorModeValue('black', 'gray.300')
  return (
    <>
      <Header />
      <Box as="main" minH="100vh" bg={bg} color={color}>
        <Container
          maxW={{ base: '710px' }}
          pt={{ base: '20px', md: '30px' }}
          pb={{ base: '40px', md: '80px' }}
        >
          <Flex pb={{ base: '30px', md: '40px' }}>
            <Heading fontSize={{ base: 'xl', md: '2xl' }}>
              Asakusa Temple
            </Heading>
            <Spacer />
            <TrashIcon />
            <EditIcon />
          </Flex>
          <Flex flexDirection="column" pb={{ base: '40px', md: '48px' }}>
            <Box display="flex" alignItems="center" my={1}>
              <FiClock style={{ color: customColors.gray[400] }} />
              <Text
                fontSize={{ base: 'md', md: 'lg' }}
                fontWeight="semibold"
                mx={2}
              >
                Oct.1, 2023 16:00
              </Text>
            </Box>
            <Box display="flex" alignItems="center" my={1}>
              <FiMapPin style={{ color: customColors.gray[400] }} />
              <Text
                fontSize={{ base: 'md', md: 'lg' }}
                fontWeight="semibold"
                mx={2}
              >
                10-20 Shibury, Tokyo, Japan
              </Text>
            </Box>
            <Box display="flex" alignItems="center" my={1}>
              <FiLink2 style={{ color: customColors.gray[400] }} />
              <Link
                mx={2}
                href="/"
                hasUnderLine
                color="primary.700"
                fontSize={{ base: 'md', md: 'lg' }}
              >
                https://www.google.com
              </Link>
            </Box>
          </Flex>
          <Carousel />
          <Flex flexDirection="column">
            <FormControl mt={{ base: '40px', md: '48px' }}>
              <FormLabel>Memo</FormLabel>
              <Textarea placeholder="Memo" />
            </FormControl>
            <FormControl mt={{ base: '30px', md: '40px' }}>
              <FormLabel>Cost</FormLabel>
              <Input placeholder="$20,000" />
            </FormControl>
          </Flex>
          <Box mt="60px" display="flex" alignItems="center">
            <FiChevronLeft />
            <Link href="/">Got back to Trip Details</Link>
          </Box>
        </Container>
      </Box>
      <Footer />
    </>
  )
}
