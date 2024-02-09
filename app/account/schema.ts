import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

const accountSchema = z.object({
  email: z.string().email('This is not valid email address'),
  name: z.string(),
  profile_picture_url: z.string().nullable()
})

export type AccountSchema = z.infer<typeof accountSchema>
export const accountResolver = zodResolver(accountSchema)
