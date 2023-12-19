import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

const signUpSchema = z
  .object({
    email: z.string().email('This is not valid email address'),
    password: z
      .string()
      .min(8, { message: 'Password must contain at least 8 character(s)' }),
    confirmationPassword: z.string().min(8, {
      message: 'Password must contain at least 8 character(s)'
    }),
    name: z.string().min(1, {
      message: 'user name is required'
    })
  })
  .refine((schema) => schema.password === schema.confirmationPassword, {
    path: ['confirmationPassword'],
    message: 'Your password and confirmation password must match'
  })

export type SignUpSchema = z.infer<typeof signUpSchema>
export const signUpResolver = zodResolver(signUpSchema)
