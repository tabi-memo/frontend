'use client'
import { Link } from '@chakra-ui/next-js'
import { Heading } from '@chakra-ui/react'

export default function Home() {
  return (
    <>
      <Heading>Home</Heading>
      <Link
        href="/auth/login"
        color="primary.700"
        _hover={{ color: 'primary.900' }}
      >
        Login
      </Link>
      <br />
      <Link
        href="/auth/signup"
        color="primary.700"
        _hover={{ color: 'primary.900' }}
      >
        SignUp
      </Link>
    </>
  )
}
