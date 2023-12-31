import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

const changePasswordSchema = z
  .object({
    // No need for daring to notify users old password policy in terms of security enhancement.
    oldPassword: z.string(),
    newPassword: z
      .string()
      .min(8, { message: 'Password must contain at least 8 character(s)' }),
    confirmNewPassword: z.string().min(8, {
      message: 'Password must contain at least 8 character(s)'
    })
  })
  .refine((schema) => schema.newPassword === schema.confirmNewPassword, {
    path: ['confirmNewPassword'],
    message: 'Your password and confirmation password must match'
  })

export type ChangePasswordSchema = z.infer<typeof changePasswordSchema>
export const changePasswordResolver = zodResolver(changePasswordSchema)
