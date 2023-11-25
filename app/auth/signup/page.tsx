import { Heading, List, ListItem } from '@chakra-ui/react'
import Link from 'next/link'
import { SecondaryButton } from '@/components/button'

export default function SignUp() {
  return (
    <>
      <Heading>Welcome!</Heading>
      <Heading>Create an Account</Heading>
      <List spacing={3}>
        <ListItem>
          <Link href="/auth/signup/email">
            <SecondaryButton>Sign up with Email</SecondaryButton>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/auth/signup/google">
            <SecondaryButton>Sign up with Google</SecondaryButton>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/auth/signup/facebook">
            <SecondaryButton>Sign up with Facebook</SecondaryButton>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/auth/signup/apple">
            <SecondaryButton>Sign up with Apple</SecondaryButton>
          </Link>
        </ListItem>
      </List>
    </>
  )
}
