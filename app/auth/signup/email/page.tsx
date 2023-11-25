'use client'
import { startTransition } from 'react'
import { useForm } from 'react-hook-form'
import { Flex, Heading } from '@chakra-ui/react'
import * as z from 'zod'
import { PrimaryButton } from '@/components/button'
import { signUp } from './action'

const signUpSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  confirmationPassword: z.string().min(8)
})
export type SignUpSchema = z.infer<typeof signUpSchema>

export default function SignUp() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm<SignUpSchema>()
  return (
    <>
      <Heading>Welcome!</Heading>
      <Heading>Create an Account</Heading>
      <form
        onSubmit={handleSubmit((data) => {
          const result = signUpSchema.safeParse(data)
          if (!result.success) {
            console.error(result.error)
            return
          }

          if (result.data.password !== result.data.confirmationPassword) {
            setError('confirmationPassword', {
              message: 'Your password and confirmation password must match'
            })
          }
          startTransition(() => {
            signUp(result.data).catch(console.error)
          })
        })}
      >
        <Flex flexDirection={'column'}>
          <label htmlFor="email">Email address</label>
          <input type="email" id="email" required {...register('email')} />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            required
            {...register('password', {
              minLength: {
                value: 8,
                message: 'min length is 8'
              }
            })}
          />
          {errors.password && (
            <span role="alert">{errors.password.message}</span>
          )}
          <label htmlFor="re-type-password">Confirmation Password</label>
          <input
            type="password"
            id="re-type-password"
            required
            {...register('confirmationPassword', {
              minLength: {
                value: 8,
                message: 'min length is 8'
              }
            })}
          />
          {errors.confirmationPassword && (
            <span role="alert">{errors.confirmationPassword.message}</span>
          )}
          <PrimaryButton type={'submit'}>Sign Up</PrimaryButton>
        </Flex>
      </form>
    </>
  )
}
