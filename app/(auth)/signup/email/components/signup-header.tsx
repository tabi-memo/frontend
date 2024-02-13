import { CardHeader, Center, VStack, Heading } from '@chakra-ui/react'
import Image from 'next/image'
import logo from 'public/logo/logo.png'

export const SignUpHeader = () => {
  return (
    <CardHeader w="100%" p="0">
      <Center w="100%">
        <Image src={logo} width={144} height={40} alt="Tabi Memo" />
      </Center>
      <VStack
        w="100%"
        mt={{ base: '28px', md: '40px' }}
        align={{ base: 'center', md: 'start' }}
      >
        <Heading as="h1" fontSize={{ base: '2xl', md: '4xl' }} color="gray.700">
          Create your account
        </Heading>
        <Heading as="h2" fontSize="sm" color="gray.700" fontWeight="regular">
          It{"'s"} quick and easy
        </Heading>
      </VStack>
    </CardHeader>
  )
}
