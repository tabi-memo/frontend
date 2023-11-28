import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

const signUpSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(8),
    confirmationPassword: z.string().min(8)
  })
  .refine((schema) => {
    return !(schema.password !== schema.confirmationPassword)
  }, 'Your password and confirmation password must match')

export type SignUpSchema = z.infer<typeof signUpSchema>
export const safeParse = (data: unknown) => signUpSchema.safeParse(data)
export const useFormResolver = zodResolver(signUpSchema)
