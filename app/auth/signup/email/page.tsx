'use client'
import { startTransition, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Flex, Heading } from '@chakra-ui/react'
import { PrimaryButton } from '@/components/button'
import { signUp } from './action'
import { useFormResolver, SignUpSchema } from './schema'

export default function SignUp() {
  const [errorMsg, setErrorMsg] = useState<undefined | string>()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<SignUpSchema>({
    resolver: useFormResolver
  })

  return (
    <>
      {errorMsg ? <Heading>{errorMsg}</Heading> : <></>}
      <Heading>Welcome!</Heading>
      <Heading>Create an Account</Heading>
      <form
        onSubmit={handleSubmit((data) => {
          startTransition(() => {
            signUp(data).catch((error) => {
              console.error(error)
              setErrorMsg("We're sorry, but you failed to sign up.")
            })
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
