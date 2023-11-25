'use client'
import { startTransition } from 'react'
import { useForm } from 'react-hook-form'
import { Flex, Heading } from '@chakra-ui/react'
import * as z from 'zod'
import { PrimaryButton } from '@/components/button'
import { signUp } from './action'

const signUpSchema = z.object({
  email: z.string().email(),
  password: z.string()
})
export type SignUpSchema = z.infer<typeof signUpSchema>

export default function SignUp() {
  const { register, handleSubmit } = useForm()
  return (
    <>
      <Heading>SignUp Page</Heading>
      <form
        onSubmit={handleSubmit((data) => {
          const result = signUpSchema.safeParse(data)
          if (!result.success) {
            console.error(result.error)
            return
          }
          startTransition(() => {
            signUp(result.data).catch(console.error)
          })
        })}
      >
        <Flex flexDirection={'column'}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" required {...register('email')} />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            required
            {...register('password')}
          />
          <PrimaryButton type={'submit'}>Sign Up</PrimaryButton>
        </Flex>
      </form>
    </>
  )
}
