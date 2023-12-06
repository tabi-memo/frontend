import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

// TODO: refactor zod validation 

const createActivitySchema = z.object({
  title: z.string().min(1).max(20),
  timeFrom: z.string().optional(),
  timeTo: z.string().optional(),
  address: z.string().min(0).max(50),
  url: z.union([z.string().url().nullish(), z.literal('')]),
  memo: z.string().min(0).max(300),
  cost: z.string().min(0).max(15)
})

export type createActivitySchema = z.infer<typeof createActivitySchema>
export const createActivityResolver = zodResolver(createActivitySchema)
