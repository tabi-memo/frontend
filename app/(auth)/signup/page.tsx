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
          <Link href="/signup/email">
            <SecondaryButton>Sign up with Email</SecondaryButton>
          </Link>
        </ListItem>
      </List>
      <Heading>Already have an account?</Heading>
      <Link href="/signin/email">
        <SecondaryButton>Sign in to your account?</SecondaryButton>
      </Link>
    </>
  )
}
