import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

const accountSchema = z
  .object({
    email: z.string().email('This is not valid email address'),
    name: z.string().min(1),
    profile_picture_url: z.string().nullable(),
    uploaded_image_file: z
      .instanceof(File)
      .nullable()
      .refine((file) => file === null || file.size <= 10_000_000, {
        message: 'File size must be less than 10MB'
      })
      .refine((file) => file === null || file.type.startsWith('image/'), {
        message: 'Only image files are allowed'
      })
  })
  .partial()

export type AccountSchema = z.infer<typeof accountSchema>
export const accountResolver = zodResolver(accountSchema)
