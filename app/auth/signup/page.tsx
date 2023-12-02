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
      </List>
    </>
  )
}
