import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

// TODO: refactor zod validation

const createActivitySchema = z.object({
  title: z.string().min(1).max(20).optional(),
  timeFrom: z.string().optional(),
  timeTo: z.string().optional(),
  address: z.string().min(0).max(50).optional(),
  url: z.union([z.string().url().nullish(), z.literal('')]),
  memo: z.string().min(0).max(300).optional(),
  cost: z.string().min(0).max(15).optional()
})

export type createActivitySchema = z.infer<typeof createActivitySchema>
export const createActivityResolver = zodResolver(createActivitySchema)
